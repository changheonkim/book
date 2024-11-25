import styled from 'styled-components';

export const BookCardWrapper = styled.div`
    border-bottom: 1px solid #d3d3d3;
    width: 900px;
    height: 340px;
    pointer: cursor;
    display: flex;
`

export const ImageWrapper = styled.div`
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DescriptWrapper = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const BookTitleWrapper = styled.div`
    display: flex;
    gap: 4px;
    margin-bottom: 16px;
`

export const BookTitle = styled.h1`
    font-size: 18px
`

export const BookDescribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

`