function Details() {
  return (
    <div className="details-page">

      {/* Page Header */}
      <section className="details-hero">

        <div className="details-hero-content">

          <p className="details-eyebrow">
            WITH LOVE & BLESSINGS
          </p>

          <div className="details-divider">
            ✦ ───── ✦
          </div>

          <h1 className="details-title">
            Wedding Details
          </h1>

          <p className="details-subtitle">
            We would be honoured to have you with us
            as we begin this beautiful new chapter together.
          </p>

        </div>

      </section>


      {/* Wedding Information */}
      <section className="wedding-info-section">

        <div className="wedding-info-container">


          {/* Date Card */}
          <div className="details-card date-card">

            <div className="card-icon">
              ♡
            </div>

            <p className="card-label">
              THE BIG DAY
            </p>

            <h2 className="card-title">
              Wedding Day
            </h2>

            <div className="card-divider">
              ✦
            </div>

            <p className="event-date">
              Sunday
            </p>

            <p className="event-number">
              14
            </p>

            <p className="event-month">
              October 2027
            </p>

          </div>


          {/* Ceremony Card */}
          <div className="details-card ceremony-card">

            <div className="card-icon">
              ♛
            </div>

            <p className="card-label">
              CEREMONY
            </p>

            <h2 className="card-title">
              Wedding Ceremony
            </h2>

            <div className="card-divider">
              ✦
            </div>

            <div className="event-details">

              <p className="event-time">
                10:30 AM onwards
              </p>

              <p className="event-description">
                Traditional ceremony
                <br />
                & blessings
              </p>

            </div>

          </div>


          {/* Reception Card */}
          <div className="details-card reception-card">

            <div className="card-icon">
              ✦
            </div>

            <p className="card-label">
              CELEBRATION
            </p>

            <h2 className="card-title">
              Reception
            </h2>

            <div className="card-divider">
              ✦
            </div>

            <div className="event-details">

              <p className="event-time">
                6:00 PM onwards
              </p>

              <p className="event-description">
                Dinner · Music
                <br />
                Family & Friends
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Venue Section */}
      <section className="venue-section">

        <div className="venue-container">

          <p className="venue-eyebrow">
            JOIN US
          </p>

          <h2 className="venue-title">
            The Celebration
          </h2>

          <div className="venue-divider">
            ✦ ───── ✦
          </div>


          <div className="venue-card">

            <div className="venue-icon">
              ♧
            </div>

            <p className="venue-label">
              VENUE
            </p>

            <h3 className="venue-name">
              Venue Name
            </h3>

            <p className="venue-address">
              Address Line
              <br />
              City, Country
            </p>

            <button className="map-button">
              View Location
              <span className="map-arrow">
                →
              </span>
            </button>

          </div>

        </div>

      </section>


      {/* Dress Code Section */}
      <section className="dress-code-section">

        <div className="dress-code-container">

          <div className="dress-code-content">

            <p className="dress-code-label">
              DRESS CODE
            </p>

            <h2 className="dress-code-title">
              Traditional & Elegant
            </h2>

            <p className="dress-code-text">
              Come dressed in your favourite traditional
              or elegant attire and celebrate this special
              day with us.
            </p>

          </div>

        </div>

      </section>


      {/* RSVP Section */}
      <section className="rsvp-section">

        <div className="rsvp-container">

          <p className="rsvp-eyebrow">
            YOUR PRESENCE IS OUR GIFT
          </p>

          <h2 className="rsvp-title">
            We Can't Wait
            <br />
            To Celebrate With You
          </h2>

          <div className="rsvp-divider">
            ✦
          </div>

          <p className="rsvp-message">
            Your love, blessings and presence will make
            our special day even more meaningful.
          </p>

          <button className="rsvp-button">
            RSVP
            <span className="rsvp-arrow">
              →
            </span>
          </button>

        </div>

      </section>


      {/* Footer */}
      <footer className="details-footer">

        <div className="footer-ornament">
          ✦
        </div>

        <h2 className="footer-names">
          Esham Rishal
          <span className="footer-ampersand">
            &
          </span>
          Aadhila
        </h2>

        <p className="footer-story">
          From Grade 10 to forever.
        </p>

        <p className="footer-message">
          With love, we invite you to celebrate
          this beautiful beginning with us.
        </p>

        <div className="footer-bottom">
          Made with love ♡
        </div>

      </footer>

    </div>
  );
}

export default Details;