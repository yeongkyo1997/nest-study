use mydockerclass
;

show tables
;

-- 커넥션 최댓값(max_connections)확인
show variables
;

-- 커넥션 최댓값(max_connections) 설정
set GLOBAL max_connections = 15
;


-- 현재 연결된 커넥션 갯수 확인(Threads_connected)
show status
;

-- 현재 연결된 커넥션 목록
show processlist
;

-- 커넥션 종료(kill)
kill 40
;