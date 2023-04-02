let terminate = false;

do {
  let userAnswer = prompt("Sebutkan kepanjangan dari nama IB!");
  if (userAnswer.toUpperCase() != "IMPACT BYTE") {
    terminate = false;
  } else {
    alert("Selamat jawaban kamu benar!");
    terminate = true;
    break;
  }
} while ((terminate = true));
