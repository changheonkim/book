export type GetBookRankParamsType = {
    startDt?: string;
    endDt?: string;
    gender?: string;
    from_age?: string;
    to_age?: string;
    age?: string;
    region?: string;
    dtl_region?: string;
    kdc?: string;
    pageNo: number;
    pageSize: number;
    format?: string;
}