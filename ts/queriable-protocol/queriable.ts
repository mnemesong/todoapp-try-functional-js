import * as queryResult from "./query-result"
import * as queryHandler from "./query-handler"

export type T<
    QueryResult, 
    QueryConfig, 
    Param, 
    Exception, 
    Result
> = (param: Param, query: queryResult.T<QueryResult, QueryConfig>|null) => {
    query: QueryConfig}
    | {exception: Exception}
    | {result: Result}

export const call = <QR, QC, P, E, R>(
    domainFunc: T<QR, QC, P, E, R>,
    param: P,
    queryHandler: queryHandler.T<QR, QC, E>
): {exception: E} | {result: R} => {
    let result = domainFunc(param, null)
    while(!result['exception'] && !result['result']) {
        let query = (result as {query: QC}).query
        let queryData = queryHandler(query)
        if(queryData['exception']) {
            return {exception: queryData['exception']}
        }
        result = domainFunc(param, queryData as queryResult.T<QR, QC>)
    }
    return result as ({exception: E} | {result: R})
}