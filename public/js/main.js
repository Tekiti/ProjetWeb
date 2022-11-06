const inputAmount = document.getElementById("montant");
const inputDuration = document.getElementById("duree");
const formPret = document.getElementById("form");
const resultSimulation = document.getElementById("result-mensualite");

let amount = 0;
// The min value of duration is 2, therefore initilisation at 2 is necessary
let duration = 2;

const calcPret = (amount, duration) => {
  let month = duration * 12;
  return Math.floor(amount / month);
};
// Each time the value of an input changes, amount value changes too to its value

inputAmount.addEventListener("change", (e) => {
  amount = e.target.value;
  // Each time the value of an input changes, duration value changes too to its value
});
inputDuration.addEventListener("change", (e) => {
  duration = e.target.value;
});

// When the form is submitted, we catch the event
form.addEventListener("submit", (e) => {
  // We prevent the form from submitting therefore it will not refresh the page
  e.preventDefault();
  //   We set the inner html of resultSimulation to the calculated monthly payment and a span child
  resultSimulation.innerHTML =
    `${calcPret(amount, duration)}` + "€" + '<span class="month">/mois</span>';
});

// JS for rendez-vous
// We take every inputs of the form and listen submit event
const showRdvDiv = document.getElementById("show-rdv");
const rdvDiv = document.getElementById("rdv-div");
const formAppointment = document.getElementById("form-rdv");
const inputLastname = document.getElementById("nom");
const inputName = document.getElementById("prenom");
const inputBirthDate = document.getElementById("date-birth");
const inputPhone = document.getElementById("phone");
const inputDateAppointment = document.getElementById("date-rdv");
const appointment = document.getElementById("appointment");
const civilityInputs = document.querySelectorAll(".sexe-input");
console.log(civilityInputs);
let lastName = "";
let name = "";
let birthDate;
let phone = 0;
let dateAppointment;
// userData is stored in localStorage or is an empty array
// localStorage.setItem(
//   "userData",
//   JSON.stringify([
//     {
//       name: "aze",
//     },
//   ])
// );
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let userDataInLS = localStorage.getItem("userData") ? true : false;
console.log(userDataInLS);
showRdvDiv.addEventListener("click", () => {
  if (!userDataInLS) {
    rdvDiv.classList.toggle("rdv-div");
    rdvDiv.classList.toggle("none");
  } else {
    appointment.innerHTML = `${userData[0].civility} ${userData[0].lastName}, vous avez déjà réservé un rendez-vous prévu le ${userData[0].dateAppointment}`;
  }
});

formAppointment.addEventListener("submit", (e) => {
  e.preventDefault();
  //  We can't filter civilityInputs since it's a nodelist, therefore we need to
  // make it as an array
  civilityInputsArray = Array.from(civilityInputs);
  // There's only value that is checked, so taking the [0] array's value is valid
  const civility = civilityInputsArray.filter((e) => e.checked == true)[0]
    .value;
  if (!userDataInLS) {
    // userData is a const
    userData = [
      ...userData,
      {
        civility: civility,
        name: name,
        lastName: lastName,
        birthDate: birthDate,
        phone: phone,
        dateAppointment: dateAppointment,
      },
    ];
    localStorage.setItem("userData", JSON.stringify(userData));
  }
});

inputLastname.addEventListener("change", (e) => {
  //   userData = [...userData, { lastName: e.target.value }];
  lastName = e.target.value;
});
inputName.addEventListener("change", (e) => {
  name = e.target.value;
});

inputBirthDate.addEventListener("change", (e) => {
  birthDate = e.target.value;
});

inputPhone.addEventListener("change", (e) => {
  phone = e.target.value;
});

inputDateAppointment.addEventListener("change", (e) => {
  dateAppointment = e.target.value;
});

console.log(userData[0]);
