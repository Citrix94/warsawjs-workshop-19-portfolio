// "name" jako wbudowana właściwość obiektu window tworzy wyjątek i niezależnie jakiego typu wartość do niej przypiszmy zawsze będzie stringiem. 
// Zeruje się dopiero w momencie przeładowania przeglądarki.

window.name = 102;
console.log(typeof window.name);
console.log(typeof 102);

const czolg = 102;
console.log(typeof czolg);

const $form = document.querySelector('form'); // dolar przy zmiennych, które przechowują referencje do DOM

function displayMessage(message) { // tworzymy funkcję, do której parametru przekazujemy argument z funkcji niżej

    alert(`Na ten email ${name} ${message} został wysłany kup rabatowy`); // template string (stringi szablonowe)

};

$form.addEventListener('submit', function (evt) { // dodajemy słuchacza zdarzeniowego - oczekuje ona dwóch parametrów - 1 na jaki event, 2 - co uruchomić

    evt.preventDefault(); // wyłączamy domyślną funkcję formularza

    const data = new FormData($form); // uruchamiamy konstruktor, który umożliwi nam pobranie danych z formularza

    const map = new Map(data);// tworzymy zmienną, w któej będziemy mieli mapę parametrów, czyli zbiór gdzie mamy klucz-wartość, klucz-wartość

    const email = map.get('email');// z mapy możemy wyciagnąć nasz email

    console.log(email);

    displayMessage(email);

}); 



