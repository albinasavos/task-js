const logItems = function (array) {
    for (var item in array) {
        console.log(`${parseInt(item) + 1} - ${array[item]}`)
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);