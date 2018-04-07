var minute;
var second;
var textnode;
var interval;
var wait;
var im;
var is;

wait=0

function timer_start(){
	document.selbox.elements[3].disabled=false;
	document.selbox.elements[4].disabled=false;
	
	document.selbox.elements[2].disabled=true;
	
	if(wait==0){
		var element_m=document.selbox.minute;
		var element_s=document.selbox.second;
	
	for(im=0;im<element_m.options.length;im++){
		if(element_m.options[im].selected){
			minute=element_m.options[im].value
		}
	}
	
	for(is=0;is<element_s.options.length;is++){
		if(element_s.options[is].selected){
			second=element_s.options[is].value
		}
	}
	}
	
	if(document.selbox.elements[0].value==0 && document.selbox.elements[1].value==0 ){
		alert("時間を入力してください")
		
		document.selbox.elements[2].disabled=false;
		document.selbox.elements[3].disabled=true;
		document.selbox.elements[4].disabled=true;
		return;
	}
	
	
	interval=setInterval("timer()",1000);
}
	
function timer(){
	
	
	if(minute<=0 && second<=0){
		document.getElementById("timer").innerHTML=show();
		alert("時間です");
		clearInterval(interval);		
		wait=0
		
		document.selbox.elements[2].disabled=false;
		document.selbox.elements[3].disabled=true;
		document.selbox.elements[4].disabled=true;
		
		return;
	}
	
	if(second<0){
		minute=minute-1;
					
		second=59;

	}
	
	
	document.getElementById("timer").innerHTML=show();
	
	second=second-1;

}

function show(){
	var result;
	result=minute+"分"+second+"秒";
	
	return result;
}


function timer_reset(){
	document.selbox.elements[2].disabled=false;
	document.selbox.elements[3].disabled=true;
	document.selbox.elements[4].disabled=true;
	
	clearInterval(interval);
	
	wait=0;
}

function timer_wait(){
	document.selbox.elements[3].disabled=true;
	document.selbox.elements[2].disabled=false;
	
	wait=1;
	
	clearInterval(interval);
	
	
}

