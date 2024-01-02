// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMatchApi = () => {
  // State to store the fetched data
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/matches/allMatches');
        setMatches(response.data);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 
            
         
  const chunkArray = (array, size) => {
    return array.reduce((chunks, item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  // Chunk matches array into blocks of 5
  const chunkedMatches = chunkArray(matches, 2);

  return (
    <div>
      <h1>All Matches</h1>

      {chunkedMatches.map((block, index) => (
        <div key={index}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">TODAY MATCH</th>
                <th scope="col">Batting Team</th>
                <th scope="col">Bowling Team</th>
                <th scope="col">STATUS</th>
                <th scope="col">Match_Venue</th>
              </tr>
            </thead>
            <tbody>
              {block.map((match, innerIndex) => (
                <tr key={innerIndex}>
                  <th scope="row">{innerIndex + 1}</th>
                  <td >ID: {match.matchId}</td>
                  <td>{match.matchHeading}</td>
                  <td>{match.battingTeam} {match.battingScoore}</td>
                  <td>{match.bowlTeam} {match.bowlTeamScoore}</td>
                  <td> {match.status}</td>
                  <td> {match.matchVenue}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AddMatchApi;
