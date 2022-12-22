import styled from "styled-components";

export const Wrapper = styled.div`
    border-radius : 4px;
    padding : 10px 10px;
    width: 38%;
    margin: 26px 409px 30px;
    padding: 50px;
    border:1px solid;
    margin-bottom: 60px;
    margin-top: 100px;
    @media(max-width:425px){
        border-radius: 4px;
        width: 100%;
        padding: 44px;
        border: 1px solid;
        margin-top: 5px;
        margin: 0px 0px 0px;
    }
`;
export const Heading = styled.p`
    text-align: center;
    margin-bottom: 22px;
    border-bottom: 1px solid gray;
    padding-bottom: 6px;
    font-size: 22px;
`;

export const InputLabel = styled.label`
    font-size:18px;
`;

export const Input = styled.input`
    padding:5px;
    width:100%;
    font-size:18px;
    text-decoration:none;
    margin-bottom: 25px;
    margin-top: 8px;
`;

export const Form = styled.form`
    
`;

export const Button = styled.button`
    color: #f00000;
    font-size: 1em;
    margin-top: 15px;
    padding: 0.25em 1em;
    border: 2px solid #f00000;
    border-radius: 3px;
    display: block;
    background: no-repeat;
    width: 100%;
    height: 45px;
    cursor:pointer;
`;