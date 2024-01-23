import { GameObject } from '../js3D/Main.js';
import { plansza } from "../js3D/plansza.js"

window.addEventListener("load", function () {

    plansza.generacja_plnaszy()

    GameObject.render()
})
