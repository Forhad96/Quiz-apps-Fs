//!Getting the referance to the payment section

const form = document.getElementById("form");
const paymentSection = document.getElementById("paymentSection");
const userSubmit = document.getElementById("userSubmit");

//! ================== section 1 ==================

userSubmit.addEventListener("click", function () {
  paymentVerifier();
});

//! =================== section 2 =================
function paymentVerifier() {
  document.body.innerHTML = `<section class="payment__section text-center">
                  <div class="container bg-dark" style="height: 400px;">
                  <button class="btn btn-success text-center" id="randomBtn">Verify payment</button>
                  <p class="text-center mt-4" id="display1"></p>
                  <div id="paymentWrapper">
                        <input class="border-danger outline-danger" type="number" id="paymentVerify">
                        <button class="btn btn-primary" type="submit" id="paymentSubmit">Submit</button>
                        <p id="display2" class= "text-center" style="color: #fff"></p>
                  </div>   
                  </div>
                  </section>
            `;
//! =============== Getting referance =================

  const display1 = document.getElementById("display1");
  const paymentWrapper = document.getElementById("paymentWrapper");
  const paymentVerify = document.getElementById("paymentVerify");
  const paymentSubmit = document.getElementById("paymentSubmit");
  const randomBtn = document.getElementById("randomBtn");
  const display2 = document.getElementById("display2");

//!=======================================================

//! empty array for containing random number
  let arr = []; //! creating random number by each click
  randomBtn.addEventListener("click", function () {
      paymentWrapper.style.display = 'block'
    let randomNum = Math.floor(Math.random() * 100);
    display1.textContent = randomNum;
    arr.push(randomNum);
  });

  //!! submit if taken random number match the input value
  paymentSubmit.addEventListener("click", function () {
    if (arr[0] == paymentVerify.value) {
      display2.textContent = "Your payment is successfully done";
    } else {
      display2.textContent = "Please match the random number";
    }
  });
}


// =================== Quiz template ========================
const quizParent = document.getElementById('quizParent')

quizParent.innerHTML = ` ${quizeData.map((quiz)=>{
    return `<h1></h1>`
})}
  `