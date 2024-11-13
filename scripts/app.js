let changeHeadingBtn = document.getElementById("change-heading");

let changeTextBtn = document.getElementById("change-text");

let changeBgColorBtn = document.getElementById("change-bg-color");

let changeTextColorBtn = document.getElementById("change-text-color");

let showImageBtn = document.getElementById("show-image");

let hideImageBtn = document.getElementById("hide-image");

let increaseTextSizeBtn = document.getElementById("increase-text-size");

let decreaseTextSizeBtn = document.getElementById("decrease-text-size");

let toggleBoldBtn = document.getElementById("toggle-bold");

let toggleItalicBtn = document.getElementById("toggle-italic");

changeHeadingBtn.addEventListener("click", function changeHeading() {
    heading.textContent = "New Heading";
    output.textContent = "Heading changed.";
  });

  changeTextBtn.addEventListener("click", function changeText() {
    paragraph.textContent = "This is the new paragraph text.";
    output.textContent = "Paragraph text changed.";
  });