#pragma strict
import System;

var scale1=1;
var scale2=100;

function Start () {
	Rescale.scale = scale2;
}

function Update () {
	//Debug.Log(System.DateTime.Now);
	if(Input.GetKey(KeyCode.Alpha1)){
		Rescale.scale = scale1;
	}
	else if(Input.GetKey(KeyCode.Alpha2)){
		Rescale.scale = scale2;
	}
	
}