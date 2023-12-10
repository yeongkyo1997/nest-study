# README.md

## 프로젝트 설명

이 프로젝트는 회원 가입을 위한 백엔드와 프론트엔드 코드를 포함하고 있습니다. 사용자는 휴대폰 번호를 입력하여 인증을 받을 수 있으며, 이메일로 가입 환영 메시지를 받을 수 있습니다.

## 폴더 구조

```
.
├── README.md
├── backend
│   ├── email.js
│   ├── index.js
│   ├── package.json
│   ├── phone.js
│   ├── swagger
│   │   ├── boards.swagger.js
│   │   └── config.js
│   └── utils.js
└── frontend
    └── signup.html
```

## 주요 파일 설명

- `backend/email.js`: 이메일 검증, 가입 환영 템플릿 생성, 이메일 전송 기능을 담당합니다.
- `backend/phone.js`: 휴대폰 번호 검증 및 인증번호 전송 기능을 담당합니다.
- `backend/index.js`: 서버 설정 및 API 라우팅을 담당합니다.
- `frontend/signup.html`: 사용자 인터페이스를 제공하며, 사용자의 휴대폰 번호를 받아 인증번호를 요청하는 기능을 담당합니다.

## 실행 방법

1. 프로젝트를 클론합니다.
2. `backend` 폴더에서 `npm install`을 실행하여 필요한 패키지를 설치합니다.
3. `backend` 폴더에서 `node index.js`를 실행하여 서버를 시작합니다.
4. 웹 브라우저에서 `frontend/signup.html`을 열어 사용합니다.

## API 문서

Swagger를 사용하여 API 문서를 제공합니다. 서버를 실행한 후, 웹 브라우저에서 `http://localhost:3000/api-docs`를 방문하여 API 문서를 확인할 수 있습니다.