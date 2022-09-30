const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, 999999);
  document.execCommand("copiar");

  btn.textContent = "Copiado!!!";
  setTimeout(() => {
    btn.textContent = "Copiar";
  }, 3000);
};

btn.addEventListener("click", copyText);
