function mailTemplate() {
  console.log("matsumotoさん,今日のランチはうどんにしましょう。");
}
mailTemplate();

function weather() {
  console.log("晴れ");
  console.log("曇り");
  console.log("雨");
}
weather();

function mailTemplate(name, menu) { // 二つの引数を受け取る
  console.log(`${name}さん,今日のランチは${menu}にしましょう。`);
}
mailTemplate("鈴木", "ラーメン"); // 誘いたい人, 食べたいものを引数で設定

function introduce(name, age) {
  console.log(`私は${name}です。年齢は${age}歳です。`);
}
introduce("Matsumoto","22");
