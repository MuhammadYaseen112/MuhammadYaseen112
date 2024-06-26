import styled from "styled-components"
import NumberSelector from "../NumberSelector/NumberSelector"
import TotalScore from "../TotalScore/TotalScore"
import RollDice from "../Roll Dice/RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../../Styled/Button"
import Rules from "../Rules/Rules"

const GamePlay = ()=>{
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber  = (min, max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const roleDice = ()=>{
        if(!selectedNumber){
            setError("You have not selected any number")
            return
        };
        

        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev)=>randomNumber)

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber)
        }else{
            setScore((prev)=>prev-2)
        }
        setSelectedNumber(undefined)
    }

    const resetScore = ()=>{
        setScore(0)
    } 




    return(
        <MainContainer>
            <div className="topSection">
            <TotalScore score={score}/>
            <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={()=>setShowRules((prev)=>!prev)}>{
                    showRules ? "Hide" : "Show"
                } Rules</Button>
            </div>
            {showRules && <Rules/>}
        </MainContainer>
    )
}

export default GamePlay;
const MainContainer = styled.main`
    padding: 70px;
    .topSection{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
` 