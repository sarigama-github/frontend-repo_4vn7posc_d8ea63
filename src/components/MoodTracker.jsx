import { Smile, Frown, Meh, Angry } from "lucide-react";

const moods = [
  { key: "great", label: "Great", icon: Smile, color: "#A7C4A0" },
  { key: "ok", label: "Okay", icon: Meh, color: "#F6C965" },
  { key: "anxious", label: "Anxious", icon: Frown, color: "#B9A6F5" },
  { key: "stressed", label: "Stressed", icon: Angry, color: "#F2766B" },
];

export default function MoodTracker({ onSelect }) {
  return (
    <section
      className="mx-4 p-4 rounded-2xl shadow-sm border"
      style={{ backgroundColor: "#FFF8F1", borderColor: "#E8DED1" }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          className="text-base font-semibold"
          style={{ color: "#5C4033", fontFamily: "Poppins, Nunito, sans-serif" }}
        >
          How do you feel?
        </h2>
        <span className="text-xs" style={{ color: "#6C7C63" }}>
          Tap to log mood
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {moods.map(({ key, label, icon: Icon, color }) => (
          <button
            key={key}
            onClick={() => onSelect?.(key)}
            className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-transform active:scale-95"
            style={{ backgroundColor: "#F5EDE2" }}
          >
            <div className="p-2 rounded-full" style={{ backgroundColor: color }}>
              <Icon size={18} style={{ color: "#5C4033" }} />
            </div>
            <span className="text-[11px] font-medium" style={{ color: "#5C4033" }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
