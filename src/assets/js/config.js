/**
 * Created by Administrator on 2017/3/30.
 */
let $C = (function(config){
  config.base64FixPre = 'data:image/png;base64,';
  // config.crmBaseUrl = 'http://api.quanerliren.com'; //正式环境CRM数据接口
  config.crmBaseUrl = 'http://121.40.75.24:8001';   //测试环境CRM数据接口

return config;
}($C || {}));

export default $C;
