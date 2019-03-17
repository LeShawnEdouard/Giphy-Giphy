  // Array of default topics upon page load //
  var topics = ["World Hunger", "Clean Water", "Poverty", 
  "Helping Hand", "Giving", "Love", "Gratitude", "Smile", "Hugs", 
  "Commitment", "Change This World", "Make A Difference"];

  // Event listener for all button elements //
  $("button").on("click", function(event) {

    var topics = $(this).attr([i]);

    event.preventDefault();

    var inputArtist = $("new-topic").val().trim();

    // Constructing a URL to search Giphy for the topics in the array //
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topics + "&api_key=HT501ZY2B0nY6zop9KdkAUZjCPQmpWJ0=10";
       
    // Ajax call that will return a promise //
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After the data comes back from the API //
      .then(function(response) {

        var results = response.data

        // For loop to help display topics as buttons //
        for (var i = 0; i < topics.length; i++) {
        
          // Will only take gifs that has appropriate rating //
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            // Creating a div for the gifs //
            var gifDiv = $("<div>");

            // Storing the results topic's rating //
            var rating = results[i].rating;

            // Creating a paragraph tag with the result topic's rating //
            var p = $("<p>").text("Rating:" + rating);

            // Creating an image tag //
            var topicImage = $("<img>");

            // Giving image tag a src attribute of a property pulled off the
            // result item
            topicImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and topicImage we created to the "gifDiv"
            // div we created
            gifDiv.append(p);
            gifDiv.append(personImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML //
            $("#gifs-appear-here").prepend(gifDiv);
          }
        }
    });
  });