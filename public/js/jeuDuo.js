var posRed = [];
var posBlue = [];


jQuery(function() {
  function range(n) {
    return [...Array(n).keys()]
  }

  function getDamier(n) {
    return range(n).map(function(_, i) {
      return range(n).map(function(_, j) {
        return (i + j) % 2;
      });
    });
  }

  function printDamier(n) {
    var damier = jQuery('#damier');
    getDamier(n).forEach(function(l, i) {
      var line = jQuery('<tr></tr>').appendTo(damier);
      l.forEach(function(c, j) {
        var color = c ? 'white' : 'black';
        line.append('<td class="' + color + '"></td>');
      });
    });
  }

  printDamier(9);
})
