"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stores = {};
//export const $createReactiveStore = <M>(
//    name: string,
//    react: (m: M[]) => void,
//    recs: M[] = [], 
//): T<M> => {
//    if(Object.keys(stores).includes(name)) {
//        throw "Store with name '" + name + "' already exists"
//    }
//    stores[name] = recs
//    return {
//        $update: (u) => {
//            stores[name] = u(stores[name])
//            react(stores[name])
//        },
//        read: () => stores[name]
//    }
//}
