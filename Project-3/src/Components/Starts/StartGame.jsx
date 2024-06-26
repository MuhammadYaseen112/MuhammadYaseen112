import styled from "styled-components"
import { Button } from "../../Styled/Button";
const StartGame = ({toggle})=>{
    return(
        <Container>
            <div>
            <img src="/Images/dice.png" alt="Bg Image" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`
