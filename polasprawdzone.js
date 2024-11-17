function SprawdzDaneFormularza() {
    const imie = document.getElementById("imie");
    const nazwisko = document.getElementById("nazwisko");
    const ulica = document.getElementById("ulica");
    const numerDomu = document.getElementById("numerDomu");
    const numerMieszkania = document.getElementById("numerMieszkania");
    const telefon = document.getElementById("telefon");
    const dataUrodzenia = document.getElementById("dataUrodzenia");
    const prawoJazdy = document.getElementById("prawoJazdy");
    const plec = document.querySelector('input[name="plec"]:checked');
    const miasto = document.getElementById("miasto");

    // Wyrażenia regularne
    const regexImie = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]{1,31}$/;
    const regexNazwisko = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]{1,31}(-[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]{1,31})?$/;
    const regexUlica = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]*(?:[\s\-][A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]*)*$/;
    const regexNumerDomu = /^[0-9]{1,4}[A-Za-z]?$/;
    const regexNumerMieszkania = /^[0-9]{1,4}$/;
    const regexTelefon = /^\+?[0-9]{9,15}$/;
    const regexMiasto = /^[A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]*(?:[\s\-][A-ZĄĆĘŁŃÓŚŻŹ][a-ząćęłńóśżź]*)*$/;

    let poprawne = true;

    // Funkcja pomocnicza
    function zaznaczBlad(element, wiadomosc) {
        element.style.border = "2px solid red";
        alert(wiadomosc);
        poprawne = false;
    }

    // Walidacje
    if (!regexImie.test(imie.value)) {
        zaznaczBlad(imie, "Podaj poprawne imię (wielka litera na początku, 1-31 znaków).");
    } else {
        imie.style.border = "1px solid green";
    }

    if (!regexNazwisko.test(nazwisko.value)) {
        zaznaczBlad(nazwisko, "Podaj poprawne nazwisko (wielka litera na początku, ewentualnie dwuczłonowe).");
    } else {
        nazwisko.style.border = "1px solid green";
    }

    if (!regexUlica.test(ulica.value)) {
        zaznaczBlad(ulica, "Podaj poprawną nazwę ulicy.");
    } else {
        ulica.style.border = "1px solid green";
    }

    if (!regexNumerDomu.test(numerDomu.value)) {
        zaznaczBlad(numerDomu, "Podaj poprawny numer domu.");
    } else {
        numerDomu.style.border = "1px solid green";
    }

    if (numerMieszkania.value && !regexNumerMieszkania.test(numerMieszkania.value)) {
        zaznaczBlad(numerMieszkania, "Podaj poprawny numer mieszkania.");
    } else {
        numerMieszkania.style.border = "1px solid green";
    }

    if (!regexTelefon.test(telefon.value)) {
        zaznaczBlad(telefon, "Podaj poprawny numer telefonu (9-15 cyfr, opcjonalnie z +).");
    } else {
        telefon.style.border = "1px solid green";
    }

    if (!dataUrodzenia.value) {
        zaznaczBlad(dataUrodzenia, "Podaj datę urodzenia.");
    } else {
        dataUrodzenia.style.border = "1px solid green";
    }

    if (!prawoJazdy.value) {
        zaznaczBlad(prawoJazdy, "Wybierz, czy posiadasz prawo jazdy.");
    } else {
        prawoJazdy.style.border = "1px solid green";
    }

    if (!plec) {
        alert("Wybierz swoją płeć.");
        poprawne = false;
    }

    if (!regexMiasto.test(miasto.value)) {
        zaznaczBlad(miasto, "Podaj poprawne miasto.");
    } else {
        miasto.style.border = "1px solid green";
    }

    return poprawne;
}
