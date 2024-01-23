import {
    IcosahedronGeometry,
    MeshNormalMaterial,
    Mesh,
} from "three";

export default class Ico {

    constructor(scene) {
        this.scene = scene;
        this.geometry = new IcosahedronGeometry();
        this.material = new MeshNormalMaterial();
        this.mesh = new Mesh(this.geometry, this.material);
        this.mesh.position.set(100, 100, 100)
        this.scene.add(this.mesh)
    }
    update() {
        this.mesh.rotation.y += 0.01
    }

}
