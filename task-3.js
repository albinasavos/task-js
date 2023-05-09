const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let user_password = prompt("Введiть пароль", "");

if (user_password == "jqueryismyjam") {
    message = "Ласкаво просимо!";
}
else if (user_password == null) {
    message = "Скасовано користувачем!";
}
else {
    message = "Доступ заборонений, невірний пароль!";
}

alert(message);