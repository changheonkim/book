import { BookCardWrapper } from "./bookCard.styled";

import { BookCardProps } from "./bookCard.type";

export default function BookCard(props: BookCardProps) {
    return (
        <BookCardWrapper>{props.doc.bookname}</BookCardWrapper>
    );
}
