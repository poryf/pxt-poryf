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

/*****传感器类*********/
//%weight=100 color="#DAF208" icon="\uF610"
namespace 传感器类 {
    export enum c_Button {
        //%blockId="Press" block="按下"
        Press = 1,
        //%blockId="noPress" block="松开"
        noPress = 0
    }

    export enum c_Voice {
        //%blockId="Voice" block="有声"
        Voice = 0,
        //%blockId="noVoice" block="无声"
        noVoice = 1
    }

    export enum c_Touch {
        //%blockId="Touch" block="被触摸"
        Touch = 1,
        //%blockId="noTouch" block="未被触摸"
        noTouch =0
    }

    export enum c_Rain {
        //%blockId="Rain" block="有雨滴"
        Rain = 0,
        //%blockId="noRain" block="没有雨滴"
        noRain = 1
    }

     /*********按键********/
    //%blockId=c_Button_Sensor block="按键 引脚%pin|状态%value"
    //%weight=98 blockGap=10 color="#87CEEB"
    export function c_Button_Sensor(pin: DigitalPin, value: c_Button): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    /*********声音传感器********/
    //%blockId=c_Voice_Sensor block="声音传感器 引脚%pin|状态%value"
    //%weight=96 blockGap=10 color="#87CEEB"
    export function c_Voice_Sensor(pin: DigitalPin, value: c_Voice): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    /*********触摸传感器********/
    //%blockId=c_Touch_Sensor block="触摸传感器 引脚%pin|状态%value"
    //%weight=94 blockGap=10 color="#87CEEB"
    export function c_Touch_Sensor(pin: DigitalPin, value: c_Touch): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }

    /*********雨滴传感器********/
    //%blockId=c_Rain_Sensor block="雨滴传感器 引脚%pin|状态%value"
    //%weight=92 blockGap=10 color="#87CEEB"
    export function c_Rain_Sensor(pin: DigitalPin, value: c_Rain): boolean {
        pins.setPull(pin, PinPullMode.PullUp);
        if (pins.digitalReadPin(pin) == value) {
            return true;
        }
        else {
            return false;
        }
    }




}

/*****执行器类*********/
//%weight=98 color="#150DED" icon="\uf5fc"
namespace 执行器类 {
    export enum c_LED {
        //%blockId="ON" block="亮"
        ON = 1,
        //%blockId="OFF" block="灭"
        OFF = 0
    }

    export enum c_colorLED {
        //%blockId="Red" block="红色"
        Red = 0,
        //%blockId="Green" block="绿色"
        Green = 1,
        //%blockId="Blue" block="蓝色"
        Blue = 2,
        //%blockId="OFF" block="关闭"
        OFF = 3
    }

    /*****单色灯亮灭*********/
    //%blockId=c_LED1_Actuator block="单色灯 引脚%pin|状态%value"
    //%weight=98 blockGap=10 color="#150DED"
    export function c_LED_Actuator(pin: DigitalPin, value: c_LED): void {
        pins.digitalWritePin(pin, value);
    }

    /*****单色灯亮度调节*********/
    //%blockId=c_LED2_Actuator block="单色灯 引脚%pin|亮度(0~255)%value" 
    //%value.max=255 value.min=0
    //%weight=96 blockGap=10 color="#150DED"
    export function c_LED2_Actuator(pin: AnalogPin, value: number): void {
        pins.analogWritePin(pin, value * 4);
    }

    /*****单色灯逐渐点亮*********/
    //%blockId=c_LED3_Actuator block="单色灯逐渐点亮 引脚%pin|时间%value 秒" 
    //%weight=94 blockGap=10 color="#150DED"
    export function c_LED3_Actuator(pin: AnalogPin, value: number): void {
        for (let i = 0; i < 256; i++) {
            pins.analogWritePin(pin, i * 4);
            control.waitMicros(value * 1000000 / 256);
        }
    }

    /*****单色灯逐渐熄灭*********/
    //%blockId=c_LED4_Actuator block="单色灯逐渐熄灭 引脚%pin|时间%value 秒" 
    //%weight=92 blockGap=10 color="#150DED"
    export function c_LED4_Actuator(pin: AnalogPin, value: number): void {
        for (let i = 0; i < 256; i++) {
            pins.analogWritePin(pin, 1020 - i * 4);
            control.waitMicros(value * 1000000 / 256);
        }
    }

    /*****彩灯三种颜色*********/
    //%blockId=c_colorLED1_Actuator block="单色灯 引脚R %pin|引脚G %pin2|引脚B %pin3|状态%value" 
    //%weight=90 blockGap=10 color="#150DED"
    export function c_colorLED1_Actuator(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, value: c_colorLED): void {
        switch (value) {
            case 0: {
                pins.digitalWritePin(pin1, 1);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case 1: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 1);
                pins.digitalWritePin(pin3, 0);
                break;
            }
            case 2: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 1);
                break;
            }
            case 3: {
                pins.digitalWritePin(pin1, 0);
                pins.digitalWritePin(pin2, 0);
                pins.digitalWritePin(pin3, 0);
                break;
            }
        }
    }

        /*****彩灯自设颜色*********/
        //%blockId=c_colorLED2_Actuator block="单色灯 引脚R %pin|引脚G %pin2|引脚B %pin3|红色(0~255) %value1|绿色(0~255) %value2|蓝色(0~255) %value3"
        //%weight=88 blockGap=10 color="#150DED"
        //%value1.max=255 value1.min=0 value2.max=255 value2.min=0 value3.max=255 value3.min=0
        export function c_colorLED2_Actuator(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number): void {
            pins.analogWritePin(pin1, value1 * 4);
            pins.analogWritePin(pin1, value1 * 4);
            pins.analogWritePin(pin1, value1 * 4);
        }

        /*****彩灯逐渐点亮*********/
        //%blockId=c_colorLED3_Actuator block="彩灯逐渐点亮 引脚R %pin|引脚G %pin2|引脚B %pin3|红色(0~255) %value1|绿色(0~255) %value2|蓝色(0~255) %value3|时间%value 秒"
        //%value1.max=255 value1.min=0 value2.max=255 value2.min=0 value3.max=255 value3.min=0
        //%weight=86 blockGap=10 color="#150DED"
        export function c_colorLED3_Actuator(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number, value: number): void {
            for (let i = 0; i < 256; i++) {
                pins.analogWritePin(pin1, i * 4);
                pins.analogWritePin(pin2, i * 4);
                pins.analogWritePin(pin3, i * 4);
                control.waitMicros(value * 1000000 / 256);
            }
        }


        /*****彩灯逐渐熄灭*********/
        //%blockId=c_colorLED4_Actuator block="彩灯逐渐熄灭 引脚R %pin|引脚G %pin2|引脚B %pin3|红色(0~255) %value1|绿色(0~255) %value2|蓝色(0~255) %value3|时间%value 秒"
        //%value1.max=255 value1.min=0 value2.max=255 value2.min=0 value3.max=255 value3.min=0
        //%weight=84 blockGap=10 color="#150DED"
        export function c_colorLED4_Actuator(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number, value: number): void {
            for (let i = 0; i < 256; i++) {
                pins.analogWritePin(pin1, 1020 - i * 4);
                pins.analogWritePin(pin2, 1020 - i * 4);
                pins.analogWritePin(pin3, 1020 - i * 4);
                control.waitMicros(value * 1000000 / 256);
            }
        }

        /*****舵机*********/
        

    }
