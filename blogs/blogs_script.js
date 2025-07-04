
// navbar section 

// const hamburger = document.getElementById('hamburgerBtn');
// const navLinks = document.getElementById('navLinks');
// const navButtons = document.getElementById('navButtons');
// const dropdownBtn = document.getElementById('dropdownBtn');
// const dropdownMenu = document.getElementById('dropdownMenu');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   navButtons.classList.toggle('active');
// });

// dropdownBtn.addEventListener('click', (e) => {
//   e.stopPropagation();
//   dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
// });

// window.addEventListener('click', (e) => {
//   if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
//     dropdownMenu.style.display = 'none';
//   }
// });


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