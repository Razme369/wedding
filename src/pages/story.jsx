import cake from "../assets/cake.jpg";
import memoryPhot from "../assets/1000187634.jpg";
import wed from "../assets/wed.jpeg";
import together from "../assets/together.jpeg";

function Story() {
  return (
    <div className="story-page">

      {/* Story Hero */}
      <section className="story-hero">

        <div className="story-hero-content">

          <p className="story-eyebrow">
            FROM SCHOOL DAYS TO FOREVER
          </p>

          <div className="story-divider">
            ✦ ───── ✦
          </div>

          <h1 className="story-main-title">
            Their Story
          </h1>

          <p className="story-intro">
            A little bit innocent, a little bit playful,
            and a whole lot of love.
          </p>

        </div>

      </section>


      {/* Beginning of Their Story */}
      <section className="story-section beginning-section">

        <div className="story-container">

          <div className="story-text-block">

            <p className="story-label">
              CHAPTER ONE
            </p>

            <h2 className="story-heading">
              It All Started in Grade 10
            </h2>

            <div className="story-small-divider">
              ✦
            </div>

            <p className="story-paragraph">
              Before there were wedding plans, there were
              classrooms, school uniforms, shared smiles,
              small conversations and the excitement of
              seeing each other every day.
            </p>

            <p className="story-paragraph">
              Somewhere between school days and innocent
              conversations, something beautiful began to grow.
              Two young hearts slowly found their way toward
              each other.
            </p>

          </div>


          {/* Bicycle Illustration */}
          <div className="story-bicycle-section">

            <div className="bicycle-decoration bicycle-left">
              🚲
            </div>

            <div className="bicycle-road">
              ─────────────────────
            </div>

            <div className="bicycle-decoration bicycle-right">
              🚲
            </div>

          </div>

        </div>

      </section>


      {/* Growing Together */}
      <section className="story-section growing-section">

        <div className="story-container story-container-reverse">

          <div className="story-photo-wrapper">

            <div className="story-photo-frame">

             <div className="story-photo-placeholder">
                        <img
                            className="story-photo"
                            src={cake}
                            alt="Wedding celebration"
                        />

                            <span className="photo-number">01</span>
                            <span className="photo-caption">SCHOOL DAYS</span>
                </div>

            </div>

          </div>


          <div className="story-text-block">

            <p className="story-label">
              CHAPTER TWO
            </p>

            <h2 className="story-heading">
              Growing Together
            </h2>

            <div className="story-small-divider">
              ✦
            </div>

            <p className="story-paragraph">
              The school years slowly became memories.
              But the friendship, laughter and connection
              continued to grow.
            </p>

            <p className="story-paragraph">
              They watched each other grow through different
              stages of life, supporting one another through
              changes, challenges and countless unforgettable
              moments.
            </p>

          </div>

        </div>

      </section>


      {/* Love Story */}
      <section className="story-section love-section">

        <div className="love-container">

          <p className="story-label">
            CHAPTER THREE
          </p>

          <h2 className="love-heading">
            From Young Love
            <br />
            To A Lifetime
          </h2>

          <div className="love-divider">
            ✦ ───── ✦
          </div>

          <p className="love-paragraph">
            What began as innocent young love became
            something deeper — a partnership built on
            friendship, patience, understanding and
            years of shared memories.
          </p>

          <p className="love-paragraph">
            They didn't just grow older together.
            They grew together.
          </p>

        </div>

      </section>


      {/* Memory Gallery */}
      <section className="memory-section">

        <div className="memory-container">

          <div className="memory-header">

            <p className="story-label">
              THEIR MEMORIES
            </p>

            <h2 className="memory-title">
              Moments Along The Way
            </h2>

            <p className="memory-subtitle">
              From school days to the beginning of forever.
            </p>

          </div>


          <div className="memory-gallery">

            <div className="memory-card memory-card-one">

              <div className="memory-photo">
                 
                        <img
                            className="memory-photo"
                            src={memoryPhot}
                            alt="Wedding celebration"
                        />
                
              </div>

            </div>

      



            <div className="memory-card memory-card-two">

              <div className="memory-photo">
                
                 
                        <img
                            
                            src={wed}
                            alt="Wedding celebration"
                        />
            
               
                <span className="memory-caption">
                  GROWING TOGETHER
                </span>
              </div>

            </div>


            <div className="memory-card memory-card-three">

              <div className="memory-photo"> 
                        <img
                           
                            src={together}
                            alt="Wedding celebration"
                        />

                <span className="memory-caption">
                  FOREVER BEGINS
                </span>
              </div>

            </div>

          </div>


          {/* Slideshow Dots */}
          <div className="story-slideshow-controls">

            <button className="story-slide-dot active">
            </button>

            <button className="story-slide-dot">
            </button>

            <button className="story-slide-dot">
            </button>

          </div>

        </div>
        </section>

        


      {/* Quote */}
      <section className="story-quote-section">

        <div className="story-quote-container">

          <div className="quote-symbol">
            “
          </div>

          <blockquote className="story-quote">
            The sweetest love stories are the ones
            that grow with you.
          </blockquote>

          <div className="quote-symbol quote-symbol-bottom">
            ”
          </div>

        </div>

      </section>


      {/* Ending */}
      <section className="story-ending">

        <div className="story-ending-content">

          <p className="story-label">
            AND NOW...
          </p>

          <h2 className="ending-title">
            Forever Begins
          </h2>

          <div className="ending-divider">
            ✦ ───── ✦
          </div>

          <p className="ending-text">
            After all these years, two school kids who once
            rode through life together are now ready to begin
            their greatest journey yet.
          </p>

          <h3 className="ending-names">
            Esham Rishal
            <span className="ending-ampersand">
              &
            </span>
            Aadhila
          </h3>

          <p className="ending-message">
            From Grade 10 to forever.
          </p>

        </div>

      </section>


    </div>
  );
}

export default Story;