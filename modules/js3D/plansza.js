import { PlaneGeometry, AxesHelper, Mesh, MeshBasicMaterial, DoubleSide, BoxGeometry } from 'three'
import { scene } from './Main'
let plansza = {
    generacja_plnaszy() {
        let linie = new AxesHelper(100)
        let geometry = new PlaneGeometry(500, 500)
        const material = new MeshBasicMaterial({ color: 0xffff00, side: DoubleSide });
        const plane = new Mesh(geometry, material);
        plane.rotateX(1.57)
        scene.add(plane);
        scene.add(linie)
    }
}

export { plansza }