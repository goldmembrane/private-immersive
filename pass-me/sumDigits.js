/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/

function sumDigits(num) {
  let result=0;
  let stringed=String(num);
  if(stringed[0]==='-'){
    stringed = stringed.split('');
    let a, b, rest;
    [a, b, ...rest] = stringed;
    let result=Number(`${a}` + `${b}`);
    console.log(result);
    for( const element of rest ){
      result=result+Number(element)
     }
    return result
  } else
  for( const element of stringed ){
   result=result+Number(element)
  }
  return result
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = sumDigits;
}
