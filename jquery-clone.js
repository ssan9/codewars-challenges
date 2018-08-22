jQuery provides a useful .clone() method to create a deep copy of matching elements.

Answer the following questions:

What is meant by a “deep copy”?
What is normally not included in the cloned copy? How can some of this behavior be controlled?
What is a potential “gotcha” when using the .clone() method? (HINT: What is an element attribute that you would generally not want to clone?)

1. What is meant by a “deep copy”?

The .clone() method performs a deep copy of the set of matched elements, meaning that it copies the matched elements as well as their descendant elements and text nodes.

2. What is normally not included in the cloned copy? How can some of this behavior be controlled?

Normally:

Objects and arrays within element data are not copied and will continue to be shared between the cloned element and the original element. To deep copy all data, you must copy each one “manually”.
Any event handlers bound to the original element are not copied to the clone.
Setting the optional withDataAndEvents parameter to true makes copies of all of the event handlers as well, bound to the new copy of the element.

As of jQuery 1.4, all element data (attached by the .data() method) is also copied to the new copy.

As of jQuery 1.5, withDataAndEvents can be optionally enhanced with deepWithDataAndEvents to copy the events and data for all children of the cloned element.

3. What is a potential “gotcha” when using the clone() method? (HINT: What is an element attribute that you would generally not want to clone?)
Using .clone() has the potentially problematic side-effect of producing elements with duplicate id attributes, which are supposed to be unique. Therefore, when cloning an element with an id attribute, it’s important to remember to modify the id of the clone, before inserting it into the DOM.