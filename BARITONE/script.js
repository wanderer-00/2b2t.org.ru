// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');

for(i=0; i<array.length; i++){
    cluster.innerHTML += `
        <div class="box">
            <h2 id='F'>${array[i].name}</h2>
            <p class='note noMark'>${array[i].note}</p>
        </div>`;
}