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
    flex-direction: column;
    margin-bottom: 8px;
`

export const BookRank = styled.span`
    font-size: 24px;
    color: #6594e7;
    font-weight: bold;
`

export const BookTitle = styled.h2`
    font-size: 18px
`

export const BookDescribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #999;
`