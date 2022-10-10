import "./styles/HomePageHeader.css";
import logo from "../../assets/logo.png";

function HomePageHeader(props) {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div className="header">
      {/* <img className="menu-icon-logo" alt="logo" src={logo} /> */}
      {/* <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>
          &times;
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div> */}
      <div className="left-content">
        <div className="side-menu" onclick={openNav}>
          &#9776;
        </div>
        <div className="image-container">
          <img className="menu-icon-logo" alt="logo" src={logo} />
        </div>
      </div>

      <div className="header-right">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>

        <a className="signout" href="#signout">
          Sign out
        </a>
      </div>
    </div>
  );
}

export default HomePageHeader;
