function MapIgnoreCheckerHander(url) {
  return ['apikey.map.qq.com', 'confinfo.map.qq.com', 'overseactrl.map.qq.com', 'map.baidu.com', 'webapi.amap.com', 'a.amap.com'].some(item => url.includes(item));
}
var index = {
  ignoreChecker: MapIgnoreCheckerHander
};

export { index as default };
