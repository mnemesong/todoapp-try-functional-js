"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src = __importStar(require("../../src"));
var mocha_1 = require("mocha");
var assert = __importStar(require("assert"));
(0, mocha_1.describe)("todo-domain.test", function () {
    (0, mocha_1.describe)("test switchTasks", function () {
        (0, mocha_1.it)("test 1", function () {
            var todo = ({
                responsibles: [{
                        id: "s9dasjd0",
                        name: "Willey",
                        tasks: [{
                                id: "sadasd",
                                isReady: true,
                                name: "Sense Chi"
                            }]
                    }],
                form: {
                    name: "",
                    responsibleId: ""
                }
            });
            var nominal = ({
                responsibles: [{
                        id: "s9dasjd0",
                        name: "Willey",
                        tasks: [{
                                id: "sadasd",
                                isReady: false,
                                name: "Sense Chi"
                            }]
                    }],
                form: {
                    name: "",
                    responsibleId: ""
                }
            });
            assert.deepStrictEqual(src.todoDomain.switchTasks(todo, ["sadasd"]), nominal);
        });
    });
});
