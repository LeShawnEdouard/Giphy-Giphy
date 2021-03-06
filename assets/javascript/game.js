  
  // Array of default topics upon page load //
  var topics = ["World Hunger", "Clean Water", "Poverty", 
  "Helping Hand", "Giving", "Love", "Gratitude", "Smile", "Hugs", 
  "Commitment", "Change This World", "Make A Difference"];
  

  // Event listener for all button elements //
  $(".container").on("click", "button", function(event) {
    event.preventDefault();
    // Adding a data-topic attribute to the button //
    var topic = $(this).attr("data-topic");
    console.log(topic);
    

    // var inputArtist = $("new-topic").val().trim();

    // Constructing a URL to search Giphy for the topics in the array //    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=HT501ZY2B0nY6zop9KdkAUZjCPQmpWJ0&limit=10";
       
    // Ajax call that will return a promise //
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API //
      .then(function(response) {
          
        // Storing the response into the topics variable //
        var topics = response.data
    
        // For loop to help display topics as buttons //
        for (var i = 0; i < topics.length; i++) {
        
          // Will only take gifs that has appropriate rating //
          if (topics[i].rating !== "r" && topics[i].rating !== "pg-13") {

            // Creating a div for the gifs //
            var gifDiv = $("<div>");

            // Storing the results topic's rating //
            var rating = topics[i].rating;
            console.log(rating);
            // Creating a paragraph tag with the result topic's rating //
            var p = $("<p>").text("Rating:" + topics[i].rating);

            // Creating an image tag //
            var topicImage = $("<img>");

            // Giving image tag a src attribute of a property pulled off the
            // result item
            topicImage.attr("src", topics[i].images.fixed_height.url);
            topicImage.attr("image-still", topics[i].images.fixed_height_still.url);
            topicImage.attr("image-animate", topics[i].images.fixed_height.url);
            topicImage.attr("status-state", "still");
            topicImage.attr("class", "gifs");

            // Appending the paragraph and topicImage we created to the "gifDiv"
            // div we created
            gifDiv.append(p);
            gifDiv.append(topicImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML //
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
    });

    // On click function to toggle the gifs from still to animate //
    $(".row").on("click",".gifs", function(event) {
        console.log(this, 'this before state');
        var state = $(this).attr("status-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("image-animate"));
          $(this).attr("status-state", "image-animate");
        } else {
          $(this).attr("src", $(this).attr("image-still"));
          $(this).attr("status-state", "still");

        }

    })


  });

  $("#form").submit(function (e){
    var newButton = $("#to-do").val()
    console.log(newButton);
    e.preventDefault();
    console.log("this is working");

    var newTopic = $("<button>");
    newTopic.attr("data-topic", newButton);

    newTopic.text(newButton);
    $(".jumbotron").append(newTopic);


})