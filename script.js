var minute;
var second;
var textnode;
var interval;
var wait;
var im;
var is;
var so;
var sound;
var audioElem;
var audioElembp;

window.onload=function(){
wait=0;
minute=0;
second=0;
audioElem=new Audio();
audioElembp=new Audio();
document.getElementById("minute").innerHTML=show_m();
document.getElementById("second").innerHTML=show_s();

if(audioElembp.canPlayType('audio/mp3')){

	audioElembp.src="sound/beep.mp3";
	
}else if(audioElembp.canPlayType('audio/wav')){

	audioElembp.src="sound/beep.wav";

}
};

function timaer_start(){

	audioElembp.play();

	document.selbox.sound.disabled=true;
	document.selbox.start.disabled=true;	
	document.selbox.wait.disabled=false;
	document.selbox.reset.disabled=false;

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
	
	if(document.selbox.minute.value==0 && document.selbox.second.value==0 ){
		alert("時間を入力してください")
		
		document.selbox.sound.disabled=false;
		document.selbox.start.disabled=false;
		document.selbox.wait.disabled=true;
		document.selbox.reset.disabled=true;
		return;
	}
	

	var element_so=document.selbox.sound;

	for(so=0;so<element_so.options.length;so++){
		if(element_so.options[so].selected){
			sound=element_so.options[so].value;
		}
	}
	
	if(audioElem.canPlayType('audio/mp3')){

		audioElem.src="sound/"+ sound +".mp3";
	
	}else if(audioElem.canPlayType('audio/wav')){

		audioElem.src="sound/"+ sound +".wav";

	}

	interval=setInterval("timer()",1000);
}
	
function timer(){
	
	
	if(minute<=0 && second<=0){
		second=0
		document.getElementById("minute").innerHTML=show_m();
		document.getElementById("second").innerHTML=show_s();

		audioElem.play();
		audioElem.loop=true;

		alert("時間です");

		audioElembp.play();

		audioElem.pause();

		clearInterval(interval);		
		document.selbox.start.disabled=false;
		wait=0
		
		document.selbox.sound.disabled=false;
		document.selbox.start.disabled=false;
		document.selbox.wait.disabled=true;
		document.selbox.reset.disabled=true;
		
		return;
	}
	
	if(second<0){
		minute=minute-1;
					
		second=59;

	}
	
	
	document.getElementById("minute").innerHTML=show_m();
	document.getElementById("second").innerHTML=show_s();
	
	second=second-1;

}

function show_m(){
	var result_m;
	result_m=minute;
	
	return result_m;
}

function show_s(){
	var result_s;
	result_s=second;
	
	return result_s;

}

function timer_reset(){
	
	audioElembp.play();	
	
	document.selbox.sound.disabled=false;
	document.selbox.start.disabled=false;
	document.selbox.wait.disabled=true;
	document.selbox.reset.disabled=true;
	
	clearInterval(interval);
	
	wait=0;

	minute=0;
	second=0;

	document.getElementById("minute").innerHTML=show_m();
	document.getElementById("second").innerHTML=show_s();
}

function timer_wait(){

	audioElembp.play();

	document.selbox.sound.disabled=false;
	document.selbox.wait.disabled=true;
	document.selbox.start.disabled=false;
	
	wait=1;
	
	clearInterval(interval);
	
	
}

