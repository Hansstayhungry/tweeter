/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(document).ready(function() {

  // prevent default behaviour of submit event (no refresh after submission)
  $("#tweet-form").on("submit", function(event){
    event.preventDefault();

    //input validation
    const notTrimmedtweetContent = $("#tweet-text").val()
    const tweetContent = $("#tweet-text").val().trim();

    if(!tweetContent) {
      alert("You can not post empty tweet");
      $("#tweet-text").val("");
      // clear textarea text:
    } else if (notTrimmedtweetContent.length > 140) {
      alert("Please reduce post under 140 characters")
    } else {
      submitTweet();
      $("#tweet-text").val("");
    }
  });

  const submitTweet = function() {
    //serialized form data
    const formData = $("#tweet-form").serialize();

    // use ajax to post data
    $.ajax({
      method:"POST",
      url: "/tweets",
      data: formData,
      success: (res) => {
        // clear existing tweets
        $("#tweets-container").empty();

        loadtweets();

        //reset counter to 140 without refresh
        $(".counter").text("140");
      }
    })
  };


  // fetch tweets
  const loadtweets = function() {
    $.ajax({
      method:"GET",
      url: "/tweets",
      success: (data) => {
        renderTweets(data)
      }
    })
  }

  // loop through all tweets and append, then send to id=tweets-containter
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  };

  // generate jquery format template

  // use escape function to avoid cross site scripting (attack)
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweetData) {

    // use escape on user input data:
    const escapedText = escape(tweetData.content.text); 
  
    const $tweet = $(`
      <article class="tweet">
        <section class="tweet-header">
          <div>
            <img src="${tweetData.user.avatars}">
            <p id="name">${tweetData.user.name}</p>
          </div>
          <div>
            <p id="handle">${tweetData.user.handle}</p>
          </div>
        </section>
        <p class="content">${escapedText}</p>
        <footer class="tweet-footer">
          <div id="daysAgo">${timeago.format(tweetData.created_at)}</div>
          <form id="flag-retweet-heart">
            <button class="fa-solid fa-flag" type="submit"></button>
            <button class="fa-solid fa-retweet" type="submit"></button>
            <button class="fa-solid fa-heart" type="submit"></button>
          </form>
        </footer>
      </article>
    `);

    return $tweet;
  }

  loadtweets();
});