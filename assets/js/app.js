$(document).ready(function() {
  //once app fully coded, and customized, hide all containers
  //display a container containing welcome message or something cool
  //once they select options on nav bar ".on click listener", show the appropriate container
  $(".container").hide();

  $("#welcome").show();
  //for phone add an on click event for .dropdown, and pust display:show for .dropdown-content
  $(".dropdown").click(function() {
    $(".dropdown-content").toggle();
  });
  // add click event for .dropdown-content
  //click for #wel
  $("#wel").click(function() {
    $(".container").hide();
    show: $("#welcome").show();
  });
  // if #me clicked hide: $(".container").hide();, main page we'll implement later, and show: $("#aboutMe").show();
  $("#me").click(function() {
    $(".container").hide();
    show: $("#aboutMe").show();
  });
  // else if #port clicked hide: $(".container").hide();, main page we'll implement later, and show: $("#portfolio").show();
  $("#port").click(function() {
    $(".container").hide();
    show: $("#portfolio").show();
  });
  //else if youtube clicked
  $("#yubby").click(function() {
    $(".container").hide();
    show: $("#tubez").show();
  });
  // else if #contact clicked hide: $(".container").hide();, main page we'll implement later, and show: $("#contact").show();
  $("#contact").click(function() {
    $(".container").hide();
    show: $("#cont").show();
  });

  var projects = [
    {
      link: "https://jpimentel45.github.io/Giftastic/",
      img: "assets/images/flag.gif",
      text: "   Giftastic"
    },
    {
      link: "https://jpimentel45.github.io/TrainSchedule/train",
      img: "assets/images/juanito.jpg",
      text: "Train Schedule"
    },
    {
      link: "https://jpimentel45.github.io/TriviaGame/",
      img: "assets/images/juanito.jpg",
      text: "Trivia Game"
    }
  ];
  var port = '<div class="wrapper">';
  $("#portfolio").html(port);
  function createProject() {
    $(".wrapper").empty();
    //create array to hold start <option> tags
    var newProjects = [];
    for (var i = 0; i < projects.length; i++) {
      var newOption = $("<a>");
      var img = $("<img src='' id='portImg'>");
      img.attr("src", projects[i].img);
      var text = $('<p id="txt">');
      text.text(projects[i].text);
      newOption.attr("href", projects[i].link); // add [i] here to index element
      // newOption.text(projects[i].text); // add [i] here to index element
      newOption.append(text);
      newOption.append(img);
      newProjects.push(newOption); // add new option to the array
    }
    //appending=expensive, keep array of elements and then use .html to add array to <select>
    $(".wrapper").html(newProjects); // once loop is complete, add the array of elements to the DOM
  }
  createProject();
  //code for portfolio
  //create a div containing image, link, and description about project

  //code for welcome
  var key = "AIzaSyBKWuAXHLyKPwd7Hi-UrN_tN2pK-Da_suQ";
  var playlistId = "PLvDeMMtitSeveZ0CgBKZR9quXkKfukoHm";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";

  var options = {
    part: "snippet",
    key: key,
    maxResults: 20,
    playlistId: playlistId
  };
  loadVids();
  function loadVids() {
    $.getJSON(URL, options, function(data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }
  function mainVid(id) {
    $("#video").html(`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `);
  }
  function resultsLoop(data) {
    $.each(data.items, function(i, item) {
      //thumbnail
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      //description
      var desc = item.snippet.description.substring(0, 100);
      //store id of vid
      var vid = item.snippet.resourceId.videoId;

      $("main").append(`
        <article class="item" data-key="${vid}">
          <img src="${thumb}" alt="" class="thumb">
          <div class="details">
            <h4 class='tubs'>${title}</h4>
            <p class='tubs grey'>${desc}</p>
          </div>
        </article>
      `);
    });
  }
  // CLICK EVENT on article will take data-key of article clicked pasted to {id} on iframe src
  $("main").on("click", "article", function() {
    var id = $(this).attr("data-key");
    mainVid(id);
  });

  //contact form
});
