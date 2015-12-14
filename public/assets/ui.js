$(function() {
  $('#menuLink').on('click', function(e) {
    $('#layout').toggleClass('active');
    $('#menu').toggleClass('active');
    $(this).toggleClass('active');

    return false;
  });

  $('#countries, #sources, #sdn-type').select2();
});
