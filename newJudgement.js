let points = [60,100,80,80,70,80];
function get_achievement(points){
  let sum = 0;
  let number = points.length;
  let maxSum = 100 * number;
  for(let i=0; i<number; i++){
      sum += points[i];
  }
  if ( sum >= 0.8 * maxSum ) {
    return "A";
  } else if ( sum >= 0.6 * maxSum ) {
    return "B";
  } else if ( sum >= 0.4 * maxSum ) {
    return "C";
  } else {
    return "D";
  }
}
// console.log(get_achievement(points));

function get_pass_or_failure(points){
  let number = points.length;
  let judge = "合格";
  for(let i=0; i<number; i++){
    if (points[i] < 60){
      judge = "不合格";
      break;
    }
  }
  return judge;
};
// console.log(get_pass_or_failure(points));

function judgement(points){
  let achievement = get_achievement(points)
  let pass_or_failure =  get_pass_or_failure(points)
  return `あなたの成績は${achievement}です。${pass_or_failure}です!`;
}
console.log(judgement(points));
