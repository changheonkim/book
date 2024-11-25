import Image from 'next/image';

import { BookCardWrapper, ImageWrapper, DescriptWrapper, BookTitleWrapper, BookTitle, BookDescribeWrapper } from "./bookCard.styled";

import { BookCardProps } from "./bookCard.type";


export default function BookCard(props: BookCardProps) {
    return (
        <BookCardWrapper>
            <ImageWrapper>
                <Image src={props.doc.bookImageURL}
                    width={200}
                    height={300}
                    priority
                    alt="book"
                />
            </ImageWrapper>
            <DescriptWrapper>
                <BookTitleWrapper>
                    <BookTitle>{props.doc.ranking}. {props.doc.bookname}</BookTitle>
                </BookTitleWrapper>
                <BookDescribeWrapper>
                    <div>{props.doc.publication_year}</div>
                    <div>{props.doc.authors}</div>
                    <div>{props.doc.class_nm}</div>
                    <div>대출 횟수: {props.doc.loan_count}</div>
                </BookDescribeWrapper>
            </DescriptWrapper>
        </BookCardWrapper>
    );
}
