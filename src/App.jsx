import Header from './components/header/Header.jsx'
import HeroSection from './components/herosection/HeroSection.jsx'
import CollaborationSection from './components/collaboration/CollaborationSection.jsx'
import FeaturedCourses from './components/feature_courses/FeaturedCourses.jsx'
import VoiceOfSuccess from './components/voiceofsuccess/VoiceOfSuccess.jsx'
// import FeaturedPrograms from './components/feature_program/FeaturedPrograms.jsx'
import MeetOurInstructors from './components/meet_instructor/MeetOurInstructors.jsx'
import FAQAccordion from './components/faq/FAQAccordion.jsx'
import JoinNow from './components/last_comp/JoinNow.jsx'
import Courses from './components/courses/Courses.jsx'


function App() {
  

  return (
    <>
      <Header />
      <HeroSection />
      <CollaborationSection />
      <FeaturedCourses />
      <VoiceOfSuccess />
      {/* <FeaturedPrograms /> */}
      <Courses />
      <MeetOurInstructors />
      <FAQAccordion />
      <JoinNow />
    </>
  )
}

export default App
