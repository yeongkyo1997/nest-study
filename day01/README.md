이 프로젝트는 휴대폰 번호에 대한 토큰 생성 및 전송을 처리하는 여러 JavaScript 파일로 구성되어 있습니다. 각 파일은 다음과 같은 기능을 수행합니다:

1. [`01-01-token/index.js`](command:_github.copilot.openRelativePath?%5B%2201-01-token%2Findex.js%22%5D "01-01-token/index.js"): 랜덤한 토큰을 생성하고 출력합니다.
2. [`01-02-token-count/index.js`](command:_github.copilot.openRelativePath?%5B%2201-02-token-count%2Findex.js%22%5D "01-02-token-count/index.js"): 토큰의 길이를 검증하고, 유효한 경우 랜덤한 토큰을 생성하고 출력합니다.
3. [`01-03-token-count-api/index.js`](command:_github.copilot.openRelativePath?%5B%2201-03-token-count-api%2Findex.js%22%5D "01-03-token-count-api/index.js"): 휴대폰 번호의 유효성을 검증하고, 유효한 경우 랜덤한 토큰을 생성하고 해당 토큰을 휴대폰 번호로 전송합니다.
4. [`01-04-token-count-api-facade/index.js`](command:_github.copilot.openRelativePath?%5B%2201-04-token-count-api-facade%2Findex.js%22%5D "01-04-token-count-api-facade/index.js"): 휴대폰 번호의 유효성을 검증하고, 유효한 경우 랜덤한 토큰을 생성하고 해당 토큰을 휴대폰 번호로 전송합니다. 이 과정은 여러 함수로 분리되어 있습니다.
5. [`01-05-token-count-api-facade-import/index.js`](command:_github.copilot.openRelativePath?%5B%2201-05-token-count-api-facade-import%2Findex.js%22%5D "01-05-token-count-api-facade-import/index.js"): [`01-04-token-count-api-facade/index.js`](command:_github.copilot.openRelativePath?%5B%2201-04-token-count-api-facade%2Findex.js%22%5D "01-04-token-count-api-facade/index.js")와 동일한 기능을 수행하지만, 필요한 함수들을 별도의 모듈(`phone.js`)에서 가져옵니다.

각 파일을 실행하려면 Node.js가 설치되어 있어야 하며, [`01-05-token-count-api-facade-import/index.js`](command:_github.copilot.openRelativePath?%5B%2201-05-token-count-api-facade-import%2Findex.js%22%5D "01-05-token-count-api-facade-import/index.js")를 실행하려면 `package.json`에 `"type": "module"`이 추가되어 있어야 합니다.

## 실행 방법

각 파일을 실행하려면 다음 명령을 사용하세요:

```sh
node 파일명.js
```

예를 들어, [`01-01-token/index.js`](command:_github.copilot.openRelativePath?%5B%2201-01-token%2Findex.js%22%5D "01-01-token/index.js")를 실행하려면 다음 명령을 사용하세요:

```sh
node 01-01-token/index.js
```