//사용자 중에 admin이 없으면, 만들어줘라.
var user = userDB.findOne({username: 'admin'});
if (user === undefined) {
  userDB.insert({
    username: 'admin',
    nickname: '관리자',
    address: 'Korea'
  })
}



/*
자 수정을 시작합니다..
어쩌고 저쩌고
여러 가지 파일을 건드리면서 수정을 하겠죠.




여기만 수정을 할게요..
 */

// var b = Object.getOwnPropertyNames( {a:true, b:false, c:[1,2,3], spoke:{a:true}} )
// console.log(b);

//for문을 돌면서 데이터 10000개를 넣는 코드를 작성하시오.
// for(var i = 0; i < 10000; i++) {
//   console.log(testDB.insert({
//     index: i,
//     name: '테스트 데이터',
//     boolean: true
//   }));
// }

