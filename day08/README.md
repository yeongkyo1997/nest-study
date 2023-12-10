이 프로젝트는 Docker Compose를 사용하여 MongoDB와 Mongoose를 활용한 백엔드 서버를 구축하는 두 가지 예제를 포함하고 있습니다.

## 디렉토리 구조

```
08-01-docker-compose-with-mongo/
	backend/
		.dockerignore
		Dockerfile
		Dockerfile.mongo
		docker-compose.yaml
		email.js
		index.js
		package.json
		phone.js
		swagger/
			boards.swagger.js
			config.js
		utils.js
	frontend/
		signup.html
08-02-docker-compose-with-mongoose/
	backend/
		.dockerignore
		Dockerfile
		docker-compose.yaml
		email.js
		index.js
		models/
			board.model.js
		package.json
		phone.js
		swagger/
			boards.swagger.js
			...
		utils.js
	frontend/
		signup.html
```

## 설치 및 실행 방법

각 서브 프로젝트 폴더에서 다음 명령을 실행하여 의존성을 설치하고 서버를 시작할 수 있습니다.

```sh
yarn install
yarn dev
```

## 기능

- 이메일 유효성 검사
- 이메일로 가입 환영 템플릿 전송
- 게시판 API (게시글 가져오기, 게시글 등록하기)

## API 문서

Swagger를 사용하여 API 문서를 제공합니다. 서버를 실행한 후, 브라우저에서 `http://localhost:3000/api-docs`로 접속하여 확인할 수 있습니다.