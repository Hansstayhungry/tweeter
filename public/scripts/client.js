/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
  function createTweetElement(tweetData) {
    const markup = `
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
          <div id="daysAgo">days ago</div>
          <form id="flag-retweet-heart">
            <button class="fa-solid fa-flag" type="submit"></button>
            <button class="fa-solid fa-retweet" type="submit"></button>
            <button class="fa-solid fa-heart" type="submit"></button>
          </form>
        </footer>
      </article>
    `;

    return markup;
  }


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});