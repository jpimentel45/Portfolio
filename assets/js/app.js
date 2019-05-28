$(document).ready(function() {
  $(".container").hide();
  $("#welcome").show();
  //for phone add an on click event for .dropdown, and pust display:show for .dropdown-content
  $(".dropdown").click(function() {
    $(".dropdown-content").toggle();
  });
  //click events for dropdown content
  $(".dropdown-content").click(function(e) {
    $(".container").hide();
    show: $(`#${e.target.dataset.targetid}`).show();
  });

  //code for portfolio
  var projects = [
    {
      link:
        "https://github.com/jpimentel45/liri-node-app/blob/master/README.md",
      img: "assets/images/liri.png",
      text: "LIRI",
      description: "Utilized  Node.js, OMBD API, Bandsintown API, Spotify API",
      git: "Github",
      hub: "https://github.com/jpimentel45/liri-node-app/blob/master/README.md"
    },
    {
      link: "https://krekorian.github.io/LAsafeParking/login.html",
      img: "assets/images/safe.png",
      text: "SafeStay",
      description:
        "Utilized  Google Maps Api, Firebase Realtime Database, Weather api",
      git: "Github",
      hub: "https://github.com/krekorian/LAsafeParking"
    },
    {
      link: "https://jpimentel45.github.io/Giftastic/",
      img: "assets/images/giftstic.png",
      text: "Giftastic",
      description:
        "Utilized Giphy Api to append gifs based on topics created by user",
      git: "Github",
      hub: "https://github.com/jpimentel45/Giftastic"
    },
    {
      link: "https://jpimentel45.github.io/TrainSchedule/train",
      img: "assets/images/train.png",
      text: "Train Schedule",
      description: "Utilized firebase to store, and append data to html",
      git: "Github",
      hub: "https://github.com/jpimentel45/TrainSchedule"
    },
    {
      link: "https://jpimentel45.github.io/TriviaGame/",
      img: "assets/images/trivia.png",
      text: "Trivia Game",
      description: "Random trivia question, with timer, and answer count",
      git: "Github",
      hub: "https://github.com/jpimentel45/TriviaGame"
    },
    {
      link: "https://jpimentel45.github.io/Psychic_Game/",
      img: "assets/images/psychic.png",
      text: "Psychic Game",
      description: "Simple guess game base on user keypress",
      git: "Github",
      hub: "https://github.com/jpimentel45/Psychic_Game"
    }
  ];
  var port = '<div class="wrapper">';
  $("#portfolio").html(port);
  function createProject() {
    $(".wrapper").empty();
    //create array to hold start div tags
    var newProjects = [];
    for (var i = 0; i < projects.length; i++) {
      var projectDiv = $("<div class='show'>");
      var newOption = $("<a>");
      newOption.attr("href", projects[i].link); // add [i] here to index element
      var img = $("<img src='' id='portImg'>");
      img.attr("src", projects[i].img);
      var text = $('<p id="txt">');
      text.text(projects[i].text);
      var desc = $("<p id = 'description'>");
      desc.text(projects[i].description);
      var hideDiv = $("<div class='hide'>");
      var git = $("<p id='txt'>");
      git.text(projects[i].git);
      var hub = $("<a>");
      hub.attr("href", projects[i].hub);
      hub.append(git);
      projectDiv.append(img);
      newOption.append(text);
      hideDiv.append(newOption);
      hideDiv.append(desc);
      hideDiv.append(hub);
      projectDiv.append(img);
      projectDiv.append(hideDiv);
      newProjects.push(projectDiv); // add new option to the array
    }
    $(".wrapper").html(newProjects); // once loop is complete, add the array of elements to the DOM
  }
  createProject();

  // Get the parent DIV, add click listener...
  $(".hide").hide();
  $(".show").on("click mouseleave", function(e) {
    $(".hide").toggle();
  });

  //code for yubez
  //personal api key
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
  var contact = [
    {
      link: "https://github.com/jpimentel45",
      id: "github"
    },
    {
      link: "https://www.linkedin.com/in/1ito/",
      id: "in"
    },
    {
      link:
        "https://drive.google.com/file/d/1nhKmPkZxP72VWy3KJN7LiQRd8SdNvVth/view?usp=sharing",
      id: "ressy"
    },
    {
      link: "tel:3235924139",
      id: "cell"
    },
    {
      link: "mailto:jpimentel45@gmail.com",
      id: "mail"
    }
  ];
  function createButtons() {
    //prevent duplicate buttons
    $("#cont").empty();
    for (var i = 0; i < contact.length; i++) {
      //new element for button to be created
      var a = $("<a href=''>");
      a.attr("href", contact[i].link);
      var newButton = $("<button>");
      a.append(newButton);
      //give button id of contact
      newButton.attr("id", contact[i].id);
      $("#cont").append(a);
    }
  }

  createButtons();
});
