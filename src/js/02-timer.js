import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const refs ={
    styleDivWrap:  document.querySelector('.timer'),
    styleDiv: document.querySelectorAll('.field'),
    setTime: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("button[data-start]"),
    formDay :document.querySelector("span[data-days]"),
    formHour :document.querySelector("span[data-hours]"),
    formMin :document.querySelector("span[data-minutes]"),
    formSec :document.querySelector("span[data-seconds]"),
}

let  timeDifferent = 0;
let setTimer = null;
refs.btnStart.disabled = 'true';

refs.styleDivWrap.style.display = 'flex'
refs.styleDivWrap.style.gap = '30px'

refs.styleDiv.forEach((item)=>{
    item.style.display = 'flex'
    item.style.flexDirection = 'column'
    item.style.alignItems = 'center'
})

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        timeDifferent = selectedDates[0]
        if((selectedDates[0] - Date.now())<0){
            Notiflix.Notify.warning("Please choose a date in the future")
        }else{
            refs.btnStart.removeAttribute('disabled')
        }
    },
    
  };
  
flatpickr(refs.setTime, options); 


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value){
    return String(value).padStart(2, 0)
}

function getTimer(time){
    let {days, hours, minutes, seconds} = time
        refs.formDay.textContent = addLeadingZero(days),
        refs.formHour.textContent  = addLeadingZero(hours),
        refs.formMin.textContent  = addLeadingZero(minutes),
        refs.formSec.textContent  = addLeadingZero(seconds)
    }

const timer = {
    start(){
        refs.btnStart.disabled = 'true';
        setTimer = setInterval(()=>{
            const timeLeft = timeDifferent - Date.now();
            if (timeLeft >0){
                const timeConv = convertMs(timeLeft)
                const timer =  getTimer(timeConv)
            } else {
                timer.stop()
            }
        }, 1000);
    },
    stop(){
        Notiflix.Notify.success("Time is up")
        clearInterval(setTimer)
    }
}
       
refs.btnStart.addEventListener('click', timer.start)