function navigateTo(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function checkAnswer(questionId) {
  //quiz. Assisted by ChatGPT3.5 OpenAI
  var correctAnswers = {
    //set correct answers
    question1: "B",
    question2: "C",
    question3: "A",
  };
  var selectedAnswer = document.querySelector(
    'input[name="answer' + questionId.substr(-1) + '"]:checked'
  );
  var result = document.getElementById("result_" + questionId);
  if (selectedAnswer) {
    if (selectedAnswer.value === correctAnswers[questionId]) {
      result.textContent = "Correct!"; // if correct, display"correct!"
      result.classList.remove("text-danger");
      result.classList.add("text-success");
    } else {
      result.textContent = "Wrong answer! Please try again."; // notification for wrong answer
      result.classList.remove("text-success");
      result.classList.add("text-danger");
    }
  } else {
    result.textContent = "Please select an answer!"; // notification when user didn't input answer
    result.classList.remove("text-success", "text-danger");
  }
}
const boxes = document.querySelectorAll(".box");

// AJAX
$(document).ready(function () {
  $("#getCuteDogs").click(function () {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random", // the url you want to access
      type: "GET", // get data from server
      headers: {
        Accept: "application/json", // Ensures you get a JSON response
      },
      success: function (response) {
        // Check if the response status is 'success'
        if (response.status === "success") {
          // Create an image element with the URL from the response
          var img = $("<img>", { src: response.message, alt: "Dog Image" });
          // Empty the div with class 'cat-image' and append the new image
          $(".dog-image").empty().append(img);
        } else {
          // Handle the case where the status is not 'success'
          console.error("Failed to load image:", response);
        }
      },
      error: function (xhr, status, error) {
        // Handle any errors here
        console.error(error);
      },
    });
  });
});
