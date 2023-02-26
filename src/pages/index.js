import "./index.scss";
import { roles, role } from "../utils/constants";

let i = 1;

function changeRole() {
  role.textContent = roles[i];
  if (i === roles.length - 1) {
    i = 0;
  } else {
    i++;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  //смена ролей
  setInterval(changeRole, 5000);

  //плавный скролл
  document.addEventListener("click", function (event) {
    if (event.target.matches(".navigation__link")) {
      event.preventDefault();
      let element = document.getElementById(event.target.dataset.target);
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  //управление формой
  const form = document.querySelector(".pageclip-form");
  Pageclip.form(form, {
    onResponse: function (error, response) {
      // отключить дефолтный tooltip
      return false;
    },
  });
});
