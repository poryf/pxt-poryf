//%color=#5C2D91 weight=100 icon="\uf205"
namespace 超声波SR04 {
    //%blockId=c_SR04_getDistance block="获取距离(cm) Trig引脚%c_trigPin|Echo引脚%c_echoPin"
    export function c_SR04_getDistance(c_trigPin: DigitalPin, c_echoPin: DigitalPin): number {
        pins.setPull(c_trigPin, PinPullMode.PullNone);
        pins.digitalWritePin(c_trigPin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(c_trigPin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(c_trigPin, 0);
        let d = pins.pulseIn(c_echoPin, PulseValue.High, 2000000);
        return d / 58;
    }
}
