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
  //code for portfolio
  var projects = [
    {
      link: "https://jpimentel45.github.io/Giftastic/",
      img: "assets/images/giftstic.png",
      text: "   Giftastic",
      description: "Blah Blah Blah"
    },
    {
      link: "https://jpimentel45.github.io/TrainSchedule/train",
      img: "assets/images/train.png",
      text: "Train Schedule",
      description: "Blah Blah Blah"
    },
    {
      link: "https://jpimentel45.github.io/TriviaGame/",
      img: "assets/images/trivia.png",
      text: "Trivia Game",
      description: "Blah Blah Blah"
    },
    {
      link: "https://jpimentel45.github.io/Psychic_Game/",
      img: "assets/images/psychic.png",
      text: "Psychic Game",
      description: "Blah Blah Blah"
    }
  ];
  var port = '<div class="wrapper">';
  $("#portfolio").html(port);
  function createProject() {
    $(".wrapper").empty();
    //create array to hold start <option> tags
    var newProjects = [];
    for (var i = 0; i < projects.length; i++) {
      var projectDiv = $("<div id='show'>");
      var newOption = $("<a>");
      var img = $("<img src='' id='portImg'>");
      img.attr("src", projects[i].img);
      var text = $('<p id="txt">');
      text.text(projects[i].text);
      var desc = $("<p id = 'description'>");
      desc.text(projects[i].description);
      newOption.attr("href", projects[i].link); // add [i] here to index element
      // newOption.text(projects[i].text); // add [i] here to index element
      //create div for text, desc
      // append text, desc to that div
      //append to projectDiv after appending newOption, then just leave projectDiv
      //to be pushed to newProjects
      //css use simila to dropdown where txt,desc div is hidden
      //shown on hover, also add on click to toggle on js for phones
      //give each div their own id to be able to target ex div#imgDiv div#hiddenDiv
      //on media query for l phone remove .hide for div#hide and set to show
      var hideDiv = $("<div id='hide'>");
      //try this

      //hideDiv.append(text);
      // hideDiv.append(desc);
      projectDiv.append(img);
      //newOption.append(img);
      newOption.append(text);
      newOption.append(desc);
      hideDiv.append(newOption);
      // newOption.append(text);
      // newOption.append(desc);
      projectDiv.append(img);
      //projectDiv.append(newOption);
      projectDiv.append(hideDiv);
      newProjects.push(projectDiv); // add new option to the array
    }
    //appending=expensive, keep array of elements and then use .html to add array to <select>
    $(".wrapper").html(newProjects); // once loop is complete, add the array of elements to the DOM
  }
  createProject();
  //only toggles first pctures hide div not on others
  $("#show").click(function() {
    $("#hide").toggle();
  });

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
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen allowsInlineMediaPlayback="TRUE"></iframe>
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
