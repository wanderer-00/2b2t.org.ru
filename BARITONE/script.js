// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');

for(i=0; i<array.length; i++){
    let box = document.createElement('div');
    box.className = "box";
    cluster.append(box);
    
    let name = document.createElement('h2');
    name.innerHTML = array[i].name;
    box.append(name)
    
    let note = document.createElement('p');
    note.innerHTML = array[i].note;
    box.append(note)
}