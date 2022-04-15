class StationInfo {
    Flag: boolean = false; // 是否可用
    readonly stnm: string = ''; // 站点名称
    readonly wrz: number = 0; // 警戒水位
    readonly grz: number = 0; // 保证水位
    readonly dataList: Array<dataInterface> = []; // 水位数据集

    constructor(SourceDate: any) {
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

    // 获取当前水位
    getNowLine(): dataInterface {
        return this.dataList[0];
    }
}

interface dataInterface {
    tm: string, // 时间
    rz: number // 水位
}

export { dataInterface };
export default StationInfo;