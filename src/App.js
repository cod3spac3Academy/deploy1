import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/navigation/NavBar";
import HourGlass from "./components/UI/Spinners/HourGlass";
const TasksManager = lazy(() => import("./views/TasksManager"));
const About = lazy(() => import("./views/About"));
const LoginPage = lazy(() => import("./views/Login/LoginPage"))
// import TasksManager from "./views/TasksManager";
// import About from "./views/About";
// import LoginPage from "./views/Login/LoginPage";


function App() {
  return (
    <>
      <header>
        <h1>Deploy</h1>
        <NavBar></NavBar>
      </header>
      <Suspense fallback={
        <div class="full-size flex-center">
          <HourGlass />
        </div>
      }>
        <Routes>
          <Route path="/" element={<TasksManager />}></Route>
          <Route path="/deploy1" element={<TasksManager />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
