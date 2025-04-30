const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputPhone = document.getElementById("inputPhone");
const form = document.getElementById("form");
const cardBody = document.querySelector(".card-body");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;

    if (name === "" || email === "" || phone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    };

    const user = {
        name: name,
        email: email,
        phone: phone
    };
    const userJSON = JSON.stringify(user);
    console.log(user);

    form.reset();
    form.remove();

    showSucessMessage();
})

function showSucessMessage() {
    const message = document.createElement("p");
    message.textContent = "Obrigado por seu cadastro!";
    message.className = "alert alert-success mt-3";
    cardBody.appendChild(message);

    const button = document.createElement("button");
    button.textContent = "Voltar";
    cardBody.appendChild(button);
    button.className = "btn btn-primary mt-3";
    button.addEventListener("click", function () {
        location.reload();
    });
}

