#pragma strict

var theSkin : GUISkin;
function Start () {

}

function Update () {

}

function OnGUI () {
	GUI.skin = theSkin;
	GUI.Label (new Rect (100, 100, 100, 100), "" );
}