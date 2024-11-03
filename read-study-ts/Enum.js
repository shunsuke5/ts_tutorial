"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("列挙型");
{
    let Position;
    (function (Position) {
        Position[Position["Top"] = 0] = "Top";
        Position[Position["Right"] = 1] = "Right";
        Position[Position["Bottom"] = 2] = "Bottom";
        Position[Position["Left"] = 3] = "Left";
    })(Position || (Position = {}));
}
