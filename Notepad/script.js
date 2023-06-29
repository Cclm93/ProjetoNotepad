const form = document.querySelector('form')
const ul = document.querySelector('ul')

const button = document.querySelector('button')
const input = document.getElementById('item')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

/*
let itemsArray

contador = 0  
while contador < localStorage.length

  itemsArray = itemsArray + localStorage.getItem('items' + contador) ? JSON.parse(localStorage.getItem('items')) : []



*/




localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))



const liMaker = (text) => {
  const li = document.createElement('li')
 // const libotao = document.createElement('button')
  //libotao.className += "libotao";
  
  li.textContent = text
  //li.appendChild(libotao)
   ul.appendChild(li)
}
//x='0'


form.addEventListener('submit', function (e) {
  e.preventDefault()
//while contador < localstorage.length
  itemsArray.push(input.value)
  console.log(itemsArray)
  localStorage.setItem('items'/*+x*/, JSON.stringify(itemsArray))
  liMaker(input.value)
  input.value = ''
//x = x+1

})

data.forEach((item) => {
  liMaker(item)
  console.log(itemsArray)
})

button.addEventListener('click', function () {
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
})

