import { Route,  Routes } from "react-router";

import Borderradius from "./pages/BorderRadius";
import Boxshadow from "./pages/BoxShadow";
import Flexbox from "./pages/FlexBox";
import Font from "./pages/Font";
import Gradient from "./pages/Gradient";
import Homepage from "./pages/HomePage";
import Textshadow from "./pages/TextShadow";
import Transform from "./pages/Transform";
import Widthheight from "./pages/WidthHeight";


function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Homepage/>}/>
       <Route path="borderRadius" element={<Borderradius/>}/>
        <Route path="widthheight" element={<Widthheight/>}/>
        <Route path="boxShadow" element={<Boxshadow/>}/>
        <Route path="textShadow" element={<Textshadow/>}/>
        <Route path="font" element={<Font/>}/>
        <Route path="flexBox" element={<Flexbox/>}/>
       <Route path="transform" element={<Transform/>}/>
       <Route path="gradient" element={<Gradient/>}/>
     </Routes>
    </div>
  );
}

export default App;
