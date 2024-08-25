const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerText = `\u00A9 Marina Mukobenova, ${thisYear}`;
footer.append(copyright);

const skills = ["HTML", "CSS", "JavaScript", "GitHub"];
const skillsSection = document.querySelector("#Skills");
const skillsList = document.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.append(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');
const messageSection = document.querySelector("#messages");
const messageList = document.querySelector("#message");

if (messageList.children.length === 0) {
  messageSection.style.display = "none";
}

messageForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstInput = e.target.usersName.value;
  const secondInput = e.target.usersEmail.value;
  const thirdInput = e.target.usersMessage.value;
  console.log(firstInput, secondInput, thirdInput);

  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${secondInput}">${firstInput}:</a><span>${thirdInput}</span> <br>`;

  const editNameButton = document.createElement('button');
  editNameButton.innerText = "edit name";
  editNameButton.classList.add("editNameButton");

  editNameButton.addEventListener('click', (e)=>{
    const link = newMessage.querySelector('a');
    const editedName = prompt ("edit your name:", link.innerText);
    if (editedName !== null){
     link.innerText = editedName;
    }
   })


  const editMessageButton = document.createElement('button');
  editMessageButton.innerText = "edit message";
  editMessageButton.classList.add("editMessageButton");


  editMessageButton.addEventListener('click', (e)=>{
   const span = newMessage.querySelector('span');
   const newText = prompt ("edit your message:", span.innerText);
   if (newText !== null){
    span.innerText = newText;
   }
  })

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.classList.add("removeButtonStyle");

  removeButton.addEventListener("click", (e) => {
    let entry = e.target.parentNode;
    entry.remove();

    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
      }
      
  });
  
  newMessage.append(editNameButton);
  newMessage.append(editMessageButton);
  newMessage.append(removeButton);
  messageList.append(newMessage);

  messageSection.style.display = "block";
  messageForm.reset();
});
