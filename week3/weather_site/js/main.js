// set current year in footer
//const currentDate = new Date();
//document.querySelector('#year').textContent = currentDate.getFullYear();
document.getElementById('year').innerHTML = (new Date).getFullYear();
const d = new Date();
d.setDate(d.getDate() + 0);
document.getElementById("update").innerHTML = "Last Updated: " + " " + d;