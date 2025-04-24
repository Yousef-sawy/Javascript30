const myCheckBox = document.getElementById("myCheckBox");

const visBtn = document.getElementById("visBtn");

const masterCradBtn = document.getElementById("masterCradBtn");

const paypalBtn = document.getElementById("paypalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");

const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = ` you are subscribed!`;
    }
    else{
        subResult.textContent = ` you are not subscribed`;
    }

    if(visBtn.checked){
        paymentResult.textContent = ` you are using visa`;
    }
    else if(masterCradBtn.checked){
        paymentResult.textContent = ` you are using mastercard`;
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = ` you are using paypal`;
    }
    else{
        paymentResult.textContent =` please pick a payment type`
    }

};