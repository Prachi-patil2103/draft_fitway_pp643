// discovery section 
 setTimeout(() => {
  const text = "EXPERIENCE FITWAY: BOOK YOUR DEMO";
  const container1 = document.getElementById("animatedTagline");

  const characters = text.split("");
  container1.innerHTML = characters
    .map((char, i) => `<span style="animation-delay:${i * 0.05}s">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
}, 300);

setTimeout(() => {
  const wrapper = document.querySelector(".text-slide-wrapper");
  if (wrapper) wrapper.classList.add("animate-in");
}, 200);