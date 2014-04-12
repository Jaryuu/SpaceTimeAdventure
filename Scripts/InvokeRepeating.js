#pragma strict

var target : GameObject;


function Start()
{
    InvokeRepeating("SpawnObject", 2, 1);
}

function SpawnObject()
{
    var x : float = Random.Range(-2.0f, 2.0f);
    var z : float = Random.Range(-2.0f, 2.0f);
    Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
}