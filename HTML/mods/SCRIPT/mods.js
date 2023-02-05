var main = document.getElementsByTagName('main')[0];

for(i=0; i<10; i++){
	main.innerHTML += `
        <div class="box">
            <h2>${modsArray[i].name}</h2>
            <p>${modsArray[i].note}</p>
            <div class="poster" style="background-image: url(IMG/${modsArray[i].name.toLowerCase()}.png); aspect-ratio: 16/9"></div>
            <button class="download" ><a href="Nether/Nether.zip">DOWNLOAD</a></button>
        </div>
	`;
}