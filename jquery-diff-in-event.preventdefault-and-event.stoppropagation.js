// Explain and contrast the usage of event.preventDefault() and event.stopPropagation(). Provide an example.

event.stopPropagation() stops an event from bubbling up the event chain, whereas event.preventDefault() only precludes the browser’s default action on that event from occurring, but the event still propogates up the event chain.

For example, consider the following code snippet:

// in this example, 'foo' is a div containing button 'bar'

$("#foo").click(function() {
   // mouse click on div 'foo'
});

$("#bar").click(function(e) {
   // mouse click on button 'bar'
   e.stopPropagation();
});

Due to the call to stopPropagation() in the button’s click handler, the event never propogates to the div so its click handler never fires. It effectively stops parent elements from knowing about an event on their children.

In contrast, if you replaced the above call to stopPropagation() with a call to preventDefault(), only the browser’s default action would be precluded, but the div’s click handler would still fire.

(Note: Although the stopPropagation() and preventDefault() methods are mostly used in jQuery event handling implementations, they apply to plain JavaScript as well.)