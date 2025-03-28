//1
console.log("hola amigos!")
console.log("")

//2
let arrayValores = [1, 5, "hola", "flecha"]

const mostrarValoresArray = () => {
    console.log("PUNTO 2")

    console.log(`El array es: ${arrayValores}`)

    console.log("")
}
mostrarValoresArray()

//3
const mostrarValorAgregado = () => {
    console.log("PUNTO 3")
    arrayValores.push("salvador soncini")

    console.log(`El array es: ${arrayValores}`)

    console.log("")
}

mostrarValorAgregado()

//4
const encontrarUltimaPosicion = () => {
    console.log("PUNTO 4")
    const ultimaPosicion = arrayValores.lastIndexOf("salvador soncini")
    console.log(`La ultima posicion es: ${ultimaPosicion}`)
    console.log("")
}
encontrarUltimaPosicion()

//5
const sumaArrayNumeros = () => {
    console.log("PUNTO 5")
    const arrayNumeros = [1, 2, 3, 4, 5]
    let suma = 0
    
    suma = arrayNumeros.reduce((a,b) => {return a+b})

    console.log(`La suma de todo el array es: ${suma}`)
    console.log("")
}
sumaArrayNumeros()

//6
const invertirOrdenArray = () => {
    console.log("PUNTO 6")
    const arrayInvertido = arrayValores.reverse()
    
    console.log(`El array invertido es: ${arrayInvertido}`)

    console.log("")
}
invertirOrdenArray()

//7
const ordenarArrayMenorAMayor = () => {
    console.log("PUNTO 7")
    let arrayAOrdenar = [5, 8, 2, 4, 6]
    const arrayOrdenado = arrayAOrdenar.sort((a, b) => a - b)
    console.log(`El array ordenado es: ${arrayOrdenado}`)
    console.log("")
}
ordenarArrayMenorAMayor()

//8
const filtrarNumerosMayoresA10 = () => {
    console.log("PUNTO 8")
    let valoresAFiltrar = [20, 5, 800, 58, 69, 4, 6, 3, 8]
    const valoresFiltrados = valoresAFiltrar.filter(n => n > 10)
    console.log(`Los valores filtrados son: ${valoresFiltrados}`)
    console.log("")
}
filtrarNumerosMayoresA10()

//9
const contarElementos = () => {
    console.log("PUNTO 9")
    let valoresContar = [1, 5, 3, 3, 7, 3, 5, 6, 7, 8, 2, 1]
    const valoresContados = valoresContar.filter(v => v === 3).length
    console.log(`El numero 3 se repite: ${valoresContados} veces`)
    console.log("")
}
contarElementos()