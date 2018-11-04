//Create a post-it wall to save a simple text note in Local Storage

/*getStorage();

function getStorage() {
    notes = JSON.parse(localStorage.getItem('note'));
    console.log(notes);
    
    var frag = document.createDocumentFragment();
    frag.appendChild(notes);
    document.getElementById('container').appendChild(frag);
    
}*/

document.getElementById('save').addEventListener('click', storageNote);
function storageNote() {
    var frag = document.createDocumentFragment();
    var span = document.createElement('span');
    span.innerHTML = document.getElementById('title-note').value;
    var p = document.createElement('p');
    p.innerHTML = document.getElementById('text-note').value;
    var div = document.createElement('div');
    div.appendChild(span);
    div.appendChild(p);
    div.className = 'note';
    frag.appendChild(div);
    document.getElementById('container').appendChild(frag);
}