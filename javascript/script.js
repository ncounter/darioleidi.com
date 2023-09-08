function reloadPage() {
  console.log(window.location);
  window.location.reload();
}
// setInterval(reloadPage, 5000)


// const tagList = document.getElementById('tag-list');
// const arr = []
// tagList.getAttribute('data-tags').split(",").forEach(element => {
//   arr.push(createTagWithText('span', element, ['tag', 'text-info']));
//   arr.push(createTagWithText('span', ' - '));
// });
// tagList.replaceWith(createTagWithContent('div', arr, ['tags-wrapper', 'mt-4']));

function loadHTML(filePath, id){
  fetch(filePath)
  .then(response=> response.text())
  .then(text=> document.getElementById(id).innerHTML = text );
}

loadHTML('/partials/header.html', 'header');
loadHTML('/partials/menu.html', 'menu');
loadHTML('/partials/footer.html', 'footer');
