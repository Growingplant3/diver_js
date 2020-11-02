function get_achievement(x,y,z){
  let sum = x + y + z;
  if(sum >= 250) {
    return "A";
  } else if (sum >= 200) {
    return "B";
  } else if (sum >= 100) {
    return "C";
  } else {
    return "D";
  }
}
// console.log(get_achievement(60,100,40));

function get_pass_or_failure(x,y,z){
  let judge;
  if (x >= 60 && y >= 60 && z >= 60) {
    judge = "合格";
  } else {
    judge = "不合格";
  }
  return judge;
}
// console.log(get_pass_or_failure(60,100,40));

function judgement(x,y,z){
  let achievement = get_achievement(x,y,z)
  let pass_or_failure =  get_pass_or_failure(x,y,z)
  return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
}
console.log(judgement(60,100,40));
