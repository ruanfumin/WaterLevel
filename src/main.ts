import axios from 'axios';
import StationInfo from './StationInfoObj';
import config from './config';
import { WuWeiDadi } from './ThreeWaterObj'

axios(config).then(res => {
    const w = new StationInfo(res.data, WuWeiDadi);
    console.log(w.getMessage())
});
