//%weight=100 color="#DAF208" icon="\uF610"
namespace HC595 {

    function c_getValue(value: number): number {
        if (value != 0) {
            return 1;
        } else {
            return 0;
        }
    }
    /*********74HC595写入数据(16引脚接3V3， 13引脚接GND，10引脚接3V3，8引脚接GND)********/
    //%blockId=c_HC595_Actuator block="14号引脚 %pin1|11号引脚 %pin2|12号引脚 %pin3|数据 %val"
    //%weight=98 blockGap=10 color="#87CEEB"
    export function c_HC595_Actuator(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, val: number): void {
        pins.digitalWritePin(pin3, 0);
        for (let i = 0; i < 8; i++) {
            pins.digitalWritePin(pin1, c_getValue(val & (1 << i)));
            pins.digitalWritePin(pin2, 1);
            pins.digitalWritePin(pin2, 0);
        }
        pins.digitalWritePin(pin3,1);
    }
}
