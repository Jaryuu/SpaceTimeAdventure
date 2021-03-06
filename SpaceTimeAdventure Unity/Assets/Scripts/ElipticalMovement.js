﻿    var epsilon : float;
    static var time : float;
    var year : float;
    var semiMajorAxis : float;
    var xInitial : float;
    var zInitial : float;
    var X : float;
    var Z : float;
    
   	function Start(){
   		this.gameObject.transform.position = Vector3(xInitial,0,zInitial);
   	}
     
    function Update () {
    	X = semiMajorAxis*(1- epsilon*epsilon)/(1+ (epsilon* Mathf.Cos(2*(Mathf.PI)*time/year)))*Mathf.Cos(2*(Mathf.PI)*time/year)/100000;
    	Z = semiMajorAxis*(1- epsilon*epsilon)/(1+ (epsilon* Mathf.Cos(2*(Mathf.PI)*time/year)))*Mathf.Sin(2*(Mathf.PI)*time/year)/100000;
    	this.gameObject.transform.position = Vector3(X,0,Z);
		time+=0.01;
    }