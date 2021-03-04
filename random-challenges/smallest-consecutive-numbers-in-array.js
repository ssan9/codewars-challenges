Find the smallest consecutive length of numbers in an array
eg, [1,2,2,3,1] -> return 2
[1,2,2,1,1,1,1,3] -> return 2 -> 2 is not smallest in the array but the length of it being consecutive is less than 1's length 
as there are 3 2's and 4 1's

function writeOutput(inputData) {
	let count = 1;
	let obj={};
	for (let i = 0; i < N.length; i++) {
		if (N[i] === N[i + 1]) {
		  count++;
		  obj[N[i]] = count;
		}
		if (N[i] !== N[i + 1]) {
		  count = 1;
		}
	}  
	const newObj = Object.values(obj).map((obj, i) => obj);
	return Math.min(...newObj);
}

function writeOutput(inputData) {
    // Start writing code here to consume input, and return result.
    let count = 1;
    let obj = {};
    for (let i = 0; i < inputData.length; i++) {
        if (inputData[i] === inputData[i + 1]) {
            count++;
            obj[inputData[i]] = count;
        }
        if (inputData[i] !== inputData[i + 1]) {
            count = 1;
        }
    }
    const newObj = Object.values(obj).map((obj, i) => obj);
    return Math.min(...newObj);
}

//   let obj = {
//     name: 'Swati'
//   }
  
//   obj.lastname = 'Ankit';
//   console.log(Object.assign(obj, {name: 'parrot'}));

//   let obj = {
//     name: 'Swati'
//   }
  
//   obj.lastname = 'Ankit';
//   console.log(Object.assign(obj, {name: 'parrot'}));
// obj.name='swatiiii'
//   console.log(obj);

