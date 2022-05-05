import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import "survey-react/survey.css";
import * as Survey from "survey-react";

//anketler buraya gelecek surveyRender kısmı koopyalanacak
import defaultSurveyConfig2 from "./config/survey_2";
import defaultSurveyConfig3 from "./config/survey_3";
import axios from "axios";



import NotFound from "./config/notfound";
import Finished from "./config/finished";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import login from "./config/login"; */
function App() {
  
  const  [loading, setLoading] = useState(true);
  const [visited, setVisited] = useState(false);
  const [validSite, setvalidSite] = useState(true);

  useEffect(() => {
    var durum;
    //var visited = 0;
    //https://f01f-178-233-153-66.ngrok.io 
    const ddd = window.location.pathname;
    Survey.StylesManager.applyTheme("bootstrap");
    //Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    axios.post("https://f01f-178-233-153-66.ngrok.io/apiget", {
        path:ddd
        }).then(res => {
          console.log(res.data.durum);

          durum = res.data.durum;
          if (durum === "1"){
            setLoading(false);
            console.log("gecerli Link")
          }
          else if(durum === "3"){
            setVisited(true);
            setLoading(false);
          }
          // yok durumu
          else if(durum === "0"){
            setLoading(false);
            setvalidSite(false);
          }
          else{
            console.log("elste")
            setLoading(true);
          }
        })
          .catch(err => {
            console.log("err1231or");
          })

  }, []);

  if (loading) return <Spinner />;
  else if (visited && !loading) {
    return <Finished />;
  }
  else if (!validSite && !loading) {
    return <NotFound />;
  }
  else{

  var myList = [];
  var myTime = [];
  const ddd = window.location.pathname;

  // ----------------

  var surveyRender = (
    <Survey.Survey
      css={defaultSurveyConfig2.defaultSurveyCSS}
      data={defaultSurveyConfig2.defaultSurveyDATA}
      json={defaultSurveyConfig2.defaultSurveyJSON}
      currentPage={defaultSurveyConfig2.defaultSurveyPage}
      currentPageNo={defaultSurveyConfig2.defaultSurveyPageNo}

      onStarted={(survey) => {
        //timerCallback();
      }
      }
      onComplete={(survey) => {

        axios.post("https://f01f-178-233-153-66.ngrok.io/urlpoint", {
          data: survey.data,
          pages: myList,
          time: myTime,
          path: ddd
        }).then(res => {



        })
          .catch(err => {

          })
        //Survey.stopTimer();

        // insert one row into the langs table

        /** Save to a database */
        /** Add to a spreadsheet, etc.... */
      }}
      onCurrentPageChanged={(survey) => {
        //timerCallback();

        myList.push(survey.currentPageNo);
        myTime.push(Date.now());

        axios.post("https://f01f-178-233-153-66.ngrok.io/getresult", {
          data: survey.data,
          pages: myList,
          time: myTime,
          path: ddd
          
        }).then(res => {

        })
          .catch(err => {

          })
        //Survey.startTimer();
      }
      }

    />
  );//surveyRender ends

  var surveyRender2 = (
    <Survey.Survey
      css={defaultSurveyConfig3.defaultSurveyCSS}
      data={defaultSurveyConfig3.defaultSurveyDATA}
      json={defaultSurveyConfig3.defaultSurveyJSON}
      currentPage={defaultSurveyConfig3.defaultSurveyPage}
      currentPageNo={defaultSurveyConfig3.defaultSurveyPageNo}

      onStarted={(survey) => {
        //timerCallback();

      }
      }
      onComplete={(survey) => {

        axios.post("https://f01f-178-233-153-66.ngrok.io/urlpoint", {
          data: survey.data,
          pages: myList,
          time: myTime,
          path: ddd
        }).then(res => {

        })
          .catch(err => {

          })
        //Survey.stopTimer();

        // insert one row into the langs table

        /** Save to a database */
        /** Add to a spreadsheet, etc.... */
      }}
      onCurrentPageChanged={(survey) => {
        //timerCallback();

        myList.push(survey.currentPageNo);
        myTime.push(Date.now());

        axios.post("https://f01f-178-233-153-66.ngrok.io/getresult", {
          data: survey.data,
          pages: myList,
          time: myTime,
          path: ddd
        }).then(res => {

        })
          .catch(err => {

          })
        //Survey.startTimer();
      }
      }

    />
  );
  //-----

  return (
    <Router>
      <div className="App">
        
        <Switch>
          
          <Route exact path="/survey/:ID">
          <header className="App-header">{surveyRender}</header>
          </Route >
          <Route exact path="/survey_3/:ID">
          <header className="App-header">{surveyRender2}</header>
          </Route >
          <Route path="*">
            <h3>BURADAYIZ</h3>
          </Route>
          
        </Switch>
      </div>

    </Router>

  ); // return ends

}// else ends
}// app ends

export default App;
