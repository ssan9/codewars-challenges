// Given the following HTML:

// <div id="expander"></div>
// and the following CSS:

// div#expander{
//   width: 100px;
//   height: 100px;
//   background-color: blue;
// }
// Write code in jQuery to animate the #expander div, expanding it from 100 x 100 pixels to 200 x 200 pixels over the course of three seconds.

$( "#expander" ).animate(
  {
    width: "200px",
    height: "200px",
  },
  3000 );