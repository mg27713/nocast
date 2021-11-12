// This can be used on any website that doesn't apply any fancy CSS. For example, SICP. https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-20.html

addEventListener("load", function() {
            function stringify(color) {
                var out = color.toString(16);
                if (out.length < 2)
                    out = "0" + out;
                
                return out;
            }
            
            //var warning = document.getElementById("warning");
            var stage = 0;
            
            setInterval(function() {
              var b;
                switch (stage) {
                  case 0:
                    b = 0;
                    break;
                  case 1:
                    b = Math.floor(255*Math.random());
                    break;
                  case 2:
                    b = 255;
                    break;
                  case 3:
                    b = Math.floor(255*Math.random());
                }
              
                var color = b;
                
                //alert(document.body.style.backgroundColor);
                document.body.style.backgroundColor = "#ffff" + stringify(color);
                document.body.style.color = "#0000" + stringify(255-color);
                
                stage++;
                stage %= 4;
            }, 100);
        });
