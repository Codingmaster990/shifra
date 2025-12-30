let mic = document.querySelector(".mic");
let voice = document.querySelector(".voice");
let chg = document.querySelector(".chg");
function speaks(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  speech.rate = 0.95;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
}
function command() {
  // SpeechRecognition object
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();
  // Start recognition
  recognition.start();

  // Result event
  recognition.onresult = function (event) {
    let transcript = event.results[0][0].transcript;
    console.log("You said:", transcript);
    rstcmd(transcript);
  };
}
mic.addEventListener("click", () => {
  mic.style.display = "none";
  voice.style.display = "block";
  command();
});
function rstcmd(msg) {
  voice.style.display = "none";
  mic.style.display = "block";
  chg.innerText = `${msg}`;
  msg = msg.toLowerCase().trim();
  msg = msg.replace("sipra", "");
  msg = msg.replace("sifra", "");
  if (/\b(hi|hii|hey|hay|hello)\b/.test(msg)) {
    speaks("Hello sir, how can I help you?");
  } else if (
    /\b(who are you|tum kon ho|tum kaun ho|tum kun ho|tum koun ho)\b/.test(msg)
  ) {
    speaks(" i am virtual assistant, created by sir Muhammad Zulqarnain");
  } else if (/\b(bona|pune|who is usman)\b/.test(msg)) {
    speaks("usmaan boona heh, gando be heh");
  } else if (/\b(kia hal ha|how are you)\b/.test(msg)) {
    speaks("me teek , tum sunaou boonsry ke");
  } else if (/\b(i am fine|i am fine what about you)\b/.test(msg)) {
    speaks("ye kia baq rahe ho motherchod");
  } else if (msg.includes("open youtube")) {
    speaks("Opening YouTube");
    window.open("https://www.youtube.com", "_blank");
  } else if (msg.includes("open instagram")) {
    speaks("Opening instagram");
    window.open("https://www.instagram.com", "_blank");
  } else if (msg.includes("open facebook")) {
    speaks("Opening facebook");
    window.open("https://www.facebook.com", "_blank");
  } else if (msg.includes("open google")) {
    speaks("Opening google");
    window.open("https://www.google.com", "_blank");
  } else if (msg.includes("open calculator")) {
    speaks("Opening calculator");
    window.open("calculator://");
  } else if (msg.includes("open whatsapp")) {
    speaks("Opening whatsapp");
    window.open("whatsapp://");
  } else if (msg.includes("bye") || msg.includes("by")) {
    speaks(" chal, nikal lowrre");
  } else if (
    msg.includes("open control panel") ||
    msg.includes("open window security") ||
    msg.includes("open window setting") ||
    msg.includes("open setting") ||
    msg.includes("open file manager") ||
    msg.includes("open local disk")
  ) {
    speaks(`i can not open,for security resen`);
  } else {
    let finalText = "This is what I found on the internet regarding " + msg;
    speaks(finalText);
    window.open(`https://www.google.com/search?q=${msg}`, "_blank");
  }
}
