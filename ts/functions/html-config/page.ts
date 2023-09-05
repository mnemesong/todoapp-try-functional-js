import * as form from "./form"
import * as resp from "./resp"

export type T = {
    formsRootSelector: string,
    respsRootSelector: string,
    formWidget: form.T,
    respWidget: resp.T,
}