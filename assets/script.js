function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
}

const divContact = document.querySelector("#contato")
const bgBlur = document.querySelector("#bg-blur")

function contactPopUp() {
  divContact.style.display = "block"
  bgBlur.style.display = "block"
}

function closeDiv() {
  divContact.style.display = "none"
  bgBlur.style.display = "none"
}

function copy() {
  const copyText = document.getElementById("info-text")
  copyText.select()
  copyText.setSelectionRange(0, 99999)

  document.execCommand("copy")

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Texto copiado!",
  });

  closeDiv()
}