
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

//section for adding the circumference in the skills circle

var array_for_circles = ["circle", 'circleCSS', 'circlejava', 'circleJS', 'circlemgb', 'circlenodeJS', 'circlec', 'circlePy', 'circleAz']
var cir = 0;
var circumference = 20 * 2 * Math.PI;

var cir_array = {}
for (cir = 0; cir < array_for_circles.length; cir++) {
    var circle_name = array_for_circles[cir];
    if (cir === 0)
        cir_array[cir] = document.querySelector(circle_name); /*have to check why I used query selector*/
    else
        cir_array[cir] = document.getElementById(circle_name);
    cir_array[cir].style.strokeDasharray = `${circumference} ${circumference}`;
    cir_array[cir].style.strokeDashoffset = `${circumference}`;
    if (array_for_circles[cir] === 'circlemgb' || array_for_circles[cir] === 'circlenodeJS' || array_for_circles[cir] === 'circlePy')
        cir_array[cir].style.strokeDashoffset = circumference - 35 / 100 * circumference;
    if (array_for_circles[cir] === 'circleCSS' || array_for_circles[cir] === 'circlejava' || array_for_circles[cir] === 'circleJS' || array_for_circles[cir] === 'circlec' || array_for_circles[cir] === 'circleAz')
        cir_array[cir].style.strokeDashoffset = circumference - 65 / 100 * circumference;
    if (array_for_circles[cir] === 'circle')
        cir_array[cir].style.strokeDashoffset = circumference - 60 / 100 * circumference;
}

 

