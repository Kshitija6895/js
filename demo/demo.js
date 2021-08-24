/* bottom to up */
console.log($("#mainDiv").height());
innerDiv.animate(
  {
    left: "0",
    bottom: "+=" + (divHeight - 50),
  },
  5000,
  function () {
    /* left to right */
    divHeight = divHeight - 50;
    console.log(divHeight);
    innerDiv.animate(
      {
        right: "50px",
        left: "+=" + divHeight,
      },
      5000,
      function () {
        /* top to bottom */
        divHeight = divHeight;
        console.log(divHeight);
        innerDiv.animate(
          {
            bottom: "50px",
            top: "+=" + divHeight,
          },
          5000,
          function () {
            /* right to left */
            divHeight = divHeight - 50;
            console.log(divHeight);
            innerDiv.animate(
              {
                left: "50px",
                right: "+=" + divHeight,
              },
              5000,
              function () {
                // Animation complete.
              }
            ); /* right to left */
          }
        ); /* top to bottom */
      }
    ); /* left to right */
  }
); /* bottom to up */
