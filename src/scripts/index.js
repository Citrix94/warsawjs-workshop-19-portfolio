const $form = document.querySelector('form'); // dolar przy zmiennych, które przechowują referencje do DOM

$form.addEventListener('submit', function (evt) {

    evt.preventDefault(); // wyłączamy domyślną funkcję formularza

    const data = new FormData($form); // uruchamiamy konstruktor, który umożliwi nam pobranie danych z formularza

    const map = new Map(data);// tworzymy zmienną, w któej będziemy mieli mapę parametrów, czyli zbiór gdzie mamy klucz-wartość, klucz-wartość

    const email = map.get('email');// z mapy możemy wyciagnąć nasz email

    console.log(email);

}); // dodajemy słuchacza zdarzeniowego - oczekuje ona dwóch parametrów - 1 na jaki event, 2 - co uruchomić



