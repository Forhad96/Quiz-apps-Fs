// ========================= hard copy =-------------

// function enroll() {


//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isTrue = true;
//       if (isTrue) {
//         resolve();
//       } else {
//         reject("enroll got failure");
//       }
//   }, 2000);
//         });

//   return promise;
// }

// function payment() {

//   document.body.innerHTML = "<b>Page is loading...</b>"

  

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         resolve();
//       } else {
//         reject("payment failed");
//       }
//     }, 3000);
//   });
//   return promise;
// }

// function quize() {
//   console.log("playing quiz");

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         resolve();
//       } else {
//         reject("you didn't get enough marks");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function getCertificate() {
//   console.log("certificate is");

//   const promise = new Promise(() => {
//     setTimeout(() => {
//       console.log("Congratulations! you got the certificate.");
//     }, 2000);
//   });

//   return promise;
// }

// enroll()
//   .then(payment)
//   .then(quize)
//   .then(getCertificate)
//   .then((value) => {
//     console.log(value);
//   });

