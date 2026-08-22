"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTrafficAction = (light) => {
    if (light === "red") {
        return `Stop`;
    }
    else if (light === "yellow") {
        return `Slow Down`;
    }
    else if (light === "green") {
        return `Go`;
    }
    return `Invalid`;
};
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));
//# sourceMappingURL=TrafficLightAction.js.map