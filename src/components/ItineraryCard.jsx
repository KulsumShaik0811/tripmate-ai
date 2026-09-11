import { Clock, MapPin, Wallet } from "lucide-react";

function ItineraryCard({ activity }) {
  return (
    <div className="activity-card">
      <div className="activity-time">
        <Clock size={17} />
        <span>{activity.time}</span>
      </div>

      <div className="activity-content">
        <h3>{activity.title}</h3>

        <div className="activity-location">
          <MapPin size={15} />
          <span>{activity.location}</span>
        </div>

        <p>{activity.description}</p>

        <div className="activity-cost">
          <Wallet size={15} />
          Estimated cost: ₹
          {Number(activity.cost).toLocaleString("en-IN")}
        </div>
      </div>
    </div>
  );
}

export default ItineraryCard;