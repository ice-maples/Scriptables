// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: plus;
module.exports = () => {
  return new(class {
    bilibili() {
      return 4 //👈就改这个数字。B站榜单对应关系：0全站，1动画，3音乐，4游戏，5娱乐，36科技，119鬼畜，129舞蹈。
    }
    rsslink() {
      return "http://songshuhui.net/feed" //👈就改引号里的链接。
    }
  })
}