// What is the difference between jQuery.get() and jQuery.ajax()?

jQuery.ajax() is the all-encompassing Ajax request method provided by jQuery. It allows for the creation of highly-customized Ajax requests, with options for how long to wait for a response, how to handle a failure, whether the request is blocking (synchronous) or non-blocking (asynchronous), what format to request for the response, and many more options.

jQuery.get() is a shortcut method that uses jQuery.ajax() under the hood, to create an Ajax request that is typical for simple retrieval of information. Other pre-built Ajax requests are provided by jQuery, such as jQuery.post(), jQuery.getScript(), and jQuery.getJSON().