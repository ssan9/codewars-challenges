// Explain the .promise() method in jQuery, including how and why it would be used.

// Consider the code snippet below. If there are 5 <div> elements on the page, what will be the difference between the start and end times displayed?

// function getMinsSecs() {
//   var dt = new Date();
//   return dt.getMinutes()+":"+dt.getSeconds();
// }

// $( "input" ).on( "click", function() {
//   $( "p" ).append( "Start time: " + getMinsSecs() + "<br />" );
//   $( "div" ).each(function( i ) {
//     $( this ).fadeOut( 1000 * ( i * 2 ) );
//   });
//   $( "div" ).promise().done(function() {
//     $( "p" ).append( "End time: " + getMinsSecs() + "<br />" );
//   });
// });

The .promise() method returns a dynamically generated Promise that is resolved once all actions of a certain type bound to the collection, queued or not, have ended.

It takes two optional arguments:

type - By default, type is “fx”, which means that the returned Promise is resolved when all animations of the selected elements have completed.
target - If a target object is specified, .promise() will attach to it and then return this object rather than create a new one.
In the code sample provided, the difference between the start and end times displayed will be 10 seconds. This is because .promise() will wait for all <div> animations (in this case, all fadeOut() calls) to complete, the last of which will complete 10 seconds (i.e., 5 * 2 seconds) after the animation starts.