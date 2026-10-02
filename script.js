// ---------- Reading content (add more here!) ----------
// Each item: { emoji, title (optional), text }
// Items go from EASY to HARDER, so the child can grow step by step.
const LEVELS = {
  words: [
    // Short and easy
    { emoji: "🐱", text: "cat" },
    { emoji: "🐶", text: "dog" },
    { emoji: "🌞", text: "sun" },
    { emoji: "🚗", text: "car" },
    { emoji: "🎩", text: "hat" },
    { emoji: "🎒", text: "bag" },
    { emoji: "🖊️", text: "pen" },
    { emoji: "☕", text: "cup" },
    { emoji: "🛏️", text: "bed" },
    { emoji: "🥚", text: "egg" },
    { emoji: "🐷", text: "pig" },
    { emoji: "🐮", text: "cow" },
    { emoji: "🚌", text: "bus" },
    { emoji: "📦", text: "box" },
    { emoji: "🦊", text: "fox" },
    { emoji: "🐝", text: "bee" },
    { emoji: "👁️", text: "eye" },
    { emoji: "👂", text: "ear" },

    // Medium
    { emoji: "🍎", text: "apple" },
    { emoji: "📖", text: "book" },
    { emoji: "🐟", text: "fish" },
    { emoji: "🏠", text: "house" },
    { emoji: "🌳", text: "tree" },
    { emoji: "🐦", text: "bird" },
    { emoji: "🍞", text: "bread" },
    { emoji: "🌙", text: "moon" },
    { emoji: "⭐", text: "star" },
    { emoji: "🥛", text: "milk" },
    { emoji: "🍚", text: "rice" },
    { emoji: "🐸", text: "frog" },
    { emoji: "🦆", text: "duck" },
    { emoji: "🐻", text: "bear" },
    { emoji: "👟", text: "shoe" },
    { emoji: "💧", text: "water" },
    { emoji: "🍪", text: "cookie" },
    { emoji: "🔴", text: "red" },
    { emoji: "🔵", text: "blue" },
    { emoji: "🟢", text: "green" },
    { emoji: "🟡", text: "yellow" },
    { emoji: "🟣", text: "purple" },
    { emoji: "🟠", text: "orange" },

    // Harder
    { emoji: "🍌", text: "banana" },
    { emoji: "🐘", text: "elephant" },
    { emoji: "🦋", text: "butterfly" },
    { emoji: "🌈", text: "rainbow" },
    { emoji: "🌸", text: "flower" },
    { emoji: "✏️", text: "pencil" },
    { emoji: "🏫", text: "school" },
    { emoji: "🧑‍🏫", text: "teacher" },
    { emoji: "👨‍👩‍👧", text: "family" },
    { emoji: "🤝", text: "friend" },
    { emoji: "🐵", text: "monkey" },
    { emoji: "🐢", text: "turtle" },
    { emoji: "🐰", text: "rabbit" },
    { emoji: "🍓", text: "strawberry" },
    { emoji: "🚲", text: "bicycle" },
    { emoji: "✈️", text: "airplane" },
  ],

  sentences: [
    // Short
    { emoji: "🐱", text: "The cat sits on the mat." },
    { emoji: "🐶", text: "I have a big brown dog." },
    { emoji: "🌞", text: "The sun is hot today." },
    { emoji: "🍎", text: "I like to eat a red apple." },
    { emoji: "🐟", text: "The fish can swim." },
    { emoji: "🐸", text: "The frog jumps in the water." },
    { emoji: "🛏️", text: "I go to bed at night." },
    { emoji: "🥛", text: "I drink milk every morning." },
    { emoji: "🐮", text: "The cow says moo." },
    { emoji: "🎒", text: "My bag is on the chair." },

    // Medium
    { emoji: "📖", text: "She reads a book every night." },
    { emoji: "🐦", text: "A little bird sings in the tree." },
    { emoji: "🚗", text: "Dad drives the blue car." },
    { emoji: "🌧️", text: "It is raining, so I need an umbrella." },
    { emoji: "🏫", text: "We go to school on Monday." },
    { emoji: "🧑‍🏫", text: "My teacher is kind and funny." },
    { emoji: "🍞", text: "Mama makes bread for breakfast." },
    { emoji: "🌙", text: "The moon is bright tonight." },
    { emoji: "🐰", text: "The rabbit eats a green carrot." },
    { emoji: "🤝", text: "My friend and I play after class." },
    { emoji: "🌸", text: "The flowers in the garden are pink." },
    { emoji: "⚽", text: "We kick the ball in the park." },

    // Longer
    { emoji: "🦋", text: "The butterfly flies from flower to flower." },
    { emoji: "🐘", text: "The elephant is very big, but it is gentle." },
    { emoji: "🚲", text: "On Saturday, I ride my bicycle with my brother." },
    { emoji: "🌈", text: "After the rain, we saw a beautiful rainbow." },
    { emoji: "🍓", text: "Grandma bought sweet strawberries from the market." },
    { emoji: "👨‍👩‍👧", text: "My family eats dinner together every evening." },
    { emoji: "✈️", text: "The airplane flies high above the clouds." },
    { emoji: "🐢", text: "The turtle walks slowly, but it never gives up." },
  ],

  stories: [
    {
      emoji: "🐶",
      title: "My Dog Max",
      text: "I have a dog. His name is Max. Max is big and brown. He likes to run in the park. I love my dog.",
    },
    {
      emoji: "🌳",
      title: "The Little Bird",
      text: "A little bird lives in a tree. Every morning, she sings a happy song. The children smile and say good morning.",
    },
    {
      emoji: "🍎",
      title: "At the Market",
      text: "Mama and I go to the market. We buy red apples, yellow bananas, and fresh bread. We put them in a bag and go home.",
    },
    {
      emoji: "🐱",
      title: "The Lost Kitten",
      text: "Mia has a small kitten named Luna. One day, Luna is not at home. Mia looks under the bed and behind the door. At last, she hears a soft meow. Luna is sleeping in the box. Mia is happy.",
    },
    {
      emoji: "🌧️",
      title: "A Rainy Day",
      text: "Today it is raining. I cannot play outside. I sit by the window and watch the rain. Then I draw a picture of a rainbow. Mama says, \"It is beautiful!\"",
    },
    {
      emoji: "🐢",
      title: "The Turtle and the Rabbit",
      text: "A rabbit and a turtle have a race. The rabbit runs very fast and takes a nap. The turtle walks slowly, but he does not stop. The turtle reaches the end first. Slow and steady wins the race.",
    },
    {
      emoji: "🏫",
      title: "My First Day at School",
      text: "Today is my first day at school. I feel a little shy. My teacher smiles at me and says hello. A girl named Ana asks me to sit with her. Now I have a new friend. I cannot wait for tomorrow.",
    },
    {
      emoji: "🌱",
      title: "The Seed",
      text: "Ben plants a small seed in the soil. Every day, he gives it water and sunlight. He waits and waits. After two weeks, a little green plant comes out. Ben jumps for joy. Good things take time.",
    },
    {
      emoji: "🎂",
      title: "Papa's Birthday",
      text: "Today is Papa's birthday. My sister and I make a card for him. Mama bakes a chocolate cake. In the evening, we sing a song and light the candle. Papa smiles and makes a wish. It is a happy day for our family.",
    },
    {
      emoji: "🐘",
      title: "The Kind Elephant",
      text: "An elephant walks in the forest. He sees a small mouse who is stuck in the mud. The elephant uses his long trunk to lift the mouse. The mouse says, \"Thank you!\" From that day, they are best friends.",
    },
  ],
};

// ---------- Game state ----------
let level = "words";
let playList = [];   // the current level in RANDOM order
let index = 0;
let stars = 0;
let slowMode = false;
let wordStarts = [];
const rewarded = new Set();

// ---------- Page elements ----------
const $ = (id) => document.getElementById(id);
const emojiEl = $("emoji");
const titleEl = $("title");
const textEl = $("text");
const positionEl = $("position");
const starsEl = $("stars");
const feedbackEl = $("feedback");
const micBtn = $("mic");
const slowBtn = $("slow");

// ---------- Random order ----------
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Mix up the current level and start from the first card
function startLevel(avoidItem) {
  playList = shuffle(LEVELS[level]);
  // don't show the same card twice in a row when the list is mixed again
  if (avoidItem && playList.length > 1 && playList[0] === avoidItem) {
    [playList[0], playList[1]] = [playList[1], playList[0]];
  }
  index = 0;
  render();
}

// ---------- Show the current item ----------
function render() {
  const item = playList[index];
  const words = item.text.split(" ");

  // where each word starts in the text (for highlighting while speaking)
  let pos = 0;
  wordStarts = words.map((w) => {
    const start = pos;
    pos += w.length + 1;
    return start;
  });

  emojiEl.textContent = item.emoji;
  titleEl.textContent = item.title || "";
  positionEl.textContent = `${index + 1} / ${playList.length}`;
  starsEl.textContent = stars;
  feedbackEl.textContent = "";

  textEl.innerHTML = "";
  words.forEach((w, i) => {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = w;
    span.addEventListener("click", () => speak(cleanWord(w)));
    textEl.appendChild(span);
    if (i < words.length - 1) textEl.appendChild(document.createTextNode(" "));
  });
}

function wordSpans() {
  return [...textEl.querySelectorAll(".word")];
}

function highlight(i) {
  wordSpans().forEach((s, k) => s.classList.toggle("active", k === i));
}

function cleanWord(w) {
  return w.toLowerCase().replace(/[^a-z']/g, "");
}

// ---------- Listen (text to speech) ----------
function speak(text, withHighlight = false) {
  if (!("speechSynthesis" in window)) {
    feedbackEl.textContent = "Sorry, this browser cannot read out loud.";
    return;
  }
  speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = slowMode ? 0.5 : 0.85;

  if (withHighlight) {
    utter.onboundary = (e) => {
      if (e.name !== "word") return;
      let current = 0;
      wordStarts.forEach((start, i) => {
        if (e.charIndex >= start) current = i;
      });
      highlight(current);
    };
    utter.onend = () => highlight(-1);
  }

  speechSynthesis.speak(utter);
}

// ---------- Read (speech to text) ----------
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function listenToChild() {
  if (!Recognition) {
    feedbackEl.textContent = "Please use Google Chrome or Microsoft Edge for the microphone.";
    return;
  }

  speechSynthesis.cancel();
  const recognition = new Recognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  micBtn.classList.add("listening");
  feedbackEl.textContent = "🎤 Listening... read now!";

  recognition.onresult = (e) => checkReading(e.results[0][0].transcript);
  recognition.onerror = () => {
    feedbackEl.textContent = "I could not hear you. Please try again.";
  };
  recognition.onend = () => micBtn.classList.remove("listening");

  recognition.start();
}

function checkReading(spokenText) {
  const spoken = new Set(spokenText.split(" ").map(cleanWord));
  const spans = wordSpans();
  let correct = 0;

  spans.forEach((span) => {
    const ok = spoken.has(cleanWord(span.textContent));
    span.classList.toggle("good", ok);
    span.classList.toggle("bad", !ok);
    if (ok) correct++;
  });

  if (correct === spans.length) {
    const key = `${level}-${playList[index].text}`;
    if (!rewarded.has(key)) {
      rewarded.add(key);
      stars++;
      starsEl.textContent = stars;
    }
    feedbackEl.textContent = "🎉 Galing! Perfect reading!";
  } else {
    feedbackEl.textContent = "Good try! Tap the red words to practice. 💪";
  }
}

// ---------- Buttons ----------
$("listen").addEventListener("click", () => {
  const item = playList[index];
  speak(item.text, true);
});

slowBtn.addEventListener("click", () => {
  slowMode = !slowMode;
  slowBtn.setAttribute("aria-pressed", slowMode);
});

micBtn.addEventListener("click", listenToChild);

$("next").addEventListener("click", () => {
  speechSynthesis.cancel();
  if (index + 1 < playList.length) {
    index++;
    render();
  } else {
    // finished all cards: mix them again
    startLevel(playList[index]);
  }
});

$("prev").addEventListener("click", () => {
  speechSynthesis.cancel();
  index = (index - 1 + playList.length) % playList.length;
  render();
});

$("levels").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  speechSynthesis.cancel();
  level = btn.dataset.level;
  document.querySelectorAll("#levels button").forEach((b) => b.classList.toggle("active", b === btn));
  startLevel();
});

// ---------- Start ----------
startLevel();