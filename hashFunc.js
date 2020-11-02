let dicMember = { position: { ceo: 'noro', aiTeacher: 'nakao', railsTeacher: 'shibata' } };
console.log(dicMember['position']['ceo']);
console.log(dicMember.position.aiTeacher); // このように記述することもできます(両方使えるようになるとなお良いです！)
dicMember.position['mentor'] = 'matsumoto';
console.log(dicMember);

let blogs = [
  { title: '今日は暑いな',
    content: 'でも頑張るぞ'
  },
  { title: '今日の仕事が終われば',
    content: '明日から旅行だ'
  },
  { title: '明日から',
    content: 'プログラミングするぞ'
  }
];
console.log(blogs[0]['title']);

let test = [{subject: 'math', points: 70},
            {subject: 'english', points: 50},
            {subject: 'society', points: 80}];
test.push({subject: 'science', points: 100});
console.log(test);
console.log(test[3].points);