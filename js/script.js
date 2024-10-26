// Oxirgi skroll qiymatini saqlash
let lastScrollY = window.scrollY;
let close = document.getElementById("close");
let menu = document.getElementById("menu");
let bar = document.getElementById("menu_bar");

const scrollHeader = () => {
  const header = document.getElementById("header");

  // Agar skroll pastga bo'lsa - transform qo'shiladi (yashirinadi)
  if (window.scrollY > lastScrollY && window.scrollY >= 120) {
    header.classList.add("transform");
  }
  // Agar skroll yuqoriga bo'lsa - transform olib tashlanadi (ko'rinadi)
  else {
    header.classList.remove("transform");
  }

  // 100px dan oshsa, background qo'shiladi
  if (window.scrollY >= 100) {
    header.classList.add("bg-header");
  } else {
    header.classList.remove("bg-header");
  }

  // Joriy skroll joylashuvini yangilash
  lastScrollY = window.scrollY;
};

// Skroll eventini tinglash
window.addEventListener("scroll", scrollHeader);

bar.addEventListener("click", () => {
  menu.style.top = "0px";
  bar.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  menu.style.top = "-500px";
  close.style.display = "none";
  bar.style.display = "block";
});
