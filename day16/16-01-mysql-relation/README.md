이 프로젝트는 NestJS를 기반으로 한 백엔드 서비스입니다. 주요 기능으로는 게시판의 CRUD 작업이 있습니다.

## Docker

이 프로젝트는 Docker를 지원합니다. Docker를 사용하여 프로젝트를 실행하려면 다음 명령어를 실행하세요:

```sh
docker-compose up
```

## 기능

- 게시판 조회: 모든 게시판 항목을 조회할 수 있습니다.
- 게시판 생성: 새로운 게시판 항목을 생성할 수 있습니다.

## 코드 구조

- [`src/apis/boards/boards.module.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapis%2Fboards%2Fboards.module.ts%22%5D "src/apis/boards/boards.module.ts"): 게시판 모듈을 정의합니다.
- [`src/apis/boards/boards.resolver.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapis%2Fboards%2Fboards.resolver.ts%22%5D "src/apis/boards/boards.resolver.ts"): 게시판에 대한 GraphQL 쿼리와 뮤테이션을 정의합니다.
- [`src/apis/boards/boards.service.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapis%2Fboards%2Fboards.service.ts%22%5D "src/apis/boards/boards.service.ts"): 게시판 데이터를 처리하는 서비스를 정의합니다.
- [`src/apis/boards/dto/createBoard.input.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapis%2Fboards%2Fdto%2FcreateBoard.input.ts%22%5D "src/apis/boards/dto/createBoard.input.ts"): 게시판 생성에 사용되는 입력 타입을 정의합니다.
- [`src/apis/boards/entities/board.entity.ts`](command:_github.copilot.openRelativePath?%5B%22src%2Fapis%2Fboards%2Fentities%2Fboard.entity.ts%22%5D "src/apis/boards/entities/board.entity.ts"): 게시판 엔티티를 정의합니다.
