// import { useState } from "react" to be remove
import styled from "styled-components"
import RollDice from "../Roll Dice/RollDice"
const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber})=>{
    const arrNumber = [1,2,3,4,5,6]
    const numberSelectorHandler = (value)=>{
        setSelectedNumber(value)
        setError("")
    }
    // const [selectedNumber, setSelectedNumber] = useState()
    return(
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
            {
                arrNumber.map((value,i)=><Box isSelected = {value===selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)}>{value}</Box>)
            }
            
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    display: grid;
    place-items: center;
    border: 1px solid #000;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected ? "black":"white"};
    color: ${(props)=>!props.isSelected ? "black":"white" };
`