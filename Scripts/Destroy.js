#pragma strict

function Update ()
{
    if(Input.GetKey(KeyCode.D))
    {
        Lerp.Destroy(gameObject, 2f);
    }
}