function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    x.className += ' responsive';
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}