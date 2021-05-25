import React from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { regions } from "../../utils/vars/regions";
import styles from "./notFound.module.scss";

// Sprobuj wyizolować komponent Button!

const Paragraph = ({ children }) => {
  return <p className={styles.errorInfo}>{children}</p>;
};

const NotFound = () => {
  const { id, type } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchString = searchParams.get("search");
  console.log(searchString);
  console.log(regions[0].regionURL);
  console.log(regions.some((reg) => reg.regionURL === id));

  if (searchString) {
    return (
      <Paragraph className={styles.errorInfo}>
        Can't find country named {searchString}{" "}
        <button onClick={() => history.replace(`/${id}`)}>Go Back</button> to
        region list
      </Paragraph>
    );
  }

  if (!regions.some((reg) => reg.regionURL === id)) {
    return (
      <Paragraph>
        Can't find region named {id} Choose from the list below
        <br />
        {regions.map((reg) => (
          <span>
            <Link to={`/${reg.regionURL}`}>{reg.region}</Link>{" "}
          </span>
        ))}
      </Paragraph>
    );
  }

  return (
    <Paragraph>
      Can't find country named {type}{" "}
      <button onClick={() => history.replace(`/${id}`)}>Go Back</button> to
      region list
    </Paragraph>
  );
};
export default NotFound;
