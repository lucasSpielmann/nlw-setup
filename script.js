const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form) //criando novo obj
const button = document.querySelector("header button")

button.addEventListener("click", add) // sempre passa o evento e depois uma função
form.addEventListener("change", save) // sempre passa o evento e depois uma função

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today) // true or false

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) //armazenando em localstorage sempre usando JSON.stringify, ou seja, em formato texto
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //pega de localstorage sempre convertendo para objeto usando JSON.parse.
nlwSetup.setData(data)
nlwSetup.load()
