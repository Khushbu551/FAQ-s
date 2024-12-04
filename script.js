const accordians = document.querySelectorAll(".accordian");

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}
accordians.forEach((accordian) => {
  const icon = document.querySelector(".icon");
  const answer = document.querySelector(".answer");
  console.log(icon, "icons");
  console.log(answer, "div");
  accordian.addEventListener(".click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
