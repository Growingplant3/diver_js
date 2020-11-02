function add(i, j) {
  let sum = i + j;
  return i; // iをそのまま返す
}
console.log(add(2,3));

function isOverTen(i) {
  return i >= 10; //　i >= 10の結果が返る(true or false)
}
console.log(isOverTen(10)); // 10以上なのでtrue
console.log(isOverTen(8)); // 10未満なのでfalse

function divide(i, j) {
  if (j === 0) {
    return "error";
  } else {
    return i / j;
  }
}
function showResult(i, j, computeFunc) {
  let result = computeFunc(i, j); // computeFunc関数の結果をresult変数に入れる
  if (result === "error") { // 結果が文字列だったらそのまま出力(割り切れない場合のため)
    return result;
  } else { // 割り切れている場合はresultに100をかける
    return `${result * 100}パーセントです`;
  }
}
console.log(showResult(2, 4, divide)); // 50パーセントです
