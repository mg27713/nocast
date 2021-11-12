// This was designed for Google Docs. It might partially work on Sheets/Slides/etc, but that hasn't been tested.

addEventListener("load", function() {
            function stringify(color) {
                var out = color.toString(16);
                if (out.length < 2)
                    out = "0" + out;
                
                return out;
            }
            
            //var warning = document.getElementById("warning");
            function elemLoop(e) {
              var stage = Math.floor(4*Math.random());
            
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
                  e.style.backgroundColor = "#ffff" + stringify(color);
                  e.style.color = "#0000" + stringify(255-color);
                  
                  stage++;
                  stage %= 4;
              }, 10);
            }
            
            var checked = [];
            var check = [".kix-page-column",
            ".kix-page-header",
            ".kix-page-bottom",
            ".kix-appview-editor",
            "#docs-menubars",
            "#docs-titlebar",
            ".docs-title-inline-rename",
            ".docs-titlebar-buttons",
            ".docs-branding-icon-documents_2020q4",
            ".docs-title-input",
//            ".docs-titlebar-button"
];
            
            elemLoop(document.body);
            
            setInterval(function() {
              for (var s of check)
                for (var e of document.querySelectorAll(s))
                  if (!checked.includes(e)) {
                    elemLoop(e);
                    checked.push(e);
                  }
            }, 100);
        });
