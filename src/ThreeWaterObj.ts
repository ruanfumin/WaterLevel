import StationInfo from './StationInfoObj';

class ThreeWaterInfo {
    readonly name: string = '';
    readonly shefang: number = 0; // 设防水位
    readonly wrz: number = 0; // 警戒水位
    readonly grz: number = 0; // 保证水位

    constructor(name: string, shefang: number, wrz: number, grz: number) {
        this.name = name;
        this.shefang = shefang;
        this.wrz = wrz;
        this.grz = grz;
    }
}

class ThreeWaterMessage {
    readonly stnm: string = ''; // 站点名
    readonly nowLine: number = 0; // 当前水位
    readonly stationInfo: StationInfo; // 水位信息对象
    readonly threeWaterInfo: ThreeWaterInfo; // 三线信息对象

    constructor(stationInfo: StationInfo,threeWaterInfo: ThreeWaterInfo) {
        if (stationInfo.Flag) {
            this.stationInfo = stationInfo; // 站点名
            this.stnm = stationInfo.stnm; // 当前水位;
            this.nowLine = stationInfo.getNowLine().rz // 水位信息对象
            this.threeWaterInfo = threeWaterInfo;
        } else {
            throw Error('请传入可用的StationInfo对象!');
        }
    }

    getMessageInfo(): string {
        let m: string = `${this.stnm}目前水位: ${this.nowLine}m\n`;
        if (this.nowLine < this.threeWaterInfo.shefang) {
            let distance: number = this.threeWaterInfo.shefang - this.nowLine;
            m += `低于设防水位(${this.threeWaterInfo.shefang}): ${distance}m\n`;
        } else {
            if (this.nowLine > this.threeWaterInfo.shefang && this.nowLine < this.threeWaterInfo.wrz) {
                let distance1: number = this.nowLine - this.threeWaterInfo.shefang;
                let distance2: number = this.threeWaterInfo.wrz - this.nowLine;
                m += `超设防水位(${this.threeWaterInfo.shefang}): ${distance1}m\n`;
                m += `距离警戒水位(${this.threeWaterInfo.wrz}): ${distance2}m\n`;
            } else {
                let distance: number = this.nowLine - this.threeWaterInfo.grz;
                m += `超保证水位(${this.threeWaterInfo.grz}): ${distance}m\n`;
            }
        }
        return m;
    }

}

export { ThreeWaterMessage };
export default ThreeWaterInfo;