const CourseList = ({ courses }) => (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.courseName} - ${course.courseFee} ({course.courseDuration})
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default CourseList;
  