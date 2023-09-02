import * as domain from "../functions/domain/page"

export const init: domain.T = {
    responsibles: [
        {
            id: "34e96a3e-dfad-412c-93a2-125f8697750b", 
            name: "Mary",
            tasks: [
                {
                    id: "eccdcf42-2521-4e7d-8991-41ea50274c51",
                    name: "Kiss the cat",
                    isReady: false,
                },
                {
                    id: "ef43d0b0-5226-441f-96f9-fa574caa5b9f",
                    name: "Buy the milk",
                    isReady: true,
                },
            ]
        },
        {
            id: "6d4c7b04-bcce-4309-804c-b5337a5f760a", 
            name: "John",
            tasks: [
                {
                    id: "ef176caf-f06c-4535-bf55-f1891dac00a0",
                    name: "Found the home",
                    isReady: false,
                },
            ]
        },
    ],
    form: {
        name: "",
        responsibleId: "6d4c7b04-bcce-4309-804c-b5337a5f760a"
    }
}