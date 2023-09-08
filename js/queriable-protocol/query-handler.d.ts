import * as queryResult from "./query-result";
export type T<QueryResult, QueryConfig, Exception> = (query: QueryConfig) => queryResult.T<QueryResult, QueryConfig> | {
    exception: Exception;
};
