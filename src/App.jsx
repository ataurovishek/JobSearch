import Footer from "./Components/Footerdiv/Footer";
import Job from "./Components/Jobdiv/job";
import Navbar from "./Components/Navbardiv/Navbar";
import Search from "./Components/Searchdiv/search";
import Value from "./Components/Valuediv/value";


const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  );
};

export default App;