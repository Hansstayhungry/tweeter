const getDaysAgo = function(tweet) {
  const currentDate = new Date();
  const createdAt = new Date(tweet.created_at);
  const timeDiff = currentDate - createdAt;
  const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Milliseconds to days conversion

  return daysAgo;
};