const el = document.querySelector("#page");

function setColor() {
  const input = document.querySelectorAll("input")[0];
  el.style.color = input.value;
}

function toggleUnderline() {
  el.classList.toggle("underline");
}

function toggleItalic() {
  el.classList.toggle("italic");
}

function toggleBold() {
  el.classList.toggle("bold");
}

function addMonospace() {
  el.classList.add("gray-text", "mono");
}

function removeFormat() {
  el.classList.remove("underline", "italic", "bold", "gray-text", "mono");
}