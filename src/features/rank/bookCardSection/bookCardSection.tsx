import { useEffect } from "react";

import { BookCardWrapper } from "./bookCardSection.styled"

import BookCard from "@/src/components/bookCard"

import getBookRank from "@/src/entities/rank/api/getBookRank";

export default function BookCardSection() {
    useEffect(() => {
        getBookRank({
            authKey: 'fa72030894e2e86ff49690c2a43f293167efd1d69b3b3bed66301b4a53e200ec',
            pageNo: 1,
            pageSize: 10,
            format: 'json'
        });
    }, []);

    return (<BookCardWrapper>
        <BookCard />
    </BookCardWrapper>);
}