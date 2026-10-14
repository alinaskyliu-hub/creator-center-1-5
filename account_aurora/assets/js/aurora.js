/* Aurora shader adapted from React Bits (DavidHDev/react-bits).
 * https://github.com/DavidHDev/react-bits/blob/main/src/content/Backgrounds/Aurora/Aurora.jsx
 * Native WebGL integration for this standalone HTML page; no CDN or React runtime.
 */
(() => {
  const container = document.querySelector('.aurora-background');
  const canvas = container?.querySelector('canvas');
  if (!canvas) return;
  const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false });
  if (!gl) return;

  const vertexSource = `#version 300 es
    in vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;
  const fragmentSource = `#version 300 es
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uLightMode;
    out vec4 fragColor;

    vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                       + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                             dot(x12.zw, x12.zw)), 0.0);
      m *= m;
      m *= m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 a0 = x - floor(x + 0.5);
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;
      vec3 green = vec3(17.0, 247.0, 77.0) / 255.0;
      vec3 blue = vec3(0.0, 9.0, 255.0) / 255.0;
      vec3 purple = vec3(82.0, 39.0, 255.0) / 255.0;
      vec3 rampColor = uv.x < 0.5
        ? mix(green, blue, uv.x * 2.0)
        : mix(blue, purple, (uv.x - 0.5) * 2.0);
      float height = exp(snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5);
      float intensity = 0.6 * (uv.y * 2.0 - height + 0.2);
      float auroraAlpha = smoothstep(-0.05, 0.45, intensity);
      if (uLightMode > 0.5) {
        float energy = clamp(intensity, 0.0, 1.0);
        float coverage = clamp(auroraAlpha * (0.55 + 0.45 * energy), 0.0, 0.86);
        // Interpolate without peak-channel normalization: boosting the mixed
        // green/blue channels produced a stationary, overly bright cyan stripe.
        float colorMix = smoothstep(0.0, 1.0, uv.x < 0.5 ? uv.x * 2.0 : (uv.x - 0.5) * 2.0);
        vec3 chroma = uv.x < 0.5
          ? mix(green, blue, colorMix)
          : mix(blue, purple, colorMix);
        vec3 lightBackground = vec3(234.0, 243.0, 255.0) / 255.0; // #eaf3ff
        fragColor = vec4(mix(lightBackground, chroma, min(coverage * 1.08, 0.94)), 1.0);
      } else {
        fragColor = vec4(intensity * rampColor * auroraAlpha, auroraAlpha);
      }
    }
  `;

  let program;
  let buffer;
  let timeLocation;
  let resolutionLocation;
  let lightLocation;
  let frame = 0;
  let elapsed = 0;
  let lastTime = null;
  let disposed = false;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(message);
    }
    return shader;
  }

  function initialize() {
    const vertex = compile(gl.VERTEX_SHADER, vertexSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
    program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program));
    }
    gl.useProgram(program);
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    timeLocation = gl.getUniformLocation(program, 'uTime');
    resolutionLocation = gl.getUniformLocation(program, 'uResolution');
    lightLocation = gl.getUniformLocation(program, 'uLightMode');
    resize();
    container.classList.add('is-ready');
    resume();
  }

  function draw() {
    if (disposed || gl.isContextLost()) return;
    gl.uniform1f(timeLocation, elapsed);
    gl.uniform1f(lightLocation, document.documentElement.dataset.theme === 'light' ? 1 : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function resize() {
    if (disposed || gl.isContextLost()) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.round(container.clientWidth * ratio));
    canvas.height = Math.max(1, Math.round(container.clientHeight * ratio));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    draw();
  }

  function animate(now) {
    if (lastTime !== null) elapsed += Math.min(now - lastTime, 100) / 1000;
    lastTime = now;
    draw();
    frame = requestAnimationFrame(animate);
  }

  function pause() {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = null;
  }

  function resume() {
    pause();
    if (disposed || document.hidden || gl.isContextLost()) return;
    draw();
    if (!reducedMotion.matches) frame = requestAnimationFrame(animate);
  }

  try {
    initialize();
  } catch (error) {
    console.warn('Aurora background: using CSS fallback.', error);
    if (buffer) gl.deleteBuffer(buffer);
    if (program) gl.deleteProgram(program);
    return;
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const themeObserver = new MutationObserver(draw);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', resume);
  reducedMotion.addEventListener('change', resume);
  canvas.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    pause();
    container.classList.remove('is-ready');
  });
  canvas.addEventListener('webglcontextrestored', () => {
    if (disposed) return;
    try { initialize(); } catch (error) {
      container.classList.remove('is-ready');
      console.warn('Aurora background: using CSS fallback.', error);
    }
  });
  window.addEventListener('pagehide', (event) => {
    pause();
    if (event.persisted) return;
    disposed = true;
    resizeObserver.disconnect();
    themeObserver.disconnect();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', resume);
    reducedMotion.removeEventListener('change', resume);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
  });
  window.addEventListener('pageshow', resume);
})();
