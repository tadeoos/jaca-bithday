const story = [
  {
    type: "question",
    question: "Jesteś 6-letnim chłopcem. Zbliża się Gwiazdka i piszesz list do Św. Mikołaja. Oto lista prezentów, o które prosisz:",
    answers: [
      {text: "gra planszowa, klocki lego Star Wars, statek Sokół Millennium, pluszak, film \"Dzielny mały toster\", pościel, kamień ", type: "jaca"},
      {
        text: "Nie wierzysz w Św. Mikołaja, prosisz rodziców aby kupili ci pod choinkę coś użytecznego np. tornister do szkoły albo kalkulator.",
        type: "korpo"
      },
      {
        text: "piłka do nogi, deskorolka, firmowy dres adidasa, stoper, film \"Kosmiczny mecz\"",
        type: "quicksilver"
      },
      {
        text: "samochód na baterie np koparkę, zestaw \" Mały konstruktor\", fajne adidasy, dużo napojów gazowanych, słodycze",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Jesteś w pierwszej klasie szkoły podstawowej. Urządzasz właśnie swoje urodziny i czekasz na kolejnych gości – kolegów z klasy. Słyszysz dzwonek, otwierasz drzwi –  Niko wręcza ci prezent, który z niecierpliwością otwierasz – chwila konsternacji i:",
    answers: [
      {
        text: "Mówisz, że zaraz wrócisz i biegniesz do swojego pokoju aby szybko ukryć identycznego pluszaka - nie chcesz aby Niko spostrzegł, iż podarował ci coś co już masz, bo pewnie byłoby mu głupio i przykro.",
        type: "jaca"
      },
      {
        text: "Wzdychasz i mówisz: \" No to mam teraz dwa jednakowe zwierzaki. Ale może przydadzą mi się, mogę bawić się nimi na zmianę, mogę posadzić je symetrycznie na półce.\"",
        type: "korpo"
      },
      {
        text: "Mówisz: \"Ooo, mam już takiego samego, ten to będzie Tom nr 2! Może uzbieram więcej takich i pobiję kolejny rekord! Hmm... Tom nr 25?!\"",
        type: "quicksilver"
      },
      {
        text: "Rozpakowujesz prezent i ledwo rzucasz na niego okiem, podbiegasz do drzwi bo znowu słyszysz dzwonek.",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Masz 15 lat, jest październik. Siedzisz na 4 urodzinach swojego siostrzeńca i on z kolegami proponują ci wyjście na dwór, żeby grać w piłkę. Niestety nie wiesz gdzie masz buty... Co robisz?",
    answers: [
      {
        text: "Zdejmujesz skarpety i idziesz grać boso.",
        type: "jaca"
      },
      {
        text: "Nie chcesz ubłocić swojej nowej koszuli od Hilfigera, więc tłumaczysz chłopcom jak niezdrowe jest wdychanie wilgotnego powietrza i zostajecie w domu.",
        type: "korpo"
      },
      {
        text: "Nie masz przy sobie kompletu Fila do gry w nogę, a w tych ciuchach fotki na fb nie dostaną wielu lajków, więc odmawiasz.",
        type: "quicksilver"
      },
      {
        text: "A co tam, biegniesz do dozorcy pożyczyć od niego gumiaki i nawet w nich ogrywasz gówniarzy, z którymi zrobiłeś zakłady o ich kieszonkowe.",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Dostajesz zadanie przeprowadzenia wywiadu z ludźmi ze środowisk ultra-katolickich. Tematem wywiadu są same środowiska, wiadomo, że nie są zbyt chętne do rozmowy. W jaki sposób podejdziesz do tematu?",
    answers: [
      {
        text: "Złapiesz kamerę, razem z kumplem walniecie piwko czy dwa i udając reporterów znanej i nielubianej przez te środowiska telewizji wbijecie na ich zebranie, narażając się na uderzenia toreb w głowę, po czym będziecie musieli się szybko ewakuować.",
        type: "jaca"
      },
      {
        text: "Skontaktujesz się z przewodniczącym/sekretariatem w/w środowiska, aby omówić zakres przeprowadzanego wywiadu i umówić się na konkretny termin.",
        type: "korpo"
      },
      {
        text: "Nie będziesz się pokazywać z takimi wapniakami. Lecisz na kolejny trip na Bali i poopowiadasz trochę o katolach, przechadzając się po Nusa Dua Beach.",
        type: "quicksilver"
      },
      {
        text: "Paanie, jakie wywiady, mnie tu gonią terminy, nie mam czasu na takie duperele.",
        type: "majster"
      },
    ]
  },
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
    question: "Jesteś nastolatkiem z rodziną na wakacjach. Po wieczornej kolacji w centrum Barcelony spacerujesz po mieście i podziwiasz jego uroki. Twoją uwagę przyciąga rzeka Besós. W pewnym momencie twoja młodsza siostra daje ci wyzwanie, żebyś podciągnął się na rurce, która jest nad rzeką. Co robisz?",
    answers: [
      {text: "„Ja tego nie zrobię?!” Pytasz się rodziców, którzy się zgadzają i wskakujesz w pełnym ubraniu z MP3 i telefonem w kieszeniach.", type: "jaca"},
      {
        text: "Wyśmiewasz swoją siostrę i mówisz, że niestety nie, ponieważ jesteś świeżo po zabiegu na jędrność pośladków, poza tym masz na sobie nowe spodnie.",
        type: "korpo"
      },
      {
        text: "Zaczynasz 30-minutową rozgrzewkę i robisz salto prosto do wody.",
        type: "quicksilver"
      },
      {
        text: "Szykujesz się do skoku ale niestety przy kolacji wypiłeś o jeden kieliszek za dużo i wymiotujesz do rzeki.",
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

function again() {
  $(".endBtns").hide();
  $(".inner").hide();
  startGame()
}

function endCredits() {
  $(".inner").hide();
  $(".end").fadeIn(3000);
}

function next(answer) {
  $(".inner").hide();
  counter += 1
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
    $(".endBtns").show();
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
    a.append(`<li><a href="#" data-type="${element.type}" onclick="next(this)">${element.text}</a></li>`)
  })
}


function startGame() {
  counter = 0
  let content = story[counter]
  fillQuestion(content.question)
  fillAnswers(content)
  $(".inner").fadeIn(2000)
}
