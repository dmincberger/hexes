import { Vector2, BoxGeometry, DoubleSide, MeshNormalMaterial, Mesh } from 'three'
export default class Pole {
    constructor(scene) {
        this.scene = scene
        for (let i = 0; i < 3; i++) {
            let geometry = new BoxGeometry(3, 2, 1)
            let mat = new MeshNormalMaterial({})
            let cube = new Mesh(geometry, mat)
            
            scene.add(cube)
        }
    }
}