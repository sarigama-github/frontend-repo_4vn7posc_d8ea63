import { CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";

const initialHabits = [
  { id: 1, title: "Meditate 10 min", color: "#A7C4A0", count: 0 },
  { id: 2, title: "Read 20 pages", color: "#B9A6F5", count: 0 },
  { id: 3, title: "Walk 5k steps", color: "#F6C965", count: 0 },
];

export default function HabitList() {
  const [habits, setHabits] = useState(initialHabits);

  const toggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, count: h.count + 1 } : h))
    );
  };

  const addHabit = () => {
    const name = prompt("New habit name");
    if (!name) return;
    setHabits((prev) => [
      ...prev,
      { id: Date.now(), title: name, color: "#E67E50", count: 0 },
    ]);
  };

  return (
    <section className="mx-4">
      <div className="flex items-center justify-between mb-2">
        <h2
          className="text-base font-semibold"
          style={{ color: "#5C4033", fontFamily: "Poppins, Nunito, sans-serif" }}
        >
          Today's Habits
        </h2>
        <button
          onClick={addHabit}
          className="flex items-center gap-1 text-sm font-medium"
          style={{ color: "#5C4033" }}
        >
          <Plus size={16} /> Add
        </button>
      </div>
      <ul className="space-y-2">
        {habits.map((h) => (
          <li
            key={h.id}
            className="flex items-center justify-between p-3 rounded-xl border"
            style={{ backgroundColor: "#FFF8F1", borderColor: "#E8DED1" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full"
                style={{ backgroundColor: h.color }}
              />
              <div>
                <p className="text-sm font-medium" style={{ color: "#5C4033" }}>
                  {h.title}
                </p>
                <p className="text-[11px]" style={{ color: "#6C7C63" }}>
                  Completed {h.count}x
                </p>
              </div>
            </div>
            <button
              onClick={() => toggleHabit(h.id)}
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#F5EDE2" }}
              aria-label="Mark complete"
            >
              <CheckCircle2 size={18} style={{ color: "#5C4033" }} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
