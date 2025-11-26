import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === Number(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{course.title}</h1>
      <p>{course.description}</p>

      <h3>Duration: {course.duration}</h3>

      <h3>Syllabus</h3>
      <ul>
        {course.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Lessons</h3>
      {course.lessons.map((l, i) => (
        <p key={i}>• {l}</p>
      ))}
    </div>
  );
}

export default CourseDetail;
