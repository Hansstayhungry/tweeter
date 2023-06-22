$(document).ready(function() {
  
  let counter = $(".counter");
  let initialValue = parseInt(counter.text());
  $("#tweet-text").on("input keyup", function() {
    // count tweet length
    let textareaValue = $(this).val();
    console.log("textarea value:", textareaValue.length);

    //get initial value from counter
    let remainLimit = initialValue - textareaValue.length;
    // update counter
    $(".counter").text(remainLimit);

    //counter turns to red if over the limit
    if (remainLimit < 0) {
      counter.addClass("negativeColor");
    } else {
      counter.removeClass("negativeColor");
    }
  });
  // --- our code goes here ---
});