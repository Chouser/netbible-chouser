// An ugly hack by Chouser
var audioHolder = document.getElementById('audioHolder');

var span = document.createElement('span');
span.style.font = '100%/1.2 Arial,Sans-serif normal';
span.style.color = '#333';
span.innerHTML =
  '<label for="tglv" style="margin: 0 1em; display: inline">' +
  '<input id="tglv" type="checkbox" checked="checked" /> Refs</lable>' +
  '<label for="tgln" style="margin: 0 1em; display: inline">' +
  '<input id="tgln" type="checkbox" checked="checked" /> Notes</lable>';
audioHolder.parentNode.insertBefore(span, audioHolder);

var tglv = document.getElementById('tglv');
var tgln = document.getElementById('tgln');

var show_refs = true;
var show_notes = true;

tglv.onclick=function() {
  if(show_refs) {
	document.styleSheets[0].insertRule('.vref{display:none}', 0);
	show_refs = false;
  }
  else {
	document.styleSheets[0].deleteRule(0);
	show_refs = true;
  }
};
tgln.onclick=function() {
  if(show_refs) {
	document.styleSheets[1].insertRule('.chunk sup{display:none}', 0);
	show_notes = false;
  }
  else {
	document.styleSheets[1].deleteRule(0);
	show_notes = true;
  }
};
