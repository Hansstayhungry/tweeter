/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // loop through all tweets and append, then send to id=tweets-containter
  const renderTweets = function(tweets) {
    let $allTweets = "";
    for (let tweet of tweets) {
      $allTweets += createTweetElement(tweet);
    }
    $("#tweets-container").append($allTweets);
  }

  // generate jquery format template
  function createTweetElement(tweetData) {
    const $tweet = `
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
        <p class="content">${tweetData.content.text}</p>
        <footer class="tweet-footer">
          <div id="daysAgo">${tweetData.created_at} days ago</div>
          <form id="flag-retweet-heart">
            <button class="fa-solid fa-flag" type="submit"></button>
            <button class="fa-solid fa-retweet" type="submit"></button>
            <button class="fa-solid fa-heart" type="submit"></button>
          </form>
        </footer>
      </article>
    `;

    return $tweet;
  }

  renderTweets(data);
});