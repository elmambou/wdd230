function toggleMenu() {
    //console.log(document.getElementById("primaryNav").classList);
    console.log(document.getElementById("primaryNav").classList.toggle("hide"));
}

const currentDate = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
}
document.getElementById("copyrightyear").textContent = new Date().toLocaleDateString('en-us', currentDate);


const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber ==6) {
   // console.log("Today is Saturday");
   element.classList.add("showme");

} else {
    //console.log("Today is not Saturday 5");
   element.classList.add("hideme");

}


  


