document.addEventListener("DOMContentLoaded", function() {
fetch('https://api.example.com/education')
.then(response => response.json())
.then(data => {
const educationList = document.getElementById('education-list');
data.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.degree} in ${item.field} from ${item.institution}`;
educationList.appendChild(li);
});
});

fetch('https://api.example.com/skills')
.then(response => response.json())
.then(data => {
const skillsList = document.getElementById('skills-list');
data.forEach(skill => {
const li = document.createElement('li');
li.textContent = skill;
skillsList.appendChild(li);
});
});
});

