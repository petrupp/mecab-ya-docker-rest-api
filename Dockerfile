FROM node:8

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY package*.json ./

ADD ./asset/mecab-0.996-ko-0.9.2.tar.gz ./
ADD ./asset/mecab-ko-dic-2.1.1-20180720.tar.gz ./

WORKDIR /usr/src/app/mecab-0.996-ko-0.9.2
RUN ./configure && make && make check && make install

WORKDIR /usr/src/app/mecab-ko-dic-2.1.1-20180720
RUN ./autogen.sh && ./configure && ldconfig && make && make install

ENV MECAB_LIB_PATH /usr/local

WORKDIR /usr/src/app
RUN npm install

# 앱 소스 추가
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]