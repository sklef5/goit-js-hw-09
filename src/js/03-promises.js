import Notiflix from 'notiflix';

const refs ={
  formData: document.querySelector('form'),
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject)=>{
    setInterval(()=>{
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
}, delay)
})

promise
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
function onClickSubmit(e) {
  e.preventDefault();
  const delay = Number(e.currentTarget.elements.delay.value);
  const step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);
  let tempDelay =delay;

  for (let i =0; i<amount; i++){
    createPromise(i+1, tempDelay);
    tempDelay +=step
}
}

refs.formData.addEventListener('submit', onClickSubmit)