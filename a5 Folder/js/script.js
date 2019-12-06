var photos = [
  { Image: '1.jpg', Date: '12/3/2019', About: 'This is Beauty' },
  { Image: '2.jpg', Date: '12/3/2019', About: 'This is Big City Dreams' },
  { Image: '3.jpg', Date: '12/3/2019', About: 'This is Concrete Paradise' },
  { Image: '4.jpg', Date: '12/3/2019', About: 'This is Hydrant' },
  { Image: '5.jpg', Date: '12/3/2019', About: 'This Is Lights@NYC' },
  { Image: '6.jpg', Date: '12/3/2019', About: 'This Is Mood City' }
];


$(function(){
    // prepare own custom templates
    $.template('simplePhotos', '<a tabindex="1"><img src="images/${Image}"></a>');

    $.template('simpleArticles', '<div class="sim"><img src="images/${Image}"><div><p></p><p>Reveal More Details</p></div></div>');
    $.template('extendedArticles', '<div class="ext"><img src="images/${Image}"><div><p>${Date}</p><p>${About}</p></div></div>');

    var selectedItem = null;

    // render Photos and Articles through prepared templates
    $.tmpl('simplePhotos', photos).appendTo('#gallery');
    $('<span class="close"></span>').appendTo('#gallery');

    $.tmpl('simpleArticles', photos ).appendTo('#articles');

    // onclick handling
    $('#articles').delegate('.sim', 'click', function () {
      if (selectedItem) {
        // render via Simple template
        selectedItem.tmpl = $.template('simpleArticles');
        selectedItem.update();
      }

      selectedItem = $.tmplItem(this);

      // render via Extended template
      selectedItem.tmpl = $.template('extendedArticles');
      selectedItem.update();
    }).delegate( '.ext', 'click', function () {
      // render via Simple template 
      selectedItem.tmpl = $.template('simpleArticles');
      selectedItem.update();

      selectedItem = null;
    });
});

function myFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "You'll Rule The Word":"Take Over";
  document.getElementById("demo").innerHTML = voteable + " And Be King.";
}

function mouseEnter() {
  document.getElementById("demo").style.color = "red";
}

function mouseLeave() {
  document.getElementById("demo").style.color = "black";
}

$(document).ready(function(){
  $("p").mouseover(function(){
    $("p").css("background-color", "lightblue");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color", "lightgray");
  });
});