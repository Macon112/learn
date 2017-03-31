// JavaScript Document
function init(){
	var act=document.activeElement.id;
	if(act="demo"){
		b()}
}
//判断哪个获取了焦点
function init(){
	var act=document.activeElement.id;
	if(act=="demo"){
	document.getElementById("tips1").innerHTML="必填，长度为4~16个字符";
    document.getElementById("tips1").style.color="#B8860B";
    document.getElementById("demo").style.borderColor="#B8860B";	
	}
	else{b()}
}