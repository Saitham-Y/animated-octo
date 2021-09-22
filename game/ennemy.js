var Ennemy = function(name, position) {

    possibleDir = [0, Math.PI / 2];

    this.name = name;
    this.position = position;
    this.life = 3;
    this.bullets = new Array();
    this.direction = possibleDir[Math.floor(Math.random()*(possibleDir.length))];
    this.speed = 3;
    color = 0x800080;
    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.BoxGeometry(20, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;

    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};

Ennemy.prototype.move = function () {
    var moveTo = new THREE.Vector3(
        this.speed * Math.cos(this.direction) + this.position.x,
        this.speed * Math.sin(this.direction) + this.position.y,
        this.graphic.position.z
    );

    if ( this.position.x > WIDTH/2 || this.position.y > HEIGHT / 2){
        if (this.speed > 0){
            this.speed *= -1;
        }
    }
    if (this.position.x < - WIDTH / 2 || this.position.y < - HEIGHT / 2){
        if (this.speed < 0){
            this.speed *= -1;
        }
    }
    this.position = moveTo;


    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;
};