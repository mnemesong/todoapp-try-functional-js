import * as queryResult from "./query-result";
import * as queryHandler from "./query-handler";
export type T<QueryResult, QueryConfig, Param, Exception, Result> = (param: Param, query: queryResult.T<QueryResult, QueryConfig> | null) => {
    query: QueryConfig;
} | {
    exception: Exception;
} | {
    result: Result;
};
export declare const call: <QR, QC, P, E, R>(domainFunc: T<QR, QC, P, E, R>, param: P, queryHandler: queryHandler.T<QR, QC, E>) => {
    exception: E;
} | {
    result: R;
};
