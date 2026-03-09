let language = "ar";

fetch("quran.json")
.then(res => res.json())
.then(data => {

const list = document.getElementById("surahList");

function showList(){

list.innerHTML = "";

data.forEach(surah => {

let name = surah.name;

if(language === "tr"){
  name = surah.turkishName;
  }

  if(language === "en"){
  name = surah.englishName;


  }const item = document.createElement("div");

  item.className = "surahItem";

  item.innerText = surah.id + " - " + name;

  item.onclick = () => {showSurah(surah);
  };

  list.appendChild(item);

  });

  }function showSurah(surah){

  let ayahHTML = "";

  surah.ayahs.forEach((ayah,index)=>{
  ayahHTML += `<span class="ayah">${ayah} <span class="num">${index+1}</span></p>`;
  });

  document.body.innerHTML = `<div class="header">
  <h2>${surah.name}</h2>
  <button onclick="location.reload()"><-]</button>
  </div><div class="besmela">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>

  <div class="ayahs">
  ${ayahHTML}
  </div>
  `;

  }

  showList();

  document.getElementById("search").oninput = function(){

  let value = this.value.toLowerCase();

  const items = document.querySelectorAll(".surahItem");

  items.forEach(item => {

  if(item.innerText.toLowerCase().includes(value)){
  item.style.display = "block";
  }else{
  item.style.display = "none";
  }

  });

  };

  document.getElementById("language").onchange = function(){
  language = this.value;showList();
  };

  });