# GraphQL 설계

# 사용 라이브러리 
graphql, express-graphql

# 내용
graphQL을 사용하기 위해선 크게 3가지가 존재한다. endpoint, resolver, schema 각각에 대해서 라이브러리의 어떤 부분을 사용했는지와 어떻게 구조가 되었는지 살펴보자.   
* schema   
schema를 설계하기 위해서 graphql 라이브러리의 buildSchema 함수를 사용하였다. 함수 파라미터로 문자열을 받는데 이 문자열은 스키마 내용을 가진다. buildSchema는 GraphQLSchema 객체로 return 된다. 스키마 작성법은 다음과 같다(추가적으로 interface, input 등이 존재하는데 추후 설계하면서 추가할 예정).
```
type 타입명{
    필드명:필드 타입(Int, String, Boolean ...){!}
    ...
}
type Query or Mutation{
    쿼리명(매개변수1:타입{!} ...) : return Type
    ...
}
```
집고 넘어가야할 부분은 느낌표, 대괄호로 감싸는 부분, return Type이다. 느낌표는 non-null을 의미한다. 대괄호는 결과가 여러개일 수 있다. 즉 배열 결과로 나타난다는 것이고 return Type은 Int, String 등의 타입이 올 수 있지만, 위에서 설정한 타입으로도 설정이 가능하다.   
* resolvers   
resolvers는 query, mutation에서 쿼리, 뮤테이션에 대해 일대일로 함수를 매칭해주는 기능이다. 추가적으로 라이브러리를 사용하지 않았고, 설정한 쿼리, 뮤테이션 명을 키로 삼아 함수를 value로 가지는 객체라고 보면 된다.   
* endpoint   
endpoint라고 했지만 사실 요청을 보낼 url이다. 서버는 express를 사용하게 될 것이기 때문에 express-graphql 라이브러리를 사용하였고, 그 안의 graphqlHTTP 메소드를 사용해 진행하였다. graphqlHTTP의 스펙은 다음과 같다.
```
graphqlHTTP({
    schema : GraphQLSchema              //스키마 객체
    graphiql? : ?boolean                //해당 엔드포인트로 playground 접속 여부
    rootValue? : ?any                   //쿼리, 뮤테이션에 대해 실행 함수 정의된 객체
    context? : ?any                     //쿼리, 뮤테이션에 대한 실행함수로 같이 넘어가는 값(?)
    pretty? : ?boolean                  //response를 이쁘게 보낼지 말지
    validationRules? : ?Array<any>      //요청에 대해 유효한 요청인지 체크하는 조건 배열
}) : Middleware

```
context, validationRules는 추가적으로 사용해봐야겠다. 아무튼 graphqlHTTP는 미들웨어로 반환되기 때문에 express router로 등록해주어야 한다. 
```
app.use('/graphql',graphqlHTTP({schema,rootValue,context,graphiql:true}));
```
위 설명에 따른 파일들은 [여기](server/graphql)에 저장되어있다.