'use client';
import * as jquery from '/node_modules/jquery/dist/jquery.js'
import * as Popper from "/node_modules/@popperjs/core/dist/umd/popper.js"
import * as bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const cardModal = document.getElementById('cardModal')

cardModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const cardId = button.getAttribute('data-bs-ref-id')
  const title = button.getAttribute('data-bs-title')
  
  const card = document.getElementById(cardId)
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = cardModal.querySelector('.modal-title')
  const modalBodyInput = cardModal.querySelector('.modal-body')

  modalTitle.textContent = title
  modalBodyInput.innerHTML = card.innerHTML
})


cardModal.addEventListener('hide.bs.modal', event => {
  alert(event.currentTarget)
})

var jCar = $('#cardModal');

const loginSubmitFrm = document.getElementById('login_frm')

loginSubmitFrm.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()
  var frm = event.target
  if (frm.checkValidity()) {
    frm.classList.add('was-validated')
    var data = {}
    /*var data = {"username":document.getElementById("username_fld").value, 
    "pwd": document.getElementById("password_fld").value};*/
    for (var i = 0; i<frm.length; i++) {
      var field = frm[i]
      if (field.getAttribute("submitable") == "true") {
        data[field.name] = field.value;
      }
      
    }
    if (data["username"] == "admin" && data["pwd"] == "1234") {
      console.log("LOGEADO!!!!!");
    }
    console.log(data);
  }

})



const newsletterFrm = document.getElementById('newsletter-frm')
newsletterFrm.addEventListener('submit', function(e) {
  e.stopPropagation()
  e.preventDefault()
  var form = e.target

})

