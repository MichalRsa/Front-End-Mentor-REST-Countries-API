import React from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { regions } from "../../utils/vars/regions";
import Button from "../Button/Button";
import styles from "./notFound.module.scss";

// Sprobuj wyizolować komponent Button!

const Paragraph = ({ children }) => {
  return <p className={styles.errorInfo}>{children}</p>;
};

const NotFound = ({ setLoading }) => {
  const { id, type } = useParams();
  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const searchString = searchParams.get("search");

  if (searchString) {
    return (
      <Paragraph className={styles.errorInfo}>
        Can't find country named <b>{searchString}</b>{" "}
        {/* <button onClick={() => history.replace(`/${id}`)}>Go Back</button> */}
        <Button action={() => history.replace(`/${id}`)} text="Go Back" />
        to region list
      </Paragraph>
    );
  }

  if (!regions.some((reg) => reg.regionURL === id)) {
    return (
      <Paragraph>
        Can't find region named <b>{id}</b> choose from the list below
        <br />
        {regions.map((reg) => (
          <span>
            <Button
              action={() => {
                history.push(`/${reg.regionURL}`);
                setLoading();
              }}
              text={reg.region}
            />{" "}
          </span>
        ))}
      </Paragraph>
    );
  }

  return (
    <Paragraph>
      Can't find country named <b>{type}</b>{" "}
      <Button action={() => history.replace(`/${id}`)} text="Go Back" />
      to region list
    </Paragraph>
  );
};
export default NotFound;
