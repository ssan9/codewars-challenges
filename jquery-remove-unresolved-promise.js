// What is the proper way in jQuery to remove an element from the DOM before its Promise is resolved?

A returned Promise in jQuery is linked to a Deferred object stored on the .data() for an element. Since the .remove() method removes the element’s data as well as the element itself, it will prevent any of the element’s unresolved Promises from resolving.

Therefore, if it is necessary to remove an element from the DOM before its Promise is resolved, use .detach() instead and follow with .removeData() after resolution.