
const dayElements = document.querySelectorAll('.time-day');
const hoursElements = document.querySelectorAll('.time-hours');
const minutesElements = document.querySelectorAll('.time-minutes');
const secondsElements = document.querySelectorAll('.time-seconds');


const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3); 
countdownDate.setHours(countdownDate.getHours() + 16); 
countdownDate.setMinutes(countdownDate.getMinutes() + 59); 
countdownDate.setSeconds(countdownDate.getSeconds()); 

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = countdownDate - currentDate;


  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


  dayElements[0].textContent = Math.floor(days / 10); 
  dayElements[1].textContent = days % 10; 
  hoursElements[0].textContent = Math.floor(hours / 10); 
  hoursElements[1].textContent = hours % 10; 

  minutesElements[0].textContent = Math.floor(minutes / 10); 
  minutesElements[1].textContent = minutes % 10; 

  secondsElements[0].textContent = Math.floor(seconds / 10); 
  secondsElements[1].textContent = seconds % 10; 
}



$('.price-list-wrapper.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  center:true,
  navText: ["<img src='./assets/img/1x/h9.png'>","<img src='./assets/img/1x/h10.png'>"],
  responsive:{
      0:{
          items:1
      },
      992:{
          items:3,
          nav:true,

      }
  }
})

$('.owl-carousel.video-ytb-wrapper').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  center:true,
  
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1,
          nav: false,
      }
  }
})

$('.owl-carousel.story-list').owlCarousel({
  loop:true,
  nav:true,
  center:true,
  nav:false,
  navText: ["<img src='./assets/img/1x/h9.png'>","<img src='./assets/img/1x/h10.png'>"],
  responsive:{
      0:{
          items:1
      },
      992:{
          items:1,
          nav:true,

      }
  }
})


function priceRange(){
    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-filter-input input"),
    range = document.querySelector(".slider-range .progress");
    
    let field_value_min = document.querySelectorAll('.field-value-min')
    let field_value_max = document.querySelectorAll('.field-value-max')
    field_value_min[0].textContent = priceInput[0].value
    field_value_max[0].textContent = priceInput[1].value
    
    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
    
            
                priceInput[0].value = minVal;
                field_value_min[0].textContent = minVal + 1 ;
                priceInput[1].value = maxVal;
                field_value_max[0].textContent = maxVal + 1;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            
        });
    });
}

priceRange()