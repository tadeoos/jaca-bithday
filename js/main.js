const story = [
  {
    type: "question",
    question: "Masz 17 lat. Siedzisz w pubie Baryłka wraz z kolegami ze szkoły. Pijecie piwo i dobrze wam się gada. Jest bardzo miłe październikowe popołudnie. W pewnym momencie twój pijany kolega zaczyna nakłaniać cię byś wziął z nim udział w wyborach do szkolnego sejmu. Co robisz?",
    answers: [
      {text: "Mówisz mu, że \"czemu nie?\" może będzie z tego fajna przygoda.", type: "jaca"},
      {
        text: "Mówisz mu, że musisz się zastanowić, bo nie wiesz czy nie koliduje to z twoim planami podjęcia dodatkowych zaję z języków obcych.",
        type: "korpo"
      },
      {
        text: "Od razu odmawiasz – co za poroniony pomysł, przecież ten czas lepiej będzie spędzić w skateparku.",
        type: "quicksilver"
      },
      {
        text: "Udajesz, że nie usłyszałeś pytania i pytasz kumpla czy nie ma przypadkiem dorzucić ci czwórki do jeszcze jednego browara.",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Zbliża się 24 kwietnia. Co robisz?",
    answers: [
      {text: "Kupujesz 24 piwa.", type: "jaca"},
      {
        text: "Jestem w cugu nauki",
        type: "korpo"
      },
      {
        text: "Zaczynasz snuć plany na wakacje – czy będzie dobry wiatr na Helu?",
        type: "quicksilver"
      },
      {
        text: "Cieszysz się, że już niedługo maj.",
        type: "majster"
      },
    ]
  }
]


let results = {
  jaca: "Jacek taki jaki jest i jakim go kochamy",
  korpo: "Jacek ułożony pracownik korporacji produkującej szampony (wynajmuje mieszkanie w Miasteczku Wilanów, jeździ do pracy nową Skodą Octavią 1.6 108KM, pracuje po 11h przez 5 dni w tygodniu, raz na dwa miesiące spotyka się ze swoim kumplem z pracy Maxem, który czasem pożycza mu psa do zdjęcia na Tinderze. Jego ulubione miejsce na Ziemi – wulkaniczne wyspy Kanaryjskie, gdzie Jacek odkrył swoją ukochaną agroturystykę gdzie już od 6 lat jeździ na jedyny i wyczekiwany urlop podczas Świąt Bożego Narodzenia, gdzie może naładować baterie przed kolejnym rokiem pełnym wyzwań i sukcesów w karierze zawodowej)",
  quicksilver: "Jacek ekstrawertyczny influencer (uprawia sporty ekstremalne i ma swój kanał na YouTubie, opalony słońcem azjatyckich plaż, szczyci się umową sponsorską z Quiksilverem)",
  majster: "Jacek majster, szef ekipy remontowej (miał parę chudych lat jak część ekipy wyemigrowała do Irlandii, ale teraz trochę się odbiło, bo są fajne chłopaki z Ukrainy, niestety 2 rozwody już za nim, więc córki rozsiane po całej Europie, jedna się zadomowiła w Holandii. Pokrzykuje na swoich pracowników z suwmiarką w jednej ręce i Okocimem Jasnym Pełnym w drugiej)",
}
let counter = 0


let score = {
  jaca: 0,
  korpo: 0,
  quicksilver: 0,
  majster: 0,
}

function next(answer) {
  counter += 1
  console.log(answer)
  console.log(counter)
  $(".inner").hide();
  let odp = $(answer).data('type');
  score[odp] += 1;
  $(".answers > li").remove();
  let nextContent = story[counter]
  if (typeof (nextContent) != "undefined") {
    fillQuestion(nextContent.question)
    fillAnswers(nextContent)
  } else {
    var maxKey = Object.keys(score).reduce(function (a, b) {
      return score[a] > score[b] ? a : b
    });
    fillQuestion(results[maxKey])
    console.log('best: ', maxKey)
  }
  $(".inner").fadeIn(2000)
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function fillQuestion(content) {
  let q = $(".question")
  q.text(content)
}


function fillAnswers(content) {
  shuffleArray(content.answers)
  let a = $(".answers")

  content.answers.forEach(element => {
    a.append(`<li data-type="${element.type}" onclick="next(this)"><a href="#">${element.text}</a></li>`)
  })
}


function startGame() {
  counter = 0
  let content = story[counter]
  fillQuestion(content.question)
  fillAnswers(content)
  $(".inner").fadeIn(2000)
}
