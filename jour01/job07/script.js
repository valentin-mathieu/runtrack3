// var year = 2005;
// var month = 11;
// var day = 23;

// let date = new Date(year, month, day);
// let weekday = date.getDay();

// jourferie = [
// new Date(2020, 0, 1),
// new Date(2020, 3, 13),
// new Date(2020, 4, 1),
// new Date(2020, 4, 8),
// new Date(2020, 4, 21),
// new Date(2020, 5, 1),
// new Date(2020, 6, 14),
// new Date(2020, 7, 15),
// new Date(2020, 10, 1),
// new Date(2020, 11, 25)
// ];

// function jourtravaille(date){
//     if (date == )
// }

// console.log(date)

Madate = new Date("March 03 2021");

function jourtravaille(Madate) {

    var a = Madate;

    f = false;
    w = false;

    tabDate = [
        new Date(2020, 0, 1),
        new Date(2020, 4, 13),
        new Date(2020, 5, 1),
        new Date(2020, 5, 8),
        new Date(2020, 5, 21),
        new Date(2020, 6, 1),
        new Date(2020, 7, 14),
        new Date(2020, 8, 15),
        new Date(2020, 10, 1),
        new Date(2020, 10, 11),
        new Date(2020, 11, 25)
    ];

    for (var i = 0; i < tabDate.length; i++) {
        if (tabDate[i].getDate() == a.getDate() && tabDate[i].getMonth() == a.getMonth() && tabDate[i].getFullYear() == a.getFullYear()) {
            console.log("Le ", a.getDate(), "/", a.getMonth() + 1, "/", a.getFullYear(), "est un jour férié");
            f = true;
            break;
        }
    }
    
    if (f == false) {
        if (a.getDay() == 6 || a.getDay() == 0) {
            console.log("Non, Le ", a.getDate(), "/", a.getMonth() + 1, "/", a.getFullYear(), " est un week-end");
            w = true;
        }
        if (w == false) {
            console.log("Oui, Le ", a.getDate(), "/", a.getMonth() + 1, "/", a.getFullYear(), " est un jour travaillé");
        }
    }

}

jourtravaille(Madate);