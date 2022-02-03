# Project - Issue Manager
지라를 모티브한 토이 프로젝트 입니다.
### Language & Lib & FW
Javascript, Nodejs, React, GraphQL, MongoDB

### 데이터 구조
```
User{
    id              //아이디
    nickName        //닉네임
    password        //비밀번호
    seq             //유저 고유 번호
}

Issue{
    seq             //이슈 고유 번호
    id              //이슈 아이디
    reporter_seq    //작성 유저의 고유 번호
    asignee_seq     //이슈 배정자 고유 번호
    status          //이슈 상태
    priority        //우선 순위
    title           //제목
    description     //이슈 내용
}

Comment{
    index           //코멘트 순서
    issue_seq       //대상 이슈의 고유 번호
    commenter_seq   //작성 유저의 고유 번호
    description     //코멘트 내용 
}

```

