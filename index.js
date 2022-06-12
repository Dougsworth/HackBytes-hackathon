const instruments = document.querySelectorAll(".instrument");
instruments.forEach((instrument) => {
  instrument.addEventListener("click", () => {
    removeActiveClasses();
    instrument.classList.add("active");
  });
});
function removeActiveClasses() {
  instruments.forEach((instrument) => {
    instrument.classList.remove("active");
  });
}
// ________________________________________________________
