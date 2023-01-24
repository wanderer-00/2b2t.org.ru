// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');

for(i=0; i<array.length; i++){
    let box = document.createElement('div');
    box.className = "box";
    cluster.append(box);
    
    let name = document.createElement('label');
    name.className = "name";
    name.innerHTML = '#' + array[i].name + ' ';
    box.append(name)
    
    let arg_box = document.createElement('select');
    box.append(arg_box)
    
    for(n=0; n<array[i].arg.length; n++){
        let arg = document.createElement('option');
        arg.innerHTML = array[i].arg[n];
        arg_box.append(arg)
    }
    
    let note = document.createElement('p');
    note.innerHTML = array[i].note;
    box.append(note)
}

//                <label for="">производитель:</label>
//                <select name="" id="">
//                    <option value="">---</option>
//                    <option value="">AMD</option>
//                    <option value="">Intel</option>
//                </select>