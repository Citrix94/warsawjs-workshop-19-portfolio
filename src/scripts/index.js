const $form = document.querySelector('form'); // dolar przy zmiennych, które przechowują referencje do DOM

$form.addEventListener('submit', function (evt) {

   evt.preventDefault(); // wyłączamy domyślną funkcję formularza

}); // dodajemy słuchacza zdarzeniowego - oczekuje ona dwóch parametrów - 1 na jaki event, 2 - co uruchomić



