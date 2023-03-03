function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let color = null;
const onStart = document.querySelector('button[data-start]')
const onStop = document.querySelector('button[data-stop]')


onStop.addEventListener('click', ()=>{
    onStart.removeAttribute('disabled', 'true')
    clearInterval(color)
})

const colorDody = ()=>{
    document.body.style.backgroundColor = getRandomHexColor()
}

function getColor (){
    onStart.setAttribute('disabled', 'true')
 color =  setInterval(colorDody, 1000)
}

onStart.addEventListener('click', getColor)