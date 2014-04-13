#pragma strict
var mercury : Transform;
var venus : Transform;
var earth : Transform;
var mars : Transform;
var jupiter : Transform;
var saturn : Transform;
var uranus : Transform;
var neptune : Transform;
var pluto : Transform;
var iss: Transform;
var spitzer: Transform;
var rosetta: Transform;
var cam1 : Camera;
var cam2 : Camera;
var cam3 : Camera;
var cam4 : Camera;
var cam5 : Camera;
var cam6 : Camera;
var cam7 : Camera;
var cam8 : Camera;
var cam9 : Camera;
static var planet : Transform;
var range: float;
var info=new Rect(150,120, 300, 200);
var close=new Rect(390,120,60,60);
var Popup = true;
var Info: String;

var speed = 0.1;

function OnGUI () {
	// Make a background box
	GUI.Box (Rect (10,10,270,200), "Choose a planet or mission");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,40,80,20), "Mercury")) {
		planet=mercury;
		cam1.enabled = true;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,60,80,20), "Venus")) {
		planet=venus;
		cam1.enabled = false;
		cam2.enabled = true;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,80,80,20), "Earth")) {
		planet=earth;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = true;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,100,80,20), "Mars")) {
		planet=mars;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = true;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,120,80,20), "Jupiter")) {
		planet=jupiter;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = true;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,140,80,20), "Saturn")) {
		planet=saturn;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = true;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,160,80,20), "Uranus")) {
		planet=uranus;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = true;
		cam8.enabled = false;
		cam9.enabled = false;
		
	}
	if (GUI.Button (Rect (20,180,80,20), "Neptune")) {
		planet=neptune;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = true;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (20,200,80,20), "Pluto")) {
		planet=pluto;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = true;
	}
	if (GUI.Button (Rect (105,40,80,20), "ISS")) {
		planet=iss;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = true;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (105,60,80,20), "Spitzer")) {
		planet=spitzer;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = true;
		cam4.enabled = false;
		cam5.enabled = false;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
	if (GUI.Button (Rect (105,80,80,20), "Rosetta")) {
		planet=rosetta;
		cam1.enabled = false;
		cam2.enabled = false;
		cam3.enabled = false;
		cam4.enabled = false;
		cam5.enabled = true;
		cam6.enabled = false;
		cam7.enabled = false;
		cam8.enabled = false;
		cam9.enabled = false;
	}
		
}


function Update (){
	transform.LookAt(planet);
}