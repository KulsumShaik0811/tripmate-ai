import { AlertTriangle, RefreshCw } from "lucide-react";

function ErrorState({ message, onRetry }) {
  return (
    <div className="error-state">
      <div className="error-icon">
        <AlertTriangle size={30} />
      </div>

      <h2>Something Went Wrong</h2>

      <p>
        {message ||
          "We couldn't create your trip right now. Please try again."}
      </p>

      <button onClick={onRetry}>
        <RefreshCw size={17} />
        Try Again
      </button>
    </div>
  );
}

export default ErrorState;