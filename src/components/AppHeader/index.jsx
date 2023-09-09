import "./header.css";

const AppHeader = () => {
  return (
    <div id="title">
      <h1>Random peoples</h1>
      <div id="menu">
        <button id="more-profiles">+ 10 profils</button>
        <input
          type="range"
          name="gender"
          min="0"
          max="2"
          value="0"
          step="1"
          id="gender-range"
        />
      </div>
    </div>
  );
};

export default AppHeader;