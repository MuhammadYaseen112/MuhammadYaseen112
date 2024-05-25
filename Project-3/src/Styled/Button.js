import styled from "styled-components";
export const Button = styled.button`
   color: white;
    padding: 10px 18px;
    background: #000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4 background ease-in;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        border: 1px solid #000;
        color: #000;
        transition: 0.3s  background ease-in;

    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
   &:hover{
        background-color: #000;
        border: 1px solid #fff;
        color: #fff;

    }
`;