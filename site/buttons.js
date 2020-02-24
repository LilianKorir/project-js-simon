/*$('.simon-button.one').on('click', function () {
  alert('You clicked the one button');
});
$(document).ready(function () {
  $(".simon-container").on('click', function () {
    $(this).css("background-color", "three");
  }, function () {
    $(this).css("background-color", "pink");
  });
});


$('.simon-button.four').on('click', function () {
  alert('You clicked the four button');
});

$('.simon-button.three').on('click', function () {
  alert('You clicked the three button');
});

$('.simon-button.two').on('click', function () {
  alert('You clicked the two button');
});*/

var random = [];
var litID = [];
var lit;
var clicked = [];
var i;
var j = 0;
var count =1;
var on;
var off;
//var strict;
var x;

function change1(){
  if(count <= 10){
    off = 400;
    on = 800;

  }

  else {
    off =250;
    on =500;
  }

    x = setInterval(function() {
    if (random[j] == 1) {
      lit = 'light1';
      $('#one').addClass(lit);
      //$('#audio1')[0].play();
      litID.push(1);

      setTimeout(function () {
      $('#one').removeClass(lit);
      },off);

    }
    else if (random[j] == 2){
      lit = 'light2';
      $('#two').addClass(lit);
      //$('#audio2')[0].play();
      litID.push(2);

      setTimeout(function () {
       $('#two').removeClass(lit);
       },off);

      }
      else if (random[j] == 3) {

        lit = 'light3';
        $('#three').addClass(lit);
        //$('#audio3')[0].play();
        litID.push(3);


        setTimeout(function () {

        $('#three').removeClass(lit);

        }, off);
      }

      else {

          lit = 'light4';
          $('#four').addClass(lit);
          //$('#audio4')[0].play();
          litID.push(4);


          setTimeout(function () {

              $('#four').removeClass(lit);

          }, off);
      }
      j++;
      if (j>=count) {
        clearInterval(x);
    }

    }, on);
  }

  function checking(){
    if (litID.length == clicked.length) {

    if (litID.join() == clicked.join()) {
      if (count == 25) {

        setTimeout(function () {
            alert("You win!");
            location.reload();
        }, 1000);
    }

     else {
       setTimeout(function () {
        $('#count').text(count + 1);
        count++;
        litID = [];
        clicked = [];
        j = 0;
        change1();
      },1000);
    }
  }
  else {
    setTimeout(function () {
      $('#count').text('!!');

      litID = [];
      clicked = [];
      j = 0;
      change1();
  }, 1000);

  }

}
}
// switch on
$('#on').on('click', function () {
  $('#count').text();

  for (i=0; i<20; i++) {
  random[i] = Math.ceil((Math.random() * 4));
  };
// start
  $('#start').on('click', function () {

    $('#count').text(count);

    change1();
  });
  // user play
  $('#one').on('click', function () {
  $('#one').addClass('light1');


  clicked.push(1);

  setTimeout(function () {
      $('#one').removeClass('light1');

  }, 250);

  checking();

  });

$('#two').on('click', function () {

  $('#two').addClass('light2');


  clicked.push(2);

  setTimeout(function () {
      $('#two').removeClass('light2');

  }, 250);

  checking();

});

$('#three').on('click', function () {

  $('#three').addClass('light3');


  clicked.push(3);

  setTimeout(function () {
      $('#three').removeClass('light3');

  }, 250);

  checking();

});

$('#four').on('click', function () {

  $('#four').addClass('light4');


  clicked.push(4);

  setTimeout(function () {
      $('#four').removeClass('light4');

  }, 250);

  checking();

});

});
