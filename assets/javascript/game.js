  // Array of default topics upon page load //
  var topics = ["World Hunger", "Clean Water", "Poverty", 
  "Helping Hand", "Giving", "Love", "Gratitude", "Smile", "Hugs", 
  "Commitment", "Change This World", "Make A Difference"];

  // Event listener for all button elements //
  $("#new-topic").on("click", function(event) {

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

        // For loop to help display topics as buttons //
        for (var i = 0; i < topics.length; i++) {
        var 

        }
      });
  });