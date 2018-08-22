// What is accomplished by returning false from (a) a jQuery event handler, (b) a regular JavaScript onclick event handler for an anchor tag, and (c) a regular JavaScript onclick event handler for a non-anchor tag (e.g., a div, button, etc.)?

(a) Returning false from a jQuery event handler is effectively the same as calling both preventDefault() and stopPropagation() on the passed jQuery event object.

(b) Returning false from a regular JavaScript onclick event handler for an anchor tag prevents the browser from navigating to the link address and stops the event from propagating through the DOM.

(c) Returning false from a regular JavaScript onclick event handler for a non-anchor tag (e.g., a div, button, etc.) has absolutely no effect.