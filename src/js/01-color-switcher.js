function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let color = null;
const onStart = document.querySelector('button[data-start]')
const onStop = document.querySelector('button[data-stop]')


onStop.addEventListener('click', ()=>{
    onStart.disabled = 'false'
    clearInterval(color)
})

const colorDody = ()=>{
    document.body.style.backgroundColor = getRandomHexColor()
}

onStart.addEventListener('click', ()=>{
    onStart.disabled = 'true'
 color =  setInterval(colorDody, 1000)
}
)