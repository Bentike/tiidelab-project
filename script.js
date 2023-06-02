const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const dob = document.getElementById("dob");
const studentId = document.getElementById("studentId");
const streetAddress = document.getElementById("streetAddress");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip");
const email = document.getElementById("email");
const number = document.getElementById("number");
const course = document.getElementById("course");
const level = document.getElementById("level");
const language = document.getElementById("language");
const startDate = document.getElementById("start");
const comment = document.getElementById("comment");
const submit = document.getElementById("submit");
const close = document.getElementById("close");
const preview = document.getElementsByClassName("preview")[0];
const overlayFirstName = document.getElementById("fn");
const overlayMiddleName = document.getElementById("mn");
const overlayLastName = document.getElementById("ln");
const overlayDob = document.getElementById("dofb");
const overlayStudentId = document.getElementById("sid");
const overlayStreetAddress = document.getElementById("sa");
const overlayCity = document.getElementById("ct");
const overlayState = document.getElementById("st");
const overlayCountry = document.getElementById("cty");
const overlayZipCode = document.getElementById("zc");
const overlayEmail = document.getElementById("eml");
const overlayNumber = document.getElementById("num");
const overlayCourse = document.getElementById("crs");
const overlayLevel = document.getElementById("lv");
const overlayLanguage = document.getElementById("lng");
const overlayStartDate = document.getElementById("std");
const overlayComment = document.getElementById("cmt");
const add = document.getElementsByClassName("add")[0];
const registrationForm = document.getElementById("registrationForm");

const mergeValues = () => {
  overlayFirstName.textContent = `First-Name: ${firstName.value}`;
  overlayMiddleName.textContent = `Middle-Name: ${middleName.value}`;
  overlayLastName.textContent = `Last-Name: ${lastName.value}`;
  overlayDob.textContent = `Date-of-Birth: ${dob.value}`;
  overlayStudentId.textContent = `Student-ID: ${studentId.value}`;
  overlayStreetAddress.textContent = `Street-Address: ${streetAddress.value}`;
  overlayCity.textContent = `City: ${city.value}`;
  overlayState.textContent = `State: ${state.value}`;
  overlayCountry.textContent = `Country: ${country.value}`;
  overlayZipCode.textContent = `Zip-Code: ${zipCode.value}`;
  overlayEmail.textContent = `Email: ${email.value}`;
  overlayNumber.textContent = `Number: ${number.value}`;
  overlayCourse.textContent = `Course: ${course.value}`;
  overlayLevel.textContent = `Level: ${level.value}`;
  overlayLanguage.textContent = `Language: ${language.value}`;
  overlayStartDate.textContent = `Start Date: ${startDate.value}`;
  overlayComment.textContent = `Comment: ${comment.value}`;
};

const clearForm = () => {
  firstName.value = "";
  middleName.value = "";
  lastName.value = "";
  dob.value = "";
  studentId.value = "";
  streetAddress.value = "";
  city.value = "";
  state.value = "";
  country.value = "";
  zipCode.value = "";
  email.value = "";
  number.value = "";
  course.value = "";
  level.value = "";
  language.value = "";
  startDate.value = "";
  comment.value = "";
};

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  preview.style.display = "block";
  mergeValues();
});

add.addEventListener("click", (event) => event.preventDefault());

close.addEventListener("click", () => {
  preview.style.display = "none";
  clearForm();
});
