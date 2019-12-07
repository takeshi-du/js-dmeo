window.addEventListener('load', function() {
  // ------------------------------------
  // drawer
  // ------------------------------------
  var btnDrawer = document.querySelectorAll('[data-toggle="drawer"]');
  // overlay event
  for (var i = 0, len = btnDrawer.length; i < len; i++) {
    btnDrawer[i].addEventListener('click', function(event) {
      // prevent link
      event.preventDefault();
      // set Target
      var drawerTarget = document.getElementById(event.target.getAttribute('data-target'));
      // when null
      if (!drawerTarget) return;
      // toggle Class on Target
      drawerTarget.classList.toggle('drawer-active');
      // toggle Class on body tag
      document.body.classList.toggle('is-overlay');
    });
  }
});