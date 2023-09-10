# mecab-ya-docker-rest-api

## 시작하기

### 이미지 만들기
```bash
$ cd mecab-ya-docker-rest-api
$ docker build -t mecab-ya-api .
```

```bash
$ docker images
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
hyeonjae/mecab-ya-api        latest              469ca4e0ee48        9 minutes ago       1.2GB
```

### 실행하기
```bash
$ docker run -p 49160:8080 -d mecab-ya-api
```

```bash
$ docker ps
CONTAINER ID        IMAGE                   COMMAND             CREATED                  STATUS              PORTS                     NAMES
453b6f7d89c8        mecab-ya-api   "npm start"         Less than a second ago   Up 2 seconds        0.0.0.0:49160->8080/tcp   romantic_proskuriakova
```


### 사용하기
호스트에서 http 요청한다.
```bash
$ curl -X POST \
  http://localhost:49160/api/v1/milk-default-nouns \
  -H 'content-type: application/json' \
  -d '{
	"text": "아버지가 방에 들어가신다."
}'

$ curl -X POST \
  http://localhost:49160/api/v1/milk-pos \
  -H 'content-type: application/json' \
  -d '{
	"text": "아버지가 방에 들어가신다."
}'




## 참고
https://github.com/golbin/node-mecab-ya
https://github.com/hyeonjae/mecab-ya-docker-rest-api

