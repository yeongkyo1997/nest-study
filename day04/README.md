이 프로젝트는 Express를 사용하여 REST API를 구현한 예제입니다. 

## 프로젝트 구조

프로젝트는 다음과 같이 구성되어 있습니다:

- [`04-01-rest-api-with-express`](command:_github.copilot.openRelativePath?%5B%2204-01-rest-api-with-express%22%5D "04-01-rest-api-with-express"): Express를 사용하여 간단한 REST API를 구현한 예제입니다.
- [`04-02-rest-api-with-express-board`](command:_github.copilot.openRelativePath?%5B%2204-02-rest-api-with-express-board%22%5D "04-02-rest-api-with-express-board"): 게시판 API를 구현한 예제입니다. 게시글 조회 및 등록 기능이 있습니다.
- [`04-03-rest-api-with-express-swagger`](command:_github.copilot.openRelativePath?%5B%2204-03-rest-api-with-express-swagger%22%5D "04-03-rest-api-with-express-swagger"): Swagger를 사용하여 API 문서를 자동화한 예제입니다.

## 실행 방법

각 프로젝트 폴더에서 다음 명령어를 실행하여 프로젝트를 시작할 수 있습니다:

```sh
npm run dev
```

## API

### 게시글 가져오기

`GET /boards`

게시글 목록을 가져옵니다.

### 게시글 등록하기

`POST /boards`

게시글을 등록합니다.

### 핸드폰 토큰 인증

`POST /tokens/phone`

핸드폰 번호를 입력받아 토큰을 생성하고, 해당 토큰을 핸드폰 번호로 전송합니다.

## 문서

Swagger를 사용하여 API 문서를 자동화하였습니다. `/api-docs` 경로에서 API 문서를 확인할 수 있습니다.