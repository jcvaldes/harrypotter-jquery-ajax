// const carrito = document.querySelector('#carrito')
const productList = $("#product-list")[0]; //document.querySelector('#product-list')

$(".fadeIn").hide(0).delay(200).fadeIn(1000);

$(document).ready(function () {
  const APIURL = "http://hp-api.herokuapp.com/api/characters";
  $.ajax({
    method: "GET",
    url: APIURL,
    success: function (characters) {
      for (let i = 0; i < characters.length; i++) {
        render(characters[i]);
      }
    },
  });
});

function render(character) {
  $("#card-container").prepend(`
    <div class="card">
      <img
        alt="${character.name}"
        class="card-img-top"
        src="${character.image}"
      />
      <div class="card-body">
        <h4 class="card-title">${character.name}</h4>
        <p class="card-text">
        <strong>Casa</strong> ${character.house}
        </p>
        <div class="card-footer text-muted">
          <strong>Actor</strong> ${character.actor}
        </div>
      </div>
      <div></div>
  `);
}
