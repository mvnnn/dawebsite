import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

export default class Header extends Component {
  render() {
    return (
      <Tabs>
        <Tab label="Item One" >
          <div>
            <h2>Tab One</h2>
            <Slider name="slider0" defaultValue={0.5} />
          </div>
        </Tab>
      </Tabs>
    );

  // render() {
  //   return (
  //   <div>
  //     <nav className="navbar nav-pills navbar-inverse">
  //       <div className="container-fluid">
  //         <ul className="nav navbar-nav">
  //           <li><Link to="exam">Exam</Link></li>
  //           <li><Link to="quiz">Quize</Link></li>
  //           <li><Link to="attendance">Attendance</Link></li>
  //           <li><Link to="sendMail">SendMail</Link></li>
  //           <li><Link to="logout" style={{ marginLeft: '900%', color: 'red' }}>Logout</Link></li>
  //         </ul>
  //       </div>
  //     </nav>
  //   </div>
  //   );
  }
}

// <Link to="home" className="navbar-brand">
// <img src="../../other/image/DAIICT.png" height="50%" width="100%" style={{ bgcolor: '#111122' }}/>
// </Link>
