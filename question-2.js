const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const totalScore = students.filter(student => student.score > 50)
.map(add => add.score + (add.score*0.1)).reduce((acc,cur) => acc+cur)


console.log(`Total score is ${totalScore}`);
