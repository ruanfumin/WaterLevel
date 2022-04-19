import axios from 'axios';
import StationInfo from './StationInfoObj';
import option  from './config';
import { WuWeiDadi } from './ThreeWaterObj'

axios(option.WjswjOption).then(res => {
    const w = new StationInfo(res.data, WuWeiDadi);
    if (w.Flag) {
        console.log(w.getMessage())
    } else {
        console.error('未成功获取API接口数据')
    }
});
