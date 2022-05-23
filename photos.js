const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("mouseover", event => {
    const image = event.target;
    const text = image.alt;
    image.classList.add("opaque-image");
    const span = document.createElement("span");
    span.classList.add("image-text");
    const textNode = document.createTextNode(text);
    span.appendChild(textNode);
    image.after(span)
  });
  cell.addEventListener("mouseout", event => {
    const image = event.target;
    const text = image.alt;
    image.classList.remove("opaque-image");
    const textElems = document.querySelectorAll(".image-text");
    textElems.forEach(elem => {
      elem.remove()
    })
  });
})