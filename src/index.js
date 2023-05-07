document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //global variables
  const form = document.getElementById("create-task-form");
  const text = document.getElementById("new-task-description");
  const submit = document.querySelector("input[type=submit]");
  const ul = document.getElementById("tasks");
  let totalList = [];

  //eventlistener
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLi = document.createElement("li"); //create li
    const button = document.createElement("button"); //create X button
    button.innerHTML = "X"; //inner text X
    button.addEventListener("click", () => {
      //make button remove li
      newLi.remove();
    });
    newLi.innerHTML = text.value; //li inner text
    newLi.appendChild(button); //append X button to li
    ul.appendChild(newLi); //append li to ul
    totalList.push(newLi); //push each li to array
    console.log(totalList); //make sure they're added
    text.value = ""; //erase value after its appended
  });
});

