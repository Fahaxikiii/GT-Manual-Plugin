import plugin from "../../../lib/plugins/plugin.js";
import fs from "fs";
import yaml from "js-yaml";

export class api extends plugin {
  constructor() {
    super({
      name: "GT插件",
      event: "message",
      priority: 33700,
      rule: [
        {
          reg: /^#*(GT|gt)使用接口0$/,
          fnc: "api0",
        },        
      ],
    });
  }

"http://jn.031117.xyz:23333/GTest/register"
"https://gt.wuliya.icu/GTest/register?key=wuliya"
"http://gt.yunzai.icu/GTest/register?key=免费开源项目-您如果是交易获得则是被骗-请及时退款并举报"
"http://v407.qingvps.cn:10099/GTest/register?key=biscuit"
"https://gt.161122.xyz/GTest/register"
"https://gt.wanli.email/GTest/register"
  
}
