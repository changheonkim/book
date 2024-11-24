import { atom } from "recoil";
import { BookRankType } from "../types/model/bookRank.type";

export const bookRankState = atom<BookRankType | null>({
    key: "bookRankState",
    default: null,
});