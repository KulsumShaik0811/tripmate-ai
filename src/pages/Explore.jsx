import { Search, MapPin, Wallet, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { destinations } from "../data/travelData";

function Explore({ onPlanTrip }) {
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return destinations;
    }

    return destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(query) ||
        destination.country.toLowerCase().includes(query) ||
        destination.style.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <main className="explore-page">
      <div className="explore-container">

        <section className="explore-header">
          <span className="explore-badge">
            🌍 Discover
          </span>

          <h1>Explore Destinations</h1>

          <p>
            Find your next adventure and let TripMate AI
            plan the perfect trip for you.
          </p>

          <div className="explore-search">
            <Search size={20} />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations..."
              maxLength={60}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
              >
                Clear
              </button>
            )}
          </div>
        </section>

        <section className="destination-section">
          <div className="explore-section-heading">
            <div>
              <h2>
                {search
                  ? "Search Results"
                  : "Popular Destinations"}
              </h2>

              <p>
                {filteredDestinations.length}{" "}
                destination
                {filteredDestinations.length !== 1
                  ? "s"
                  : ""}{" "}
                available
              </p>
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="destination-grid">
              {filteredDestinations.map(
                (destination) => (
                  <article
                    className="destination-card"
                    key={destination.name}
                  >
                    <div className="destination-image">
                      <img
                        src={destination.image}
                        alt={destination.name}
                      />

                      <span className="destination-style">
                        {destination.style}
                      </span>
                    </div>

                    <div className="destination-content">
                      <div className="destination-title">
                        <div>
                          <h3>
                            {destination.name}
                          </h3>

                          <p>
                            <MapPin size={14} />
                            {destination.country}
                          </p>
                        </div>
                      </div>

                      <p className="destination-description">
                        {destination.description}
                      </p>

                      <div className="destination-budget">
                        <Wallet size={15} />
                        {destination.budget}
                      </div>

                      <button
                        className="plan-destination-btn"
                        onClick={() =>
                          onPlanTrip(destination)
                        }
                      >
                        Plan This Trip
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
          ) : (
            <div className="explore-empty">
              <div>🔎</div>

              <h2>
                No destinations found
              </h2>

              <p>
                Try searching for another destination,
                country or travel style.
              </p>

              <button
                onClick={() => setSearch("")}
              >
                View All Destinations
              </button>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}

export default Explore;