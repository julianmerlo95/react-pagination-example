import React, { useState, useEffect } from "react";
import Competition from "./competition/Competition";
import { request } from "../../axios/index";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [pageInitial, setpageInitial] = useState(1);
  const quantityCompetitionsShow = 10;

  const newQuantityShow = pageInitial * quantityCompetitionsShow;
  const lastQuantityShow = newQuantityShow - quantityCompetitionsShow;

  const competitionShow = competitions.slice(lastQuantityShow, newQuantityShow);

  const pagination = (page) => setpageInitial(page);

  useEffect(() => {
    request().then((response) => {
      setCompetitions(response.competitions);
      return response;
    });
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>This is a simple App, shows soccer leagues from around the world</h1>
      <Competition
        quantityCompetitionsShow={quantityCompetitionsShow}
        quantityCompetitions={competitions.length}
        competitionShow={competitionShow}
        pagination={pagination}
      />
    </div>
  );
};

export default Competitions;
