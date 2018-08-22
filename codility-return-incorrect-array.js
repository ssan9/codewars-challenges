The following find_min function should return the smallest element from a given array, but it contains a bug.

function find_min(A) {
	var ans = 0;
	for(var i = 1; i<A.length; i++) {
		if(ans > A[i]) {
			ans = A[i];
		}
	}
	return ans;
}


Write a function solution that, given an integer N, returns an array of integers of length N for which find_min function returns incorrect result. You can assume N is within the range [1..1000].

function solution(N) {
  let array = [];
  for(let i = 1; i<=N; i++) {
    array.push(i);
  }
  return array;
}

console.log(solution(6));

function solution(N) {
  let array = [];
  let num;
  for(let i = 0; i<N; i++) {
    num = Math.floor(Math.random() * 1000) + 1;
    array.push(num);
  }
  return array;
}

console.log(solution(6));