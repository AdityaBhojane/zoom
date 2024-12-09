import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import VideoCall from "./pages/VideoCall/VideoCall";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/meeting" element={<VideoCall/>} />
      </Routes>
    </>
  )
};

export default App;
