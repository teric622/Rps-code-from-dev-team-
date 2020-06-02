import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import './GameBoard.css';
import './GameBoard.css';
import Player from '../PlayerContainer/Player.js';
import Computer from '../ComputerContainer/Computer.js';
import MenuButton from '../ButtonsContainer/MenuButton.js';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
const selection = ["rock", "paper", "scissors"];
const compSelection = [ "comprock", "compscissors", "comppaper"];


export default class Game extends Component {
    
    

    state = {
        playerOne: selection[0],
        computer: compSelection[0],
        winner: ""
    };

    startGame = () => {
        let count = 0;
        let gameInterval = setInterval(() => {
            count++;
            this.setState({
            computer: compSelection[Math.floor(Math.random() * compSelection.length)],
            winner: ""
        });


        if (count > 5) {
            clearInterval(gameInterval);
            this.setState ({ winner: this.selectWinner()
            });
            }
        }, 100);
};

    selectWinner = () => {
    const { playerOne, computer } = this.state;

    if ( (playerOne ==="paper" &&  computer === "comppaper") ||
        (playerOne === "rock" && computer === "comprock") ||
        (playerOne === "scissors" && computer === "compscissors")){
        return "Issa tie...";
    } else if (
        (playerOne === "rock" && computer === "compscissors") ||
        (playerOne === "paper" && computer === "comprock") ||
        (playerOne === "scissors" && computer === "comppaper")
    ) {
        return "You are a Winna!";
    } else {
        return "Whomps, computer wins ";
    }
    };
    

    selectSelection = selection => {
    this.setState({
        playerOne: selection,
        winner: ""
    })
    };

    render() {
            const { playerOne, computer, winner } = this.state;
           // scoreboard codelines 79-83 
        return (
            
             <div className='game-page'>
                <MenuButton />
                
                <div>
                    
            <div class="score-board">
        <div id = "user-label" class = "badge" ><i class="fas fa-user"></i></div>
        <div id = "computer-label" class = "badge" > <i class="fas fa-robot"></i> </div>
        <span id = "user-score">0 :<span id = "computer-score" > 0</span>
        </span> 
       </div> 
       </div>
       <br></br>
                <Row className='hands'>
                <Player selection={playerOne} />
                <Computer compSelection={computer} />
                </Row>
                <br></br>
                    <Row className="choices ">
                    <roundbutton className="selectionButton"
                    onClick={() => this.selectSelection("rock")}
                    >  <img  src={rock}height="90px" center alt="pipeline"/>
                    </roundbutton>
                    <br></br>
                    <br></br> 
                    <br></br> 
                    <roundbutton className="selectionButton "
                    onClick={() => this.selectSelection("paper")}
                    > <img  src={paper} height="80px" center alt="pipeline"/>
                    </roundbutton>
                    <br></br>

                    <roundbutton className="selectionButton "
                    onClick={() => this.selectSelection("scissors")}>
                     <img  src={scissors} height="80px" center alt="pipeline"/>
                     </roundbutton>
                    </Row>
                    <br></br>
                    
                       <Row className="who-win"> <div className="winner"><>{winner ? this.selectWinner() : null}</></div> </Row>
                       <Row > <button type="button" className="play-btn btn" onClick={this.startGame}> Play Hand </button>  </Row>
                </div>

          
        );
    }
}
