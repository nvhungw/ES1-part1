//In tất cả các số chẵn từ 0 -> 10
const printEvenNumber = () => {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

export default printEvenNumber;

// printEvenNumber();

// for of: lấy value
// for in: lấy key

// const animals = ['mèo', 'chó', 'gấu'];
// console.log(animals);
// animals.forEach((item) => {
//   console.log(item);
// }); // 1 cách viết arrow function
