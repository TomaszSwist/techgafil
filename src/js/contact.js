// $(document).ready(function() {

//     if(window.location.href.indexOf('#success') != -1) {
//       $('#success').modal('show');
//     }
  
//   });
const sumbitBtn = document.querySelector('.submit-btn')

const modal = document.querySelector('#success')

const checkSuccess = () => {
    console.log('uruchomione')
    
    
}

if (window.location.hash == '#success') {
    modal.classList.add('show')
    console.log('success')
} else {

}

sumbitBtn.addEventListener('click', checkSuccess)

