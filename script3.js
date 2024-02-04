let Submit = document.getElementsByClassName("confirm")[0]
let name = document.getElementsByClassName("namespace")[0]
let cvc = document.getElementsByClassName("cvc")[0]
// console.log(name)

Submit.onclick = () => {
    let items = {}
    let group2 = document.getElementsByClassName("form")
    group2 = Array.from(group2)
    let number1 = group2[1].innerHTML.replaceAll(' ', '').slice(0, 4)
    let number2 = group2[1].innerHTML.replaceAll(' ', '').slice(4, 8)
    let number3 = group2[1].innerHTML.replaceAll(' ', '').slice(8, 12)
    let number4 = group2[1].innerHTML.replaceAll(' ', '').slice(12, 16)

    items = group2
    // console.log(items)
    for (let l = 0; l < 4; l++) {
        items[l + 4] = items[l + 1]
        let numberred = [number1, number2, number3, number4]
        items[l + 1] = document.getElementsByClassName("dig1")[l].innerHTML = numberred[l]
    }
    name.innerHTML = group2[0].innerHTML.toUpperCase()

    let mmdd = group2[5].innerHTML + group2[6].innerHTML
    mmdd = mmdd.replaceAll(' ', '')
    let str1 = mmdd.slice(0, 2)
    let str2 = mmdd.slice(2, 4)
    let dateExp = str1 + "/" + str2
    cvc.innerHTML = dateExp

    
}