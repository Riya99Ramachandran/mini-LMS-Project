import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { courses } from "../data/courses";

const data = courses.map(c => ({
  name: c.title,
  value: c.progress
}));

const COLORS = ["#2a20f2ff", "#138b41ff", "#efa613ff", "#b03e05ff", "#025b6fff"];

function Dashboard() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Course Progress Analytics</h2>

      <PieChart width={400} height={350}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label={(entry) => `${entry.name}: ${entry.value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Dashboard;
