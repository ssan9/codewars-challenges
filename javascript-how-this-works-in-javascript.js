// How this works in JavaScript
// What is the result of the following code? Explain your answer.

// var fullname = 'John Doe';
// var obj = {
//    fullname: 'Colin Ihrig',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());

// var test = obj.prop.getFullname;

// console.log(test());

The code prints Aurelio De Rosa and John Doe. The reason is that the context of a function, what is referred with the this keyword, in JavaScript depends on how a function is invoked, not how it’s defined.

In the first console.log() call, getFullname() is invoked as a function of the obj.prop object. So, the context refers to the latter and the function returns the fullname property of this object. On the contrary, when getFullname() is assigned to the test variable, the context refers to the global object (window). This happens because test is implicitly set as a property of the global object. For this reason, the function returns the value of a property called fullname of window, which in this case is the one the code set in the first line of the snippet.