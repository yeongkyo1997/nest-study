use mydockerclass
;

show tables
;

drop procedure mydummydata;

show procedure status
;
-- 프로시저 생성(세미클론 위치 주의)
create procedure mydummydata()
begin
    declare i int default 1;
    while i <= 5000000 do
        insert into board(writer, title, contents) values('철수', rand(), '내용');
        set i = i + 1;
    end while;
end;

call mydummydata();