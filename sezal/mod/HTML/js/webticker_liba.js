
// WebTICKERaa by Mioplanet
// www.mioplanet.com

TICKERaa_CONTENT = document.getElementById("TICKERaa").innerHTML;
 
TICKERaa_RIGHTTOLEFT = false;
TICKERaa_SPEED = 2;
TICKERaa_STYLE = "font-family:Arial; font-size:12px; color:#444444";
TICKERaa_PAUSED = false;
TICKERaa_loop = true;

TICKERaa_start();

function TICKERaa_start() {
	var TICKERaaSupported = true;
	TICKERaa_WIDTH = document.getElementById("TICKERaa").style.width;
	var img = "<img src=TICKERaa_space.gif width="+TICKERaa_WIDTH+" height=0>";

	// Firefox
	if (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("Safari")!=-1) {
		document.getElementById("TICKERaa").innerHTML = "<TABLE  cellspacing='0' cellpadding='0' width='100%'><TR><TD nowrap='nowrap'>"+img+"<SPAN style='"+TICKERaa_STYLE+"' ID='TICKERaa_BODY' width='100%'>&nbsp;</SPAN>"+img+"</TD></TR></TABLE>";
		TICKERaaSupported = true;
	}
	// IE
	if (navigator.userAgent.indexOf("MSIE")!=-1 && navigator.userAgent.indexOf("Opera")==-1) {
		document.getElementById("TICKERaa").innerHTML = "<DIV nowrap='nowrap' style='width:100%;'>"+img+"<SPAN style='"+TICKERaa_STYLE+"' ID='TICKERaa_BODY' width='100%'></SPAN>"+img+"</DIV>";
		TICKERaaSupported = true;
	}
	if(!TICKERaaSupported) document.getElementById("TICKERaa").outerHTML = ""; else {
		document.getElementById("TICKERaa").scrollLeft = TICKERaa_RIGHTTOLEFT ? document.getElementById("TICKERaa").scrollWidth - document.getElementById("TICKERaa").offsetWidth : 0;
		document.getElementById("TICKERaa_BODY").innerHTML = TICKERaa_CONTENT;
		document.getElementById("TICKERaa").style.display="block";
		TICKERaa_tick();
	}
}

function TICKERaa_tick() {
	if(!TICKERaa_PAUSED) document.getElementById("TICKERaa").scrollLeft += TICKERaa_SPEED * (TICKERaa_RIGHTTOLEFT ? -1 : 1);
	if(TICKERaa_RIGHTTOLEFT && document.getElementById("TICKERaa").scrollLeft <= 0) document.getElementById("TICKERaa").scrollLeft = document.getElementById("TICKERaa").scrollWidth - document.getElementById("TICKERaa").offsetWidth;
	if(!TICKERaa_RIGHTTOLEFT && document.getElementById("TICKERaa").scrollLeft >= document.getElementById("TICKERaa").scrollWidth - document.getElementById("TICKERaa").offsetWidth) document.getElementById("TICKERaa").scrollLeft = 0;
	window.setTimeout("TICKERaa_tick()", 30);
}
