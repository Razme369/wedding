import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-page">

      <div className="home-background">

        <div className="decorative-circle circle-one"></div>
        <div className="decorative-circle circle-two"></div>

        <div className="home-content">

          <p className="invitation-label">
            YOU ARE CORDIALLY INVITED
          </p>

          <div className="gold-divider">
            ✦ ───── ✦
          </div>

          <h1 className="couple-names">
            Esham Rishal
            <span className="ampersand">&</span>
            Aadhila
          </h1>

          <p className="love-story-title">
            From Grade 10 to Forever
          </p>

          <p className="home-message">
            What started as innocent young love between two school kids
            grew into a beautiful journey of friendship, memories,
            and a lifetime together.
          </p>

          <div className="bicycle-scene">
            <div className="bicycle bicycle-one">
              🚲
            </div>

            <div className="bicycle bicycle-two">
              🚲
            </div>
          </div>

          <div className="gold-divider bottom-divider">
            ✦ ───── ✦
          </div>

          <div className="wedding-date">
            <span className="date-label">SAVE THE DATE</span>

            <span className="date-day">
              SUNDAY
            </span>

            <span className="date-number">
              14
            </span>

            <span className="date-month">
              October 2027
            </span>
          </div>

          <Link to="/story" className="story-button">
  Discover Their Story
  <span className="button-arrow">→</span>
</Link>

        </div>

      </div>

    </div>
  );
}

export default Home;