"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Class_schema_1 = __importDefault(require("../../schemas/Class.schema"));
class ClassAPI {
    constructor() {
        this.get = async (req, res) => {
            let classes = await Class_schema_1.default.find();
            res.status(200).json({ classes });
        };
    }
}
exports.default = new ClassAPI();
//# sourceMappingURL=class.api.constroller.js.map