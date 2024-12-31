import Link from 'next/link';

const CollegeCard = ({ college }) => (
  <div>
    <h2>{college.name}</h2>
    <p>Score: {college.score}</p>
    <Link href={`/colleges/${college.id}`}>View Details</Link>
    <style jsx>{`
      div {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
      }
    `}</style>
  </div>
);

export default CollegeCard;
