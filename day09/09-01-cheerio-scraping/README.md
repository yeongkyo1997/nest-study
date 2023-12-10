이 프로젝트는 웹 스크래핑을 이용하여 메시지를 생성하는 JavaScript 프로젝트입니다.

## 사용된 라이브러리

- axios: 웹 페이지의 HTML을 가져오는 데 사용됩니다.
- cheerio: 가져온 HTML에서 필요한 정보를 추출하는 데 사용됩니다.

## 주요 기능

`createMessage` 함수는 다음의 작업을 수행합니다:

1. "https://www.naver.com" 웹 페이지를 axios.get을 사용하여 요청하고 HTML 코드를 받아옵니다.
2. 받아온 HTML 코드에서 OG(Open Graph) 메타 태그를 찾아 해당 정보를 콘솔에 출력합니다.

## 실행 방법

이 프로젝트를 실행하려면 다음의 명령어를 사용하세요:

```sh
node index.js
```

이 명령어는 [`index.js`](command:_github.copilot.openRelativePath?%5B%22index.js%22%5D "index.js") 파일을 실행하여 `createMessage` 함수를 호출합니다.
