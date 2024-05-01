uniform float uOpacity;
uniform float uDeepPurple;
 
varying float vDistortion;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
  
}     
 
void main() {
  float distort = vDistortion * 3.;

  vec3 brightness = vec3(.1, 0.0, .5);
  vec3 contrast = vec3(.4, .3, .3);
  vec3 oscilation = vec3(.5, 0.0, .9);
  vec3 phase = vec3(.9, 0.0, .8);
 
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
  
  gl_FragColor = vec4(color, vDistortion);
  gl_FragColor += vec4(min(uDeepPurple, 1.), 0.2, .8, 0.8);
}