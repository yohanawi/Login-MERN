import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
    <h3 className="topic" style={{marginLeft:'500px' , marginTop: '100px'}}>Vessel Tracking & Monitoring Platform</h3><br/><br/>
    <div className="set" style={{marginLeft: '550px'}}>
                <button className='btn bg2' type="submit">
                    Shipment Tracking
                </button><br /><br/>
                <button className='btn bg2' type="submit">
                    Single Vessel Position
                </button><br /><br/>
                <button className='btn bg2' type="submit">
                    Vessel Registration
                </button><br /><br/>
                <button className='btn bg2' type="submit">
                    Credit Balance
                </button><br/><br/>
                <button onClick={logoutHandler} className="btn btn-primary text-left">Logout</button>
            </div>    
	  <hr/>
      
    </>
  );
};

export default Dashboard;
