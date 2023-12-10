GitHub Copilot: # README.md

이 프로젝트는 Express.js를 사용하여 백엔드 서버를 구축하고, Docker를 이용하여 배포하는 방법을 설명합니다.

## 프로젝트 구조

- [`07-01-docker`](command:_github.copilot.openRelativePath?%5B%2207-01-docker%22%5D "07-01-docker"): Docker를 사용하여 간단한 Node.js 애플리케이션을 실행하는 방법을 보여줍니다.
- [`07-02-docker-with-express`](command:_github.copilot.openRelativePath?%5B%2207-02-docker-with-express%22%5D "07-02-docker-with-express"): Express.js를 사용하여 백엔드 서버를 구축하고, Docker를 이용하여 배포하는 방법을 보여줍니다.
- [`07-03-docker-with-express-package-json`](command:_github.copilot.openRelativePath?%5B%2207-03-docker-with-express-package-json%22%5D "07-03-docker-with-express-package-json"): [`07-02-docker-with-express`](command:_github.copilot.openRelativePath?%5B%2207-02-docker-with-express%22%5D "07-02-docker-with-express")와 동일하지만, `package.json`을 사용하여 의존성을 관리합니다.

## 주요 기능

- 이메일 유효성 검사: 이메일 주소가 유효한지 확인합니다. ([`checkValidationEmail`](command:_github.copilot.openSymbolInFile?%5B%2207-02-docker-with-express%2Fbackend%2Femail.js%22%2C%22checkValidationEmail%22%5D "07-02-docker-with-express/backend/email.js"))
- 가입 환영 이메일 템플릿 생성: 사용자의 이름, 나이, 학교 정보를 사용하여 가입 환영 이메일 템플릿을 생성합니다. ([`getWelcomeTemplate`](command:_github.copilot.openSymbolInFile?%5B%2207-02-docker-with-express%2Fbackend%2Femail.js%22%2C%22getWelcomeTemplate%22%5D "07-02-docker-with-express/backend/email.js"))
- 이메일 전송: 생성된 템플릿을 사용하여 사용자에게 이메일을 전송합니다. ([`sendTemplateToEmail`](command:_github.copilot.openSymbolInFile?%5B%2207-02-docker-with-express%2Fbackend%2Femail.js%22%2C%22sendTemplateToEmail%22%5D "07-02-docker-with-express/backend/email.js"))
- 회원가입 API: 사용자의 이메일, 이름, 나이, 학교 정보를 받아 회원가입을 처리합니다. ([`app.post("/users")`](command:_github.copilot.openSymbolInFile?%5B%2207-02-docker-with-express%2Fbackend%2Findex.js%22%2C%22app%22%5D "07-02-docker-with-express/backend/index.js"))

## 실행 방법

각 디렉토리에 있는 `Dockerfile`을 사용하여 Docker 이미지를 빌드하고 실행할 수 있습니다.

```sh
docker build -t my-app .
docker run -p 3001:3001 my-app
```

이후 `http://localhost:3001`에서 애플리케이션을 확인할 수 있습니다.