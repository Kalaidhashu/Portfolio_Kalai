import React from "react";

const Achievements = () => {
  return (
    <>
    <h2 className="title">ACHIEVEMENTS</h2>
    <div className="achievements-container">
      
      <div className="achievement">
        <h3>CODECHEF</h3>
        <p>⭐ 1 Star Rating | Solved 350+ Problems (SILVER BADGE)</p>
        <p>🥉 BRONZE BADGE for attending the contest</p>
      </div>
      <div className="achievement">
        <h3>LEETCODE</h3>
        <p>✅ 100+ problems solved</p>
        <p>📈 Highest Contest Rating: 1585</p>
      </div>
      <div className="achievement">
        <h3>SKILLRACK</h3>
        <p>🔢 550+ problems solved</p>
      </div>
    </div>
    </>
  );
};

export default Achievements;
