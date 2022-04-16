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

export default option;