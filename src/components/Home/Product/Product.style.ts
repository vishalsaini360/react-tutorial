import styled from "styled-components";

export const HomeProductWrapper=styled.div`
    margin: 50px 18px 11px 19px;
`;

export const HomeProductHeading=styled.h2`
    margin : 10px;
    border-bottom: 1px solid gray;
`;

export const CardRow = styled.div`
    margin: 0 -5px;
    :after {
        content: "";
        display: table;
        clear: both;
      }
`;

export const CardColumn = styled.div`
    float: left;
    width: 25%;
    padding: 0 10px;
`;
export const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 35px 0px 84px 24px;
    text-align: center;
    font-family: arial;
`;

export const CardImg = styled.img`
   width: 100%;
   height: 230px;
`;

export const CardHeading = styled.h1``;

export const CardPrice = styled.p`
    color: grey;
    font-size: 22px;
`;

export const CardButton = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    :hover {
        opacity: 0.7;
    }
`;