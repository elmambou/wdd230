const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function bannerCalculator() {
  const today = date.getDay();
  const pancake = document.querySelector(".pancake");
  
  if (today===6) {
     pancake.style.display='block';
  }
   else {
      pancake.style.display= 'none';
   }
}
bannerCalculator();




