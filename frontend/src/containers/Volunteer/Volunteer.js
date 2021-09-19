import React from "react";
import data from "./data.json";

import Header from "../Header";
import Main from "../Main";
import SideNav from "../SideNav";
// COMPONENTS
// import HeaderVolunteer from "./components/HeaderVolunteer";
// import HeaderVolunteer from './components/HeaderVolunteer'
import JobListContainer from "./components/JobListContainer";
// STYLES
import { GlobalStyle } from "./styles/GlobalStyles";
import "./styles/global.css";

function Volunteer() {
  // STATES
  const [companyDetails, setCompanyDetails] = React.useState();
  const [filterBy, setFilterBy] = React.useState([]);
  // USE EFFECT
  React.useEffect(() => {
    const getData = async () => {
      setCompanyDetails(data);
      if (filterBy.length === 0) {
      } else {
        const temp = [];
        data.forEach((x) => {
          let flag = true;
          filterBy.data.forEach((y) => {
            if (
              Object.values(x).includes(y) ||
              Object.values(x.languages).includes(y) ||
              Object.values(x.tools).includes(y)
            ) {
            } else {
              return (flag = false);
            }
          });
          if (flag === true) {
            temp.push(x);
          }
        });
        setCompanyDetails(temp);
      }
    };
    getData();
  }, [filterBy]);
  return (
    <>
      {/* <HeaderVolunteer filterBy={filterBy} setFilterBy={setFilterBy} /> */}
      <div className="App container">
        <SideNav />
        <Main>
          <Header />
          <h2 className="news-header">Volunteer</h2>
        <h3 className="news-subheader">Find opportunities to support your local community</h3>
          {companyDetails && (
            <JobListContainer
              companyDetails={companyDetails}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
            />
          )}
        </Main>
      </div>

      {/* <GlobalStyle /> */}
    </>
  );
}

export default Volunteer;
