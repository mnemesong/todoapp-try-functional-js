const stores: Record<string, any> = {};

export type T<Id, M> = {
    $update: (update: (state: M[]) => M[]) => void,
    read: () => M[]
}

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