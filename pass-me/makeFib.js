/*
makeFib 함수를 작성합니다.

makeFib 함수는 클로저의 형태로 작성되며, 리턴된 함수가 호출될 때마다 피보나치 수열을 순차적으로 출력합니다.
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 됩니다.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

이 함수는 recursive 혹은 iterative한 방법 중 어떤 방법으로든 구현할 수 있습니다.

예제
---

var fn = makeFib();
fn(); // 0
fn(); // 1
fn(); // 1
fn(); // 2
fn(); // 3
fn(); // 5

*/

function makeFib() {
  let result=0;
  let count=0
  let bool;
  return function (){
    function fib(num, check=true){
      let cnt=0;
      bool=check
      if(bool===false){
        cnt=num
      } else if(bool===true){
        cnt=count
      }
      if(cnt===0){
        if(bool===true){
        count=count+1
        }
        bool=true
        return 0;
      }
      else if(cnt===1){
        if(bool===true){
        count=count+1
        }
        bool=true
        return 1;
      }
      else if(cnt>=2){
       if(bool===true){
        count=count+1
       }
       return fib(cnt-1, false)+fib(cnt-2, false)
      }
    }
    return fib(count, bool)
  }
}

if(typeof window === 'undefined') {
  module.exports = makeFib;
}