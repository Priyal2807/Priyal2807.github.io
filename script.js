$(document).ready(function() {

  //Section for typewriting begins
  $('[data-toggle="tooltip"]').tooltip();
  $(".typewriter").find("p").css('display', 'none');
  $(".typewriter").find("p")
    .delay(3000)
    .queue(function(next) {
      $(this).css({
        "display": "block",
        "overflow": "hidden",
        "border-right": ".15em solid black",
        "white-space": "nowrap",
        "margin": "0 auto",
        "letter-spacing": ".15em",
        "animation": "typing 3.5s steps(40, end),caret .75s step-end infinite"
      });
      next();
    });
  $(".typewriter").children().one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
    $(this).css({
      "animation": "none",
      "border": "none"
    });
  });
  //section for typewriting ends


  //animation for background
  var i,
    time = 6,
    t, j = 0,
    p = 0;


  for (p = 0; p < 70; p++) {
    $(".wrapper").append("<div id ='" + j + "'> </div>");
    var curr = document.getElementById(j);
    t = time + p * 2;
    $(curr).css({
      "top": (Math.random() * 100) + '%',
      "left": (Math.random() * 100) + '%',
      "animation": "animate " + t + "s linear infinite"
    });
    j = j + 1;
  }
  var color = ['#3498DB', '#F1C40F', '#AF7AC5', '#1E8449', '#26C6DA', '#CCFF33', '#00CCCC', '#003399', '#003399', '#33FFFF'];
  var i = 0;
  $('.wrapper').find('div').on('click', function() {
    i = Math.floor((Math.random() * 10) + 1);
    $(this).css('background-color', color[i]);
  });
  //animation ends for background

  //section for cloning iconbox in each div
  function cloneIconBox() {
    iconsBox.css('display', 'block');
    iconsBox.appendTo("#skillBox");
    iconBox2.appendTo('#contactBox');
    iconBox3.appendTo('#projectBox');
    iconBox4.appendTo('#AboutMe');
    $('.proj[title]').tooltip();
    $('.skills[title]').tooltip();
    $('.home[title]').tooltip();
    $('.cd[title]').tooltip();
    $('.abtme[title]').tooltip();
  }
  //section ends for cloning iconbox

  //section for checking the clicked box begins
  function checkDetailBox(thisObj) {
    if (thisObj.parent().parent().get(0).id === 'detailsBox') {
      $("#detailsBox").fadeTo(150, 0);
      $("#detailsBox").css('display', 'none');
    }
  }

  function checkProjectBox(thisObj) {
    if (thisObj.parent().parent().get(0).id === 'projectBox') {
      $('#projectBox').fadeTo(150, 0);
      $('#projectBox').css('display', 'none');
    }
  }

  function checkSkillBox(thisObj) {
    if (thisObj.parent().parent().get(0).id === 'skillBox') {
      $('#skillBox').fadeTo(150, 0);
      $("#skillBox").css('display', 'none');
    }
  }

  function checkContactBox(thisObj) {
    if (thisObj.parent().parent().get(0).id === 'contactBox') {
      $('#contactBox').fadeTo(150, 0);
      $("#contactBox").css('display', 'none');
    }
  }

  function checkAboutBox(thisObj) {
    if (thisObj.parent().parent().get(0).id === 'AboutMe') {
      $('#AboutMe').fadeTo(150, 0);
      $('#AboutMe').css('display', 'none');
    }
  }
  //section for checking the clicked box ends


  var iconsBox = $('.mainBoxIcons').clone();
  var iconBox2 = $('.mainBoxIcons').clone();
  var iconBox3 = $('.mainBoxIcons').clone();
  var iconBox4 = $('.mainBoxIcons').clone();
  //section for replacing div on clicking begins
  //skills icon clicked
  $('body').on('click', '.skills', function() {
    checkDetailBox($(this));
    checkContactBox($(this));
    checkProjectBox($(this));
    checkAboutBox($(this));
    $("#skillBox").fadeTo(800, 1);
    cloneIconBox();
  });

  //contact icon clicked
  $('body').on('click', '.cd', function() {
    checkSkillBox($(this));
    checkDetailBox($(this));
    checkProjectBox($(this));
    checkAboutBox($(this));
    $("#contactBox").fadeTo(800, 1);
    cloneIconBox();
  });

  //project icon clicked
  $('body').on('click', '.proj', function() {
    checkSkillBox($(this));
    checkDetailBox($(this));
    checkContactBox($(this));
    checkAboutBox($(this));
    $("#projectBox").fadeTo(800, 1);
    cloneIconBox();
  });

  //about Me section clicked
  $('body').on('click', '.abtme', function() {
    checkSkillBox($(this));
    checkDetailBox($(this));
    checkContactBox($(this));
    checkProjectBox($(this));
    $("#AboutMe").fadeTo(800, 1);
    cloneIconBox();
  })
  // section for replacing div on clicking ends


  //section for skills circles svg begins
  var circle = document.querySelector('circle');
  var circle2 = document.getElementById('circleCSS');
  var circle3 = document.getElementById('circlejava');
  var circle4 = document.getElementById('circleJS');
  var circle5 = document.getElementById('circlemgb');
  var circle6 = document.getElementById('circlenodeJS');
  var circle7 = document.getElementById('circlec');
  var circle8 = document.getElementById('circlePy');
  var circle9 = document.getElementById('circleAz');
  var circumference = 20 * 2 * Math.PI;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;
  circle2.style.strokeDasharray = `${circumference} ${circumference}`;
  circle2.style.strokeDashoffset = `${circumference}`;
  circle3.style.strokeDasharray = `${circumference} ${circumference}`;
  circle3.style.strokeDashoffset = `${circumference}`;
  circle4.style.strokeDasharray = `${circumference} ${circumference}`;
  circle4.style.strokeDashoffset = `${circumference}`;
  circle5.style.strokeDasharray = `${circumference} ${circumference}`;
  circle5.style.strokeDashoffset = `${circumference}`;
  circle6.style.strokeDasharray = `${circumference} ${circumference}`;
  circle6.style.strokeDashoffset = `${circumference}`;
  circle7.style.strokeDasharray = `${circumference} ${circumference}`;
  circle7.style.strokeDashoffset = `${circumference}`;
  circle8.style.strokeDasharray = `${circumference} ${circumference}`;
  circle8.style.strokeDashoffset = `${circumference}`;
  circle9.style.strokeDasharray = `${circumference} ${circumference}`;
  circle9.style.strokeDashoffset = `${circumference}`;

  circle.style.strokeDashoffset = circumference - 60 / 100 * circumference;
  circle2.style.strokeDashoffset = circumference - 67 / 100 * circumference;
  circle3.style.strokeDashoffset = circumference - 65 / 100 * circumference;
  circle4.style.strokeDashoffset = circumference - 64 / 100 * circumference;
  circle5.style.strokeDashoffset = circumference - 35 / 100 * circumference;
  circle6.style.strokeDashoffset = circumference - 35 / 100 * circumference;
  circle7.style.strokeDashoffset = circumference - 65 / 100 * circumference;
  circle8.style.strokeDashoffset = circumference - 52 / 100 * circumference;
  circle9.style.strokeDashoffset = circumference - 45 / 100 * circumference;

  //section for skills svg circle ends

});
