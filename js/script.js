$(document).ready(function () {
       $('#button').on('click', function () {
           if ($('#wrap').hasClass('out')) {

               $('#wrap').animate({
                   left: '-240px'
               }, 700).removeClass('out');
               $('.uli').delay(700).animate({
                   width: '240px'
               }, 700);
               setTimeout(function () {
                   $(".box-scene").removeClass("hiden");
                   $('li').hide();
               }, 689);
               $("#container-menu-icon").removeClass('iluese');
               $(".line1").removeClass("linedown");
               $(".line3").removeClass("lineup");
           }
           else {
               $('#wrap').animate({
                   left: '0px'
               }, 700).addClass('out');
               $('.uli').animate({
                   width: '300px'
               }, 700);

               setTimeout(function () {
                   $(".box-scene").addClass("hiden");
                   $('li').show();
               }, 689);
               $("#container-menu-icon").addClass('iluese');
               $(".line1").addClass("linedown");
               $(".line3").addClass("lineup");
           }
       });

   });
