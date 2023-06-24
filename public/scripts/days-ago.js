function getDaysAgo(eventDate) {
  var currentDate = new Date();
  var timeDiff = currentDate.getTime() - eventDate.getTime();
  var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Milliseconds to days conversion

  return daysDiff;
}

// Example usage:
var eventDate = new Date("2023-06-15"); // Date of the event
var daysAgo = getDaysAgo(eventDate);
