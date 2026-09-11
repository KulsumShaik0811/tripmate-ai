import {
  Palmtree,
  Mountain,
  Landmark,
  Utensils,
} from "lucide-react";

const styles = [
  { name: "Relaxation", icon: Palmtree },
  { name: "Adventure", icon: Mountain },
  { name: "Culture", icon: Landmark },
  { name: "Food", icon: Utensils },
];

function TravelStyle({ value, onChange }) {
  return (
    <div className="style-options">
      {styles.map((style) => {
        const Icon = style.icon;

        return (
          <button
            key={style.name}
            type="button"
            className={value === style.name ? "selected" : ""}
            onClick={() => onChange(style.name)}
          >
            <Icon size={18} />
            {style.name}
          </button>
        );
      })}
    </div>
  );
}

export default TravelStyle;