import { BarChart3 } from "lucide-react";

export default function DailySummary({ mood }) {
  return (
    <section
      className="mx-4 p-4 rounded-2xl mt-3 border"
      style={{ backgroundColor: "#F5EDE2", borderColor: "#E8DED1" }}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base font-semibold" style={{ color: "#5C4033" }}>
          Daily Snapshot
        </h2>
        <BarChart3 size={18} style={{ color: "#5C4033" }} />
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl" style={{ backgroundColor: "#FFF8F1" }}>
          <p className="text-[11px]" style={{ color: "#6C7C63" }}>
            Mood
          </p>
          <p className="text-sm font-semibold" style={{ color: "#5C4033" }}>
            {mood ? mood : "—"}
          </p>
        </div>
        <div className="p-3 rounded-xl" style={{ backgroundColor: "#FFF8F1" }}>
          <p className="text-[11px]" style={{ color: "#6C7C63" }}>
            Habits
          </p>
          <p className="text-sm font-semibold" style={{ color: "#5C4033" }}>
            3 tasks
          </p>
        </div>
        <div className="p-3 rounded-xl" style={{ backgroundColor: "#FFF8F1" }}>
          <p className="text-[11px]" style={{ color: "#6C7C63" }}>
            Streak
          </p>
          <p className="text-sm font-semibold" style={{ color: "#5C4033" }}>
            5 days
          </p>
        </div>
      </div>
    </section>
  );
}
