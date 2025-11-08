import { Settings, Calendar } from "lucide-react";

export default function HeaderBar() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between px-4 pt-6 pb-3">
      <div className="flex items-center gap-2">
        <div
          className="p-2 rounded-xl"
          style={{ backgroundColor: "#F5EDE2" }}
        >
          <Calendar size={18} style={{ color: "#5C4033" }} />
        </div>
        <div>
          <p className="text-[11px]" style={{ color: "#6C7C63" }}>
            {today}
          </p>
          <h1
            className="text-xl leading-tight font-semibold tracking-tight"
            style={{ color: "#5C4033", fontFamily: "Manrope, Inter, sans-serif" }}
          >
            MindHabit
          </h1>
        </div>
      </div>
      <button
        aria-label="Settings"
        className="p-2 rounded-xl shadow-sm border"
        style={{ backgroundColor: "#F5EDE2", borderColor: "#E8DED1" }}
      >
        <Settings size={18} style={{ color: "#5C4033" }} />
      </button>
    </header>
  );
}
