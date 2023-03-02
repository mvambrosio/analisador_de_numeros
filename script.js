let num = document.getElementById("addnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function ehNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function naLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar () {
    if (ehNumero(num.value) && !naLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert("Número inválido ou repetido!")
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0 ) {
        window.alert("Adicionar valores antes de finalizar.")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            } 
        }
        media = soma / total
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informador foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos valores informados, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores informados, temos ${media}.</p>`
    }
}