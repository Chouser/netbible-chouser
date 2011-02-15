// Chouser, Feb 2011
var audioHolder = document.getElementById('audioHolder');

var span = document.createElement('span');
span.style.font = '100%/1.2 Arial,Sans-serif normal';
span.style.color = '#333';
span.innerHTML =
  '<label for="toggle_refs" style="margin: 0 1em; display: inline">' +
  '<input id="toggle_refs" type="checkbox" checked="checked" /> Refs</lable>' +
  '<label for="toggle_notes" style="margin: 0 1em; display: inline">' +
  '<input id="toggle_notes" type="checkbox" checked="checked" /> Notes</lable>';
audioHolder.parentNode.insertBefore(span, audioHolder);

var toggle_refs = document.getElementById('toggle_refs');
var toggle_notes = document.getElementById('toggle_notes');

function update() {
  document.body.className =
  	(toggle_refs.checked ? '' : 'hide-refs') + ' ' +
  	(toggle_notes.checked ? '' : 'hide-notes');
};

toggle_refs.onchange=update;
toggle_notes.onchange=update;
