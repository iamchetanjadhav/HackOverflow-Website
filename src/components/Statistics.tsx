import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

type YearKey = "1.0" | "2.0" | "3.0";

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2.0");

  const statsData: Record<YearKey, any> = {
    "1.0": {
      title: "HackOverflow 1.0",
      overview: { participants: 200, projects: 50, hours: 36, states: 10 },
      categories: [
        { name: "Web Development", value: 35 },
        { name: "AI / ML", value: 25 },
        { name: "Blockchain", value: 15 },
        { name: "IoT", value: 15 },
        { name: "Other", value: 10 },
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "3 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "50+" },
        { icon: "🎯", label: "Completion Rate", value: "92%" },
        { icon: "⭐", label: "Satisfaction", value: "4.8 / 5" },
      ],
      impact: [
        { value: "18+", label: "Mentors" },
        { value: "45+", label: "Colleges" },
        { value: "24 hrs", label: "Avg Coding" },
        { value: "12+", label: "Deployments" },
      ],
    },

    "2.0": {
      title: "HackOverflow 2.0",
      overview: { participants: 200, projects: 55, hours: 36, states: 12 },
      categories: [
        { name: "Web Development", value: 30 },
        { name: "AI / ML", value: 30 },
        { name: "Blockchain", value: 15 },
        { name: "IoT", value: 15 },
        { name: "Other", value: 10 },
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "3 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "50+" },
        { icon: "🎯", label: "Completion Rate", value: "95%" },
        { icon: "⭐", label: "Satisfaction", value: "4.9 / 5" },
      ],
      impact: [
        { value: "5+", label: "Mentors, Judges and Guest" },
        { value: "50+", label: "Colleges" },
        { value: "30 hrs", label: "Avg Coding" },
        { value: "18+", label: "Deployments" },
      ],
    },

    "3.0": {
      title: "HackOverflow 3.0",
      overview: { participants: 250, projects: 60, hours: 36, states: 15 },
      categories: [
        { name: "Web Development", value: 28 },
        { name: "AI / ML", value: 35 },
        { name: "Blockchain", value: 12 },
        { name: "IoT", value: 15 },
        { name: "Other", value: 10 },
      ],
      achievements: [
        { icon: "🏆", label: "Winning Teams", value: "3 Teams" },
        { icon: "💡", label: "Ideas Pitched", value: "60+" },
        { icon: "🎯", label: "Completion Rate", value: "97%" },
        { icon: "⭐", label: "Satisfaction", value: "5.0 / 5" },
      ],
      impact: [
        { value: "7+", label: "Mentors, Judges and Guest" },
        { value: "55+", label: "Colleges" },
        { value: "36 hrs", label: "Avg Coding" },
        { value: "25+", label: "Deployments" },
      ],
    },
  };

  const current = statsData[selectedYear];

  return (
    <section className="stats-section">
      <style>{`
        .stats-section {
          background:#0f0f0f;
          padding:4rem 0;
          font-family:Poppins,sans-serif;
        }

        .stats-container {
          max-width:1400px;
          margin:auto;
          padding:0 2rem;
        }



        .year-selector {
          display:flex;
          justify-content:center;
          gap:1rem;
          margin-bottom:3rem;
        }

        .year-btn {
          padding:.9rem 1.8rem;
          border-radius:12px;
          border:1px solid rgba(255,255,255,0.12);
          background:rgba(255,255,255,0.03);
          color:#aaa;
          cursor:pointer;
        }

        .year-btn.active {
          background:linear-gradient(135deg,#FCB216,#E85D24);
          color:#fff;
        }

        /* ===== 12 COLUMN GRID ===== */
        .grid-12 {
          display:grid;
          grid-template-columns:repeat(12,1fr);
          gap:1.2rem;
        }

        .span-3 { grid-column:span 3; }
        .span-4 { grid-column:span 4; }

        .card {
          background:rgba(255,255,255,0.05);
          border-radius:16px;
          padding:2rem;
        }

        .overview-number {
          font-size:2.6rem;
          font-weight:800;
          color:#FCB216;
          text-align:center;
        }

        .overview-label {
          text-align:center;
          margin-top:.4rem;
        }

        .card-title {
          font-size:1.25rem;
          font-weight:700;
          color:#fff;
          margin-bottom:1.2rem;
        }

        .row-item {
          display:flex;
          justify-content:space-between;
          background:rgba(255,255,255,0.06);
          padding:.8rem 1rem;
          border-radius:10px;
          margin-bottom:.8rem;
        }

        .impact-grid {
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:.8rem;
        }

        .impact-item {
          background:rgba(255,255,255,0.06);
          padding:1rem;
          border-radius:12px;
          text-align:center;
        }

        .impact-value {
          font-size:1.4rem;
          font-weight:800;
          color:#FCB216;
        }

        @media(max-width:1024px){
          .grid-12 {
            grid-template-columns:repeat(2,1fr);
          }
          .span-3,.span-4 {
            grid-column:span 1;
          }
        }

        @media(max-width:768px){
          .grid-12 {
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <div className="stats-container">
        <SectionHeader
          badge="By The Numbers"
          title="HackOverflow"
          gradientText="Statistics"
          subtitle="Celebrating our milestones and community growth through the years"
        />

        <div className="year-selector">
          {(Object.keys(statsData) as YearKey[]).map(y => (
            <button
              key={y}
              className={`year-btn ${selectedYear === y ? "active" : ""}`}
              onClick={() => setSelectedYear(y)}
            >
              {statsData[y].title}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        <div className="grid-12" style={{ marginBottom: "2rem" }}>
          {Object.entries(current.overview).map(([k, v]) => (
            <div key={k} className="card span-3">
              <div className="overview-number">{v as React.ReactNode}</div>
              <div className="overview-label">{k.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* STATS ROW */}
        <div className="grid-12">
          <div className="card span-4">
            <h3 className="card-title">Project Categories</h3>
            {current.categories.map((c: any, i: number) => (
              <div key={i} className="row-item">
                <span>{c.name}</span>
                <strong>{c.value}%</strong>
              </div>
            ))}
          </div>

          <div className="card span-4">
            <h3 className="card-title">Key Achievements</h3>
            {current.achievements.map((a: any, i: number) => (
              <div key={i} className="row-item">
                <span>{a.icon} {a.label}</span>
                <strong>{a.value}</strong>
              </div>
            ))}
          </div>

          <div className="card span-4">
            <h3 className="card-title">Impact Highlights</h3>
            <div className="impact-grid">
              {current.impact.map((i: any, idx: number) => (
                <div key={idx} className="impact-item">
                  <div className="impact-value">{i.value}</div>
                  <div>{i.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Statistics;