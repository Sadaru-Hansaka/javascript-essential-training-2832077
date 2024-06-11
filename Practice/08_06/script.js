/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function addtitle(cont) {
  let newArticle = document.querySelector(".title");
  newArticle.innerHTML = cont;
}

addtitle("Hi mother fucker");
