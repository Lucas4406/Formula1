const textEchipa = document.querySelectorAll(".text-echipa")
const textTara = document.querySelectorAll(".text-tara")
const textPodium = document.querySelectorAll(".text-podium")
const textPuncte = document.querySelectorAll(".text-puncte")
const textGp = document.querySelectorAll(".text-gp")
const textCampionate = document.querySelectorAll(".text-campionate")
const textClCursa = document.querySelectorAll(".text-cl-cursa")
const textClQuali = document.querySelectorAll(".text-cl-quali")
const textData = document.querySelectorAll(".text-data")
const textLoc = document.querySelectorAll(".text-loc")
fetch("/json/piloti.json")
.then(response => 
    response.json()
)
.then(data => {
    //Charles
    textEchipa[0].innerText =" " +  data.piloti[0].Echipa
    textTara[0].innerText=" " + data.piloti[0].Tara
    textPodium[0].innerText=" " + data.piloti[0].Podium
    textPuncte[0].innerText=" " + data.piloti[0].Puncte
    textGp[0].innerText=" " + data.piloti[0].Gp
    textCampionate[0].innerText=" " + data.piloti[0].Campionate
    textClCursa[0].innerText=" " + data.piloti[0].ClCursa
    textClQuali[0].innerText=" " + data.piloti[0].ClQuali
    textData[0].innerText=" " + data.piloti[0].Data
    textLoc[0].innerText=" " + data.piloti[0].Loc
    //Carlos
    textEchipa[1].innerText =" " +  data.piloti[1].Echipa
    textTara[1].innerText=" " + data.piloti[1].Tara
    textPodium[1].innerText=" " + data.piloti[1].Podium
    textPuncte[1].innerText=" " + data.piloti[1].Puncte
    textGp[1].innerText=" " + data.piloti[1].Gp
    textCampionate[1].innerText=" " + data.piloti[1].Campionate
    textClCursa[1].innerText=" " + data.piloti[1].ClCursa
    textClQuali[1].innerText=" " + data.piloti[1].ClQuali
    textData[1].innerText=" " + data.piloti[1].Data
    textLoc[1].innerText=" " + data.piloti[1].Loc
    //Lewis
    textEchipa[2].innerText =" " +  data.piloti[2].Echipa
    textTara[2].innerText=" " + data.piloti[2].Tara
    textPodium[2].innerText=" " + data.piloti[2].Podium
    textPuncte[2].innerText=" " + data.piloti[2].Puncte
    textGp[2].innerText=" " + data.piloti[2].Gp
    textCampionate[2].innerText=" " + data.piloti[2].Campionate
    textClCursa[2].innerText=" " + data.piloti[2].ClCursa
    textClQuali[2].innerText=" " + data.piloti[2].ClQuali
    textData[2].innerText=" " + data.piloti[2].Data
    textLoc[2].innerText=" " + data.piloti[2].Loc
    //George
    textEchipa[3].innerText =" " +  data.piloti[3].Echipa
    textTara[3].innerText=" " + data.piloti[3].Tara
    textPodium[3].innerText=" " + data.piloti[3].Podium
    textPuncte[3].innerText=" " + data.piloti[3].Puncte
    textGp[3].innerText=" " + data.piloti[3].Gp
    textCampionate[3].innerText=" " + data.piloti[3].Campionate
    textClCursa[3].innerText=" " + data.piloti[3].ClCursa
    textClQuali[3].innerText=" " + data.piloti[3].ClQuali
    textData[3].innerText=" " + data.piloti[3].Data
    textLoc[3].innerText=" " + data.piloti[3].Loc
    //Max
    textEchipa[4].innerText =" " +  data.piloti[4].Echipa
    textTara[4].innerText=" " + data.piloti[4].Tara
    textPodium[4].innerText=" " + data.piloti[4].Podium
    textPuncte[4].innerText=" " + data.piloti[4].Puncte
    textGp[4].innerText=" " + data.piloti[4].Gp
    textCampionate[4].innerText=" " + data.piloti[4].Campionate
    textClCursa[4].innerText=" " + data.piloti[4].ClCursa
    textClQuali[4].innerText=" " + data.piloti[4].ClQuali
    textData[4].innerText=" " + data.piloti[4].Data
    textLoc[4].innerText=" " + data.piloti[4].Loc
    //Sergio
    textEchipa[5].innerText =" " +  data.piloti[5].Echipa
    textTara[5].innerText=" " + data.piloti[5].Tara
    textPodium[5].innerText=" " + data.piloti[5].Podium
    textPuncte[5].innerText=" " + data.piloti[5].Puncte
    textGp[5].innerText=" " + data.piloti[5].Gp
    textCampionate[5].innerText=" " + data.piloti[5].Campionate
    textClCursa[5].innerText=" " + data.piloti[5].ClCursa
    textClQuali[5].innerText=" " + data.piloti[5].ClQuali
    textData[5].innerText=" " + data.piloti[5].Data
    textLoc[5].innerText=" " + data.piloti[5].Loc
    //Daniel
    textEchipa[6].innerText =" " +  data.piloti[7].Echipa
    textTara[6].innerText=" " + data.piloti[7].Tara
    textPodium[6].innerText=" " + data.piloti[7].Podium
    textPuncte[6].innerText=" " + data.piloti[7].Puncte
    textGp[6].innerText=" " + data.piloti[7].Gp
    textCampionate[6].innerText=" " + data.piloti[7].Campionate
    textClCursa[6].innerText=" " + data.piloti[7].ClCursa
    textClQuali[6].innerText=" " + data.piloti[7].ClQuali
    textData[6].innerText=" " + data.piloti[7].Data
    textLoc[6].innerText=" " + data.piloti[7].Loc
    //Lando
    textEchipa[7].innerText =" " +  data.piloti[6].Echipa
    textTara[7].innerText=" " + data.piloti[6].Tara
    textPodium[7].innerText=" " + data.piloti[6].Podium
    textPuncte[7].innerText=" " + data.piloti[6].Puncte
    textGp[7].innerText=" " + data.piloti[6].Gp
    textCampionate[7].innerText=" " + data.piloti[6].Campionate
    textClCursa[7].innerText=" " + data.piloti[6].ClCursa
    textClQuali[7].innerText=" " + data.piloti[6].ClQuali
    textData[7].innerText=" " + data.piloti[6].Data
    textLoc[7].innerText=" " + data.piloti[6].Loc
    //Fernando
    textEchipa[8].innerText =" " +  data.piloti[8].Echipa
    textTara[8].innerText=" " + data.piloti[8].Tara
    textPodium[8].innerText=" " + data.piloti[8].Podium
    textPuncte[8].innerText=" " + data.piloti[8].Puncte
    textGp[8].innerText=" " + data.piloti[8].Gp
    textCampionate[8].innerText=" " + data.piloti[8].Campionate
    textClCursa[8].innerText=" " + data.piloti[8].ClCursa
    textClQuali[8].innerText=" " + data.piloti[8].ClQuali
    textData[8].innerText=" " + data.piloti[8].Data
    textLoc[8].innerText=" " + data.piloti[8].Loc
    //Esteban
    textEchipa[9].innerText =" " +  data.piloti[9].Echipa
    textTara[9].innerText=" " + data.piloti[9].Tara
    textPodium[9].innerText=" " + data.piloti[9].Podium
    textPuncte[9].innerText=" " + data.piloti[9].Puncte
    textGp[9].innerText=" " + data.piloti[9].Gp
    textCampionate[9].innerText=" " + data.piloti[9].Campionate
    textClCursa[9].innerText=" " + data.piloti[9].ClCursa
    textClQuali[9].innerText=" " + data.piloti[9].ClQuali
    textData[9].innerText=" " + data.piloti[9].Data
    textLoc[9].innerText=" " + data.piloti[9].Loc
    //Valtteri
    textEchipa[10].innerText =" " +  data.piloti[10].Echipa
    textTara[10].innerText=" " + data.piloti[10].Tara
    textPodium[10].innerText=" " + data.piloti[10].Podium
    textPuncte[10].innerText=" " + data.piloti[10].Puncte
    textGp[10].innerText=" " + data.piloti[10].Gp
    textCampionate[10].innerText=" " + data.piloti[10].Campionate
    textClCursa[10].innerText=" " + data.piloti[10].ClCursa
    textClQuali[10].innerText=" " + data.piloti[10].ClQuali
    textData[10].innerText=" " + data.piloti[10].Data
    textLoc[10].innerText=" " + data.piloti[10].Loc
    //Zhou
    textEchipa[11].innerText =" " +  data.piloti[11].Echipa
    textTara[11].innerText=" " + data.piloti[11].Tara
    textPodium[11].innerText=" " + data.piloti[11].Podium
    textPuncte[11].innerText=" " + data.piloti[11].Puncte
    textGp[11].innerText=" " + data.piloti[11].Gp
    textCampionate[11].innerText=" " + data.piloti[11].Campionate
    textClCursa[11].innerText=" " + data.piloti[11].ClCursa
    textClQuali[11].innerText=" " + data.piloti[11].ClQuali
    textData[11].innerText=" " + data.piloti[11].Data
    textLoc[11].innerText=" " + data.piloti[11].Loc
    //Kevin
    textEchipa[12].innerText =" " +  data.piloti[12].Echipa
    textTara[12].innerText=" " + data.piloti[12].Tara
    textPodium[12].innerText=" " + data.piloti[12].Podium
    textPuncte[12].innerText=" " + data.piloti[12].Puncte
    textGp[12].innerText=" " + data.piloti[12].Gp
    textCampionate[12].innerText=" " + data.piloti[12].Campionate
    textClCursa[12].innerText=" " + data.piloti[12].ClCursa
    textClQuali[12].innerText=" " + data.piloti[12].ClQuali
    textData[12].innerText=" " + data.piloti[12].Data
    textLoc[12].innerText=" " + data.piloti[12].Loc
    //Mick
    textEchipa[13].innerText =" " +  data.piloti[13].Echipa
    textTara[13].innerText=" " + data.piloti[13].Tara
    textPodium[13].innerText=" " + data.piloti[13].Podium
    textPuncte[13].innerText=" " + data.piloti[13].Puncte
    textGp[13].innerText=" " + data.piloti[13].Gp
    textCampionate[13].innerText=" " + data.piloti[13].Campionate
    textClCursa[13].innerText=" " + data.piloti[13].ClCursa
    textClQuali[13].innerText=" " + data.piloti[13].ClQuali
    textData[13].innerText=" " + data.piloti[13].Data
    textLoc[13].innerText=" " + data.piloti[13].Loc
    //Pierre
    textEchipa[14].innerText =" " +  data.piloti[14].Echipa
    textTara[14].innerText=" " + data.piloti[14].Tara
    textPodium[14].innerText=" " + data.piloti[14].Podium
    textPuncte[14].innerText=" " + data.piloti[14].Puncte
    textGp[14].innerText=" " + data.piloti[14].Gp
    textCampionate[14].innerText=" " + data.piloti[14].Campionate
    textClCursa[14].innerText=" " + data.piloti[14].ClCursa
    textClQuali[14].innerText=" " + data.piloti[14].ClQuali
    textData[14].innerText=" " + data.piloti[14].Data
    textLoc[14].innerText=" " + data.piloti[14].Loc
    //Yuki
    textEchipa[15].innerText =" " +  data.piloti[15].Echipa
    textTara[15].innerText=" " + data.piloti[15].Tara
    textPodium[15].innerText=" " + data.piloti[15].Podium
    textPuncte[15].innerText=" " + data.piloti[15].Puncte
    textGp[15].innerText=" " + data.piloti[15].Gp
    textCampionate[15].innerText=" " + data.piloti[15].Campionate
    textClCursa[15].innerText=" " + data.piloti[15].ClCursa
    textClQuali[15].innerText=" " + data.piloti[15].ClQuali
    textData[15].innerText=" " + data.piloti[15].Data
    textLoc[15].innerText=" " + data.piloti[15].Loc
    //Alex
    textEchipa[16].innerText =" " +  data.piloti[16].Echipa
    textTara[16].innerText=" " + data.piloti[16].Tara
    textPodium[16].innerText=" " + data.piloti[16].Podium
    textPuncte[16].innerText=" " + data.piloti[16].Puncte
    textGp[16].innerText=" " + data.piloti[16].Gp
    textCampionate[16].innerText=" " + data.piloti[16].Campionate
    textClCursa[16].innerText=" " + data.piloti[16].ClCursa
    textClQuali[16].innerText=" " + data.piloti[16].ClQuali
    textData[16].innerText=" " + data.piloti[16].Data
    textLoc[16].innerText=" " + data.piloti[16].Loc
    //Nicholas
    textEchipa[17].innerText =" " +  data.piloti[17].Echipa
    textTara[17].innerText=" " + data.piloti[17].Tara
    textPodium[17].innerText=" " + data.piloti[17].Podium
    textPuncte[17].innerText=" " + data.piloti[17].Puncte
    textGp[17].innerText=" " + data.piloti[17].Gp
    textCampionate[17].innerText=" " + data.piloti[17].Campionate
    textClCursa[17].innerText=" " + data.piloti[17].ClCursa
    textClQuali[17].innerText=" " + data.piloti[17].ClQuali
    textData[17].innerText=" " + data.piloti[17].Data
    textLoc[17].innerText=" " + data.piloti[17].Loc
    //Seb
    textEchipa[18].innerText =" " +  data.piloti[18].Echipa
    textTara[18].innerText=" " + data.piloti[18].Tara
    textPodium[18].innerText=" " + data.piloti[18].Podium
    textPuncte[18].innerText=" " + data.piloti[18].Puncte
    textGp[18].innerText=" " + data.piloti[18].Gp
    textCampionate[18].innerText=" " + data.piloti[18].Campionate
    textClCursa[18].innerText=" " + data.piloti[18].ClCursa
    textClQuali[18].innerText=" " + data.piloti[18].ClQuali
    textData[18].innerText=" " + data.piloti[18].Data
    textLoc[18].innerText=" " + data.piloti[18].Loc
    //Lance
    textEchipa[19].innerText =" " +  data.piloti[19].Echipa
    textTara[19].innerText=" " + data.piloti[19].Tara
    textPodium[19].innerText=" " + data.piloti[19].Podium
    textPuncte[19].innerText=" " + data.piloti[19].Puncte
    textGp[19].innerText=" " + data.piloti[19].Gp
    textCampionate[19].innerText=" " + data.piloti[19].Campionate
    textClCursa[19].innerText=" " + data.piloti[19].ClCursa
    textClQuali[19].innerText=" " + data.piloti[19].ClQuali
    textData[19].innerText=" " + data.piloti[19].Data
    textLoc[19].innerText=" " + data.piloti[19].Loc
}
);