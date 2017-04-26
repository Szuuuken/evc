$(function () {
    $('#sidebar-burger-menu');
    $('#sidebar-burger-menu').on('click', function () {
      $('.sidebar').toggleClass('sidebar-show');
    });
});