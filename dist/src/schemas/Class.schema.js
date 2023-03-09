"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let classSchema = new mongoose_1.Schema({
    nameClass: String,
});
const Class = (0, mongoose_1.model)('Class', classSchema);
exports.default = Class;
//# sourceMappingURL=Class.schema.js.map