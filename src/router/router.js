import {Routes , Route } from "react-router-dom" 
import Login from "../loginpage/login"
import Signup from "../signupscreen/signup"
import Ownerproperty from "../ownerproperty/ownerproperty"
import Roomsearch from "../roomsearchpage/roomsearch"
import Roomdetail from "../roomdetails/roomdetail"
const Router = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ownerReg" element={<Ownerproperty />} />
          <Route path="/roomsearch" element={<Roomsearch />} />
          <Route path="/roomdetail" element={<Roomdetail />} />
        </Routes>
      </div>
    );
}

export default Router;