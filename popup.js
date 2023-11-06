const addCart = document.querySelector("#addCart");
const clear = document.querySelector("#clear");
const checkout = document.querySelector("#checkout");
const close = document.querySelector("#close");
const editButtons = document.querySelectorAll(".editButton");
const deleteButtons = document.querySelectorAll(".deleteButton");


document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('addCart');
  console.log(link, addCart);
  link.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
  })
});
