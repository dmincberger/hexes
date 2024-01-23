import CustomDiv from "./modules/js/HexDiv"
const kolor = "gray"
let sciezka = "clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"

let rozmiar = document.getElementById("size")
let plansza = document.getElementById("plansza")
let typy = document.getElementById("game_items")
let server_load = document.getElementById("load")
let server_save = document.getElementById("save")
let json_file = document.getElementById("json_file")
let json_text = document.getElementById("json_text")
let hex_site = document.getElementById("hex")
let prevhex
let ukos

console.log(json_file);
let dane = {}
json_text.innerHTML = JSON.stringify(dane, null, 5)
let typ = "WALL"
dane["level"] = []
let idlist = []

server_save.addEventListener("click", function () {
    dane["lastid"] = idlist[idlist.length - 1]
    const saveEndpoint = '/saveData';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dane, null, 5),
    };

    fetch(saveEndpoint, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
        })
        .catch(error => {
            console.error('Error during data save:', error);
        });
});


server_load.addEventListener("click", function () {
    const saveEndpoint = '/loadData';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dane, null, 5),
    };

    fetch(saveEndpoint, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dane = data
            console.log("TO JEST LOADED DANE: ", toString(dane));
            json_text.innerHTML = JSON.stringify(dane, null, 5)
            idlist = []
            for (let i = 0; i < dane["level"].length; i++) {
                idlist.push(dane["level"][i]["id"])
            }
            rozmiar.value = dane["size"]
            plansza.replaceChildren()
            for (let j = 0; j < rozmiar.value; j++) {
                let gora = (j * 100)
                for (let i = 0; i < rozmiar.value; i++) {
                    let lewo = (i * 100) + 700
                    let identyfikator = (rozmiar.value * j) + i
                    const customDiv = new CustomDiv(100, 100, kolor, sciezka, identyfikator)
                    if (i % 2 == 1) {
                        customDiv.setXY(lewo, (gora + 60))
                    }
                    if (i % 2 == 0) {
                        customDiv.setXY(lewo, (gora))
                    }
                    for (let y = 0; y < dane["level"].length; y++) {
                        if (dane["level"][y]["id"] == identyfikator) {
                            customDiv.getRoot().innerHTML = `${dane["level"][y]["dirout"]}^`
                            customDiv.getRoot().style.transform = `rotate(${dane["level"][y]["dirout"] * 60}deg)`
                            customDiv.getRoot().innerHTML = `${dane["level"][y]["dirout"]}`
                            break
                        }
                    }
                    plansza.appendChild(customDiv.getRoot())
                }
            }
            let divy = document.querySelector("#plansza")

            for (let i = 0; i < divy.children.length; i++) {
                divy.children[i].addEventListener("click", function () {
                    console.log(dane);
                    if (idlist.includes(this.id)) {
                        for (let i = 0; i < dane["level"].length; i++) {
                            if (dane["level"][i]["id"] == this.id) {
                                dane["level"][i]["type"] = typ
                                dane["level"][i]["dirin"] = parseInt((dane["level"][i]["dirin"] + 1) % 6)
                                dane["level"][i]["dirout"] = parseInt((dane["level"][i]["dirout"] + 1) % 6)
                                this.style.transform = `rotate(${dane["level"][i]["dirout"] * 60}deg)`
                                this.innerHTML = `${dane["level"][i]["dirout"]}`
                                json_text.innerHTML = JSON.stringify(dane, null, 5)
                                break
                            }
                        }
                    } else {
                        idlist.push(this.id)
                        let hex = {}
                        hex["id"] = this.id
                        hex["dirout"] = 0
                        hex["dirin"] = 3
                        hex["x"] = this.id % rozmiar.value
                        hex["z"] = Math.floor(this.id / rozmiar.value)
                        hex["type"] = typ
                        dane["level"].push(hex)
                        this.style.transform = `rotate(${hex["dirout"] * 60}deg)`
                        this.innerHTML = `${hex["dirout"]}`
                        json_text.innerHTML = JSON.stringify(dane, null, 5)
                    }
                })
            }
        })
        .catch(error => {
            console.error('Error during data save:', error);
        });
});

server_save.value = dane

for (let i = 0; i < typy.children.length; i++) {
    typy.children[i].addEventListener("click", function () {
        typ = this.value
    })
}

rozmiar.addEventListener("change", function () {
    dane = {}
    dane["level"] = []
    dane["size"] = rozmiar.value
    idlist = []
    json_text.innerHTML = JSON.stringify(dane, null, 5)
    plansza.replaceChildren()
    for (let j = 0; j < rozmiar.value; j++) {
        let gora = (j * 100)
        for (let i = 0; i < rozmiar.value; i++) {
            let lewo = (i * 100) + 700
            let identyfikator = (rozmiar.value * j) + i
            const customDiv = new CustomDiv(100, 100, kolor, sciezka, identyfikator)
            if (i % 2 == 1) {
                customDiv.setXY(lewo, (gora + 60))
            }
            if (i % 2 == 0) {
                customDiv.setXY(lewo, (gora))
            }
            console.log(i);
            plansza.appendChild(customDiv.getRoot())
        }
    }
    let divy = document.querySelector("#plansza")
    for (let i = 0; i < divy.children.length; i++) {
        divy.children[i].addEventListener("click", function () {
            console.log(dane);
            if (idlist.includes(this.id)) {
                for (let i = 0; i < dane["level"].length; i++) {
                    if (dane["level"][i]["id"] == this.id) {
                        dane["level"][i]["type"] = typ
                        dane["level"][i]["dirin"] = parseInt((dane["level"][i]["dirin"] + 1) % 6)
                        dane["level"][i]["dirout"] = parseInt((dane["level"][i]["dirout"] + 1) % 6)
                        this.style.transform = `rotate(${dane["level"][i]["dirout"] * 60}deg)`
                        this.innerHTML = `${dane["level"][i]["dirout"]}`
                        json_text.innerHTML = JSON.stringify(dane, null, 5)
                        break
                    }
                }
            } else {
                idlist.push(this.id)
                let hex = {}
                hex["id"] = this.id
                hex["dirout"] = 0
                hex["dirin"] = 3
                hex["x"] = this.id % rozmiar.value
                hex["z"] = Math.floor(this.id / rozmiar.value)
                hex["type"] = typ
                dane["level"].push(hex)
                this.style.transform = `rotate(${hex["dirout"] * 60}deg)`
                this.innerHTML = `${hex["dirout"]}`
                json_text.innerHTML = JSON.stringify(dane, null, 5)
            }
        })
    }
})