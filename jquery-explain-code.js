// Explain what the following code does:

// $( "div" ).css( "width", "300px" ).add( "p" ).css( "background-color", "blue" );

This code uses method chaining to accomplish a couple of things. First, it selects all the <div> elements and changes their CSS width to 300px. Then, it adds all the <p> elements to the current selection, so it can finally change the CSS background color for both the <div> and <p> elements to blue.