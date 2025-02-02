import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 50px;
  margin-bottom: 10px;
  padding-top: 10px;
  background-image: url('https://media.istockphoto.com/id/1281736074/vector/abstract-geometric-pattern-background.jpg?s=612x612&w=0&k=20&c=rTHAuJPGgbaGZCDh6PAoVkJr3mTvn5WppwDHAPfNgoU='); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  text-align: left;
  color: white;
  width: 100%;
  margin-bottom: 20px;
`;
const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: Green;
  margin-bottom: 20px;
  font-weight:bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    text-align:center;
  }
`;

const SubTitle = styled.p`
  color: #36454F; 
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

const Highlight = styled.span`
  color: black;
  font-weight: 600;
`;
const BoldText = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color:green; 
  margin: 0;
  margin-bottom: 20px;
`;


const InfoContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-top: 20px;

@media (max-width: 768px) {
  flex-direction: column-reverse; 
  align-items: center;
  }
`;

const InfoText = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%; 
    text-align: center; 
  }
`;

const BrochureButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 1rem; 
    padding: 8px 16px; 
  }
`;

const BannerImage = styled.img`
 
  max-width: 45%;
  height: auto;
  border-radius: 15px;
  margin-right: 30px;
  border: 5px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    max-width: 100%;  
    margin-right: 0;  
    margin-bottom:20px;
    }
`;

// MERN Component
const Mern = () => {
  return (
    <>
      <Container>
        <InfoContainer>
          <InfoText>
            <Header>
              <MainTitle>MERN STACK <br /> <br/>DEVELOPMENT</MainTitle>
            </Header><br/>
            <p>6 Months  • Online  • 100% Live Sessions</p><br/>
            <BoldText>Course Fee: 14,999/-</BoldText>
            <BrochureButton>Pay Now</BrochureButton>
          </InfoText>
          <BannerImage
            src="https://wallpapercave.com/wp/wp8903890.jpg" />
        </InfoContainer>
      </Container>
    </>
  );
};

// Specialization Container
const SpecializationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white; 
  background-image: url('https://media.istockphoto.com/id/1281736074/vector/abstract-geometric-pattern-background.jpg?s=612x612&w=0&k=20&c=rTHAuJPGgbaGZCDh6PAoVkJr3mTvn5WppwDHAPfNgoU='); 
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 
  padding: 10%;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding: 5%; 
  }
`;

const CourseListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

const CourseContainer = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 

  @media (max-width: 768px) {
    padding: 10px; 
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
  text-align:center;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const Info = styled.p`
  margin: 5px 0;
  color: #555;
  text-align:center;
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  text-align: left;
  margin: 10px 40px;
  padding: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin: 10px; 
    font-size: 0.9rem; 
  }

  &:hover {
    background-color: #fff;
  }
`;

const CourseDetails = styled.div`
  margin-top: 10px;
  margin-left:40px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding:20px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Skill = styled.span`
  background-color: #e7f3ff;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
`;

// Course Component
const Course = ({ course, isOpen, toggleOpen }) => {
  return (
    <CourseContainer onClick={toggleOpen}>
      <CourseTitle>{course.title}</CourseTitle>
      <Info>Duration: {course.duration} hours</Info>
      <Info>Rating: {course.rating} ⭐ ({course.reviews} ratings)</Info>

      <ExpandButton>
        {isOpen ? "Hide details ▲" : "Show details ▼"}
      </ExpandButton>

      {isOpen && (
        <CourseDetails>
          <h4>What you'll learn</h4>
          <br />
          <ul>
            {course.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <br />
          <h4>Skills you'll gain</h4>
          <SkillsContainer>
            {course.skills.map((skill, index) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </SkillsContainer>
        </CourseDetails>
      )}
    </CourseContainer>
  );
};

// CourseList Component with dropdown functionality
const CourseList = ({ courses }) => {
  const [openCourseIndex, setOpenCourseIndex] = useState(null);

  const toggleCourse = (index) => {
    setOpenCourseIndex(openCourseIndex === index ? null : index);
  };

  return (
    <CourseListContainer>
      {courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          isOpen={openCourseIndex === index}
          toggleOpen={() => toggleCourse(index)}
        />
      ))}
    </CourseListContainer>
  );
};

// Specialization Section
const Specialization = () => {
  const courses = [
    {
      title: '1. Introduction to MERN Stack and Environment Setup',
      duration: 17,
      rating: 4.4,
      reviews: 283,
      learningPoints: [
        'Overview of the MERN (MongoDB, Express, React, Node.js) stack.',
        'Setting up the development environment.',
        'Installing Node.js, npm, and basic tools (VS Code, Git).',
        'Understanding MongoDB setup and cloud database options like MongoDB Atlas.',
        'Running a basic Node.js server and introduction to REST APIs.'
      ],
      skills: ['MongoDB', 'Express', ' React', 'Node.js','Git','Github', 'REST APIs']
    },
    {
      title: '2. Building the Backend with Node.js and Express',
      duration: 24,
      rating: 4.0,
      reviews: 49,
      learningPoints: [
        'Introduction to Node.js and its core modules.',
        'Creating a REST API using Express.',
        'Middleware and routing in Express',
        'Connecting MongoDB with Node.js using Mongoose.',
        'Implementing CRUD (Create, Read, Update, Delete) operations.',
        'Authentication basics using JWT (JSON Web Tokens).'
      ],
      skills: ['Node.js', 'REST APIs', 'JWT', 'Mongoose']
    },
    {
      title: '3. Frontend Development with React',
      duration: 19,
      rating: 4.3,
      reviews: 69,
      learningPoints: [
        'Introduction to React.js and component-based architecture.',
        'Gain in-depth knowledge of back-end programming, working with databases and REST APIs.',
        'Creating a dynamic user interface using JSX',
        'State and props in React.',
        'Handling events and forms.', 'Introduction to React Hooks (useState, useEffect).',
        'Fetching data from a backend using Axios or Fetch API'
      ],
      skills: ['Data Structures', 'Java Backend', 'REST APIs', 'Cloud Deployment']
    },
    {
      title: '4. State Management and Advanced React',
      duration: 1,
      rating: 4.4,
      reviews: 283,
      learningPoints: [
        'Understanding Reacts Context API for state management.',
        'Introduction to Redux for more complex state management.',
        'Managing global states across components.',
        'Optimizing React applications with React Router for navigation.',
        'Performance optimization in React (memoization, lazy loading).'
      ],
      skills: ['MongoDB', 'Express', ' React', 'Node.js','Git','Github', 'REST APIs']
    },
    {
      title: '5. Full-Stack Integration and Deployment',
      duration: 1,
      rating: 4.4,
      reviews: 283,
      learningPoints: [
        'Connecting the React frontend with the Express/Node.js backend.',
        'Handling forms, authentication, and sessions.',
        'Creating an end-to-end flow (User registration, login, and dashboard).',
        'Deploying the full-stack application on cloud platforms like Heroku, Netlify, or Vercel.',
        'Implementing basic security measures: HTTPS, CORS, environment variables for secrets.'
      ],
      skills: ['MongoDB', 'Express', ' React', 'Node.js','Git','Github', 'REST APIs']
    },
  ];

  // return (
  //   <SpecializationContainer>
  //       <br /><br />
  //     <h2 className='font-bold'>MERN Stack Learning Modules</h2>
  //     <br />
  //     <p>Master the MERN Stack with this comprehensive course, covering MongoDB, Express, React, and Node.js to build dynamic full-stack web applications.</p>
  //     <CourseList courses={courses} />
  //   </SpecializationContainer>
  // );
};

// Main App Component
const App = () => {
  return (
    <>
      <Mern />
      <Specialization />
    </>
  );
};

export default App;
