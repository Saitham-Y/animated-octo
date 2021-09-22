function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngleLeft = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second
    var rotateAngleRigth = (Math.PI / 2 * delta * 2) * -1;

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngleLeft);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngleRigth);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);
    
    ennemy1.move();
    player1.move();
    controls.update();

}