// 반복문은 수없이 반복되는 데이터들을 다룰 수 있는 프로그래밍의 중요한 문법이다.
// 반복문은 주로 배열의 요소나 DOM에서 선택된 반복 객체 등을 다룰때 사용된다.

// 1. for in
// signiture : for(const loop variable in array or object){}
// for in문은 배열의 반복 인덱스를 리턴하고, 해당 배열의 인덱스 요소값을 배열접근 방식으로 리턴할 수 있다.
const forinarr = ['a', 'b', 'c', 'd', 'e'];
// for(const i in forinarr){
//  console.log(i);
//  console.log(forinarr[i]);
// }

// 2. for of
// signiture : for(const loop variable of array or object){}
// for in문과 다르게 for of문의 경우 변수에 할달된 데이터를 인덱스가 아니라 해당 인덱스이 값을 직접 리턴한다.
// for(const i of forinarr){
//  console.log(i);
// }

// for in과 for of는 실제로 자주 사용되는 문법은 아니다. 이보다는 주로 for문이 많이 사용된다.

// 3. for
// signiture : for(let loop variable; loop length; increment operator){}
// for문의 경우 반복 횟수를 지정할 수 있어서 디데일한 컨트롤이 가능하다.
// for문의 반복 변수를 재할당되기 때문에 const 상수를 선언하면 안된다.let사용해야함
// let a;
// console.log(forinarr);
// for(let i =0; i < forinarr.length; i++){
 // console.log(i);// i 변수는 인덱스
  // a = forinarr[i];
 // console.log(a);
// }
// console.log(a);

// let nm = '철수';

// for(let i =0; i < 10; i++){
//  console.log(`${nm}, ${i}님 안녕하세요/n`);
// }

// 1 ~ 99까지의 합
let sum = 0;
for(let i =1; i <=100; i++){
 // console.log(i);
 sum += i;
}
// sum=0+1;
// sum=1+2;
// sum=3+3;
// sum=6+4;
// ...
// console.log(sum);
// 네비게이션 만들기
// const headArr = ['Home', 'About', 'Products', 'Contact'];
// // console.log(headArr);
// const navi = document.querySelector('.navi');
// console.log(navi);
// for(let i = 0; i <headArr.length; i++){
//  const elmt = headArr[i];
//  // const litag = document.createElement('li');
//  // console.log(elmt);
//  // litag.textContent = elmt;
//  // navi.append(litag);

//  const litag = `<li>${elmt}</li>`;
//  navi.innerHTML += litag;
// }


// 별찍기
// 중첩 for문
for(let i = 0; i < 10; i++){
 for(let j = 0; j < i; j++){
  document.write('*');
 }
 document.write('<br>' + i);
}