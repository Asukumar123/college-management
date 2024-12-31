const PlacementStats = ({ placements }) => {
  if (!placements || !placements.placementSection) {
    return <p>Loading placement data...</p>;
  }

  return (
    <div>
      <h2>Placement Statistics</h2>
      <ul>
        {placements.placementSection.map((placement) => (
          <li key={placement.year}>
            Year: {placement.year}, Rate: {placement.placementRate}%, Trend: {placement.placementTrend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlacementStats;
