function delivery(country, price) {
    country = country[0].toUpperCase() + country.slice(1, country.length);

    alert(`Доставка в ${country} буде коштувати ${price} кредитів`)
}

let country = prompt("Введiть країну", "");
let price;

country = country.toLowerCase();

if (country == null) {
    alert("Скасовано користувачем!")
}
else {
    switch (country) {
        case "китай":
            price = 100;
            delivery(country, price)
            break;
        case "чилі":
            price = 250;
            delivery(country, price)
            break;
        case "австралія":
            price = 170;
            delivery(country, price)
            break;
        case "індія":
            price = 80;
            delivery(country, price)
            break;
        case "ямайка":
            price = 120;
            delivery(country, price)
            break;
        default:
            alert('У вашій країні доставка недоступна');
            break;
    }
}