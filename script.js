// selected all html id
const textArea = document.getElementById("textarea");
const select = document.getElementById("select");
const listenBtn = document.getElementById("submitBtn");
const speech = new SpeechSynthesisUtterance();

listenBtn.addEventListener("click", function () {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

let voices = [];

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  speech.volume = 0.5;

  voices.forEach(function (voice, i) {
    select.options[i] = new Option(voice.name, i);
  });
};

select.addEventListener("change", function () {
  speech.voice = voices[select.value];
});
