import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import teams from "./teams.json";
import "./App.css";

function scramble(array) {
    array.sort(function() {
        return 0.5 - Math.random()
    });
    return array;
};

class App extends Component {
    state = {
        teams,
        currentScore: 0,
        clicked: [],
    };

    handleClick = id => {
        if (!this.state.clicked.includes(id)) {

            this.handleIncrement();
            this.state.clicked.push(id);

        } else {
            alert("HO-HO-HO You Already Clicked This One....You LOSE!!!!");

            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,

        });

        if (newScore === 18) {

            alert("You WON!!!");
        }
        this.handleShuffle();
    };

    handleReset = () => {
        this.setState({
            currentScore: 0,
            clicked: []
        });
        this.handleShuffle();
    };

    handleShuffle = () => {
        let shuffled = scramble(teams);
        this.setState({
            teams: shuffled
        });
    };

    render() {
        return ( < Wrapper >
            <
            div className = "row" >
            <
            div className = "col-12 col-md-12" >
            <
            h1 className = "display" > FIFA 2018 Clickety Game < /h1> < /div >
            <
            Title score = { this.state.currentScore }
            />  < /
            div >

            <
            div className = "row container" >
            <
            h2 className = "text-danger" > Click on each team, but just once! < /h2> < /
            div > <
            div className = "row container" > {
                this.state.teams.map(team => ( <
                    TeamCard

                    id = {
                        team.id
                    }
                    key = {
                        team.id
                    }
                    image = {
                        team.image
                    }
                    handleClick = {
                        this.handleClick
                    }
                    handleShuffle = {
                        this.handleShuffle
                    }
                    />
                ))
            } <
            /div>  < /
            Wrapper >
        );
    }
}

export default App;