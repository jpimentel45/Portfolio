$(document).ready(function() {
  //once app fully coded, and customized, hide all containers
  //display a container containing welcome message or something cool
  //once they select options on nav bar ".on click listener", show the appropriate container
  $(".container").hide();
  //$("#aboutMe").show();
  //for phone add an on click event for .dropdown, and pust display:show for .dropdown-content
  $(".dropdown").click(function() {
    $(".dropdown-content").toggle();
  });
  // add click event for .dropdown-content
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
  // else if #contact clicked hide: $(".container").hide();, main page we'll implement later, and show: $("#contact").show();
  $("#contact").click(function() {
    $(".container").hide();
    show: $("#cont").show();
  });

  var projects = [
    {
      link: "",
      img: "",
      text: "Project 1"
    },
    {
      link: "ucla los angeles, ca ",
      img: "",
      text: "UCLA"
    },
    {
      link: "100 Universal City Plaza, Universal City, CA 91608",
      img: "",
      text: "Studio City"
    },
    {
      link: "200 Santa Monica Pier, Santa Monica, CA 90401",
      img: "",
      text: "Santa Monica"
    },
    {
      link: "6925 Hollywood Blvd, Hollywood, CA 90028",
      img: "",
      text: "Hollywood"
    },
    {
      link: "3835 Cross Creek Rd, Malibu, CA 90265",
      img: "",
      text: "Malibu"
    },
    {
      link: "231 S Grevillea Ave, Inglewood, CA 90301",
      img: "",
      text: "Inglewood"
    },
    {
      link: "7850 Melrose Ave, Los Angeles, CA 90046",
      img: "",
      text: "Fairfax"
    }
  ];

  //code for aboutMe
  //create a div containing your image, and paragraph description about yourself
});
