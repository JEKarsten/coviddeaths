function generateName() {
  var name = document.createElement("p");
  name.innerHTML = "This is a paragraph.";
  document.body.appendChild(name);
  // setTimeout(generateName, 1000)
}
