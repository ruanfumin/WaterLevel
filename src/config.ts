const CjhOption: object = { // 长江水文网配置数据
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

const WjswjOption: object = { // 芜湖水文分局配置数据
    method: '',
    url: 'http://www.whswj.net/ahwater/whshqxx/BusinessHandler.ashx',
    params: {
        name: 'SelectToDayZZSQBriefing',
        time: 202204190800,
        stcdid: 4023
    },
    Headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        Connection: 'keep-alive',
        DNT: 1,
        Host: 'www.whswj.net',
        Referer: 'http://www.whswj.net/ahwater/swjmh/tpl/dayWaterBriefing.html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

export default {
    CjhOption,
    WjswjOption
};