import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../interfaces/enums";

const Header: FC<{}> = () => {
  return (
    <header>
      <div>sad</div>
      <nav>
        <ul>
          {Object.entries(Paths)
            .filter((path) => path[1] !== Paths.Content)
            .map((path) => (
              <li key={path[0]}>
                <Link to={path[1]}>{path[0]}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
