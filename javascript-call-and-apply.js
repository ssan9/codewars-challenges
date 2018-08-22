// Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

The issue can be fixed by forcing the context of the function using either the call() or the apply() function. If you don’t know them and their difference, I suggest you to read the article What’s the difference between function.call and function.apply?. In the code below I’ll use call() but in this case apply() would produce the same result:

console.log(test.call(obj.prop));