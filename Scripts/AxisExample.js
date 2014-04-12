#pragma strict

public var range : float;
public var textOutput : GUIText;


function Update () 
{
    var h : float = Input.GetAxis("Horizontal");
    var xPos : float = h * range;
    
    transform.position = new Vector3(xPos, 2f, 0);
    textOutput.text = "Value Returned: "+h.ToString("F2");  
}