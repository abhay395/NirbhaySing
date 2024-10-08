const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const qualificationInput = document.querySelector("#qualification");
const contactInput = document.querySelector("#contact");
const imageInput = document.querySelector("#image");
const selectInput = document.querySelector('#post')
form.addEventListener("submit", (e) => {
    e.preventDefault();
  const name = nameInput.value;
  const qualification = qualificationInput.value;
  const contact = contactInput.value;
  const image = imageInput.files[0]; // Get the file object
  const post = selectInput.value
  console.log({ name, contact, qualification, image });

  const formData = new FormData();
  formData.append("name", name);
  formData.append("qualification", qualification);
  formData.append("contact", contact);
  formData.append("image", image);
  formData.append("post", post);

  fetch("/teacher", {
    method: "POST",
    body: formData,
  })
    .then((response) =>{
      nameInput.value = "";
      qualificationInput.value = "";
      contactInput.value = "";
      imageInput.value = "";
      selectInput.value = "";
     alert("Teacher added successfully");
    } )
    .catch((error) => console.log(error));
});
