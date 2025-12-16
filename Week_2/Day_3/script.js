const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Close all answers
    document.querySelectorAll(".answer").forEach((item) => {
      if (item !== answer) {
        item.style.display = "none";
      }
    });

    // Toggle clicked answer
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
