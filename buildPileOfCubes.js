/*
  https://www.codewars.com/kata/5592e3bd57b64d00f3000047/

*/

// Solution 

function findNb(m) {
  let sum = 0;
  let remainder = m;
  let index = 0;
  while(sum < m){
    index++;
    sum += (index ** 3);
  }
  if((sum - m) === 0){
     return index;
  } else{
    return -1;
  }
}

