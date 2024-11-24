import apiClient from "@/src/applications/api";

import { GetBookRankParamsType } from "../types/api/getBookRank.type"

function getBookRank(params: GetBookRankParamsType) {
    const response = apiClient.get('/api/loanItemSrch', { params });

    return response;
}

export default getBookRank;