const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerText = `\u00A9 Marina Mukobenova, ${thisYear}`;
footer.append(copyright);

const skills = ["HTML", "CSS", "JavaScript", "GitHub"];
const skillsSection = document.querySelector('#Skills');
const skillsList = document.querySelector('ul');

for(i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.append(skill)
}

