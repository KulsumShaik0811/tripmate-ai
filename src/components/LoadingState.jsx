import { LoaderCircle, Plane } from "lucide-react";

function LoadingState() {
  return (
    <div className="loading-state">
      <div className="loading-icon">
        <Plane size={28} />
      </div>

      <LoaderCircle
        className="loading-spinner"
        size={28}
      />

      <h2>Creating Your Perfect Trip...</h2>

      <p>
        TripMate AI is preparing your personalized
        itinerary and budget.
      </p>
    </div>
  );
}

export default LoadingState;