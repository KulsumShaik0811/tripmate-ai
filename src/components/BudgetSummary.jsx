import { Wallet, Utensils, Car, Ticket } from "lucide-react";

function BudgetSummary({ trip }) {
  const activityCost = trip.itinerary.reduce(
    (total, day) =>
      total +
      day.activities.reduce(
        (dayTotal, activity) =>
          dayTotal + Number(activity.cost),
        0
      ),
    0
  );

  const foodCost = trip.days * 1000;
  const transportCost = trip.days * 750;

  const estimatedTotal =
    activityCost + foodCost + transportCost;

  const remaining =
    Number(trip.budget) - estimatedTotal;

  return (
    <div className="budget-summary">
      <div className="budget-heading">
        <Wallet size={22} />
        <div>
          <h2>Budget Summary</h2>
          <p>Estimated expenses for your trip</p>
        </div>
      </div>

      <div className="budget-items">
        <div className="budget-item">
          <div>
            <Ticket size={17} />
            Activities
          </div>

          <strong>
            ₹{activityCost.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="budget-item">
          <div>
            <Utensils size={17} />
            Food
          </div>

          <strong>
            ₹{foodCost.toLocaleString("en-IN")}
          </strong>
        </div>

        <div className="budget-item">
          <div>
            <Car size={17} />
            Transport
          </div>

          <strong>
            ₹{transportCost.toLocaleString("en-IN")}
          </strong>
        </div>
      </div>

      <div className="budget-total">
        <span>Estimated Total</span>

        <strong>
          ₹{estimatedTotal.toLocaleString("en-IN")}
        </strong>
      </div>

      <div
        className={
          remaining >= 0
            ? "budget-status good"
            : "budget-status warning"
        }
      >
        {remaining >= 0
          ? `₹${remaining.toLocaleString(
              "en-IN"
            )} remaining from your budget`
          : `₹${Math.abs(remaining).toLocaleString(
              "en-IN"
            )} over your selected budget`}
      </div>
    </div>
  );
}

export default BudgetSummary;