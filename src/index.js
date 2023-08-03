import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="img/christian-burner.jpg"
      alt="christian-burner"
    />
  );
}

function Intro() {
  return (
    <>
      <h1>Jonas Schedmann</h1>
      <div>
        Full-stack web developer and teacher at Udemy. When not coding and
        preparing a course, I like to play board games, to cook (and eat), or
        just enjoy the Portugese sun at the beach.
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skillObj => (
        <Skill skillObj={skillObj} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill} </span>
      {/* <Emoji level={skillObj.level} /> */}
      <span>
        {skillObj.level === 'beginner' && '👶'}
        {skillObj.level === 'intermediate' && '👍'}
        {skillObj.level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

// function Emoji({ level }) {
//   let emoji;
//   if (level === 'beginner') {
//     emoji = '👶';
//   } else if (level === 'intermediate') {
//     emoji = '👍';
//   } else {
//     emoji = '💪';
//   }
//   return <span>{emoji}</span>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
