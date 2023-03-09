"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let database = {
    connect: () => {
        mongoose_1.default.set("strictQuery", true);
        mongoose_1.default
            .connect("mongodb://127.0.0.1:27017/MD4_Final")
            .then(() => console.log("DB Connected!"))
            .catch((error) => console.log("DB Connected Fail! " + error));
    },
};
exports.default = database;
//# sourceMappingURL=database.js.map