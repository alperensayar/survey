
const defaultSurveyJSON =  {

    "showProgressBar": "bottom",
    "pages": [
     {
      "name": "page0",
      "elements": [
       {
        "type": "panel",
        "name": "panel1",
        "elements": [
         {
          "type": "html",
          "name": "income_intro",
          "html": "<article class='intro'>    <h1 class='intro__heading intro__heading--income title'>                    Apache Envanter Kişilik Testi              </h1>    <div class='intro__body wysiwyg'>       <p>Envanter testi 2 farklı kısımdan oluşmaktadır. İlk bölümde 10 soru ve 6 adet sıralama cevabından oluşmakta iken ikinci 14 soru ve 4 sıralama cevabından oluşmuştur.</p>       <p>Lütfen dikkatlice okuyunuz:</p>       <ul>        \t<li>        \t\tAnket sorularına lütfen kendinize en uygun cevabı veriniz.       \t</li>        \t<li>        \t\t<p>Anket sonuçlarının iş pozisyonları için herhangi bir değişiklik göstermeyecektir.</p>        \t\t<p>        \t\t<p>Anket sonuçları şirketlere raporlanacaktır.</p>         \t\t</p>        \t</li>        \t<li>        \t\tAnketlerin doğru cevabı yoktur. Sadece envarter testi olarak kullanılacaktır.        \t</li>       </ul>         </div> </article>"
         }
        ]
       }
      ]
     },
     {
      "name": "page1",
      "elements": [
       {
        "type": "panel",
        "name": "panel13",
        "elements": [
         {
          "type": "ranking",
          "name": "question0",
          "title": " ",
          "isRequired": true,
          "choices": [
           {
            
            "value": "Konuşmayı genelde ben başlatırım."
           },
           {
        
            "value": "Girdiğim sosyal ortamların çabucak gözdesi olurum. "
           },
           {
            "value": "Başkalarının duygularını hissedebilirim. "
           },
           {
            "value": "Genel olarak kendimden memnunumdur. "
           },
           {
            "value": "İşimde fazlasıyla titiz davranırım. "
           },
           {
            "value": "Bir yere gitmeden önce detaylı planlama yaparım. "
           }
          ]
         }
        ],
        "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
       }
      ]
     },
   {
    "name": "page2",
    "elements": [
     {
      "type": "panel",
      "name": "panel2",
      "elements": [
       {
        "type": "ranking",
        "name": "question1",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          "value": "Maddiyat benim için ikinci plandadır. "
         },
         {
          "value": "Parasal konularda oldukça tedbirliyimdir. "
         },
         {
          "value": "Diğer insanların mali durumlarına çok dikkat etmem. "
         },
         {
          "value": "Genel olarak kendimden memnunumdur. "
         },
         {
          
          "value": "Kararlarımı hızlıca veririm. "
         },
         {
          
          "value": "Hiçbir şeyi dert etmem. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   }
     
    ],
    //"cookieName":"data1_new_new",
    "spentTime":true,
    "showQuestionNumbers": "off",
    "storeOthersAsComment": false,
    "pagePrevText": "Previous",
    "pageNextText": "Continue",
    "completeText": "Finish",
    "requiredText": "",
    "firstPageIsStarted": true,
   };
  
  const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
  };
  
  const defaultSurveyDATA = {
  };
  const defaultSurveyPage={};
  const defaultSurveyPageNo={};
  
  
  
  
  
  
  const defaultSurveyConfig2 = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON,
    defaultSurveyPage,
    defaultSurveyPageNo
  
  }
  
  export default defaultSurveyConfig2;