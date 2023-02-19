import React, {  useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// let userData=[];
const Profile = () => {

  const history = useNavigate();
  const [userData, setUserData] = useState([]);
  // const callProfilePage = async () => {
  //   try {
  //     const res = await fetch('/profile', {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },  
  //       credentials: "include"
  //     });


  //     const data = await res.json();
  //     console.log(data);
  //     setUserData(data);


  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }

  //   } catch (error) {
  //     console.log(error);
  //     history('/Login');
  //   }
  // }

  // useEffect(() => {
  //   callProfilePage();
  // }, []);


  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/profile');
        setUserData(response.data);
      }
      getUser();
    },[]);


  return (
<div>
  
      <div>
        <div className="col-md-4">
          <div className="step">
            <img
              src="assets/img/22.png"
              alt="Image"
              className="img-fluid"
            />
            <span className="number">02</span>
            
           <h3>{userData.fname}</h3>
            <h3>{userData.lname}</h3>
            <h3>{userData.dob}</h3>
            <h3>{userData.phone}</h3>
            <h3>{userData.pyin}</h3>
            <h3>{userData.email}</h3>
            <h3>{userData.aadharNumber}</h3>
            <h3>{userData.fname}</h3>
            <br />
            <p>Select your desired product and add to your goals.</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Profile
