import React from "react";
import './competition.sass'

const Competition = (props) => {
  let arrayPage = [];
  const {
    quantityCompetitionsShow,
    quantityCompetitions,
    competitionShow,
    pagination,
  } = props;

  for (
    let i = 1;i <= Math.ceil(quantityCompetitions / quantityCompetitionsShow);i++) {
    arrayPage.push(i);
  }

  return (
    <div className="competition">
      {competitionShow.map((item, index) => {
        return (
          <div key={index} className="competition__league">
            <h2>
              League Name: <span>{item.name}</span>
            </h2>
          </div>
        );
      })}
      <div className="competition__pagination">
        {arrayPage.map((page, index) => {
          return (
            <div key={index}>
              <h2 onClick={() => pagination(page)}>{page}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Competition;
