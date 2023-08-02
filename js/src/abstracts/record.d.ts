import * as scalar from "./scalar";
export type T<M extends Record<string | number | symbol, scalar.T>> = M;
