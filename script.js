function speak(texty) {
    var speakData = new SpeechSynthesisUtterance();
    speechSynthesis.cancel();
    speakData.volume = 4;
    speakData.rate = 0.5;
    speakData.pitch = 2;
    speakData.text = texty;
    speakData.lang = 'en';
    speakData.voice = voices[1]; 
    speechSynthesis.speak(speakData);
  }
  var temaSelect = "";
  var numarAleatoriu = 0;
  var numarAleatoriu2 = 0;
  var numarIstoric = 0;
  var numaristoric2 = 0;
  var voices = speechSynthesis.getVoices();
  
  function showPoem()//afisare poem
  {
    const poemWhere = document.getElementById("poez");
    numarAleatoriu = Math.floor(Math.random() * Object.keys(listaTitluri[temaSelect]).length);
    while(numarAleatoriu===numarIstoric)
    numarAleatoriu = Math.floor(Math.random() * Object.keys(listaTitluri[temaSelect]).length);
    poemWhere.innerHTML = poemList[listaTitluri[temaSelect][numarAleatoriu]];
    numarIstoric = numarAleatoriu;
    showImage();
  }
  function showImage()//afisare imagine
  {
    numarAleatoriu2 = Math.floor(Math.random() * imagineRep[temaSelect].length);
    while(numarAleatoriu2===numaristoric2)
    numarAleatoriu2 = Math.floor(Math.random() * imagineRep[temaSelect].length);
    img.src = imagineRep[temaSelect][numarAleatoriu2];
    numaristoric2 = numarAleatoriu2;
  }
  
  function searchPoem()//buton de searchbar
  {
    const poemWhere = document.getElementById("poez");
    var searchBar = document.getElementById("searchbox");
    poemWhere.innerHTML = poemList[searchBar.value];
    Object.keys(listaTitluri).forEach(element => {
      if(listaTitluri[element][listaTitluri[element].indexOf(searchBar.value)]!=undefined)
      temaSelect = element;
    });
    const img = document.getElementById("img");
    showImage();
  }
  function buttonTheme(a)//buton teme
  {
    temaSelect = a;
    showPoem();
  }