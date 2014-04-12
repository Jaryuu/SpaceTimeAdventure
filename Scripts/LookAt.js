#pragma strict
//Cambiar target, se aplica a un ojeto.
public var target : Transform;

function Update ()
{
    transform.LookAt(target);
}