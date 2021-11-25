import { emojiList } from './emojiData';

// 解析emoji表情以及换行回车
// content格式："你好[微笑][嘻嘻]"
const parsingEmoji = (content: string) => {
  if (!content) return '';
  let str = content.toString();
  str = str.replace(/\n/gi, '<br>');
  var reg = /\[+[^\[\]]+\]/g;
  str = str.replace(reg, s => {
    var s = s.split('[')[1].split(']')[0];
    var index = emojiList.findIndex(emoji => {
      return emoji.title === s;
    });
    var url = emojiList[index]?.url;
    if (index !== -1 && url) {
      var urlStr = require('./assets/emoji/' + url);
      return "<img src='" + urlStr + "' class='emoji-img'/>";
    } else {
      return '[' + s + ']';
    }
  });

  return str;
};

export { parsingEmoji };
