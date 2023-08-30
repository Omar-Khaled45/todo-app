import { useEffect, useState } from "react";

const DarkMode = () => {
  const selectedTheme = localStorage.getItem("theme");

  const [theme, setTheme] = useState(selectedTheme || "dark");

  const toggleTheme = () => {
    setTheme((e) => (e === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "light"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkMode;
