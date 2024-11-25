import { useEffect, useState } from "react";

import { BookCardWrapper } from "./bookCardSection.styled"

import BookCard from "@/src/components/bookCard"

import getBookRank from "@/src/entities/rank/api/getBookRank";

export default function BookCardSection() {
    const [rankBook, setRankBook] = useState([]);
    useEffect(() => {
        const response = getBookRank({
            pageNo: 1,
            pageSize: 10,
            format: 'json'
        });

        response.then(res => {
            setRankBook(res.data.response.docs);
            console.log(res.data.response.docs);
        })

    }, []);

    return (<BookCardWrapper>
        {rankBook.map((book: { doc: any }, index) => (
            <BookCard doc={book?.doc} key={index} />
        ))}
    </BookCardWrapper>);
}