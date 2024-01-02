import CustomDiv from "./modules/js/HexDiv.js"

const kolor = "gray"
let sciezka = "clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"

let rozmiar = document.getElementById("size")
let plansza = document.getElementById("plansza")
let typy = document.getElementById("game_items")
let server_load = document.getElementById("load")
let server_save = document.getElementById("save")
let json_file = document.getElementById("json_file")
let json_text = document.getElementById("json_text")
let prevhex
let ukos

console.log(json_file);
let dane = {}
json_text.innerHTML = JSON.stringify(dane, null, 5)
let typ = "WALL"
dane["level"] = []
let idlist = []

server_save.addEventListener("click", function () {
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
                            customDiv.setText(identyfikator)
                            customDiv.getRoot().innerHTML = `${dane["level"][y]["dirout"]}-->`
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
                                json_text.innerHTML = JSON.stringify(dane, null, 5)
                                break
                            }
                        }
                    } else {
                        if (idlist.length == 0) {
                            let hex = {}
                            hex["id"] = this.id
                            hex["x"] = this.id % rozmiar.value
                            hex["z"] = Math.floor(this.id / rozmiar.value)
                            hex["dirout"] = ""
                            hex["dirin"] = ""
                            hex["type"] = typ
                            dane["level"].push(hex)
                            idlist.push(this.id)
                            dane["level"].sort((a, b) => a.id - b.id)
                            prevhex = hex
                            json_text.innerHTML = JSON.stringify(dane, null, 5)
                        } else {
                            if ((Math.abs(this.id % rozmiar.value - prevhex["x"]) == 1 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 0)
                                || (Math.abs(this.id % rozmiar.value - prevhex["x"]) == 0 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 1)
                                || (Math.abs(this.id % rozmiar.value - prevhex["x"]) == 1 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 1)) {
                                let hex = {}
                                hex["id"] = this.id
                                hex["x"] = this.id % rozmiar.value
                                hex["z"] = Math.floor(this.id / rozmiar.value)
                                let dir_z = prevhex["z"] - hex["z"]
                                let dir_x = prevhex["x"] - hex["x"]
                                if (dir_z == 0 && dir_x == -1) {
                                    hex["dirout"] = 2
                                    hex["dirin"] = 5
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == 0 && dir_x == 1) {
                                    hex["dirout"] = 5
                                    hex["dirin"] = 2
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == -1 && dir_x == 0) {
                                    hex["dirout"] = 3
                                    hex["dirin"] = 0
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == -1 && dir_x == -1) {
                                    hex["dirout"] = 2
                                    hex["dirin"] = 5
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == -1 && dir_x == 1) {
                                    hex["dirout"] = 2
                                    hex["dirin"] = 5
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == 1 && dir_x == 0) {
                                    hex["dirout"] = 0
                                    hex["dirin"] = 3
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == 1 && dir_x == 1) {
                                    hex["dirout"] = 5
                                    hex["dirin"] = 2
                                    this.innerHTML = `${hex["dirout"]}^`
                                } else if (dir_z == 1 && dir_x == -1) {
                                    hex["dirout"] = 1
                                    hex["dirin"] = 4
                                    this.innerHTML = `${hex["dirout"]}^`
                                }
                                hex["type"] = typ
                                dane["level"].push(hex)
                                idlist.push(this.id)
                                prevhex = hex
                                dane["level"].sort((a, b) => a.id - b.id)
                                json_text.innerHTML = JSON.stringify(dane, null, 5)
                            } else {
                                alert("Wybierz pole obok wybranego wcześniej!")
                                console.log(this.id % rozmiar.value - prevhex["x"]);
                                console.log(Math.floor(this.id / rozmiar.value) - prevhex["z"]);
                            }
                        }
                    }
                })
            }
            let curr_id = idlist[idlist.length - 1]
            for (let y = 0; y < dane["level"].length; y++) {
                if (dane["level"][y]["id"] == curr_id) {
                    prevhex = dane["level"][y]
                    console.log("LOLLFDFDFS");
                    console.log(prevhex);
                    console.log(idlist);
                    break
                }
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
                        json_text.innerHTML = JSON.stringify(dane, null, 5)

                        break
                    }
                }
            } else {
                if (idlist.length == 0) {
                    let hex = {}
                    hex["id"] = this.id
                    hex["x"] = this.id % rozmiar.value
                    hex["z"] = Math.floor(this.id / rozmiar.value)
                    hex["dirout"] = ""
                    hex["dirin"] = ""
                    hex["type"] = typ
                    dane["level"].push(hex)
                    idlist.push(this.id)
                    dane["level"].sort((a, b) => a.id - b.id)
                    prevhex = hex
                    json_text.innerHTML = JSON.stringify(dane, null, 5)
                } else {
                    if ((Math.abs(this.id % rozmiar.value - prevhex["x"]) == 1 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 0)
                        || (Math.abs(this.id % rozmiar.value - prevhex["x"]) == 0 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 1)
                        || (Math.abs(this.id % rozmiar.value - prevhex["x"]) == 1 && Math.abs(Math.floor(this.id / rozmiar.value) - prevhex["z"]) == 1)) {
                        let hex = {}
                        hex["id"] = this.id
                        hex["x"] = this.id % rozmiar.value
                        hex["z"] = Math.floor(this.id / rozmiar.value)
                        let dir_z = prevhex["z"] - hex["z"]
                        let dir_x = prevhex["x"] - hex["x"]
                        if (dir_z == 0 && dir_x == -1) {
                            hex["dirout"] = 2
                            hex["dirin"] = 5
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == 0 && dir_x == 1) {
                            hex["dirout"] = 5
                            hex["dirin"] = 2
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == -1 && dir_x == 0) {
                            hex["dirout"] = 3
                            hex["dirin"] = 0
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == -1 && dir_x == -1) {
                            hex["dirout"] = 2
                            hex["dirin"] = 5
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == -1 && dir_x == 1) {
                            hex["dirout"] = 2
                            hex["dirin"] = 5
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == 1 && dir_x == 0) {
                            hex["dirout"] = 0
                            hex["dirin"] = 3
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == 1 && dir_x == 1) {
                            hex["dirout"] = 5
                            hex["dirin"] = 2
                            this.innerHTML = `${hex["dirout"]}^`

                        } else if (dir_z == 1 && dir_x == -1) {
                            hex["dirout"] = 1
                            hex["dirin"] = 4
                            this.innerHTML = `${hex["dirout"]}^`
                        }
                        hex["type"] = typ
                        dane["level"].push(hex)
                        idlist.push(this.id)
                        prevhex = hex
                        dane["level"].sort((a, b) => a.id - b.id)
                        json_text.innerHTML = JSON.stringify(dane, null, 5)
                        this.style.transform = `rotate(${hex["dirout"] * 60}deg)`
                        console.log(idlist);
                    } else {
                        alert("Wybierz pole obok wybranego wcześniej!")
                        console.log(this.id % rozmiar.value - prevhex["x"]);
                        console.log(Math.floor(this.id / rozmiar.value) - prevhex["z"]);
                    }
                }
            }
        })
    }
})
