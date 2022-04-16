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

const WuWeiDadi: ThreeWaterInfo = new ThreeWaterInfo('无为大堤', 11.5, 13.2, 15.84);
const HershazhouAndTianranzhou: ThreeWaterInfo = new ThreeWaterInfo('黑沙洲、天然洲', 11.0, 13.0, 13.5);
const YongDingDaWei: ThreeWaterInfo = new ThreeWaterInfo('永定大圩', 11.5, 13.2, 14.5);

export { WuWeiDadi, HershazhouAndTianranzhou, YongDingDaWei };
export default ThreeWaterInfo;
