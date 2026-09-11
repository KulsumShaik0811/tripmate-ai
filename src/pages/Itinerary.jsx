import { useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  Check,
  MapPin,
} from "lucide-react";
import ItineraryCard from "../components/ItineraryCard";
import BudgetSummary from "../components/BudgetSummary";

function Itinerary({
  trip,
  onBack,
  onSave,
  saved,
}) {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDay = trip.itinerary.find(
    (day) => day.day === selectedDay
  );

  return (
    <main className="itinerary-page">
      <div className="itinerary-container">

        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to Planner
        </button>

        <section className="trip-banner">
          <img
            src={trip.image}
            alt={trip.destination}
          />

          <div className="trip-banner-overlay">
            <div>
              <div className="trip-location">
                <MapPin size={17} />
                {trip.country}
              </div>

              <h1>
                Your Trip to {trip.destination}
              </h1>

              <p>{trip.description}</p>
            </div>

            <button
              className={
                saved
                  ? "save-trip-button saved"
                  : "save-trip-button"
              }
              onClick={onSave}
              disabled={saved}
            >
              {saved ? (
                <>
                  <Check size={18} />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark size={18} />
                  Save Trip
                </>
              )}
            </button>
          </div>
        </section>

        <section className="trip-details">
          <div>
            <span>Duration</span>
            <strong>{trip.days} Days</strong>
          </div>

          <div>
            <span>Budget</span>
            <strong>
              ₹{trip.budget.toLocaleString("en-IN")}
            </strong>
          </div>

          <div>
            <span>Travel Style</span>
            <strong>{trip.style}</strong>
          </div>
        </section>

        <section className="itinerary-section">
          <div className="section-heading">
            <div>
              <h2>Day-by-Day Itinerary</h2>
              <p>
                Your personalized travel plan
              </p>
            </div>
          </div>

          <div className="day-tabs">
            {trip.itinerary.map((day) => (
              <button
                key={day.day}
                className={
                  selectedDay === day.day
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSelectedDay(day.day)
                }
              >
                Day {day.day}
              </button>
            ))}
          </div>

          {currentDay && (
            <div className="day-content">
              <div className="day-title">
                <span>{currentDay.day}</span>

                <div>
                  <h2>{currentDay.title}</h2>
                  <p>
                    {currentDay.activities.length}{" "}
                    activities planned
                  </p>
                </div>
              </div>

              <div className="activities-list">
                {currentDay.activities.map(
                  (activity, index) => (
                    <ItineraryCard
                      key={index}
                      activity={activity}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </section>

        <BudgetSummary trip={trip} />

      </div>
    </main>
  );
}

export default Itinerary;