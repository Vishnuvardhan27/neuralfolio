// brain.frag
varying vec2 vUv;

void main() {
  vec3 color = vec3(0.6 + 0.4 * sin(vUv.x * 10.0), 0.3, 0.8);
  gl_FragColor = vec4(color, 1.0);
}
