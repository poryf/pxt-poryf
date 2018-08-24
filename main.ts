
//% color="#808080" weight=23 icon="\uf11c"
namespace pbit_传感器 {
    
    export enum enVoice {
        //% blockId="Voice" block="有声音"
        Voice = 0,
        //% blockId="NoVoice" block="无声音"
        NoVoice= 1
           }
    
     /*声音传感器*/
    //% blockId=mbit_Voiced_Sensor block="声音传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Voice_Sensor(pin: DigitalPin, value: enVoice): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }
}
    
