function createTagWithText(type, text, classes = [], id = "") {
  const newTag = document.createElement(type);
  if (id != "")
    newTag.setAttribute('id', id);
  classes.forEach(c => newTag.classList.add(c));
  newTag.appendChild(document.createTextNode(text));

  return newTag;
}

function createTagWithContent(type, innerTags, classes = [], id = "") {
  const newTag = document.createElement(type);
  if (id != "")
    newTag.setAttribute('id', id);
  classes.forEach(c => newTag.classList.add(c));
  innerTags.forEach(t => newTag.appendChild(t));

  return newTag;
}