import { useEffect, useState } from "react";
import { Plane } from "lucide-react";
import TripForm from "../components/TripForm";

function Home({ 
    onGenerate,
    loading, 
    selectedDestination, 
}) {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(10000);
  const [style, setStyle] = useState("Adventure");

    useEffect(() => {
        if (selectedDestination) {
            setDestination(selectedDestination);
        }
    }, [selectedDestination]);

  const handleGenerate = () => {
    onGenerate({
      destination,
      days,
      budget,
      style,
    });
  };

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Plane size={18} />
            AI Travel Planner
          </div>

          <h1>
            Plan Less.
            <br />
            <span>Travel More. ✈️</span>
          </h1>

          <p>
            Your AI-powered travel companion for smarter,
            stress-free trips.
          </p>

        <TripForm
            destination={destination}
            setDestination={setDestination}
            days={days}
            setDays={setDays}
            budget={budget}
            setBudget={setBudget}
            style={style}
            setStyle={setStyle}
            onGenerate={handleGenerate}
            loading={loading}
            selectedDestination={selectedDestination}
        /> 
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
            alt="Beautiful tropical beach"
          />

          <div className="floating-card">
            ✈️ Your adventure starts here
          </div>
        </div>
      </section>

      <section className="features">
        <div>
          <span>✨</span>
          <h3>Personalized Plans</h3>
          <p>Trips designed around your preferences.</p>
        </div>

        <div>
          <span>📍</span>
          <h3>Top Attractions & Hidden Gems</h3>
          <p>Discover places worth exploring.</p>
        </div>

        <div>
          <span>💰</span>
          <h3>Smart Budgeting</h3>
          <p>Make the most of every rupee.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;