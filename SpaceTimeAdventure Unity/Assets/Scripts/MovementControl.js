#pragma strict

public var speed : float;
public var turnSpeed : float;


function Update ()
{
    Movement();
}


function Movement ()
{
    var forwardMovement : float = Input.GetAxis("Vertical") * speed * Time.deltaTime;
    var turnMovement : float = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;
    
    transform.Translate(Vector3.forward * forwardMovement);
    transform.Rotate(Vector3.up * turnMovement);
}