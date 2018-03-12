(function() {
  var anim = function(e) {
    var pretag = document.getElementById('d');
    var mx = e.clientX / window.innerWidth;
    var my = e.clientY / window.innerHeight;
    var s = " .,-~:;=!*#$@";
    var cols = 215;
    var rows = 65;
    var w = 3.7;
    var h = w * (rows / cols) * 1.7;
    var dx = w / cols;
    var dy = h / rows;
    var iter = 100;
    var juliaframe = function() {
      var ca = (mx - 0.5)*3;
      var cb = (my - 0.5)*3;
      var out = [];
      for (var k = 0; k < (cols + 1) * rows; k++) {
        out[k] = k % (cols + 1) == cols ? "\n" : " ";
      }
      var y = -h / 2;
      for (var j = 0; j < rows; j++) {
        var x = -w / 2;
        for (var i = 0; i < cols; i++) {
          var n = 0;
          var a = x;
          var b = y;
          while (n < iter && (a * a + b * b) < 4) {
            at = (a * a) - (b * b) + ca;
            b = 2 * a * b + cb;
            a = at;
            n++;
          }
          if (n == iter) {
            out[i + j * (cols + 1)] = "@";
          } else {
            var br = Math.round((n * 12 / iter));
            out[i + j * (cols + 1)] = s.charAt(br);
          }
          x += dx;
        }
        y += dy;
      }
      pretag.innerHTML = out.join("");
    };
    juliaframe();
  }
  window.addEventListener("mousemove", anim, false);
  window.addEventListener("load", anim, false);
})();
