import { useMemo, useState } from "react";
import { Search, MapPin, Sparkles } from "lucide-react";
import { destinations } from "../data/travelData";

function Explore({ onPlanTrip }) {
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return destinations;
    }

    return destinations.filter((destination) => {
      const name =
        destination.name?.toLowerCase() || "";

      const country =
        destination.country?.toLowerCase() || "";

      const description =
        destination.description?.toLowerCase() || "";

      return (
        name.includes(query) ||
        country.includes(query) ||
        description.includes(query)
      );
    });
  }, [search]);

  return (
    <main className="explore-page">
      <section className="explore-header">
        <div>
          <div className="hero-badge">
            <Sparkles size={16} />
            Discover Your Next Adventure
          </div>

          <h1>Explore Destinations</h1>

          <p>
            Find inspiring places and start planning
            your next unforgettable trip.
          </p>
        </div>

        <div className="explore-search">
          <Search size={20} />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search destinations..."
            maxLength={50}
          />
        </div>
      </section>

      {filteredDestinations.length === 0 ? (
        <section className="empty-state">
          <div className="empty-icon">
            <Search size={30} />
          </div>

          <h2>No destinations found</h2>

          <p>
            We couldn't find a destination matching
            "{search}".
          </p>

          <button
            type="button"
            onClick={() => setSearch("")}
          >
            Show All Destinations
          </button>
        </section>
      ) : (
        <section className="destination-grid">
          {filteredDestinations.map((destination) => (
            <article
              className="destination-card"
              key={destination.name}
            >
              <div className="destination-image">
                <img
                  src={destination.image}
                  alt={destination.name}
                />
              </div>

              <div className="destination-content">
                <div className="destination-location">
                  <MapPin size={15} />
                  {destination.country}
                </div>

                <h2>{destination.name}</h2>

                <p>{destination.description}</p>

                <button
                  type="button"
                  onClick={() =>
                    onPlanTrip(destination)
                  }
                >
                  Plan This Trip
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Explore;