const paypalBtns = document.querySelector('#payment_options')
const name = document.querySelector('#name')
const amount = document.querySelector('#amount')
const note = document.querySelector('#note')

paypalBtns.addEventListener('mouseover', () => {
  console.log('you moused over a paypal button')
  name.value = ''
  amount.value=''
  note.value=''
  console.log('input fields should have cleared')
})