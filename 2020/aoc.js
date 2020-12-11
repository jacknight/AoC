function displayAnswer(answer) {
  var calculatingDiv = document.querySelector(".calculating");
  calculatingDiv.remove();

  var answerDiv = document.createElement("div");
  answerDiv.classList = "answer";
  answerDiv.textContent = "Answer: " + answer;
  document.body.appendChild(answerDiv);

  if (answer !== undefined) {
    var answerCopyButton = document.createElement("button");
    answerCopyButton.textContent = "Copy to clipboard";
    answerCopyButton.classList = "answer-button";
    document.querySelector(".answer").appendChild(answerCopyButton);

    answerCopyButton.onclick = function () {
      const el = document.createElement("textarea");
      el.value = answer;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    };
  }
}
