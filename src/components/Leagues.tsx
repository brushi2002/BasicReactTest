import { useState, useEffect } from "react";

//interface Props {
//  allLeagues: string[];
//}

function Leagues() {
  const [leagues, setAllLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const result = await fetch("http://localhost:4000/api/leagues");
        result.json().then((json) => {
          setAllLeagues(json);
          console.log(json);
        });
      } catch (err) {
        console.log(err);
      }
      //.then((response) => response.json())
      //.then((data) => {
      //console.log(data);
      //setAllLeagues(data.json());
      //});
    };
    fetchLeagues();
  }, []);

  return (
    <div>
      <ul className="list-group">
        {leagues.map((item: any, index) => (
          <li className="list-group-item" key={item.LeagueID}>
            {item.Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leagues;
