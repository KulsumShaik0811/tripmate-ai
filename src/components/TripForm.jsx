import { useEffect, useState } from "react";
import { MapPin, CalendarDays, Wallet } from "lucide-react";
import { destinations } from "../data/travelData";
import TravelStyle from "./TravelStyle";


function TripForm({
  destination,
  setDestination,
  days,
  setDays,
  budget,
  setBudget,
  style,
  setStyle,
  onGenerate,
  loading,
  selectedDestination,
}) {
    const [formError, setFormError] = useState("");
    useEffect(() => {
        if (selectedDestination) {
            setDestination(selectedDestination);
        }
    }, [selectedDestination, setDestination]);
    
    const handleSubmit = (event) => {
    event.preventDefault();

    if (!destination.trim()) {
        setFormError("Please enter a destination.");
        return;
    }

    const destinationExists = destinations.some(
        (item) =>
            item.name.toLowerCase() === destination.trim().toLowerCase()
    );

if (!destinationExists) {
  setFormError(
    `We don't have itinerary data for "${destination.trim()}". Please choose a destination from Explore.`
  );
  return;
}

    if (Number(days) < 1 || Number(days) > 7) {
        setFormError("Trip duration must be between 1 and 7 days.");
        return;
    }

    if (Number(budget) < 1000) {
        setFormError("Budget must be at least ₹1,000.");
        return;
    }

    setFormError("");
    onGenerate();
    };

  return (
    <div className="planner-card">
      <div className="planner-header">
        <h2>Plan Your Trip</h2>
        <p>
          Tell us your preferences and we'll create your perfect trip.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <MapPin size={17} />
            Destination
          </label>

          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where do you want to go?"
            maxLength={60}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>
              <CalendarDays size={17} />
              Number of Days
            </label>

            <input
              type="number"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              min="1"
              max="7"
            />
          </div>

          <div className="form-group">
            <label>
              <Wallet size={17} />
              Budget
            </label>

            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              min="1000"
              placeholder="₹10,000"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Travel Style</label>

          <TravelStyle
            value={style}
            onChange={setStyle}
          />
        </div>
        {formError && (
            <p className="form-error">
                {formError}
            </p>
        )}

        <button
          className="generate-btn"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Creating Your Trip..."
            : "Generate My Trip ✨"}
        </button>
      </form>
    </div>
  );
}

export default TripForm;