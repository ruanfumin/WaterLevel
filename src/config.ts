import ThreeWaterInfo from './ThreeWaterObj';

const option: object = {
    method: 'post',
    url: 'http://wx.cjh.com.cn:8088/swjapp/call.nut',
    data: {
        requests: [{
            "interfaceName": "publicApi.getStationInfo",
            "params": { "stcd": "62904500" },
            "os": 3,
            "version_code": 60,
            "token": ""
        }]
    },
    headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Connection: 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        Host: 'wx.cjh.com.cn:8088',
        Origin: 'http://wx.cjh.com.cn',
        Referer: 'http://wx.cjh.com.cn/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'
    }
};

const WuWeiDadi: ThreeWaterInfo = new ThreeWaterInfo('无为大堤', 11.5, 13.2, 15.84);
const HershazhouAndTianranzhou: ThreeWaterInfo = new ThreeWaterInfo('黑沙洲、天然洲', 11.0, 13.0, 13.5);
const YongDingDaWei: ThreeWaterInfo = new ThreeWaterInfo('永定大圩', 11.5, 13.2, 14.5);

export { WuWeiDadi, HershazhouAndTianranzhou, YongDingDaWei };
export default option;