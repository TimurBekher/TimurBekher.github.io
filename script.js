// Определяем возможные ответы
var answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy, try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

// Определяем функцию для генерации случайного ответа
function generateAnswer() {
  var randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

// Определяем функцию для "трясения" шара и показа ответа
function shake() {
  var question = document.getElementById("question").value;
  if (question.length == 0) {
    alert("Please ask a question!");
    return;
  }
  var answer = generateAnswer();
  var answerText = "The Magic 8 Ball says: " + answer;
  document.getElementById("answer").innerHTML = answerText;
}