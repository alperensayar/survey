import { useState, useEffect } from "react";
import { Spinner } from "reactstrap";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import defaultSurveyConfig from "./config/survey";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Survey.StylesManager.applyTheme("bootstrap");

    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  var surveyRender = (
    <Survey.Survey
      css={defaultSurveyConfig.defaultSurveyCSS}
      data={defaultSurveyConfig.defaultSurveyDATA}
      json={defaultSurveyConfig.defaultSurveyJSON}
      onComplete={(survey) => {
        console.log(survey.data);

        /** Save to a database */
        /** Add to a spreadsheet, etc.... */
      }}
    />
  );
  return (
    <div className="App">
      <header className="App-header">{surveyRender}</header>
    </div>
  );
}

export default App;
