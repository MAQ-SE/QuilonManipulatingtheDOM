

const elements = {
    heading: document.getElementById("heading"),
    paragraph: document.getElementById("paragraph"),
    output: document.getElementById("output"),
    image: document.getElementById("image"),
    buttons: {
        changeHeading: document.getElementById("change-heading"),
        changeText: document.getElementById("change-text"),
        changeBgColor: document.getElementById("change-bg-color"),
        changeTextColor: document.getElementById("change-text-color"),
        showImage: document.getElementById("show-image"),
        hideImage: document.getElementById("hide-image"),
        increaseTextSize: document.getElementById("increase-text-size"),
        decreaseTextSize: document.getElementById("decrease-text-size"),
        toggleBold: document.getElementById("toggle-bold"),
        toggleItalic: document.getElementById("toggle-italic"),
        spinMe: document.getElementById("barrelRoll")

    }
};


elements.buttons.changeHeading.addEventListener("click", function changeHeading() {
    elements.heading.textContent = "New Heading";
    elements.output.textContent = "Heading changed.";
});

elements.buttons.changeText.addEventListener("click", function changeText() {
    elements.paragraph.textContent = "This is the output text.";
    elements.output.textContent = "Paragraph text changed.";
});

elements.buttons.changeBgColor.addEventListener("click", function changeBackgroundColor() {
    document.body.style.backgroundColor = "darkgray";
    elements.output.textContent = "Background color changed.";
});

elements.buttons.changeTextColor.addEventListener("click", function changeTextColor() {
    document.body.style.color = "lightblue";
    elements.output.textContent = "Text color changed.";
});

elements.buttons.showImage.addEventListener("click", function showImage() {
    elements.image.style.display = "block";
    elements.output.textContent = "Image displayed.";
});

elements.buttons.hideImage.addEventListener("click", function hideImage() {
    elements.image.style.display = "none";
    elements.output.textContent = "Image hidden.";
});


let currentFontSize = 16; 

elements.buttons.increaseTextSize.addEventListener("click", function increaseTextSize() {
    currentFontSize += 2;
    document.body.style.fontSize = `${currentFontSize}px`;
    elements.output.textContent = "Text size increased.";
});

elements.buttons.decreaseTextSize.addEventListener("click", function decreaseTextSize() {
    currentFontSize = Math.max(12, currentFontSize - 2); 
    document.body.style.fontSize = `${currentFontSize}px`;
    elements.output.textContent = "Text size decreased.";
});

elements.buttons.toggleBold.addEventListener("click", function toggleBold() {
    document.body.style.fontWeight = document.body.style.fontWeight === "bold" ? "normal" : "bold";
    elements.output.textContent = "Bold text toggled.";
});

elements.buttons.toggleItalic.addEventListener("click", function toggleItalic() {
    document.body.style.fontStyle = document.body.style.fontStyle === "italic" ? "normal" : "italic";
    elements.output.textContent = "Italic text toggled.";
});

    
