import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import HeroSection from './components/herosection/HeroSection.jsx';
import CollaborationSection from './components/collaboration/CollaborationSection.jsx';
import FeaturedCourses from './components/feature_courses/FeaturedCourses.jsx';
import VoiceOfSuccess from './components/voiceofsuccess/VoiceOfSuccess.jsx';
// import FeaturedPrograms from './components/feature_program/FeaturedPrograms.jsx';
import MeetOurInstructors from './components/meet_instructor/MeetOurInstructors.jsx';
import FAQAccordion from './components/faq/FAQAccordion.jsx';
import JoinNow from './components/last_comp/JoinNow.jsx';
import Courses from './components/courses/Courses.jsx';
import FloatingContactButton from './components/FloatingContactButton/FloatingContactButton.jsx';
import ChatBot from './components/ChatBot/ChatBot.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Mern from './components/enrollCourses/Mern.jsx';
import DataAnalytics from './components/enrollCourses/DataAnalytics.jsx';
import ML from './components/enrollCourses/MachineLearning.jsx';
import DevOps from './components/enrollCourses/DevOps.jsx';
import QA from './components/enrollCourses/QualityAna.jsx';
import SignupOtp from './components/verifysignupotp/SignupOtp.jsx'
import StudentProfile from './components/student_profile/Profile.jsx'
import StudentLoginOtp from './components/verify_student_login/VerifyLogin.jsx'
import VerifyForgotPass from './components/verify_forgot_password/VerifyForgotPass.jsx'
import ResetPassword from './components/reset-password/ResetPassword.jsx'

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/auth/a2/login" element={<>
        <Navbar />
        <Login />
        <Footer />
        </>} />
        {/*verify student Login route */}
        <Route path="/auth/a2/verifylogin" element={<>
        <StudentLoginOtp />
        <Footer />
        </>} />

        {/* Signup route */}
        <Route path="/auth/a2/signup" element={<>
        <Navbar />
        <Signup />
        <Footer />
        </>} />

        {/*student profile route */}
        <Route path="/auth/a2/profile" element={<>
        <Navbar />
        <StudentProfile />
        <Footer />
        </>} />

        {/* verify signup  */}
        <Route path="/auth/a2/verify-signup" element={<>
        {/* <Navbar /> */}
        <SignupOtp />
        <Footer />
        </>} />

        {/* Forgot password route */}
        <Route path="/auth/a2/forgotpassword" element={<ForgotPassword />} />
        <Route path="/auth/a2/verify-forgotpass" element={<VerifyForgotPass />} />
        <Route path="/auth/a2/reset-pass" element={<ResetPassword />} />

        {/* Main front page */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Navbar />
              <HeroSection />
              <FloatingContactButton />
              <ChatBot />
              <CollaborationSection />
              <Courses />
              <VoiceOfSuccess />
              {/* <FeaturedPrograms /> */}
              <FeaturedCourses />
              <MeetOurInstructors />
              <FAQAccordion />
              <JoinNow />
              <Footer />
            </>
          } 
        />

        {/* Enroll Courses  */}
        <Route path='/course-Mern' element={<>
        <Navbar />
        <Mern />
        <Footer />
        </>} />

        <Route path='/course-DataAnalytics' element={<>
        <Navbar />
        <DataAnalytics />
        <Footer />
        </>} />

        <Route path='/course-ML' element={<>
        <Navbar />
        <ML />
        <Footer />
        </>} />

        <Route path='/course-Devops' element={<>
        <Navbar />
        <DevOps />
        <Footer />
        </>} />

        <Route path='/course-QA' element={<>
        <Navbar />
        <QA />
        <Footer />
        </>} />



        {/* Error Page  */}
        <Route path='*' element={<>
          <Navbar />
          <ErrorPage />
          <Footer />
          </>} />
      </Routes>
    </Router>
  );
}

export default App;
