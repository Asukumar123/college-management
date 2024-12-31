import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import PlacementStats from '../../components/PlacementStats';
import CourseList from '../../components/CourseList';

const CollegeDetails = ({ id }) => {
  const [placements, setPlacements] = useState(null);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const placementResponse = await fetch(`/api/college_data/${id}`);
      const placementData = await placementResponse.json();
      setPlacements(placementData);

      const courseResponse = await fetch(`/api/college_courses/${id}`);
      const courseData = await courseResponse.json();
      setCourses(courseData);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <h1>College Details</h1>
      {placements && <PlacementStats placements={placements} />}
      {courses && <CourseList courses={courses} />}
    </div>
  );
};

export default CollegeDetails;

export async function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}
