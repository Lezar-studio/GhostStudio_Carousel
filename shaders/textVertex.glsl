uniform float progress;
uniform float direction;

#define PI 3.1415926538

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
    return mix(dot(axis, p) * axis, p, cos(angle)) + cross(axis, p) * sin(angle);
}

void main() {
    vec3 pos = position;

    float twirlPeriod = sin(progress * PI * 2.);

    float rotateAngle = -direction * pow(sin(progress * PI), 1.5) * PI * 2.;

    // Adjusted twirl for better multi-line support
    // Use both X and Y coordinates for more uniform effect across wrapped lines
    float xFactor = sin(uv.x - .5);
    float yFactor = 1.0 - abs(uv.y - 0.5) * 0.5; // Reduce effect at top/bottom of multi-line text
    
    float twirlAngle = -xFactor * yFactor * pow(twirlPeriod, 2.0) * -4.;

    float twirlRotate = rotateAngle + twirlAngle;

    pos = rotateAxis(pos, vec3(1., 0., 0.), twirlRotate);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}