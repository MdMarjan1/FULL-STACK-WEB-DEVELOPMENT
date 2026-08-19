"use strict";
var Day;
(function (Day) {
    Day[Day["Mango"] = 0] = "Mango";
    Day[Day["Orange"] = 1] = "Orange";
    Day[Day["Painapel"] = 2] = "Painapel";
    Day[Day["Banana"] = 3] = "Banana";
    Day[Day["Carrot"] = 4] = "Carrot";
})(Day || (Day = {}));
console.log(Day.Banana);
