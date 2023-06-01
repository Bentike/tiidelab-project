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
  overlayFirstName.textContent = firstName.value;
  overlayMiddleName.textContent = middleName.value;
  overlayLastName.textContent = lastName.value;
  overlayDob.textContent = dob.value;
  overlayStudentId.textContent = studentId.value;
  overlayStreetAddress.textContent = streetAddress.value;
  overlayCity.textContent = city.value;
  overlayState.textContent = state.value;
  overlayCountry.textContent = country.value;
  overlayZipCode.textContent = zipCode.value;
  overlayEmail.textContent = email.value;
  overlayNumber.textContent = number.value;
  overlayCourse.textContent = course.value;
  overlayLevel.textContent = level.value;
  overlayLanguage.textContent = language.value;
  overlayStartDate.textContent = startDate.value;
  overlayComment.textContent = comment.value;
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
