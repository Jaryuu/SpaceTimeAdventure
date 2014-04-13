#pragma strict

var Popup: boolean;
var Facts1: String;
var Facts2: String;
var Facts3: String;
var Facts4: String;
var Coordenadas: String;
var Info: String;
var Cuerpo: String;

function Start () {
	var url = "http://spaceadventure.webatu.com/obtenerData.php?nombre="+Cuerpo+"&begin=2014-04-12T00:00:00Z&end=2014-04-12T01:00:00Z";
	var www : WWW = new WWW (url);

	// wait for request to complete
	yield www;

	// and check for errors
	if (www.error == null)
	{
		Debug.Log("Data: " + www.text);
		var data = www.text;
	    var values = data.Split("|"[0]); 
	          
//	    Debug.Log("Informacion: " + values[values.length-2]);
	    var data2 = values[values.length-2].Split(","[0]);
	    
	    Coordenadas="Coordenadas: \n X: " + data2[1]+ "\n Y: "+data2[2] +"\n Z: "+data2[3] ; 
	} else {
	// something wrong!
		Debug.Log("WWW Error: "+ www.error);
	}

}

function Update () {

}

function OnMouseDown () {
	Popup=true;
	
}

function DrawInfo(){
	var rect=new Rect(150,120, 300, 200);
	var close=new Rect(390,120,60,60);
	
	if (Popup){
		 GUI.Box(rect,Info);
		 if(GUI.Button(new Rect(110, 140, 80, 20), "Coordinates")){
		 	Info=Coordenadas;
		 }
		 if(GUI.Button(new Rect(110, 170, 80, 20), "Facts")){
		 	Info=Facts1+"\n"+Facts2+"\n"+Facts3+"\n"+Facts4+"\n";
		 }
		 if (GUI.Button(close,"X"))
		{
			Popup = false;
		}
	}

}

function OnGUI(){
	DrawInfo();
}