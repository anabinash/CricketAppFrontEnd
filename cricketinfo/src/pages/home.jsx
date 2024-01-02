


// Import necessary dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom'; // Assuming you use react-router-dom for routing
import image from '../assets/symbol-scatter-haikei.png'

const Home = () => {
    const navigate = useNavigate();
    const [matchId, setMatchId] = useState('');
    const [matchDetails, setmatchDetails] = useState(null);

    const handleInputChange = (event) => {
        setMatchId(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8081/matches/findById/${matchId}`);
            console.log('Response Data:', response.data);
            setmatchDetails(response.data);

        }
        catch (error) {
            console.log('error fecting match details', error);
        }
    }



    return (
        <>
            <h2>Match Details By ID</h2>
            {/* <img src={image} alt="Match Image" className='image1'/>    */}
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Match ID:
                    <input type="text" value={matchId} onChange={handleInputChange} />
                </label>
                {/* <button type="submit">Fetch Match Details</button> */}
                <button type="submit" className="btn btn-dark" >fetching Details</button>
                {(matchDetails) &&
                    <div>

                        <h2>MatchID :{matchDetails.matchId}</h2>
                        <span>
                            <b>matchHeading:{matchDetails.matchHeading}</b>
                            <p>matchVenue:{matchDetails.matchVenue}</p>
                            <p>BattingTeam:{matchDetails.battingTeam}</p>
                            <p>BowlingTeam:{matchDetails.bowlTeam}</p>
                            <p>Status:{matchDetails.status}</p>
                        </span>

                    </div>}
            </form>

        </>
    );
};

export default Home;
