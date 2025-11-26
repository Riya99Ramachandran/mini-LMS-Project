import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>

      {courses.map((c) => (
        <div key={c.id} style={{ border: "1px solid #b32222ff", padding: 10, margin: 10 }}>

          <h2>{c.title}</h2>
          <p>{c.description}</p>
          <progress value={c.progress} max="100"></progress>

          <br />
          <Link to={`/course/${c.id}`} style={{ color: "blue" }}>
            Course Content →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
