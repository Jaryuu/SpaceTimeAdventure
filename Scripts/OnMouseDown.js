#pragma strict

function Start ()
{
    Random.seed = Time.time;
}


function OnMouseDown ()
{
    var r : float = Random.Range(0f,1f);
    var g : float = Random.Range(0f,1f);
    var b : float = Random.Range(0f,1f);
    var randomColour : Color = new Color(r,g,b,1f);
    
    renderer.material.color = randomColour;
}