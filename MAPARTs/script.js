// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷
const cluster = document.getElementById('cluster');
let hp = [];

const load = async () => {
    try {
        const res = await fetch('cfg.js');
        hp = await res.json();
        console.log(hp);
        displayCharacters(hp);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        return`
            <div class="box">
                <a href='${character.url}'>
                    <h2 id='F'>${character.name}</h2>
                </a>
                <p class='note noMark'>${character.note}</p>
                <img src="IMGs/${character.img[0]}">
            </div>
        `;
        }).join('');
    cluster.innerHTML = htmlString;
};

load();

function copyText() {
  var copyText = document.getElementById('');

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}