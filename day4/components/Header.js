
const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/media/08f8eddffda00967035650f7e50ef521.jpg?compress=1&resize=800x600&vertical=top"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;