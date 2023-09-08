"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = void 0;
var call = function (domainFunc, param, queryHandler) {
    var result = domainFunc(param, null);
    while (!result['exception'] && !result['result']) {
        var query = result.query;
        var queryData = queryHandler(query);
        if (queryData['exception']) {
            return { exception: queryData['exception'] };
        }
        result = domainFunc(param, queryData);
    }
    return result;
};
exports.call = call;
