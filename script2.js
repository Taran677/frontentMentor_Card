let group = document.getElementsByClassName("form")
let innerHTMLs = {}
for (let j = 0; j < group.length; j++) {
    innerHTMLs[j] = group[j].innerHTML
    group[j].setAttribute("spellCheck", "false")
}


const clickHandle = (i) => {

    let activate = async () => {
        return new Promise((resolve, reject) => {
            group = Array.from(group)
            group.forEach(element => {
                element.dataset.state = "passive"
            });
            let selectedForm = group[i]
            selectedForm.dataset.state = "active"
            resolve("done")
        })
    }

    let editContent = async () => {
        return new Promise((resolve, reject) => {
            for (let k = 0; k < group.length; k++) {
                group = Array.from(group)
                if (group[k].innerHTML == "") {
                    group[k].innerHTML = innerHTMLs[k]
                }
                else {
                    group[k].toggleAttribute("id")
                    group[k].setAttribute("id", "colorDark")
                }
            }
            let activeElement = document.querySelector("[data-state='active']")
            activeElement.setAttribute("contentEditable", "true")
            resolve("done")
        })
    }



    let runner = async () => {
        await activate()
        await editContent()
    }
    runner()
}
