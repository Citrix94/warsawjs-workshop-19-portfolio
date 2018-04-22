const $getFormValue = document.querySelector('form');

const submitFormButton = document.querySelector("#newsletter input[type='submit']");

submitFormButton.onclick = function(evt) { 

    evt.preventDefault();

    //let formValue = document.querySelector("#newsletter input[type='email']").value;
    let formData = new FormData(getFormValue);
    let map = new Map(formData);

    alert(map.value);

}

function displayMessage () {

    

}