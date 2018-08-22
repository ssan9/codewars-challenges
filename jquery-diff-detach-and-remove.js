Explain the difference between the .detach() and .remove() methods in jQuery.

The .detach() and .remove() methods are the same, except that .detach() retains all jQuery data associated with the removed elements and .remove() does not. .detach() is therefore useful when removed elements may need to be reinserted into the DOM at a later time.