const reply = document.querySelector(".reply");
const ph = document.querySelector("i")

// function toggleQ(ph) {
//   const question = ph.closest('.question');
//   const reply = question.querySelector('.reply');

//   if (reply.style.display === "block") {
//     reply.style.display = "none";
//     ph.classList.remove("active");
//   } else {
//     reply.style.display = "block";
//     ph.classList.add("active");
//   }
// }

function toggleQ(ph) {
  const question = ph.closest('.question');
  const reply = question.querySelector('.reply');

  if (reply.classList.contains('open')) {
    reply.style.display = "none";
    reply.classList.remove('open');
    ph.classList.remove("active");
  } else {
    reply.style.display = "block";
    reply.classList.add('open');
    ph.classList.add("active");
  }
}

(reply.classList.contains('open'))