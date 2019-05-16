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
      var projectDiv = $("<div class='show'>");
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
      var hideDiv = $("<div class='hide'>");
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

  // Get the parent DIV, add click listener...
  $(".hide").hide();
  $(".show").on("click hover", function(e) {
    $(".hide").toggle();
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
  // Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
    apiKey: "AIzaSyDvUNJYxex9F51NFRGlrjEVDUiPgAUN7xM",
    authDomain: "juanitos-portfolio.firebaseapp.com",
    databaseURL: "https://juanitos-portfolio.firebaseio.com",
    projectId: "juanitos-portfolio",
    storageBucket: "juanitos-portfolio.appspot.com",
    messagingSenderId: "911587062246",
    appId: "1:911587062246:web:7dc445839eb0e700"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref("messages");

  // Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();
  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
});
