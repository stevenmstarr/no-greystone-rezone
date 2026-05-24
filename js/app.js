const petitionCounter = document.getElementById('petitionCounter');
const letterCounter = document.getElementById('letterCounter');

function animateCounter(element, target) {
  let current = 0;

  const increment = target / 100;

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    element.innerText = Math.floor(current).toLocaleString();
  }, 20);
}

if (petitionCounter) {
  animateCounter(petitionCounter, 2486);
}

if (letterCounter) {
  animateCounter(letterCounter, 1134);
}