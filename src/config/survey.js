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
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "panel",
      "name": "panel3",
      "elements": [
       {
        "type": "ranking",
        "name": "question2",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Herkes kadar değerli birisiyim. "
         },
         {
          
          "value": "Moralim bozuk olduğunda güzel şeyler düşünürüm. "
         },
         {
          
          "value": "Sık sık geleceği düşünen birisiyim. "
         },
         {
          
          "value": "İnsanların arasında kendimi rahat hissederim. "
         },
         {
          
          "value": "Toplantılarda değişik insanlarla konuşabilirim. "
         },
         {
          
          "value": "İnsanları etkileyen şeylere sahip olmak hoşuma gider. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "panel",
      "name": "panel4",
      "elements": [
       {
        "type": "ranking",
        "name": "question3",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Başkalarıyla çok da ilgilenmem.  "
         },
         {
          
          "value": "Dikkati kendi üzerime çekmekten hoşlanmam. "
         },
         {
          
          "value": "Pek konuşkan sayılmam. "
         },
         {
          
          "value": "İlgi odağı olmaktan rahatsızlık duymam. "
         },
         {
          
          "value": "Zor problemler çözmem gerektiğinde sıkılırım. "
         },
         {
          
          "value": "İşleri biraz dağınık yaparım. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "panel",
      "name": "panel5",
      "elements": [
       {
        "type": "ranking",
        "name": "question4",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Yabancıların arasında genelde sessizimdir. "
         },
         {
          
          "value": "Arka planda kalmayı tercih ederim. "
         },
         {
          
          "value": "Başka insanların problemleriyle ilgilenmem. "
         },
         {
          
          "value": "Ruh halim çok sık değişir. "
         },
         {
          
          "value": "Bence para başarının temel göstergesidir."
         },
         {
          
          "value": "Daha fazla param olsaydı daha mutlu olurdum. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "panel",
      "name": "panel6",
      "elements": [
       {
        "type": "ranking",
        "name": "question5",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Kimileri para konusunda aşırı cimri ya da eli sıkı olduğumu düşünür. "
         },
         {
          
          "value": "Çok miktarda para biriktirmiş olsam bile, kendim için para harcamaktan hoşlanmakta güçlük çekerim. "
         },
         {
          
          "value": "Başka insanların problemleriyle ilgilenmem. "
         },
         {
          
          "value": "Çoğu kez nakit param bitinceye ya da aşırı kredi kullanıp borçlanıncaya değin para harcarım. "
         },
         {
          
          "value": "Dikkatim çoğu kez başka bir şeye kaydığı için, uzunca bir süre aynı ilgilerimi sürdürmem güçtür. "
         },
         {
          
          "value": "Belki de yaptığımdan daha fazlasını başarabilirim, ancak bir şeye ulaşmak için kendimi gereğinden fazla zorlamada bir yarar görmüyorum. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "panel",
      "name": "panel7",
      "elements": [
       {
        "type": "ranking",
        "name": "question6",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Eğlence ya da heyecan için para harcamaktansa, biriktirmekten zevk alırım. "
         },
         {
          
          "value": "Karar vermeden önce işler konusunda uzunca süre düşünmeyi tercih ederim. "
         },
         {
          
          "value": "Genellikle o kadar kararlıyımdır ki, başkaları vazgeçtikten sonra bile çalışmaya devam ederim. "
         },
         {
          
          "value": "Yatırım yapma ve yönetme konusunda kendi yeteneklerime güvenirim. "
         },
         {
          
          "value": "Verdiğim kararların sonuçlarını tam olarak kestirebilirim. "
         },
         {
          
          "value": "Verdiğim kararın doğruluğundan asla şüphe duymam. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page8",
    "elements": [
     {
      "type": "panel",
      "name": "panel8",
      "elements": [
       {
        "type": "ranking",
        "name": "question7",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Yaptığım her işte ayrıntılara dikkat etmekten hoşlanırım. "
         },
         {
          
          "value": "Çoğu kimseden daha çok tedbirli ve denetimliyimdir. "
         },
         {
          
          "value": "Çoğu kimseden daha mükemmeliyetçiyimdir. "
         },
         {
          
          "value": "Bir karar verilmesi gereken durumda benim vereceğim karar her zaman en doğru karardır. "
         },
         {
          
          "value": "Çevreme yatırım tavsiyelerinde bulunurum ve bundan asla çekinmem. "
         },
         {
          
          "value": "Başarılarımdan dolayı içim rahattır ve daha iyisini yapmak için pek istekli değilimdir. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page9",
    "elements": [
     {
      "type": "panel",
      "name": "panel9",
      "elements": [
       {
        "type": "ranking",
        "name": "question8",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Sadece macera olsun diye yeni bir etkinliğe girmem. "
         },
         {
          
          "value": "Çoğu kez kendimi tükenmişlik sınırına dek zorlar ya da gerçekte yapabileceğimden daha fazlasını yapmaya çalışırım. "
         },
         {
          
          "value": "Yalnızca ilk izlenimlerime dayanarak karar vermekten nefret ederim. "
         },
         {
          
          "value": "Kendimi bilgi birikimim açısından benimle aynı statüde olan diğer insanların üzerinde görüyorum. "
         },
         {
          
          "value": "Kendi yeteneklerime güvendiğim için fazla risk alırım. "
         },
         {
          
          "value": "Yapılması gerekli olan işleri sürdürebilmek için, çabuk kararlar vermekten hoşlanırım. "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page10",
    "elements": [
     {
      "type": "panel",
      "name": "panel10",
      "elements": [
       {
        "type": "ranking",
        "name": "question9",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Ayakları yere basan insanlarla arkadaşlık etmekten hoşlanırım. "
         },
         {
          
          "value": "Yapabileceğimin en iyisini yapmak istediğim için, genellikle kendimi çoğu kimseden daha çok zorlarım. "
         },
         {
          
          "value": "Bir karara varmadan önce genellikle her olguyu etraflıca düşünürüm. "
         },
         {
          
          "value": "Bazen biraz tehlikeli olabilecek işler yapmaktan hoşlanırım. "
         },
         {
          
          "value": "Kendim için bir şeyler satın almak beni eğlendirir. "
         },
         {
          
          "value": "Aldığım bir kararın sonucunu tam olarak tahmin edebilirim "
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 6=En önemsiz)"
     }
    ]
   },
   {
    "name": "page11",
    "elements": [
     {
      "type": "panel",
      "name": "panel21",
      "elements": [
       {
        "type": "ranking",
        "name": "question19",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Karar almadan önce karşıdakinin beklentileri hakkında netliğe sahip olmak"
         },
         {
          
          "value": "İlişkiyi göz önünde bulundurarak dikkatli kararlar vermek"
         },
         {
          
          "value": "Hızlı ve güçlü kararlar almak"
         },
         {
          
          "value": "Karar vermeden önce mantıklı düşünmek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page12",
    "elements": [
     {
      "type": "panel",
      "name": "panel11",
      "elements": [
       {
        "type": "ranking",
        "name": "question10",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Değişikliklerle mücadele etmek"
         },
         {
          
          "value": "Çalışma ortamındaki değişiklikleri kabul etmek"
         },
         {
          
          "value": "Radikal bir biçimde değişen çalışma koşullarına hızlı adapte olmak"
         },
         {
          
          "value": "Sabit bir iş ortamında çalışabilmek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page13",
    "elements": [
     {
      "type": "panel",
      "name": "panel12",
      "elements": [
       {
        "type": "ranking",
        "name": "question11",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Temiz, organize bir işyeri sağlamak"
         },
         {
          
          "value": " Bağımsız hareket etme özgürlüğü sağlamak"
         },
         {
          
          "value": "Eşit performans göstermek"
         },
         {
          
          "value": "Güven vermek ve güvenmek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page14",
    "elements": [
     {
      "type": "panel",
      "name": "panel14",
      "elements": [
       {
        "type": "ranking",
        "name": "question12",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Kusursuz bir yöntem"
         },
         {
          
          "value": "Esnek bir çalışma planı"
         },
         {
          
          "value": "Sıklıkla (geleceği) planlama"
         },
         {
          
          "value": "Güçlü bir ekip oluşturma"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page15",
    "elements": [
     {
      "type": "panel",
      "name": "panel15",
      "elements": [
       {
        "type": "ranking",
        "name": "question13",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Sistematik bir çalışma şekli sağlamak"
         },
         {
          
          "value": "Birçok kişiyle iletişim kurmak"
         },
         {
          
          "value": "Çabuk karar vermek"
         },
         {
          
          "value": " Profesyonel ve işbirlikçi olmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page16",
    "elements": [
     {
      "type": "panel",
      "name": "panel16",
      "elements": [
       {
        "type": "ranking",
        "name": "question14",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Çatışma ve zorluklardan kaçınmak"
         },
         {
          
          "value": "Problem çözme, düşünmek ve hareket etmek"
         },
         {
          
          "value": "Düşünce ve fikirleri ifade etmek ve sunmak"
         },
         {
          
          "value": "İnsanlardan daha sık çalışmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page17",
    "elements": [
     {
      "type": "panel",
      "name": "panel17",
      "elements": [
       {
        "type": "ranking",
        "name": "question15",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Sabit bir iş ortamında çalışabilmek"
         },
         {
          
          "value": "Başkalarını harekete geçmeye teşvik edin"
         },
         {
          
          "value": "Prosedürlere sadık kalmak"
         },
         {
          
          "value": "Coşku yaratmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page18",
    "elements": [
     {
      "type": "panel",
      "name": "panel18",
      "elements": [
       {
        "type": "ranking",
        "name": "question16",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Başkalarını motive etmek"
         },
         {
          
          "value": "Ayrıntılara dikkat edebilmek"
         },
         {
          
          "value": "Zorluklarla yüzleşmek"
         },
         {
          
          "value": "Sabır göstermek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page19",
    "elements": [
     {
      "type": "panel",
      "name": "panel19",
      "elements": [
       {
        "type": "ranking",
        "name": "question17",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "İnsanlarla kolayca iletişim kurabilmek"
         },
         {
          
          "value": "Verilen görevleri takip etmek ve uygulamak"
         },
         {
          
          "value": "Sonuçlara ulaşmak"
         },
         {
          
          "value": "Önceden tanımlanmış ölçütlere göre performans göstermek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page20",
    "elements": [
     {
      "type": "panel",
      "name": "panel20",
      "elements": [
       {
        "type": "ranking",
        "name": "question18",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Talimatları kusursuz bir şekilde takip etmek"
         },
         {
          
          "value": "İnsanlararası problemleri çözmek"
         },
         {
          
          "value": "Kararlı ve girişimci hareket etmek"
         },
         {
          
          "value": "Rutin çalışmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page21",
    "elements": [
     {
      "type": "panel",
      "name": "panel22",
      "elements": [
       {
        "type": "ranking",
        "name": "question20",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Yüksek kalite kontrollerle çalışmak"
         },
         {
          
          "value": "Yaratıcı ve özgün bir düşünme biçimine sahip olmak"
         },
         {
          
          "value": "İyimser bir tavır sergilemek"
         },
         {
          
          "value": "Mevcut bir sistem içinde tekrar tekrar çalışabilme"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page22",
    "elements": [
     {
      "type": "panel",
      "name": "panel23",
      "elements": [
       {
        "type": "ranking",
        "name": "question21",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Kendi eylemleriniz için sorumluluk almak"
         },
         {
          
          "value": "Verileri ve gerçekleri analiz etmek"
         },
         {
          
          "value": "Birçok insan etkileşimini sürdürmek"
         },
         {
          
          "value": "Sabırlı olmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page23",
    "elements": [
     {
      "type": "panel",
      "name": "panel24",
      "elements": [
       {
        "type": "ranking",
        "name": "question22",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Detaylı çalışma yapmak zorunda kalmamak"
         },
         {
          
          "value": "Göreve odaklanabilmek"
         },
         {
          
          "value": "Mantıklı ve dengeli kararlar verebilmek"
         },
         {
          
          "value": "Keyifli bir çalışma ortamı yaratmak"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page24",
    "elements": [
     {
      "type": "panel",
      "name": "panel25",
      "elements": [
       {
        "type": "ranking",
        "name": "question23",
        "title": " ",
        "isRequired": true,
        "choices": [
         {
          
          "value": "Verimlilikten çok kaliteye önem vermek"
         },
         {
          
          "value": "Çatışma ve yüzleşmelerdenden uzak olmak"
         },
         {
          
          "value": "İkna edici bir şekilde iletişim kurabilmek"
         },
         {
          
          "value": "Değişikliği kabul etmek ve değişikliğe sevk etmek"
         }
        ]
       }
      ],
      "title": "Lütfen aşağıdaki şıkları, verdiğiniz öneme göre sıralayınız. (1=En önemli, 4=En önemsiz)",
      "isRequired": true
     }
    ]
   },
{   "name": "page25",
   "elements": [
    {
     "type": "text",
     "name": "question24",
     "maxWidth": "600px",
     "startWithNewLine": false,
     "title": "Ad",
     "isRequired": true,

    },
    {
     "type": "text",
     "name": "question25",
     "maxWidth": "650px",
     "startWithNewLine": false,
     "title": "Soyad",
     "isRequired": true,
    },
    {
     "type": "text",
     "name": "question26",
     "minWidth": "100px",
     "maxWidth": "250px",
     "title": "Yaş",
     "isRequired": true,
     "inputType": "number",
     "min": 15,
     "max": 75
    },
    {
     "type": "text",
     "name": "question27",
     "startWithNewLine": false,
     "title": "Cinsiyet",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question28",
     "maxWidth": "700px",
     "startWithNewLine": false,
     "title": "Email",
     "isRequired": true,
     "inputType": "email"
    },
    {
     "type": "text",
     "name": "question29",
     "maxWidth": "400px",
     "title": "Şehir",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question30",
     "maxWidth": "400px",
     "startWithNewLine": false,
     "title": "Job"
    },
    {
     "type": "text",
     "name": "question31",
     "startWithNewLine": false,
     "title": "Eğitimi"
    },
    {
     "type": "text",
     "name": "question32",
     "title": "Total Time"
    }
   ]
  }

   
  ],
  //"cookieName":"data1_new_new",
  "spentTime":true,
  "showQuestionNumbers": "on",
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






const defaultSurveyConfig = {
  defaultSurveyCSS,
  defaultSurveyDATA,
  defaultSurveyJSON,
  defaultSurveyPage,
  defaultSurveyPageNo

}

export default defaultSurveyConfig;