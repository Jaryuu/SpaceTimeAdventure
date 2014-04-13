#pragma strict
//6.378 default de tierra
var size = 6.378;
static var scale = 1;
function Start () {
	this.gameObject.transform.localScale = Vector3(size*scale,size*scale,size*scale);
}

function Update () {
	this.gameObject.transform.localScale = Vector3(size*scale,size*scale,size*scale);
}