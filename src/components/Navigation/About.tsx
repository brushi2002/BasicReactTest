import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card>
      <Card.Body>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="text-center">About Play in Person</h1>
              <p className="lead text-center">
                Welcome to <strong>Play in Person</strong>, the innovative app
                designed to manage tennis leagues and players while encouraging
                you to spend more time on the court and less time on your
                device.
              </p>
              <hr />
              <h2>Our Mission</h2>
              <p>
                At Play in Person, we believe that tennis is best enjoyed live
                and in-person. Our goal is to minimize screen time and maximize
                playtime by providing an easy-to-use platform that handles the
                administrative aspects of tennis leagues, allowing you to fully
                immerse yourself in the sport.
              </p>
              <h2>Features</h2>
              <ul>
                <li>
                  <strong>Effortless League Management:</strong> Create and
                  manage tennis leagues with just a few taps. Our intuitive
                  interface makes organizing matches and tracking scores simple
                  and straightforward.
                </li>
                <li>
                  <strong>Player Profiles:</strong> Keep comprehensive profiles
                  for all players, including their rankings, match history, and
                  performance stats, ensuring everyone stays informed without
                  the need for constant digital updates.
                </li>
                <li>
                  <strong>Streamlined Scheduling:</strong> Generate match
                  schedules quickly and efficiently. Our app sends automatic
                  notifications to keep everyone in the loop, so you can focus
                  on playing rather than planning.
                </li>
                <li>
                  <strong>Real-Time Score Tracking:</strong> Easily enter and
                  update match scores, with real-time updates to league
                  standings that keep everyone up to date without the hassle.
                </li>
                <li>
                  <strong>Integrated Communication:</strong> Stay connected with
                  your league through built-in messaging. Share important
                  announcements, match results, and league updates directly
                  within the app.
                </li>
                <li>
                  <strong>Customizable League Rules:</strong> Adapt league rules
                  and formats to fit your needs, whether it’s scoring systems,
                  match formats, or other preferences, ensuring your league
                  operates exactly how you want it.
                </li>
                <li>
                  <strong>Detailed Analytics:</strong> Access insights into
                  player performance and league trends with our comprehensive
                  analytics and reporting tools, all designed to help you focus
                  on improving your game.
                </li>
              </ul>
              <h2>Join Our Community</h2>
              <p>Join our discord or email list to follow along</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default About;
