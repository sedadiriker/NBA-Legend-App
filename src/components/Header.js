import logo from "../assets/nba-logo.png"; //! resim src de ise import edilmeli


const Header = ({name}) => {
  return (
    <header>
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="title">
        <h1>NBA LEGENDS</h1>
      </div>

      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Player"
      />
    </header>
  );
};

export default Header;
