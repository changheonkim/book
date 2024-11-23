import api from "@/src/applications/api"

import { getBookRankParamsType } from "../types/getBookRank.type"

function getBookRank(params: getBookRankParamsType) {
    const response = api.get('/api/loanItemSrch', { params });
    response.then(res => {
        console.log(res);
    })
}

export default getBookRank;