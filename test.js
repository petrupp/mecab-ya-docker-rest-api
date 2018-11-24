var mecab = require('mecab-ya');
var text = '아버지가방에들어가신다';
mecab.pos(text, function (err, result) {
  console.log(result);
});

mecab.morphs(text, function (err, result) {
  console.log(result);
});

mecab.nouns(text, function (err, result) {
  console.log(result);
});
