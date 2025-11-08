import { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import MoodTracker from "./components/MoodTracker";
import HabitList from "./components/HabitList";
import DailySummary from "./components/DailySummary";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div
      className="min-h-screen max-w-md mx-auto"
      style={{ backgroundColor: "#FFF8F1", fontFamily: "Inter, Manrope, sans-serif" }}
    >
      {/* Top gradient header */}
      <div
        className="h-40 rounded-b-[2rem]"
        style={{
          background: "linear-gradient(135deg, #F5EDE2 0%, #FFF8F1 60%)",
          boxShadow: "0 10px 30px rgba(92,64,51,0.06)",
        }}
      />

      <div className="-mt-32">
        <HeaderBar />
        <MoodTracker onSelect={setMood} />
        <DailySummary mood={mood} />
        <div className="my-3" />
        <HabitList />

        {/* Color legend using 60:30:10 rule */}
        <div className="mx-4 mt-6 mb-16">
          <p className="text-xs mb-2" style={{ color: "#6C7C63" }}>
            Palette
          </p>
          <div className="flex items-center gap-2">
            <div className="h-2 rounded-full flex-1" style={{ backgroundColor: "#5C4033" }} />
            <div className="h-2 rounded-full w-1/3" style={{ backgroundColor: "#F5EDE2" }} />
            <div className="h-2 rounded-full w-1/6" style={{ backgroundColor: "#A7C4A0" }} />
          </div>
        </div>
      </div>

      {/* Fixed bottom nav mock */}
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md px-4 py-3 rounded-2xl shadow-lg flex items-center justify-between"
        style={{ backgroundColor: "#5C4033" }}
      >
        <button className="text-xs font-medium" style={{ color: "#FFFFFF" }}>
          Home
        </button>
        <button className="text-xs font-medium" style={{ color: "#FFFFFF" }}>
          Journal
        </button>
        <button className="text-xs font-medium" style={{ color: "#FFFFFF" }}>
          Insights
        </button>
        <button className="text-xs font-medium" style={{ color: "#FFFFFF" }}>
          Profile
        </button>
      </nav>
    </div>
  );
}

export default App;
