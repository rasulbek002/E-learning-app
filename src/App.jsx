import "./App.css";
import ReactLogo from "./assets/react.svg";
import CourcesList from "./components/courses/CourcesList";
import CourseCard from "./components/courses/CourseCard";
import CoursesControlBar from "./components/courses/CoursesControlBar";

function App() {
  return (
    <div>
      <CoursesControlBar />
      <CourcesList />
    </div>
  );
}

export default App;
