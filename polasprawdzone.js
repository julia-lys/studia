function sprawdzDaneFormularza() {
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

    // Funkcja do oznaczenia błędnego pola
    function zaznaczBlad(element, wiadomosc) {
        element.style.border = "2px solid red";
        alert(wiadomosc);
        poprawne = false;
    }

    // Sprawdzanie imienia
    if (!regexImie.test(imie.value)) {
        zaznaczBlad(imie, "Podaj poprawne imię (wielka litera na początku, 1-31 znaków).");
    } else {
        imie.style.border = "1px solid green";
    }

    // Sprawdzanie nazwiska
    if (!regexNazwisko.test(nazwisko.value)) {
        zaznaczBlad(nazwisko, "Podaj poprawne nazwisko (wielka litera na początku, ewentualnie dwuczłonowe).");
    } else {
        nazwisko.style.border = "1px solid green";
    }

    // Sprawdzanie ulicy
    if (!regexUlica.test(ulica.value)) {
        zaznaczBlad(ulica, "Podaj poprawną nazwę ulicy.");
    } else {
        ulica.style.border = "1px solid green";
    }

    // Sprawdzanie numeru domu
    if (!regexNumerDomu.test(numerDomu.value)) {
        zaznaczBlad(numerDomu, "Podaj poprawny numer domu.");
    } else {
        numerDomu.style.border = "1px solid green";
    }

    // Sprawdzanie numeru mieszkania
    if (numerMieszkania.value && !regexNumerMieszkania.test(numerMieszkania.value)) {
        zaznaczBlad(numerMieszkania, "Podaj poprawny numer mieszkania.");
    } else {
        numerMieszkania.style.border = "1px solid green";
    }

    // Sprawdzanie numeru telefonu
    if (!regexTelefon.test(telefon.value)) {
        zaznaczBlad(telefon, "Podaj poprawny numer telefonu (9-15 cyfr, opcjonalnie z +).");
    } else {
        telefon.style.border = "1px solid green";
    }

    // Sprawdzanie daty urodzenia
    if (!dataUrodzenia.value) {
        zaznaczBlad(dataUrodzenia, "Podaj datę urodzenia.");
    } else {
        dataUrodzenia.style.border = "1px solid green";
    }

    // Sprawdzanie prawa jazdy
    if (!prawoJazdy.value) {
        zaznaczBlad(prawoJazdy, "Wybierz, czy posiadasz prawo jazdy.");
    } else {
        prawoJazdy.style.border = "1px solid green";
    }

    // Sprawdzanie płci
    if (!plec) {
        alert("Wybierz swoją płeć.");
        poprawne = false;
    }

    // Sprawdzanie miasta
    if (!regexMiasto.test(miasto.value)) {
        zaznaczBlad(miasto, "Podaj poprawną nazwę miasta.");
    } else {
        miasto.style.border = "1px solid green";
    }

    // Zwrócenie wyniku walidacji
    return poprawne;
}

// Powiązanie funkcji z formularzem
document.querySelector("form").onsubmit = function (e) {
    if (!sprawdzDaneFormularza()) {
        e.preventDefault(); // Zatrzymuje wysyłanie formularza, jeśli dane są niepoprawne
    }
};
