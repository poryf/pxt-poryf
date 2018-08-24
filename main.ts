
//% color="#808080" weight=23 icon="\uf11c"
namespace pbit_传感器 {
    
    export enum enVoice {
        //% blockId="Voice" block="有声音"
        Voice = 0,
        //% blockId="NoVoice" block="无声音"
        NoVoice= 1
           }
    export enum enFire {
        //% blockId="Fire" block="有火焰"
        Fire = 0,
        //% blockId="NoFire" block="无火焰"
        NoFire = 1
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
           /*火焰传感器*/
    //% blockId=mbit_Fire_Sensor block="火焰传感器 管脚 %pin|状态 %value"
    //% weight=4
    //% blockGap=8
    //% color="#C814B8"
           export function Fire_Sensor(pin: DigitalPin, value: enFire): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }
}
    
