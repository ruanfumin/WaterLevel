import axios from 'axios';
import StationInfo from './StationInfoObj';
import config from './config';
import { ThreeWaterMessage } from './ThreeWaterObj';
import { WuWeiDadi } from './config'


axios(config).then(res => {
    const w = new StationInfo(res.data);
    const t: ThreeWaterMessage = new ThreeWaterMessage(w, WuWeiDadi);
    console.log(t.getMessageInfo())
});