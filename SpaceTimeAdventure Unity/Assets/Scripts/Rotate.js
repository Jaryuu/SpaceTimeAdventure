#pragma strict


var rotateSpeed = 5.0f;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up,rotateSpeed *  Time.deltaTime);
}