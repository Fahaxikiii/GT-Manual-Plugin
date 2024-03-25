import plugin from "../../../lib/plugins/plugin.js";

export class info extends plugin {
  constructor() {
    super({
      name: "GT接口信息",
      event: "message",
      priority: 33700,
      rule: [
        {
          reg: /^#*(GT|gt)查看接口$/,
          fnc: "info",
        },        
      ],
    });
  }
  
  async info() {
    let msg = [
                  "http://jn.031117.xyz:23333/GTest/register"+'\n'+
                  "https://gt.wuliya.icu/GTest/register?key=wuliya"+'\n'+
                  "http://gt.yunzai.icu/GTest/register?key=免费开源项目-您如果是交易获得则是被骗-请及时退款并举报"+'\n'+
                  "http://v407.qingvps.cn:10099/GTest/register?key=biscuit"+'\n'+
                  "https://gt.161122.xyz/GTest/register"+'\n'+
                  "https://gt.wanli.email/GTest/register"
    ]
    await this.reply(msg);
  }

}
