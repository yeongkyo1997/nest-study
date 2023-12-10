이 프로젝트는 Express를 사용하여 MVC 패턴으로 구성된 API를 제공합니다.

## 주요 기능

1. 상품 구매 API
2. 상품 환불 API
3. 쿠폰 구매 API

## 설치 방법

이 프로젝트는 npm을 사용하여 관리되므로, 아래 명령어로 필요한 패키지를 설치할 수 있습니다.

```sh
npm install
```

## 실행 방법

아래의 명령어로 서버를 실행할 수 있습니다.

```sh
node index.js
```

## API 사용 방법

### 게시판 API

- 게시판 조회: GET /boards
- 게시판 등록: POST /boards

### 상품 API

- 상품 구매하기: POST /products/buy

자세한 API 사용 방법은 각 컨트롤러의 코드를 참조해주세요.

- 게시판 API: [`BoardController`](command:_github.copilot.openSymbolInFile?%5B%22mvc%2Fcontrollers%2Fboard.controller.js%22%2C%22BoardController%22%5D "mvc/controllers/board.controller.js")
- 쿠폰 API: [`CouponController`](command:_github.copilot.openSymbolInFile?%5B%22mvc%2Fcontrollers%2Fcoupon.controller.js%22%2C%22CouponController%22%5D "mvc/controllers/coupon.controller.js")
- 상품 API: [`ProductController`](command:_github.copilot.openSymbolInFile?%5B%22mvc%2Fcontrollers%2Fproduct.controller.js%22%2C%22ProductController%22%5D "mvc/controllers/product.controller.js")
