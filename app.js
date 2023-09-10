const mecab = require('mecab-ya');
const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

router.post('/api/v1/milk-default-nouns', function (req, res) {
  const text = req.body.text;
  mecab.nouns(text, function (err, result) {
    console.log('text:', text, 'nouns:', result);
    res.json({
      nouns: result
    });
  });
});

router.post('/api/v1/milk-pos', function (req, res) {
  const text = req.body.text;
  mecab.pos(text, function (err, result) {
    const filteredResult = result
          .filter(entry => {
            const pos = entry[1]; // 품사 태그가 두 번째 열에 있음
            // 원하는 품사 태그 목록에 포함되어 있는지 검사
            return ['NNG', 'NNP', 'NNB', 'SN', 'SL'].includes(pos);
          })
          .map(entry => entry[0]); // 토큰(단어)만 추출
    res.json({
      pos: filteredResult
    });
  });
});

const app = express();

app.use(bodyParser.json());
app.use(router);

app.get('/ping', function(req, res){
  res.json({
    timestamp: new Date(),
    message: 'alive',
    success: true
  })
});

app.listen(process.env.PORT || 8080);

