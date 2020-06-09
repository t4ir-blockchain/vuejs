/* 
Array Helper Method
*/ 

const colors = ['red', 'blue', 'green']

// I. forEach
// 배열의 요소를 순회 & 출력
// 0. 전통적인 for 문
for (let i=0; i<colors.length; i++) {
  console.log(colors[i])
}

// 1. 순회문으로서의 for 문
for (let color of colors) {
  console.log(color)
}

// 2. forEach 헬머 메서드
const result = colors.forEach(function(color) {
  console.log(color)
})

console.log(result)



// II. filter()
const numbers = [-20, -15, 5, 10]

const positiveNumbers1 = []
numbers.forEach(number => {
  if (number > 0) {
    positiveNumbers1.push(number)
  }
})
console.log(positiveNumbers1)

const postiveNumbers2 = numbers.filter(number => number > 0)
console.log(postiveNumbers2)

// III. map()
// - 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// - 숫자배열 <-> 글자배열, 동일한 데이터를 적용해야하는 경우

inputs = ['1', '5', '3', '6']
const numberInputs = inputs.map(input => parseInt(input))

console.log(numberInputs)

let sum = 0
numberInputs.forEach(num => {
  sum += num
})
console.log(sum)

// IV. reduce()
// - 순회를 하며,내부의 모든 요소를 하나의 값으로 환원해야하는 경우

sum = numberInputs.reduce((acc, cur) => acc + cur)

console.log(sum)

// find, some, every