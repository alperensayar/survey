const defaultSurveyJSON = {
  title: "COVID Screening",
  description: "This survey is to check the potential of spreading COVID-19.",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "Symptoms",
          title: "Do you have any of the following new or worsening symptoms?",
          isRequired: true,
          hasSelectAll: true,
          hasNone: true,
          noneText: "None of the above",
          choices: [
            {
              value: "item1",
              text: "Fever or chills",
            },
            {
              value: "item2",
              text: "Cough",
            },
            {
              value: "item3",
              text: "Difficulty breathing",
            },
            {
              value: "item4",
              text: "Sore throat",
            },
            {
              value: "item5",
              text: "Runny or stuffy nose",
            },
            {
              value: "item6",
              text: "Decrease or lose of taste or smell",
            },
            {
              value: "item7",
              text: "Nausea, vomiting or diarrhea",
            },
            {
              value: "item8",
              text: "Not feeling well, extreme tiredness or sore muscles",
            },
            {
              value: "item9",
              text: "Pink eye or headache",
            },
          ],
        },
        {
          type: "boolean",
          name: "Household",
          title:
            "Does anyone in your household have one or more of the above symptoms?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "Notification",
          title:
            "Have you been notified as a close contact of someone with COVID-19?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "Travel",
          title:
            "In the last 14 days, have you or anyone in your household travelled outside of Canada?",
          isRequired: true,
        },
        {
          type: "radiogroup",
          name: "BillCool",
          title: "Is Bill cool?",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "150%",
            },
            {
              value: "item2",
              text: "110%",
            },
            {
              value: "item3",
              text: "Hells Yeah",
            },
          ],
        },
      ],
    },
  ],
};

const defaultSurveyCSS = {
  header: "bg-primary text-white p-3",
  body: "bg-light",
  completedPage: "p-3",
};

const defaultSurveyDATA = {
  // Symptoms: ["item1", "item3", "item5"],
  // Household: true,
  // Notification: true,
  // Travel: true,
  BillKewl: "item1",
};

const defaultSurveyConfig = {
  defaultSurveyCSS,
  defaultSurveyDATA,
  defaultSurveyJSON,
};

export default defaultSurveyConfig;
