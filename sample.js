function scope_test01(x){
  return x + 6;
}
console.log(scope_test01(4));
// console.log(scope_test01(x));

let x = 3;
function scope_test02(){
  console.log(x);
  // console.log(y);
}
scope_test02();
let y = 3;

let answer = true;
answer = false;
function question(){
  console.log(answer);
}
question();

{
  let block = 5;
  console.log(block);
}
// console.log(block);

{
  let judge = "safe";
  console.log(judge);
  {
    let judge = "out";
    console.log(judge);
  }
  console.log(judge);
}
console.log(x);

{
  let judge = "safe";
  let check = "safe";
  console.log(judge);
  console.log(check);
  {
    let judge = "out";
    console.log(judge);
    console.log(check);
  }
}

let barrier;
{
 let data = {name: "shibata",password: "hogehoge"};
 barrier = function(){
   return data;
 };
}
console.log(barrier());
let invasion = barrier();
invasion.password = "fugafuga";
console.log(barrier());
