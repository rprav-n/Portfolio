const burgers = document.getElementsByClassName("burger");
const navLinks = document.querySelector(".nav-links");
const lightDarkBtn = document.querySelector(".light-dark-btn");
const themeIcon = document.querySelector(".light-dark-btn i");
const mainBurger = document.querySelector(".main-burger");

const darkCSS =
  "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/vs2015.min.css";
const lightCSS =
  "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/xcode.min.css";

const themeCSS = document.querySelector("#theme-css");

let r = document.querySelector(":root");
let s = getComputedStyle(document.body);

const body = document.getElementById("body");

for (var i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    if (navLinks.classList.contains("nav-active")) {
      mainBurger.style.backgroundColor = s.getPropertyValue("--nav-hover");
      mainBurger.onmouseover = function () {
        mainBurger.style.background = s.getPropertyValue("--nav-hover");
      };
      mainBurger.onmouseleave = function () {
        mainBurger.style.background = s.getPropertyValue("--nav-hover");
      };
    } else {
      mainBurger.style.background = "none";
      mainBurger.onmouseover = function () {
        mainBurger.style.background = s.getPropertyValue("--nav-hover");
      };
      mainBurger.onmouseleave = function () {
        mainBurger.style.background = "none";
      };
    }

    mainBurger.children[0].classList.toggle("line1-anime");
    mainBurger.children[1].classList.toggle("line2-anime");
    mainBurger.children[2].classList.toggle("line3-anime");
  });
}

// Darkmode variables
const d_black = "#111";
const d_grey = "#757575";
const d_white_1 = "#fff";
const d_white_2 = "#fafafa";
const d_nav_hover = "#3b3a51";
const d_link_color = "#0a84ff";

const theme = localStorage.getItem("theme");
themeChange(theme);

lightDarkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeChange("dark");
  } else {
    localStorage.setItem("theme", "light");
    themeChange("light");
  }
});

function themeChange(theme) {
  if (theme === "dark") {
    themeCSS.setAttribute("href", darkCSS);

    r.style.setProperty("--white", d_black);
    r.style.setProperty("--custom-black-1", d_white_1);
    r.style.setProperty("--custom-black-2", d_white_2);
    r.style.setProperty("--custom-grey", "lightgrey");
    r.style.setProperty("--nav-hover", d_nav_hover);
    r.style.setProperty("--burger-hover", d_nav_hover);
    r.style.setProperty("--border-color", "#333");
    r.style.setProperty("--link-color", d_link_color);
    r.style.setProperty("--code-bg", "#1e1e1e");

    r.style.setProperty("--blue-bg", "#3b3a51");

    themeIcon.className = "far fa-lightbulb-on";
  } else {
    themeCSS.setAttribute("href", lightCSS);

    r.style.setProperty("--white", "#fff");
    r.style.setProperty("--custom-black-1", "#333");
    r.style.setProperty("--custom-black-2", "#444");
    r.style.setProperty("--custom-grey", "#777");
    r.style.setProperty("--nav-hover", "#fbf7f3");
    r.style.setProperty("--burger-hover", "#fbf7f3");
    r.style.setProperty("--border-color", "#eaeaea");
    r.style.setProperty("--link-color", "#007bff");
    r.style.setProperty("--code-bg", "#fafafa");

    r.style.setProperty("--blue-bg", "#eff6ff");

    themeIcon.className = "far fa-moon";
  }
  addCopyCodeBtns();
}

addCopyCodeBtns();
function addCopyCodeBtns() {
  const codes = document.getElementsByTagName("pre");
  for (let i = 0; i < codes.length; i++) {
    let code = codes[i];
    let div = document.createElement("div");
    // div.innerText = "Copy";
    let copyIcon = `<i style="color:#666" class="far fa-clipboard"></i>`;
    let copiedIcon = `<i style="color:green" class="far fa-clipboard-check"></i>`;
    if (theme == "dark") {
      copyIcon = `<i style="color:#fafafa" class="far fa-clipboard"></i>`;
    }
    div.innerHTML = copyIcon;
    div.className = "copy-code-btn";
    div.addEventListener("click", () => {
      let text = code.innerText;
      text = text.replace("Copy", "");
      navigator.clipboard.writeText(text);
      div.innerHTML = copiedIcon;
      setTimeout(() => {
        div.innerHTML = copyIcon;
      }, 2000);
    });
    code.append(div);
  }
}
