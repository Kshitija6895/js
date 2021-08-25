
    var parentDiv = $("#mainDiv");
    var innerDiv = $("#innerDiv");
    var divHeight = $("#mainDiv").height();
    var innerDivHeight = $("#innerDiv").height();
    $(function () {
      console.log("ready!");
      $("#start").click(function () {
        start(divHeight, innerDivHeight);
      });
      $("#stop").click(function () {
        $(innerDiv).stop();
      });
    });

    function start(divHeight, innerDivHeight) {
      bottomToTop(divHeight, innerDivHeight);
    }

    function bottomToTop(divHeight, innerDivHeight) {
      console.log("bottomToTop", divHeight, innerDivHeight);
      divHeight = divHeight - 50;
      innerDiv.animate(
        {
          left: innerDivHeight - 50,
          bottom: "+=" + divHeight,
        },1000,(leftToRight)=>{
            console.log("leftToRight", divHeight, innerDivHeight);
            innerDiv.animate(
                {
                  right: innerDivHeight,
                  left: "+=" + divHeight,
                },
                1000,(topToBottom)=> {
                    console.log("topToBottom", divHeight, innerDivHeight);
                    innerDiv.animate(
                        {
                          right: innerDivHeight,
                          left: "+=" + divHeight,
                        },
                        1000,(rightToLeft)=> {
                            divHeight = divHeight - 50;
                            console.log("rightToLeft", divHeight, innerDivHeight);
                            innerDiv.animate(
                              {
                                left: innerDivHeight,
                                right: "+=" + divHeight,
                              },
                              1000,(LeftToTop)=>{
                                  divHeight = divHeight - 50;
                                console.log("LeftToTop", divHeight, innerDivHeight);
                                innerDiv.animate(
                                  {
                                    left: innerDivHeight,
                                    bottom: "+=" + divHeight,
                                    top: innerDivHeight,
                                  },
                                  1000,
                                  function () {
                                    if (divHeight === 0) {
                                      $(innerDiv).stop();
                                      alert("reached Successfully!.....");
                                    } else {
                                      innerDivHeight = innerDivHeight + 50;
                                      leftToRight(divHeight, innerDivHeight);
                                    }
                                  }
                                );
                              }
                            );
                        }
                        );

                }
                );
        }
      );
    }

    function leftToRight(divHeight, innerDivHeight) {
      divHeight = divHeight;
      console.log("leftToRight", divHeight, innerDivHeight);
      innerDiv.animate(
        {
          right: innerDivHeight,
          left: "+=" + divHeight,
        },
        1000,
        function () {
          topToBottom(divHeight, innerDivHeight);
        }
      );
    }

    function topToBottom(divHeight, innerDivHeight) {
      divHeight = divHeight;
      console.log("topToBottom", divHeight, innerDivHeight);
      innerDiv.animate(
        {
          bottom: innerDivHeight,
          top: "+=" + divHeight,
        },
        1000,
        function () {
          rightToLeft(divHeight, innerDivHeight);
        }
      );
    }

    function rightToLeft(divHeight, innerDivHeight) {
      divHeight = divHeight - 50;
      console.log("rightToLeft", divHeight, innerDivHeight);
      innerDiv.animate(
        {
          left: innerDivHeight,
          right: "+=" + divHeight,
        },
        1000,
        function () {
          LeftToTop(divHeight, innerDivHeight);
        }
      );
    }

    function LeftToTop(divHeight, innerDivHeight) {
      divHeight = divHeight - 50;
      console.log("LeftToTop", divHeight, innerDivHeight);
      innerDiv.animate(
        {
          left: innerDivHeight,
          bottom: "+=" + divHeight,
          top: innerDivHeight,
        },
        1000,
        function () {
          if (divHeight === 0) {
            $(innerDiv).stop();
            alert("reached Successfully!.....");
          } else {
            innerDivHeight = innerDivHeight + 50;
            leftToRight(divHeight, innerDivHeight);
          }
        }
      );
    }