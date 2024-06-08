import { displayMessage } from "../../UI/auth/api/common/displayMessage.js";
import { register } from "../../api/auth/register.js";

export function registerHandler() {
  console.log("registerHandler");

  const form = document.querySelector("#registerForm");
  if(form) {
    form.addEventListener("submit", submitForm);
  }
};

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
if(data.bio.trim()=== "") {
  delete data.bio;
}

if(data.avatarUrl.trim()==="") {
  delete data.avatarUrl;
}
else {
  data.avatar = {
    url: data.avatarUrl,
    alt: `${data.name} avatar`,
  };

  delete data.avatarUrl;
}
console.log(data);
try {
  await register(data);
  displayMessage("#message","success", "successfully registered. Please log in");
  form.reset();
}
catch(error) {
  console.error(error);
  displayMessage("#message","warning",error.message);

}

}
