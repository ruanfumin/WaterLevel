import ThreeWaterInfo from "./ThreeWaterObj";

class StationInfo {
    Flag: boolean = false; // 是否可用
    readonly stnm: string = ''; // 站点名称
    readonly wrz: number = 0; // 警戒水位
    readonly grz: number = 0; // 保证水位
    readonly dataList: Array<dataInterface> = []; // 水位数据集
    readonly threeWaterInfo: ThreeWaterInfo;

    /**
     * 
     * @param SourceDate API接口数据
     * @param threeWater 供渲染使用的防汛点三线数据
     */
    constructor(SourceDate: any, threeWater: ThreeWaterInfo) {
        this.threeWaterInfo = threeWater;
        let data = SourceDate['responses'][0]['data']
        if (data !== undefined) {
            this.Flag = true; // 有数据，标记可用
            this.stnm = data['stnm']; // 站点名称
            this.wrz = Number(data['wrz']); // 警戒水位
            this.grz = Number(data['grz']); // 保证水位
            for (let item of data['dataList']) {
                this.dataList.push({
                    tm: item['tm'],
                    rz: Number(item['rz'])
                });
            }
        } else {
            throw Error('未获取到可用数据')
        }
    }

    /**
     * 获取当前最新水位数据
     * @returns 
     */
    getNowLine(): dataInterface {
        return this.dataList[0];
    }

    /**
     * 
     * @returns 返回标准化水位字符串
     */
    getMessage(): string {
        const nowLine: dataInterface = this.getNowLine();
        let m: string = `${this.stnm}目前水位: ${nowLine.rz}m\n`;
        if (nowLine.rz < this.threeWaterInfo.shefang) { // 设防水位以下
            let distance: number = this.threeWaterInfo.shefang - nowLine.rz; // 当前水位和设防水位距离
            m += `低于设防水位(${this.threeWaterInfo.shefang}): ${distance}m\n`;
        } else {
            if (nowLine.rz > this.threeWaterInfo.shefang && nowLine.rz < this.threeWaterInfo.wrz) { // 设防水位以上，警戒水位以下
                let distance1: number = nowLine.rz - this.threeWaterInfo.shefang;// 当前水位超设防水位距离
                let distance2: number = this.threeWaterInfo.wrz - nowLine.rz;// 当前水位和警戒水位距离
                m += `超设防水位(${this.threeWaterInfo.shefang}): ${distance1}m\n`;
                m += `距离警戒水位(${this.threeWaterInfo.wrz}): ${distance2}m\n`;
            } else {
                if (nowLine.rz > this.threeWaterInfo.wrz && nowLine.rz < this.threeWaterInfo.grz) {
                    let distance: number = nowLine.rz - this.threeWaterInfo.wrz; //  警戒水位以上，保证水位以下
                    m += `超警戒水位(${this.threeWaterInfo.wrz}): ${distance}m\n`;
                } else {
                    let distance: number = nowLine.rz - this.threeWaterInfo.grz; //  当前水位超保证水位距离
                    m += `超保证水位(${this.threeWaterInfo.grz}): ${distance}m\n`;
                }
            }
        }
        return m;
    }
}

interface dataInterface {
    tm: string, // 时间
    rz: number // 水位
}

export { dataInterface };
export default StationInfo;