-- 데이터 전체 갯수 확인
select count(*) from board
;

-- 쿼리 검색 속도 비교
select *
  from board
 where title = '0.06842220953518731'
;
select *
  from board
 where number = 20
;

-- 옵티마이저 실행계획 확인
explain
 select *
   from board
  where title = '0.06842220953518731'
;
explain
select *
  from board
 where number = 20
;

-- 인덱스 확인
show index from board
;

-- 인덱스 생성
create index idx_title on board(title)
;

-- 옵티마이저 실행계획 확인
explain
 select *
   from board
  where title = '0.06842220953518731'
;

-- 인덱싱된 컬럼으로 재쿼리 후, 성능 비교
select *
  from board
 where title = '0.06842220953518731'
;