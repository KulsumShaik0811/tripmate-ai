import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Explore from "./pages/Explore";
import SavedTrips from "./pages/SavedTrips";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";

function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trip, setTrip] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [savedTrips, setSavedTrips] = useLocalStorage(
    "tripmate-saved-trips",
    []
  );

  const generateTrip = async (tripData) => {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripData),
      });

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(
          errorData.message || "Unable to generate trip."
        );
      }

      const data = await response.json();

      console.log("API Response:", data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setTrip(data);
      setPage("itinerary");
    } catch (error) {
      console.error("Trip generation failed:", error);

      setError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTrip = () => {
    if (!trip) return;

    const alreadySaved = savedTrips.some(
      (savedTrip) => savedTrip.id === trip.id
    );

    if (alreadySaved) return;

    setSavedTrips((currentTrips) => [
      ...currentTrips,
      trip,
    ]);
  };

  const handleBackToPlanner = () => {
    setPage("home");
    setError("");
  };
  
  const handleViewSavedTrip = (savedTrip) => {
    setTrip(savedTrip);
    setPage("itinerary");
    setError("");
  };

  const handleDeleteSavedTrip = (tripId) => {
    setSavedTrips((currentTrips) =>
      currentTrips.filter(
        (savedTrip) => savedTrip.id !== tripId
      )
    );
  };

  const handlePlanFromExplore = (destination) => {
  setSelectedDestination(destination.name);
  setPage("home");
  setError("");
};

  return (
    <>
      <Navbar
        page={page}
        setPage={setPage}
      />

      {page === "home" && !loading && (
          <Home
            onGenerate={generateTrip}
            loading={loading}
            selectedDestination={selectedDestination}
          />
      )}

{loading && <LoadingState />}

      {page === "itinerary" && trip && (
        <Itinerary
          trip={trip}
          onBack={handleBackToPlanner}
          onSave={handleSaveTrip}
          saved={savedTrips.some(
            (savedTrip) => savedTrip.id === trip.id
          )}
        />
      )}

      {page === "explore" && (
        <Explore
          onPlanTrip={handlePlanFromExplore}
        />
      )}

      {page === "saved" && (
        <SavedTrips
          savedTrips={savedTrips}
          onViewTrip={handleViewSavedTrip}
          onDeleteTrip={handleDeleteSavedTrip}
        />
      )}

      {error && (
          <ErrorState
            message={error}
            onRetry={() => {
              setError("");
              setPage("home");
            }}
          />
      )}
    </>
  );
}

export default App;