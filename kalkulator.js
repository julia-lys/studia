const wyswietlacz = document.getElementById("wyswietlacz");

function Wyswietl(input){
    wyswietlacz.value += input;
}

function Wyczysc()
{
    wyswietlacz.value = "";
}
function Oblicz()
{
    try{
        wyswietlacz.value = eval(wyswietlacz.value);
    }
    catch(error){
        wyswietlacz.value = "Error";
    }
}