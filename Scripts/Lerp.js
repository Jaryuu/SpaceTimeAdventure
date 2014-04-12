#pragma strict

public var smooth : float;

private var newPosition : Vector3;
private var newIntensity : float;
private var newColour : Color;


function Awake ()
{
    newPosition = transform.position;
    newIntensity = light.intensity;
    newColour = light.color;
}


function Update ()
{
    PositionChanging();
    IntensityChanging();
    ColourChanging();
}


function PositionChanging ()
{
    var positionA : Vector3 = new Vector3(-5, 3, 0);
    var positionB : Vector3 = new Vector3(5, 3, 0);
    
    if(Input.GetKeyDown(KeyCode.Q))
        newPosition = positionA;
    if(Input.GetKeyDown(KeyCode.E))
        newPosition = positionB;
    
    transform.position = Vector3.Lerp(transform.position, newPosition, smooth * Time.deltaTime);
}


function IntensityChanging ()
{
    var intensityA : float = 0.5f;
    var intensityB : float = 5f;
    
    if(Input.GetKeyDown(KeyCode.A))
        newIntensity = intensityA;
    if(Input.GetKeyDown(KeyCode.D))
        newIntensity = intensityB;
    
    light.intensity = Mathf.Lerp(light.intensity, newIntensity, smooth * Time.deltaTime);
}


function ColourChanging ()
{
    var colourA : Color = Color.red;
    var colourB : Color = Color.green;
    
    if(Input.GetKeyDown(KeyCode.Z))
        newColour = colourA;
    if(Input.GetKeyDown(KeyCode.C))
        newColour = colourB;
    
    light.color = Color.Lerp(light.color, newColour, smooth * Time.deltaTime);
}