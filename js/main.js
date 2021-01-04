const story = [
  {
    type: "question",
    question: "Masz 6, czy 7 lat, jest ciepłe wiosenne popołudnie, bawisz się ze swoją ulubioną siostrą klockami. Nagle przez otwarte okno w dziecięcym pokoju słyszysz głośny chichot jakiegoś malucha. Co robisz?",
    answers: [
      {
        text: "Szybko wyglądasz przez okno. Tak! To ON! W tym małym dziecięcym wózku, tuż pod twoim domem! Osiołek Partyjka! Jedyny i niepowtarzalny! Twój najlepszy, najlepsiejszy przyjaciel! Nieważne, że tylko w Twojej głowie.",
        type: "jaca"
      },
      {
        text: "Wstajesz poirytowany. Rzucasz okiem kto wydaje te okrzyki, na widok dzieciaka idącego tuż przy ogrodzeniu twojego przedszkola przewracasz oczami i zatrzaskujesz okno. Wracasz do segregowania klocków, zielone do zielonych, niebieskie do niebieskich… Porządek jest najważniejszy.",
        type: "korpo"
      },
      {
        text: "Rzucasz klocki, wybiegasz przed dom, jest! Chichoczące dziecko dalej jedzie swoim mini rowerkiem ul. Szaflarską, łapiesz odziedziczoną po wujku Michale czerwoną rowero-hulajnogę i pędzisz, pędzisz jak najszybciej  umiesz. Wyprzedziłeś! Wygrałeś! Zawsze wygrywasz.",
        type: "quicksilver"
      },
      {
        text: "Wyciągasz swój pistolet na małe żółte kulki, wystawiasz uzbrojoną  rączkę przez okno i zaczynasz się  zastanawiać. Doleci do wózka ta kulka, czy nie doleci?",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Jesteś 6-letnim chłopcem. Zbliża się Gwiazdka i piszesz list do Św. Mikołaja. Oto lista prezentów, o które prosisz:",
    answers: [
      {
        text: "gra planszowa, klocki lego Star Wars, statek Sokół Millennium, pluszak, film \"Dzielny mały toster\", pościel, kamień ",
        type: "jaca"
      },
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
      {
        text: "„Ja tego nie zrobię?!” Pytasz się rodziców, którzy się zgadzają i wskakujesz w pełnym ubraniu z MP3 i telefonem w kieszeniach.",
        type: "jaca"
      },
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
  },
  {
    type: "question",
    question: "Pewnego letniego wieczoru, w trakcie długich wakacji po maturze, popijasz kulturalnie piwko z kolegami w jednym z warszawskich parków, rozprawiając ze swadą o fenomenie kina Akiry Kurosawy. W pewnym momencie z cienia, niepostrzeżenie niczym ninja, wyłania się dwóch policjantów i wyjmując swoje srebrne odznaki niby dwa shurikeny, uświadamiają Ci, że znajdujesz się w miejscu publicznym i w zaistniałeś sytuacji należy Ci się mandat w wysokości 100 zł. Co robisz?",
    answers: [
      {
        text: "Mówisz policjantom ze spokojem doświadczonego samuraja, że jesteś studentem III roku prawa i mandat wcale Ci się nie należy bo obowiązujące prawo zakłada w takich sytuacjach również pouczenie; prosisz ich o to aby oni pierwsi się wylegitymowali, skrupulatnie zapisujesz ich dane i dajesz im do zrozumienia, że właśnie wdepnęli w niezłe gówno zadzierając z członkiem bardzo wpływowej prawniczej rodziny.",
        type: "jaca"
      },
      {
        text: "Wystraszony wyrzucasz piwo do kosza, poprawiasz rozwichrzony włos i jąkając się potulnie przepraszasz za swój niecny czyn; mówisz, że to pierwszy mandat w Twoim życiu i pytasz się funkcjonariuszy czy nikt w Twojej pracy na pewno się o tym nie dowie.",
        type: "korpo"
      },
      {
        text: "Próbujesz wybrnąć z sytuacji udając Anglika, który nie wiedział o obowiązującym w Polsce prawie, ale zacinasz się na jednym słowie i zrezygnowany przyznajesz się do swojej tożsamości; przyjmujesz mandat i zostawiasz kolegów odjeżdżając na nowym rowerze górskim.",
        type: "quicksilver"
      },
      {
        text: "Rzucasz w policjantów otwartą puszką piwa, którą trzymasz w dłoni, krzycząc: „pierdolę Was wy kurwy jebane, kurwa wasza mać!” i zaczynasz uciekać co sił w nogach.",
        type: "majster"
      },
    ]
  },
  {
    type: "question",
    question: "Miałeś w swoim życiu ostatnio ciężki okres – problemy z bólem głowy doprowadziły Cię do granic fizycznej i psychicznej wytrzymałości. Brałeś sporo mocnych leków przepisywanych przez lekarzy. W końcu przyszła chwila wytchnienia – wyjazd z przyjaciółmi do pięknego Amsterdamu późnym latem. Jak podchodzisz do tych wakacji?",
    answers: [
      {
        text: "Jarasz wszystko co się da – pierwszy dzień zaczynasz od czyściocha i już nie schodzisz poniżej tak zawieszonej poprzeczki. Super-Skunk, Master Kush, White Widdow, AK47, Alice in Wonderland, ciasteczka z haszem, wake & bake - wszystko to i jeszcze więcej. W dzień powrotu jesteś mega wyluzowany. Obok ciebie w samolocie siedzi jakiś miły starszy gość. Jakiś czas od startu robi się ciepło i przyjemnie. Rozsiadasz się wygodnie, wsadzasz papierosa do ust, i odpalasz go swoją zapalniczką Zippo z napisem “Fuck Communism”.",
        type: "jaca"
      },
      {
        text: "Przed wyjazdem planujesz budżet – palenie to jedna z jego głównych pozycji. Robisz też szeroko zakrojony research na temat rodzajów cannabis, zaznaczasz najciekawsze coffee shopy na mapach Google. Jarasz tylko wieczorami, i tylko najlepsze zioło.",
        type: "korpo"
      },
      {
        text: "Palenie jointów brzmi jak świetna zabawa, ale nie do końca wpisuje się w Twoje cele wellbeingowe na ten rok, więc skupiasz się na tym, co Amsterdam ma do zaoferowania w dziedzinie medycyny alternatywnej, zwłaszcza medycyny Wschodu.",
        type: "quicksilver"
      },
      {
        text: "Jarasz wszystko to co zaproponuje ci twój kumpel z namiotu, łapczywie podbierając od niego obfite buchy. Większość swoich pieniędzy wydajesz jednak na dudlenie ogromnych ilości najtańszych piwek zdobytych w supermarkecie.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Dzisiejszy całkiem ładny październikowy dzień przypomniał ci, że masz do wręczenia zaległy prezent dla przyjaciela z Bielan. Co robisz?",
    answers: [
      {
        text: "Umawiasz się z innym przyjacielem z Bielan i nie bierzesz ze sobą prezentu. Ruszacie pod trzepak na piwko, na imieniny do babci, a potem razem obstawiacie wyniki Ligi Mistrzów. To jeden z tych dni, gdzie wszystko w twoim życiu wydaje się składać w logiczną całość.",
        type: "jaca"
      },
      {
        text: "Organizujesz z nim krótki lunch na mieście, w którym dowiadujecie się co słychać u każdego z was i przekazujesz prezent. Płacisz rachunek.",
        type: "korpo"
      },
      {
        text: "Dzisiejszą pogodę wolałbyś wykorzystać inaczej. Co do prezentu, czekasz do środy na wasz stały termin ścianki wspinaczkowej. Wręczasz prezent mimochodem, gdzieś w trakcie rozmowy o ewentualnym wyjeździe na żagle.",
        type: "quicksilver"
      },
      {
        text: "Najpierw musisz wprowadzić kilka ulepszeń w upominku, więc bierzesz się do roboty. W trakcie pracy walisz kilka piwek. Sprawa trochę się przedłuża i nie jesteś pewny kiedy skończysz – ale kiedyś na pewno.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Jest 2014 rok. Urodziny kumpla suto zakrapiane alkoholem kończą się (a może dopiero zaczynają) na przypadkowej domówce w mieszkaniu bez mebli należącym do nieznajomej dziewczyny o artystycznej stylówce. Jesteś już najebany, gdy znajomi „artystki” proponują ci bliżej nieokreślony proszek do nosa. Twoja reakcja to...",
    answers: [
      {
        text: "Dajesz se; dobrze się bawisz, ci ludzie wydają się sympatyczni, w tej chwili jest ci przyjemnie, czujesz lekki dreszczyk. Będzie jeszcze fajniej.",
        type: "jaca"
      },
      {
        text: "Wąchasz proch; to Twój pierwszy raz i trochę się boisz, ale w tym tygodniu wypracowałeś 67 godzin i chcesz spróbować czegoś nowego, odnowić psychiczne siły na kolejny tydzień.",
        type: "korpo"
      },
      {
        text: "Wąchasz proch; uwielbiasz ekstremalne wrażenia i życie na krawędzi, zresztą widzisz, że „artystka” też jest na haju i chcesz wskoczyć na jej level; liczysz, że spędzicie razem noc a rano złapiecie pociąg na Hel, by poskakać na kajcie.",
        type: "quicksilver"
      },
      {
        text: "Zdecydowanie odmawiasz i otwierasz kolejny Okocim; nie interesują cię dragi, wolisz alkohol, poza tym spodziewasz się, że trafisz dziś na izbę wytrzeźwień i nie chcesz, by wykryto u ciebie narkotyki.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Wracasz sobie z imprezki nocną linią N25. Do autobusu wsiadają kanarzy.  Okazuje się, że Twój bilet stracił ważność i inspektorzy proszą cię żebyś wysiadł z nimi na pl. Na Rozdrożu. Co robisz?",
    answers: [
      {
        text: "Co robić, wysiadasz. Zimno komentujesz, że fajną mają pracę. Odmawiasz pokazania dowodu tożsamości, nie mają prawa tego wymagać. Sarkasz pod nosem, że nienawidzisz ich bardziej niż policji. Kanarzy wzywają policję. Jednak łapią cię wątpliwości. Pokazujesz dowód. Wlepiają ci mandat. Czekasz z nimi na kolejny autobus i jeszcze długo zasypujesz ich falą pytań o to kim trzeba być żeby wykonywać zawód kanara.",
        type: "jaca"
      },
      {
        text: "Plujesz sobie w brodę, że nie wezwałeś ubera. To nie duża kasa ten mandat, ale jednak.",
        type: "korpo"
      },
      {
        text: "Wahasz się ułamek sekundy. Zastanawiasz się co zrobiłby w tym momencie Bruce Willis. Odpychasz kanara, biegniesz przez autobus w stronę kolejnych drzwi, w ostatnim momencie robisz unik przed drugim kanarem, wyskakujesz i wielkimi susami wbiegasz po schodach mieszając się z tłumem. Może trzeba by zacząć trenować parkour zamiast chodzić na imprezki. Zastanawiasz się też czy ktoś to nagrywał.",
        type: "quicksilver"
      },
      {
        text: "Odmawiasz przyjęcia mandatu, krzycząc, wymachując rękami, mówiąc policjantom, że zwariowali i opowiadając im o tym jak ciężkie masz życie i o tym jak je utrudniają. Na przemian przymilasz się i odmawiasz przyjęcia mandatu tak długo aż kontrolerzy odpuszczają.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "W Twoim pokoju w szafie nie stąd ni zowąd rozwaliła się półka. Pękła z hukiem. Gry pospadały na książki, książki na ubrania, ubrania na podłogę. Co robisz?",
    answers: [
      {
        text: "Próbujesz użyć sonicznego śrubokrętu. Jeśli nie działa – przyzwyczajasz się do sytuacji. Da się z tym żyć.",
        type: "jaca"
      },
      {
        text: "Tak nie może być. Umysł potrzebuje jakiegoś porządku. Wzywasz Szwarca na pomoc i razem jedziecie do IKEI kupić nowy regał.",
        type: "korpo"
      },
      {
        text: "Oglądasz w internecie sposoby naprawiania półek i nieusatysfakcjonowany nagrywasz własne \"DIY SHELF. How to construct a shelf out of a cup and a shoe lense\". Potem, niesiony weną nagrywasz jeszcze kabaret \"Świat według Jacka. Odc. 19. Walka z materią\"",
        type: "quicksilver"
      },
      {
        text: "Bierzesz się do roboty i rach ciach naprawiasz szafkę wprowadzając pewne ulepszenia. Nie musi być pięknie, ale musi być użytecznie.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Sobotni poranek. Kac. Od ostatniej dezynsekcji minęły dwa miesiące i nic, gdy nagle do Twojego pokoju wchodzi współlokator i oznajmia: \"ej Jacek, mam ugryzienia na szyi. Znowu pluskwy\". Co robisz?",
    answers: [
      {
        text: "Dojadasz resztki wczorajszego obiadu, dzwonisz po MDMA na dowóz i robisz sobie dwugodzinną \"kąpiółkę\" z komiksami.",
        type: "jaca"
      },
      {
        text: "Zirytowany zaczynasz gorączkowo szukać telefonu do Dezynsekcja Całodobowo sp. z o.o., by natychmiast odpluskwić mieszkanie.",
        type: "korpo"
      },
      {
        text: "Przerażony szukasz ugryzień na swoim ciele (dziś przecież kręcisz filmik o odżywkach do włosów, na którym będzie widać Twoją klatę), a następnie wybiegasz z mieszkania i jedziesz do domu rodziców.",
        type: "quicksilver"
      },
      {
        text: "Obmywasz się, łapiesz zgrzewkę Okocim i lecisz pomagać w remoncie na Targówku.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Przypadkiem znajdujesz się na charytatywnej aukcji sztuki młodych polskich artystów. Twoją uwagę zwraca kolaż przedstawiający ludzką głowę, samochód, dziwnego klauno-ludzika, męską sylwetkę, horyzont, zwielokrotnione głowy podobne do tej pierwszej, kwiatek, i coś jeszcze – a wszystko na tle ciemnej, trudnej do zinterpretowania pustki. Obraz ten chwyta cię za serce, porusza jakąś dziwną i czułą strunę, której istnienia w swojej duszy nigdy byś nie podejrzewał. Niestety cena wywoławcza jest dość wysoka. Co robisz?",
    answers: [
      {
        text: "Proponujesz wspólnictwo kompanowi – kupicie obraz razem i będziecie się co miesiąc nim wymieniać.",
        type: "jaca"
      },
      {
        text: "Publicznie podważasz autentyczność dzieła i podajesz w wątpliwość “ekspercką” wycenę. Kiedy już czujesz, że udało ci się zasiać wystarczającą wątpliwość, oznajmiasz że w sumie podoba ci się ta “podróbka” i możesz ją kupić za połowę ceny wywoławczej.",
        type: "korpo"
      },
      {
        text: "Zauważasz, że coś takiego sam mógłbyś wykleić. Idziesz do domu i po paru minutach z nożyczkami i klejem wstawiasz swoje pierwsze dzieło na nową platformę Instagram.",
        type: "quicksilver"
      },
      {
        text: "Zapadasz w krótką pijacką drzemkę i kiedy się budzisz, licytowany jest już inny obraz. Zastanawiasz się, czy to wszystko nie było jedynie snem. Zaczyna ci się podobać ta strategia radzenia sobie z przeciwnościami losu.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Dziś jest sobota 24 kwietnia któregośtam roku. Co robisz?",
    answers: [
      {
        text: "Wyjebujesz 24 browary, bo dziś jest dzień Paula Newmana. Leżysz w ubraniach w wannie, wyczerpany, pełna delirka, ukochana polewa Cię zimną wodą, żebyś nie zemdlał z odwodnienia. Musisz zdążyć z 24-ym browarem przed upływem 24 godzin, albo czeka Cię kiepski rok. Musisz, kurwa.",
        type: "jaca"
      },
      {
        text: "Jedziesz do wypożyczalni DVD i pytasz o najciekawsze pozycje filmowe z udziałem tego amerykańskiego aktora. Wieczorem zasiadasz do lektury westernu, w którym gwiazdor wciela się w główną rolę., przy kieliszku naprawdę dobrego chardonnay, zwłaszcza, gdy wziąć pod uwagę jego atrakcyjną cenę. Niestety zasypiasz podczas napisów początkowych.",
        type: "korpo"
      },
      {
        text: "Oglądasza na youtubie najciekawsze ewolucje Paula Newmana, utalentowanego surfera z Australii.",
        type: "quicksilver"
      },
      {
        text: "Wyjebujesz 24 browary, bo sobota jest. Czujesz się dobrze, wyjmujesz z lodówki jakieś tłuste i smażysz na tym 12 jaj, ot tak, na zagryzkę.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Niewyspany i zmęczony wracasz do domu. Myślisz już tylko o swojej drzemce, gdy - o zgrozo! - uświadamiasz sobie, że drzwi do mieszkania są wyważone. W środku kilkuosobowy oddział policji wywraca do góry nogami cały Twój dobytek. „Znowu burdel – myślisz sobie – że też akurat wczoraj zebrało mi się na sprzątanie”. Wkurwienie ustępuje jednak miejsce trwodze, gdy w rękach jednego z policjantów widzisz puszkę. W środku nie ma wombata! Znaleźli Twoją skrytkę! Wpadłeś po uszy w gówno. Te 5 gramów zioła, które leżały pod pluszowym zadkiem może szybko zamienić się w 5 lat za kratami. Co robisz?",
    answers: [
      {
        text: "Wchodzisz z policjantami w ostrą dyskusję. „Jak wam kurwa nie wstyd ludzi po domach nachodzić!” – wykrzykujesz. Sytuacja szybko eskaluje. Pomoc przychodzi jednak z nieoczekiwanej strony. Jeden z policjantów zawieszając wzrok na identyfikatorze CNK studzi emocje kolegów - „Zostawcie go. Typ jest w porządku. Mój synek po takich warsztatach tak się wkręcił w fizykę kwantową, że teraz na samych 5 w szkole jedzie”. Ufff, chyba kolejny raz Ci się upiekło. W końcu doskonale wiesz, że urodziłeś się pod szczęśliwą gwiazdą.",
        type: "jaca"
      },
      {
        text: "Przerażony widmem konsekwencji i pewną utratą pracy zaczynasz się tłumaczyć „Panowie, to jakaś pierdolona pomyłka! Moje ciało to przecież świątynia! Proszę zobaczyć jak o siebie dbam, codziennie siłownia na multisporta, koktajle białkowe! Nie zatruwam się takim syfem! To jest jakiś spisek! Ktoś z pracy mnie wrabia!”. I wtedy przychodzi olśnienie. Twój kumpel z pracy – niejaki Czufel - musiał Cię podjebać. Wiedział o wombacie i pamiętasz ten błysk zazdrości w jego oczach, kiedy prezes ogłaszał Cię pracownikiem miesiąca.",
        type: "korpo"
      },
      {
        text: "Nerwowo zaczynasz przeglądać długą listę kontaktów w telefonie. Wreszcie ulga. No tak, przecież stary Twojego ziomka, którego poznałeś w trakcie wypadu na Rodos, to naczelny jednej z największych polskich gazet. Wystarczy jeden telefon i na pewno da się to załatwić polubownie. Panowie policjanci nie chcą mieć zapewne dymu w Wybiórczej.",
        type: "quicksilver"
      },
      {
        text: "Na widok psów budzi się w Tobie coś pierwotnego. Przypominasz sobie wszystkie doznane krzywdy. Krew napływa do skroni, a ciało przypomina sobie wyuczone ruchy. Twoja ręka sama wystrzeliwuje w stronę policyjnej pałki. Rzucasz się na nich  -„HWDP! Niech żyje Wolna Polska! Precz z komuną!”",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "To miał być udany wieczór spędzony na wspólnej grze na konsoli z ziomkiem. Jednak Twój kompan, brodaty krasnolud, w połowie misji zaczął pochrapywać. Jak zwykle. Ty nie jesteś gotów, by noc się tak zakończyła. Wyruszasz do sklepu po kolejne browary i paczkę fajek. Nagle, z ciemnego zaułka dobiega zachrypnięty głos: \"Inżynierze, poratujesz?\". Z cienia wyłania się tajemnicza postać. Co teraz?",
    answers: [
      {
        text: "Realizujesz swój wcześniejszy plan, ale uwzględniasz w nim nowego towarzysza. Spędzacie noc przy dźwięku szemrzącej fontanny, popijając chłodne Żubry. Osoba opowiada Ci o swoim życiu - o młodości, o kolejach losu, który doprowadził ją do bezdomności, wielu dorywczych pracach i ludziach napotkanych po drodze. Nawiązujesz więź z tajemnicznym tułaczem. Jednak, jak w każdej dobrej opowieści, gdy nadchodzi świt, rozchodzicie się każde w swoją stronę, by nigdy już się nie spotkać.",
        type: "jaca"
      },
      {
        text: "Kupujesz w sklepie energetyki i kanapki - dla siebie i dla nieznajomego. Bez dodatkowego paliwa nie uda się Twój długi wykład poświęcony arkanom coachingu. Siadacie na ławce i zaczynasz dzielić się wiedzą zdobytą z niezliczonych książek i weekendowych warsztatów z najlepszymi w tej branży. Rozrysowujecie biznes plan. Nieznajomy słucha przeżuwając kanapkę. Gdy kończysz z wypiekami na twarzy i szerokim, zachęcającym uśmiechem na ustach, osoba dziękuje niepewnym głosem i oddala się pospiesznym krokiem. Zostajesz z poczuciem samozadowolenia: po raz kolejny udało Ci się dać komuś wędkę zamiast ryby.",
        type: "korpo"
      },
      {
        text: "Rozpijasz nieznajomego i wyciągasz od niego tajniki skutecznego zbierania puszek. Postanawiasz rozpocząć w mediach społecznościowych akcję zero waste pod hasłem #ratujciewombaty. Wykorzystujesz swojego wombata w puszce, by uświadomić Twoim fanom niebezpieczeństwo związane z porzuconymi opakowaniami. Akcja nabiera rozmachu - w mieście widać coraz więcej celebrytów nurkujących w krzakach i porzuconych stertach śmieci. W konsekwencji okoliczne osoby bezdomne tracą jedno ze źródeł zarobku, bo puszek nie starczy dla wszystkich, ale Twoja popularność rośnie.",
        type: "quicksilver"
      },
      {
        text: "Od razu wietrzysz okazję. Bierzesz człowieka pod ramię, w drugiej ręce masz czteropak Okocimów. Zaczynasz długą opowieść o Twojej pasji - wędkarstwie karpiowym - i wymieniasz  liczne osiągnięcia na tym polu. Wreszcie, z bijącym sercem, prosisz nieznajomego, by wykorzystał swoje znajomości i ogarnął Ci wymarzoną wędkę \"z drugiej ręki\". Za tydzień Twoje marzenie się spełnia, wręczasz nieznajomemu umówioną zapłatę i przyciskając do piersi swój nowy skarb wracasz w podskokach do domu. Stajesz się obiektem podziwu (ale też zazdrości) w swoim kółku wędkarskim. Z tym mercedesem wśród wędek w dłoni nie masz sobie równych.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Twój kuzyn proponuje Ci wspólny wypad na grzyby. Co robisz?",
    answers: [
      {
        text: "Zgadzasz się. Umawiacie się na wyjazd bladym świtem. Całą noc stresujesz się, że wyjdzie na jaw, że jesteś gorszym grzybiarzem. Na szczęście Twój kuzyn w nocy dostaje ostrej sraczki i musicie przełożyć wyjazd na grzybobranie. Uf!",
        type: "jaca"
      },
      {
        text: "Zgadzasz się, myśląc, że chodzi o grzyby psychodeliczne. Ku Twojemu rozczarowaniu kolejne parę godzin spędzacie w Celestynowie, przeszukując ściółkę leśną. Znajdujesz parę podgrzybków. Cały dzień mówisz swojemu kuzynowi, że od podgrzybków wolisz trufle.",
        type: "korpo"
      },
      {
        text: "Zgadzasz się, wietrząc dobry kontent dla jesieniar. Chuja znasz się na grzybach, zrywasz cały koszyk trujaków. Pod koniec grzybobrania pożyczasz od kuzyna dorodny kosz grzybów i robisz sobie z nim zdjęcie, które opatrujesz hashtagami #człowieklasu #mushroom4life itp.",
        type: "quicksilver"
      },
      {
        text: "Zgadzasz się, jak co tydzień. Oczywiście grzybobranie to tylko przykrywka dla waszych konkubin. Zamiast na grzyby jedziecie na działkę napić się wódeczki. W drodze do domu kupujecie trochę grzybów na bazarze. Wracasz do domu i robisz po pijaku awanturę swojej konkubinie.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Jesteś z grupą przyjaciół w Paryżu. Poprzedni wieczór spędziliście na wesołych zabawach i wydoiliście rzekę wina. Najwyraźniej musiało ci coś zaszkodzić, ponieważ w nocy poczułeś nieodpartą potrzebę bełta. Nie znałeś jeszcze dobrze topografii waszego malowniczego mieszkanka, nie trafiłeś więc do kibla a do umywalki. \"C'est la vie\" pomyślałeś sobie i poszedłeś spać. Nad ranem obudziło cię jednak zmartwionko. Wszyscy domownicy jeszcze smacznie spali a ty na paluszkach przekradłeś się do łazienki. Niestety twoje przypuszczenia były prawdziwe – umywalka nie zniosła dobrze powierzonego jej ładunku. Zapchała się. Co robisz?",
    answers: [
      {
        text: "Po cichutku, aby nikogo nie zbudzić, ubierasz się i wciąż na lekkiej bani ruszasz w Paryż. Nie straszny ci brak znajomości francuskiego, wszak Paryżanie słyną z serdeczności. Wchodzisz do różnych sklepów i dość podejrzanym gestem próbujesz zakomunikować zdezorientowanym tubylcom, że chciałbyś kupić przepychacz do kibla.",
        type: "jaca"
      },
      {
        text: "Wpadasz w popłoch. W głowie próbujesz obliczyć ile może kosztować wymiana rurociągu w całym pionie. W końcu bierzesz 5 głębokich oddechów i budzisz francuskojęzycznego kolegę. Idziecie do administracji budynku z prośbą o kontakt do hydraulika, który przychodzi po południu. Hydraulik okazuje się Polakiem i jest bardzo sympatyczny. Zapraszasz go do znajomych na LinkedIn.",
        type: "korpo"
      },
      {
        text: "Hahaha! Ale kurwa jaja! Chwytasz smartfona i robisz przezabawne story o tym jak wczoraj zabalowałeś. Potem wchodzisz do pokojów swoich śpiących znajomych (oczywiście wszystko nagrywasz, to będzie najbardziej legendarne story w twojej karierze) i budzisz ich opowiadając co też nabroiłeś w nocy. Nagrywasz ich reakcje a potem robisz ankietę, kto z nich zareagował najzabawniej. Do końca wyjazdu umywalka pozostaje zatkana. Długo po waszym powrocie właściciel mieszkania próbuje się z wami kontaktować, ale potem daje za wygraną. Hehehe, ale beka!",
        type: "quicksilver"
      },
      {
        text: "Wyciągasz swój podręczny pas z narzędziami i w 3 minuty sprawa jest załatwiona. Taki jesteś rozochocony, że dokonujesz też kilku innych pilnych napraw (dokręcasz mocniej popielniczkę przy wannie, doklejasz sufitową tapetę, która zwisła smętnie w przedpokoju, oliwisz skrzypiące drzwi). Zdążasz jeszcze łyknąć śniadaniowego Okocima patrząc na słońce wschodzące nad dachami Paryża.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Jesteś na działce z przyjaciółmi. Ciepło, miło, lato. W dzień leżenie do góry brzuchem, wieczorem zakrapiany alkoholem grill. Idylla. Pewnego wieczoru zostajesz trochę dłużej ze swoim kuzynem. Dobrze wam się gada, a za kołnierz nie wylewacie. Stwierdzasz w pewnym momencie, że byś coś przekąsił. No i tu pojawia się problem. Wszyscy już śpią. Grill zimny. Ale… Została cała miska ćwiartek kurczaka. Są trochę surowe w środku, bo nie zdążyły się w pełni zgrillować zanim wygasł węgiel. Co robisz?",
    answers: [
      {
        text: "Obgryzasz kurczaki z tego mięsa, które nadaje się do jedzenia, zostawiając resztki z surowym mięsem w misce – przecież będzie można je jeszcze dopiec jutro i wszyscy się najedzą!",
        type: "jaca"
      },
      {
        text: "Już jest 4 am. Około 7-8 am inni wczasowicze zaczną wstawać. Masz idea jak wykazać się swoją resourcefulness i zapunktować wśród innych. Czekasz do 6:45 am, kiedy odpalasz grilla i dopiekasz kurczaki, szykując dla wszystkich wykwintne śniadanie. Przy śniadaniu nie omieszkasz przy wszystkich skrytykować poprzedniego grillmeistera za nieosiągnięcie KPI i zostawienie na wpół upieczonego jedzenia, które jest przecież zagrożeniem dla zdrowia a nawet życia innych. Przejmujesz jego stanowisko do końca wyjazdu. Po powrocie całą akcję dokładnie wpisujesz do CV.",
        type: "korpo"
      },
      {
        text: "Obgryzasz z kurczaków co twoje – należy Ci się! Patrzysz na to, co zostało z kurczaków(surowe mięso i kości)  i na to, co zostało z twojego kuzyna(jest najebany). Wpadasz na pomysł wspaniały! Wyciągasz swojego iPhona 9HD i zaczynasz kręcić. Podtykasz kuzynowi pod nos miskę resztek i mówisz żeby spróbował tych zajebistych lokalnych specjałów (tutaj odwracasz się i mrugasz do kamery). Dalej kręcisz jak kuzyn zjada wszystkie resztki, po jakimś czasie wybiega na zewnątrz i puszcza meeeega pawia, hehe. Szybki montaż, i na swoją tubkę wrzucasz nowy filmik „Chicken Meat Prank [GONE WRONG][MUST WATCH]”. Po tygodniu filmik ma 240 tyś. wyświetleń.",
        type: "quicksilver"
      },
      {
        text: "Po twojej lewej zimna miska pułsurowych kurczaków. Po twojej prawej ciepłe pół litra wódki. Jing-Jan, czy jakoś tak. Głupio żeby ktureś sie zmarnowało, kurna. Gotujesz kurczaki w wudce i dudlasz zupkę duszkiem. Budzisz sie w Sieradzu. „No to klops” - myślisz sobie. Z tylnej kieszeni spodni wyciągasz puszke Okocimiu. Pstryk.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Zgubiłeś się Puszczy Białowieskiej, wracając z wycieczki do punktu obserwacji żubrów. Zaczyna się ściemniać. Sowy pohukują, naładowane hormonami Maciory przeganiają piglety przez ścieżki. Nie poznajesz drzew i kamieni które mijasz, chyba zboczyłeś ze szlaku. Co robisz?",
    answers: [
      {
        text: "Odpalasz szluga, wzruszasz ramionami i próbujesz na czuja obrać kierunek ku domowi, nie jest Ci zimno chociaż masz krótki rękaw, a buty wciągnęło Ci w błoto, więc zostawiłeś je tam, nie mogąc wyciągnąć. Słabo, że telefon Ci się rozładował, ale w sumie chyba nikt z ziomków, z którymi jesteś na wyjeździe nie będzie się martwił, nie ma Cię dopiero 4,5 godziny, odkąd powiedziałeś żeby już wracali jeżeli chcą, a Ty jeszcze dokończysz piwko i dogonisz. Odpalasz drugiego szluga, przedzierając się przez krzaki i pajęczyny, myślisz o Tym jak piękny jest świat, jak wspaniali są ludzie i zaczynasz wymyślać spoko fabułę do erpega. Odpalasz trzeciego szluga, a w kieszeni plecaka znajdujesz puszkę żubra, o której zapomniałeś. Co za wspaniały wieczór, radość rozpiera ci piersi, płaczesz ze szczęścia, co pominiesz w swojej opowieści o tym momencie.",
        type: "jaca"
      },
      {
        text: "Nie ma problemu. Jesteście przecież na wyjeździe integracyjnym. Wszyscy mają bezrękawniki z gęsim puchem od Tommiego H. , więc nikomu nie jest zimno, właściciel luksusowej agroturystyki podarował Wam cytrynówkę własnego wyrobu, więc jest wesoło kiedy przerzucacie się seksistowskimi żartami, czekając na syna właściciela agro, do którego udało Wam się szczęśliwie dodzwonić. Po pół godzinie jest po wszystkim. Było troszkę straszno, ale za to jak śmieszno.",
        type: "korpo"
      },
      {
        text: "W ogóle nie ma Cię w tej sytuacji, bo jesteś na skałkach w Chorwacji, testujesz nowe go pro.",
        type: "quicksilver"
      },
      {
        text: "Trudno to nazwać wycieczką, po prostu obudziłeś się z black outu w środku lasu. A obiecałeś sobie kurwa, że na tym weselu zostaniesz przy piwie. Ale jak zwykle ktoś Cię musiał wkurwić.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Środa wieczór, pracujesz w mieszkaniu nad jednym ze swoich projektów gdy dzwoni Twój znajomy. Najpierw długo rozmawiacie o życiu, bo dawno się nie widzieliście, na koniec znajomy zdradza, że pracuje nad swoim filmem i bardzo potrzebuje znaleźć restaurację, w której uda się nakręcić kluczową scenę filmu:",
    answers: [
      {
        text: "Mówisz mu, że podzwonisz po swoich znajomych i na pewno uda się coś znaleźć.",
        type: "jaca"
      },
      {
        text: "Zaczynasz opowiadać o swoim sąsiedzie, który jest właścicielem czterogwiadkowej restauracji na Brackiej; wspominasz, że dają tam ekstra żeberka w sosie beszamelowym.",
        type: "korpo"
      },
      {
        text: "Mówisz, że wrzucisz post do znajomych na Facebooku, ale dopiero jutro, bo już dzisiaj wrzuciłeś kilkanaście innych postów i boisz się o swoje zasięgi.",
        type: "quicksilver"
      },
      {
        text: "Mówisz, że nie znasz nikogo kto mógłby pomóc, ale chętnie spotkasz się na piwo w piątek by powspominać stare czasy; dodajesz, że znajomy ma zapewnić alkohol, a Ty przyniesiesz dużo popity.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Rok 2020. 23 kwietnia, godzina 23.55. Dzwoni budzik. Wstajesz zwarty i gotowy Jednocześnie czujesz lekką frustrację. Dlaczego?",
    answers: [
      {
        text: "Wyjątkowo nie udało Ci się przełożyć wszystkich obowiązków i w ciągu najbliższych 24 godzin będziesz musiał pogodzić: wypicie 24 piw, uczestnictwo w pogrzebie znajomego i Wzięcie udziału w pierwszym 6-godzinnym dniu hackatonu. Jednocześnie będziesz musiał kontrolować i zapisywać ilość spożytych puszek alkoholu. To będzie nie lada logistyka.",
        type: "jaca"
      },
      {
        text: "Jest dzień Paula Newmana i wyjątkowo nie możesz celebrować go w pełni, bo jest bardzo ważny hackaton, w którym od dawna marzyłeś żeby wziąć udział. Wiesz, że nie można mieć w życiu wszystkiego.",
        type: "korpo"
      },
      {
        text: "Miałeś nadzieję zrobić live-streaming z picia 24 piw na cześć Paula Newmana, Twojego ukochanego aktora, ale akurat tego dnia jest pogrzeb przyjaciela rodziny i chcesz na nim być. W tym roku nici ze streamingu.",
        type: "quicksilver"
      },
      {
        text: "Ktoś z Twoich współlokatorów wypił 10 z 24 piw, które przygotowałeś sobie na dzień Paula Newmana. Wściekłość potęguje fakt, że trunki przytargałeś na własnych plecach w turystycznym plecaku już poprzedniego dnia. Logistykę picia i jedzenia opracowywałeś przez ostatni tydzień.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Odziany w przymały, plastikowy hełm rycerski zjawiasz się ze znajomymi na XIII Zlocie Wojowników, Słowian, Bałtów i Wikingów w Drohiczynie. Jesteście tam jako osoby z zewnątrz, zaintrygowani obserwujecie ludzi koczujących z całymi rodzinami w średniowiecznych namiotach, gotujących w kociołkach podejrzanie pachnące wywary. W przerwie od podziwiania walk na miecze i topory wpadacie ze znajomymi do pobliskiej karczmy „Stara Baśń”. Barman bierze Cię za uczestnika zlotu (świetny strój!) i oferuje miód pitny za darmo. Co robisz? ",
    answers: [
      {
        text: "Nim zdążysz się zorientować, że zaszła pomyłka, masz już w ręku darmowy alkohol i wracasz do stolika, gdzie opowiadasz znajomym o całej sytuacji. Śmiechom nie ma końca. Na trunek z sąsiedniego stolika zerka z zazdrością Daniel Olbrychski.",
        type: "jaca"
      },
      {
        text: "Jesteś oburzony – jak komukolwiek mogło przyjść do głowy, że jesteś częścią tego festiwalu brudu pod paznokciami? Obrzucasz barmana pogardliwym spojrzeniem, odmawiasz i zamawiasz lampkę czerwonego wina. Rzucasz na odchodne „reszty nie trzeba”, zostawiając tym samym sowity napiwek (czego później trochę żałujesz).",
        type: "korpo"
      },
      {
        text: "Przyznajesz się do bycia uczestnikiem zlotu i bierzesz miód pitny. A ponieważ takie okazje trzeba wykorzystywać do końca, zostawiasz swój adres, na który Stowarzyszenie Rycerskie od teraz wysyła Ci różnego rodzaju gadżety. Reklamujesz w swoich mediach społecznościowych miecze do krojenia chleba, hełmy rycerskie w stylu drinking hat, podgrzewane kolczugi...",
        type: "quicksilver"
      },
      {
        text: "Bez zastanowienia bierzesz darmowy trunek, a potem kolejny i kolejny… Nim się orientujesz, jesteś już w połowie drogi na Litwę, gdzie ma odbyć się kolejny zjazd. Twoi nowi znajomi z Bractwa Rycerskiego uwierzyli, że jesteś ich dawno niewidzianym kuzynem (głupio się przyznać, że Cię nie pamiętają). W zamian za drobne naprawy otrzymujesz jeszcze więcej pitnego miodu, własny namiot i sokoła.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Masz 22 lata. Jakiś czas temu wpadłeś na pomysł, że świetnym sposobem na kultywowanie Twojej relacji z młodszą siostrą jest celebrowanie Dnia Młodszej Siostry. Nie ma takiego święta w kalendarzu, ale to nic nie szkodzi! Szukasz pomysłu na ten rok. Co robisz?",
    answers: [
      {
        text: "Przypominasz sobie, że dziewczyna twojego kumpla robiła kurs makijażu. Chyba lubi też robić zdjęcia. Dzwonisz do niej z pytaniem, czy ma trochę wolnego czasu, bo chcesz zorganizować sesję zdjęciową, Podzielimy sesję na dwie części. Najpierw będziecie młodziakami, a potem staruszkami. To będzie bardzo fajny dzień!",
        type: "jaca"
      },
      {
        text: "Wygospodarowałeś w kalendarzu aż dwie wolne godziny. Najlepsza inwestycja to nauczenie siostry czegoś praktycznego. To chyba odpowiedni czas na podzielenie się wiedzą o zarządzaniu sobą w czasie i pokazanie najlepszych postów z bloga Finanse Bardzo Osobiste. Powinna to docenić.",
        type: "korpo"
      },
      {
        text: "Zapraszasz siostrę na rzemieślnicze lody do jednej z modnych aktualnie lodziarni. Robicie sobie przy okazji bardzo dużo wspólnych zdjęć.",
        type: "quicksilver"
      },
      {
        text: "Yyyyyy… dajesz jej 5 dyszek??",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Masz gdzieś około 26 lat. Szwendasz się po mieście z ekipą, w której bryluje Marysia. Pokazujecie jej znajomemu z Argentyny Warszawę. Decydujecie wbić się na imprezę do Waszych jazdowskich sąsiadów z Otwartej Pracowni. W pewnym momencie gość z Ameryki Południowej widząc trzy lodówki w jednym małym drewnianym domku wyjawia Wam, że zawsze marzyło mu się ukraść takową... Co robisz?",
    answers: [
      {
        text: "Super! Przejmuje Cię entuzjazm obcokrajowca i zakłopotanie Marysi. Najchętniej poszedłbyś zapalić szluga i przemyśleć sprawę, ale nie ma czasu - nie wiadomo jak skończyłoby się wzięcie przez Argentyńczyka sprawy w swoje ręce. Omawiacie sytuację z ekipą, proponujesz przeniesienie lodówki do innego domku. Przekonujesz Marysię, że jeśli właściciel lodówki zgodzi się na pozorowaną kradzież to o gitara - a o reakcję Agi Leśny będziecie się martwić jutro. Właściciele się zgadzają. Kradniecie lodówkę. Argentyńczyk jest wniebowzięty. Aga Leśny zdziwiona gdy następnego dnia zastaje lodówkę na środku salonu swojego domku.",
        type: "jaca"
      },
      {
        text: "Próbujesz przemówić Argentyńczykowi do rozsądku i wybić mu z głowy ten kretyński pomysł. Tłumaczysz, że Polska to nie jest dziki kraj w Azji, tylko nowoczesne kapitalistyczne państwo z ponad 1000 letnią historią.",
        type: "korpo"
      },
      {
        text: "Od razu zgadzasz się na akcję po warunkiem, że w najbliższe lato Argentyńczyk pojedzie z Tobą na surfing do Mar del Plata.",
        type: "quicksilver"
      },
      {
        text: "Sięgając do rzeczonej lodówki po Wilka (chcesz zaraz napić się z Mateuszem i Helenką) wpadasz w śmiech i rzucasz przez ramię, że jeśli tak go kręci wynoszenie lodówek, to zapraszasz jutro na Krępowieckiego gdzie robisz dwa mieszkania i w obydwu są takie same stare Miński do wywalenia na śmietnik.",
        type: "majster"
      }
    ]
  },
  {
    type: "question",
    question: "Jesteś w górach z przyjaciółmi, po całym dniu męczącej wędrówki łapie was deszcz. Udaje wam się wynegocjować nocleg w szopie u jakiejś pani, ale nie macie jak wysuszyć rzeczy, więc z jednym typem próbujecie je wywiesić w suszarni pobliskiego pensjonatu. Ostatecznie recepcjonista nie pozwala Wam na to, ale twoją uwagę przykuwa stojąca w suszarni szafka z grami. Co robisz?",
    answers: [
      {
        text: "Kradniesz grę monopoly, żeby umilić kumplom wieczór, a następnego dnia ją oddajesz bo to w końcu była pożyczka, a nie kradzież.",
        type: "jaca"
      },
      {
        text: "Dzwonisz do właściciela pensjonatu z telefonu satelitarnego i przekonujesz, żeby zatrudnił cię na stanowisku prodżekt menedżera. Kumpli zatrudniasz w swoim teamie, dzięki czemu mogą się przebrać w suche firmowe mundurki.",
        type: "korpo"
      },
      {
        text: "Po powrocie do Warszawy wystawiasz pensjonatowi niekorzystną recenzję na Google Mapsach.",
        type: "quicksilver"
      },
      {
        text: "Wyciskasz z przemoczonej bluzy wodę i sprzedajesz ją na straganie jako lemoniadę, za zarobione pieniądze stawiasz w tym miejscu automatyczną suszarkę do ubrań dla innych turystów. Kumplom dajesz zniżkę.",
        type: "majster"
      }
    ]
  },

  {
    type: "question",
    question: "Masz 21 lat. Wbiłeś na impreze do Krawca-kuzyna. tsssss....odpalasz browara. Wyjmujesz z kieszeni paczkę pistacji, otwierasz. Łupiesz-jesz-łupiesz-jesz-jesz-łupiesz...podchodzi Tamara i pyta czy może jedną. Co robisz?",
    answers: [
      {
        text: "Częstujesz ja mowiac, ze niewielu dostępuje tego zaszczytu i od tej pory to będzie Wasza słodka tajemnica.",
        type: "jaca"
      },
      {
        text: "Oddajesz jej paczkę ze sztucznym uśmiechem, myśląc sobie”: ja jebie, czy ja naprawde musze postawic ludziom plantacje pistacji, żeby dali mi w spokoju zjesc moja paczke jedyna na cały dzień?!?!” I druga myśl: „Czy to by sie oplacalo w Polsce?..”",
        type: "korpo"
      },
      {
        text: "Mówisz: „Mało mam”, nakładasz kaptur na głowę i zjadasz kolejnego orzeszka.",
        type: "quicksilver"
      },
      {
        text: "Mowisz, ze pora do domu, chowasz orzeszki, klaniasz sie nisko, zgarniasz jeszcze dwa Okocimy z blatu i dumnym krokiem wychodzisz jak gdyby nigdy nic.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Późna jesień, wieje silny wiatr. Na spacerze po Saskiej Kępie, zaraz po otrzymaniu wypowiedzenia w pracy, poważnie zasmucony, kopiesz w kamienie na ścieżce w parku. Przy uderzeniu w wyjątkowo ciężką rzecz, tłuczesz sobie stopę. Nachylasz się i widzisz, ze to nie kamień, tylko skrzyneczka z kluczami w środku, portfel bez dokumentów, za to z bonami sodexo. Co robisz?",
    answers: [
      {
        text: "Chowasz skrzyneczkę do najbliższej dziury, na drzewie w parku zostawiasz liścik z instrukcją jak znaleźć tę skrzynkę.",
        type: "jaca"
      },
      {
        text: "Dzwonisz na policję i Straż miejska. Chcesz załatwić sprawę porządnie. Czujesz się z tym szlachetnie, robisz sobie za to nagrodę specjalną postaci obiadu na mieście. Będzie to ramen i sushi",
        type: "korpo"
      },
      {
        text: "Bierzesz skrzyneczkę do domu, nagrywasz relacje na fB, wrzucasz apel z prośbą o znalezienie właściciela skrzyneczki na swoją tablice, na tablice strony przyjaciół saskiej. Za znalezienia właściciela oferujesz nagrodę. Czapkę z quicksilvera.",
        type: "quicksilver"
      },
      {
        text: "Wybierasz się na zakupy. Wszak przyda ci się zapas jedzenia, ale nie zachowuje wszystkiego dla siebie: dzielisz się bonami z sąsiadami.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Jesteś w Radości. Razem z Marysią przyjechaliście spotkać się z Olą. W planach było zbieranie badyli w lesie. Co robisz jak zgłodniejesz?",
    answers: [
      {
        text: "Plan waszego spotkania był juz dość mocno skonkretyzowany. Docieracie do PIZZA PLANET - Twojego ulubionego miejsca w Radości.",
        type: "jaca"
      },
      {
        text: "Po pierwszym donośniejszym burknięciu dochodzącym z jamy brzusznej chwytasz odruchowo za telefon żeby zamówić pizzę z dowózką do Waszej lokalizacji. Po chwili klepiesz się w czoło i zamawiasz ubera. Wszyscy razem docieracie do PIZZA PLANET - Twojego ulubionego miejsca w Radości.",
        type: "korpo"
      },
      {
        text: "Dzwonisz po Marcina Tyszkę, z którym już wcześniej byłeś umówiony na profesjonalną sesję zdjęciową. Uberem ruszacie na spotkanie z nim w pobliskiej pizzerii. W planach jest złapanie najsmakowitszych ujęć Jacka na tle perfekcyjnie zaokrąglonych pizzowych ciast, jego akrobacji na słupie z szyldem PIZZA PLANET i pod laserowymi światłami sufitowymi imitującymi pierścienie planetarne . Najważniejsze, że wszyscy razem docieracie do PIZZA PLANET - Twojego ulubionego miejsca w Radości.",
        type: "quicksilver"
      },
      {
        text: "Na rozgrzewkę kupujesz zapas przeterminowanych piw w outlecie piwnym obok Pizzy z Radości . Po wyjściu otwierasz pierwszą puszkę piwa swoim ulubionym śrubokrętem z grawerem \"Walawejder\" i jednym chełstem wypijasz browar do dna w ciągu 1 min. Następnie wszyscy razem docieracie do PIZZA PLANET - Twojego ulubionego miejsca w Radości.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Rozsiadasz się wygodnie w pizzerii Pizza z Radości w świecie PIZZA PLANET przy ul. Patriotów w Radości. Po Twojej prawej i lewej stronie siedzi Maria i Ola a na przeciwko papierowa  wydarta postać udająca Twojego przyjaciela z Radości Oskara, który powstrzymany siłą mięśni covida-19 nie dołączył na spotkanie. W twoich rękach, w niezwykle plastyczny i naturalny sposób, układa się MENU PIZZA PLANET. Bardzo długo wahasz się nad wyborem: co zjesz? co odrzucisz? czy lepiej wybrać coś o wesołej nazwie czy raczej rozsądniej byłoby postąpić ekonomicznie i najeść się do syta jakąś zwykłą współdzieloną pizzą? Twoje oczy błądzą po spisie a ślinianki szaleją, do wyboru: MAŁA BUŁA OK.200G, BIG BUŁA EXTRA OK.370G, BIG BUŁA DELUX OK.370G, TORTILLA ELDORADOŚĆ, PIERÓG Z RADOŚCI,, RADOSNE ZAWIJAKI. Co wybierasz?",
    answers: [
      {
        text: "Tym razem decydujesz się na tylko jedną z rzeczy jako dodatek do współdzielonej pizzy. Wydaje się rozsądnym zamówić MAŁĄ BUŁĘ i PIEROGA z RADOŚCI na spróbowanie.",
        type: "jaca"
      },
      {
        text: "Zamawiasz wszystko. Życie jest zbyt krótkie i nie masz już nadziei na wizytę w Radości. Dopiero po 40 minutach czekania na zamówienie i dumania w kosmicznej przestrzeni pizzerii zaczyna przypominać Ci się o co chodziło w ideałach i magii jedzenia Pizzy w PIZZA PLANET. Zrozumiałeś, że popełniłeś błąd zamawiając wszystko na raz. Jednak nie przejmujesz się tym. I tak całość będzie na fakturę.",
        type: "korpo"
      },
      {
        text: "Zamawiasz Tortillę Eldoradość razy cztery. Budujesz z niej coś na kształt statku kosmicznego i angażujesz ekipę pracującą w kuchni w realizację filmu o podboju świata przez Polaków. Wszystko dlatego, że przegrałeś jakiś głupi zakład ze swoimi fanami.",
        type: "quicksilver"
      },
      {
        text: "Zdecydowanie zamawiasz BIG BUŁĘ EXTRA. Jest tam i pomidor i jakieś mięsko i ogórek kiszony. Idealny zestaw do setki przytulonej pod pachą. No po prostu \"Wyspa Radości\"!",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Właśnie skończyłeś prowadzić wycieczkę. Jedną z tych bardziej satysfakcjonujących. Czujesz, że wysiłek nie poszedł na marne. Dzieciaki z zapartym tchem i szeroko otwartymi ustami obserwowały przewagę prędkości spadania zgniecionej kartki papieru nad tą drugą - nie zgniecioną. Z wypiekami na twarzy i błyszczącymi oczyma skandowały odpowiedzi na Twoje celne i umiejętnie zadane pytania. Sam się czasem dziwisz, skąd ten ogrom natchnienia. Zamykasz na klucz drzwi od salki w głównym (tym szklanym, prawdziwym) biurowcu LOT-u, i z lekko błądzącym po twarzy uśmiechem samozadowolenia, kierujesz  rozkołysany krok w stronę pewnego jak amen w pacierzu papierosa. Wtedy go spostrzegasz. Napis STRAJK! Zbierają podpisy!",
    answers: [
      {
        text: "Podchodzisz z zaciekawieniem i zamieniasz parę zdań z doświadczoną stewardesą, panią Moniką . Ze smutkiem kiwasz głowa, nie omieszkając się po niej podrapać. Bardzo chętnie złożyłbyś podpis pod petycją, ale głowa pani Moniki zaczyna poruszać się horyzontalnym ruchem posuwisto zwrotnym. - Nie ma pan panie Jacku umowy - ci na śmieciówkach nie mogą…",
        type: "jaca"
      },
      {
        text: "Nie zauważasz go. Idziesz wpatrzony w ekran smartphona najnowszej generacji i przerzucasz zdjęcia na Tinderze. Prawą ręką. Jedno za drugim. Z wprawą i znawstwem wytrawnego konesera, który na kilometr rozpoznaje fałsz zdjęć wyretuszowanych w aplikacjach smartphonów zeszłorocznych, czy o zgrozo - tych sprzed  dwóch lat. Niczym niezawodny łowczy dostrzegasz wreszcie tę JEDYNĄ. W każdym razie jedną z nich. I już masz przesunąć ją w górę kiedy z impetem wpadasz na stolik do zbierania podpisów. Telefon szybuje przez chwilę nad wypolerowaną na błysk posadzką, by w jednej chwili pokryć się gęsta siecią pajęczyny stłuczonego ekranu. Upadasz nie zdążywszy wyszarpnąć ręki z kieszeni kurtki dzierżącej kurczowo kluczyki od twojej nowej (prawie) fury. Pilot pęka z trzaskiem pod Twoim ciężarem. W ułamku sekundy kiedy dostrzegasz odbicie swojej przerażonej twarzy w szklistej posadzce a chwilę przed poczuciem jej chłodu - już wiesz. Nici z wysp Kanaryjskich w tym roku. Nowy telefon sam się nie spłaci...",
        type: "korpo"
      },
      {
        text: "Poprawiasz włosy i ruszasz w kierunku pani Moniki która siedzi przy stoliku. W głowie zaczyna Ci szumieć od możliwych tytułów nowego filmu na Twoim kanale YT. W zasadzie całej serii filmów. Taki strajk to przecież będzie spore wydarzenie. Największy przewoźnik w kraju. DRAMAT PRACOWNIKÓW, KRWIOŻERCZY DYREKTOR , albo nie, czekaj, może by SPISEK PRZECIWKO NARODOWEMU PRZEWOŹNIKOWI , KRECIA ROBOTA PERSONELU. Coś takiego. to dopiero będą zasięgi. Zostawiasz panią Monikę i ruszasz w stronę solarium. Ktoś musi być twarzą tego zamieszania!",
        type: "quicksilver"
      },
      {
        text: "Przechodzisz obok stolika pani Moniki, ale chwilę później się zatrzymujesz. Strajk to strajk, może uda się coś wyciągnąć z tej firmy. Podchodzisz do stanowiska i zaczynasz ostrożnie badać, czy te podpisy to na pewno są anonimowe i czy w razie czego ktoś się może czepić. No nie dobrze... Znów odchodzisz na bok i nieśpiesznie kalkulujesz. Może zaryzykować. W razie czego wyjedzie się do Holandii. Kraj jak kraj, też mają piwo. A w euro to i zarabia się inaczej. Jedno euro to jeden Okocim? u nas dwa Okocimy? Okocimie? a tam? dobra, podpisuję.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Jesteś w mieszkaniu. Dzwoni do Ciebie koleżanka, że kaban się popsuł, czy możesz ją zastąpić: trzeba podyskutować z dzieciakami o książkach. Może jesteś u siebie (to blisko) i coś akurat ostatnio czytałeś.",
    answers: [
      {
        text: "Odpowiadasz, że jeszcze jesteś u siebie, bo już wychodzisz lżyć Wellsa Towera. Oczywiście jego książka nie jest tak zupełnie zła, mógłby po prostu wymyślić więcej niż jedną postać, poza tym jest właściwie bardzo fajny, jego portret masz na wieczku od śmietnika „dla żartu”. Wychodzisz. Jest już późna jesień i na tiszert może trochę za chłodno. Nie odszedłeś daleko, więc wracasz po bluzę. Ona ma na sobie jakiś napis. Jak się później okazuje: „Pepe Jeans”. Nie masz pojęcia, co to jest Pepe Jeans. Ale dzieciaki ze świetlicy mają i uznają Cię za banana i w dupie mają Twoje zdanie na temat Wellsa Towera.",
        type: "jaca"
      },
      {
        text: "Odpowiadasz, że jesteś w pracy.",
        type: "korpo"
      },
      {
        text: "Odpowiadasz, że wpadniesz. Na imprezie z ludźmi z liceum ktoś chwalił ostatnio jakąś książkę, chyba coś o wojnie, w każdym razie, że coś runęło, coś o zgliszczach. Przeglądasz Internet, ale niestety wyskakuje Piotr Zaremba. To raczej nie to. Jednak dalej jest jakiś Wells Tower i jego Ruiny i Zgliszcza, ma to dobre recenzje, chwali to Najder na swoim peju, jest wywiad w DWUTYGODNIKU, to pewnie to. Nagle kojarzysz okładkę: masz z tą książką zdjęcie z Bilbao! Wkładasz bluzę od Pepe, kurtkę z kapturem obszytym futerkiem. Jesteś już spokojny: „czytałeś” to pół roku temu, masz prawo nie pamiętać.",
        type: "quicksilver"
      },
      {
        text: "Odpowiadasz, że nie czytasz. Nikomu się nie przyznajesz, że podkradasz po kryjomu książki żonie polonistce, najchętniej Ruiny i Zgliszcza Wellsa Towera. Nie wiesz jednak, że ona się zorientowała, tak go macałeś spocony z zachwytu, i że specjalnie kupiła sobie drugi egzemplarz tylko dla siebie. Trzyma go przy sobie zawsze w torebce.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Dzień kobiet. Twój przyjaciel oznajmia Ci, że wpada wieczorem ze swoją narzeczoną na piwko. Nawiązujecie luźną konwersację, z której wynika, że twój przyjaciel jak zwykle zapomniał o prezencie dla swojej narzeczonej i trochę zrobiło jej się przykro. Co robisz?",
    answers: [
      {
        text: "Przypominasz sobie, że gdzieś w pokoju masz lizaka w kształcie minionka i wręczasz narzeczonej przyjaciela w ramach ratowania honoru płci męskiej i żeby poprawić dziewczynie humor.",
        type: "jaca"
      },
      {
        text: "Zmieniasz temat, żeby nie pogrążać przyjaciela.",
        type: "korpo"
      },
      {
        text: "Wyjmujesz z szuflady kilka gadżetów reklamowych, które dostałeś przy okazji współpracy z Quiksilverem i podajesz na boku przyjacielowi, żeby wręczył swojej kobiecie.",
        type: "quicksilver"
      },
      {
        text: "Głośno wyrażasz opinie, że kobiety i tak za dużo oczekują od mężczyzn i to one powinny dawać prezenty mężczyzną za ich ciężką pracę i wkład w utrzymanie rodziny.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Wybraliście się z kumplami do Lwowa. Ciepły wieczorek. W trakcie spontanicznej wycieczki w poszukiwaniu niezbyt drogich pubów idziecie przez park Ivana Franka. Nagle słyszycie głośny ostry dźwięk. To muzyka! We will rock You! Słynnych Queen, ale grana... pierunami! Dziwne urządzenie podobne do grzyba puszczającego błyskawice i wydającego dźwięki. Steruje tym jakiś koleś w podartych ubraniach, z brązową bondaną na głowie. Zaczarowani tym widowiskiem czekacie do końca żeby spytać się kolesia co to jest. Zaczynasz gadać po angielsku z kolesiem, który nazywa siebie Ion. Okazuje się, że pochodzi z Charkowa, a to jest Cewka Tesli która może zagrać cokolwiek jej zapodasz. Monofonicznie. No i dodatkowo odpala neony. Bezprzewodowo. Ion mówi, że podróżuje z Cewką po Ukrainie. Dobrze wam się gada. Cała ekipa bierze piwko i jakieś przekąski. Ion zapewnia, że w tym miejscu można pić alkohol. Mówi również, że niebawem rusza przez Odessę do Krymu. Na Fiolent. Prawdziwy kawał tropików z przezroczystą woda i plażą bez ludzi. A żeby zarobić na drogę, piwko i smakołyki planuje koncertować. Nagle pyta Ciebie czy nie chcesz dołączyć do niego w tej podróży, bo jesteś dobrze rozgadany po angielsku i możecie razem podbić Świat. Co odpowiesz?",
    answers: [
      {
        text: "Odessa, Krym, ciepłe morze, smaczne jedzenie i wiele innych rzeczy, których nie widziałeś. Kto zna co z tego wyjdzie, ale myślałeś o czymś takim. Dobry moment żeby wreszcie sobie trochę odpuścić i pozwiedzać świat. Zgadzasz się. Jutro ruszacie w drogę.",
        type: "jaca"
      },
      {
        text: "Twój plan jest prosty i skuteczny. Kilka dni poimprezować we Lwowie. Dobre puby, fajne dziewczyny. Ale nie dłużej, bo chcesz wrócić do domu i wysłać CV do kilku dużych firm które znalazłeś już wczesnej. Myślisz sobie, że im szybciej zaczniesz karierę tym szybciej dostaniesz stabilności finansowej i spełnisz marzenia. Więc śmiejesz się jakby to był dobry żart.",
        type: "korpo"
      },
      {
        text: "Już od dawna planowałeś zaliczyć kilka punktów w Karpatach. Jezioro Synewir i szczyt Gowerla. Masz trochę kasy, sprzęt turystyczny i dobrą kamerę. Nie czekasz na okazje, sam torujesz swoją drogę. Mówisz, że masz już swój plan i że może jeszcze kiedyś się jeszcze zobaczycie. Ion mówi, że Ziemia jest okrągła, więc spotkacie się na koncie.",
        type: "quicksilver"
      },
      {
        text: "Na dworcu głównym zobaczyłeś plakat o tym, że właśnie za trzy dni jest finał Wyższej Ligi Ukraińskiej w piłce nożnej. W domu regularnie chodzisz na mecze i masz kumple kibiców. Pytasz Iona czy on nie wie gdzie możesz zapoznać się z lwowskimi fanami. Ion mówi, że chyba znajdziesz ich na koncercie punkowo-dresiarskiego zespołu \"Kurwa-Mac\".",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Twój ziomek wyprowadza się z Warszawy na drugi koniec Polski. Jego kumple poprzedniego dnia w piątek spieszyli się na melanż i na odpierdol zapakowali dostawczaka poprzedniego dnia. 1/3 wszystkich rzeczy się nie zmieściła. Jest miły sobotni poranek, masz kaca, a ziomek potrzebuje pomocy, bo ma wynajęty samochód tylko do końca weekendu. Co robisz?",
    answers: [
      {
        text: "Brzmi jak idealne wyzwanie na kaca. Z przyjemnością metodycznie, krok po kroku, rozpakowujesz praktycznie cały samochód i zapakowujesz go jeszcze raz. Marzyłeś kiedyś o zagraniu w takiego tetrisa.",
        type: "jaca"
      },
      {
        text: "Odpowiadasz: “Najebałem się wczoraj z kumplami z pracy, sory ziomek, ale muszę zrobić COŚ WAŻNEGO, a tak naprawdę będę raczej spał albo oglądał jakieś pierdoły na internetach.”",
        type: "korpo"
      },
      {
        text: "“Nie dam rady. Dzisiaj mam w planach 20 km biegu, saunę i picie elektrolitów.”",
        type: "quicksilver"
      },
      {
        text: "Dzwonisz po ekipę swoich ziomków, bo stawiasz ilość ponad jakość. W pół godziny robisz podobny rozpierdol, ziomek stracił pół dnia i jest jeszcze bardziej załamany.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Masz 29 lat. Siedzisz na kwarantannie. Trzeci raz. Tym razem masz koronawirusa. Powoli Cię to już męczy, bo oglądasz te filmy z Afrykamery, jesz, no i grasz w śledztwo od siedmiu dni. Kiedy wychodzisz ze śmieciami – uważając by nie dotknąć niczego i nie spotkać nikogo na swej drodze – znajdujesz u wlotu piwnicy lampę.",
    answers: [
      {
        text: "Pocierasz ją zgodnie ze swoją naturą, nawykami i popkulturą. Wylatuje z niej dżin, który spełnia tylko jedno życzenie. A Ty zaślepiony mordęgą ostatnich dni masz w głowie to jedno: spotkać Filipa Finfando, który dwadzieścia lat temu wygrał w Kaczorze Donaldzie wycieczkę do Disneylandu.",
        type: "jaca"
      },
      {
        text: "Nie zauważasz jej nawet, bo jesteś zbyt zajęty swoimi sprawami w mieszkaniu. W końcu praca praca, a do tego urlop na Kanarach już by był, gdyby nie ten cholerny koronawirus, więc nie będziesz się rozpraszał.",
        type: "korpo"
      },
      {
        text: "Cieszysz się, bo to lampa Alladyna, taka jaką widziałeś na zawodach w Maroku. I Tunezji. Bierzesz ją na chatę i naklejasz na nią naklejkę Quicksilvera pod kolor.",
        type: "quicksilver"
      },
      {
        text: "Bierzesz lampę, pocierasz, a kiedy wyskakuje dżin, to kurwisz na niego i nie dajesz dojść do słowa. Można się wreszcie trochę wyżyć. Prosisz, żeby ekipa wróciła już z Irlandii. W końcu jest tak jak było kiedyś.",
        type: "majster"
      }
    ],
  },
  {
    type: "question",
    question: "Jest 10:20 piękne lipcowe przedpołudnie. Masz ileś tam ponad 30 lat, i jakiś czas temu postanowiłeś się hajtnąć. Dzisiaj jest dzień ślubu. Ostatnie spojrzenie w lustro, frak leży swobodnie i nienagannie. Wychodzisz z domu i wdeptujesz elegancko lśniącym lakierkiem w spore psie gówno.",
    answers: [
      {
        text: "Uśmiechasz się do gówna.",
        type: "jaca"
      },
      {
        text: "Czyścisz but chusteczką.",
        type: "korpo"
      },
      {
        text: "Smarujesz gównem drugi but.",
        type: "quicksilver"
      },
      {
        text: "Zapalasz papierosa.",
        type: "majster"
      }
    ],
  }
]

let results = {
  jaca:
    {
      opis: "Jesteś Jackiem, który jest Jackiem i takim Cię kochamy. Ogarniasz chaosy, żyjesz z przeświadczeniem, że w życiu jest to co przychodzi. Masz specyficzny plan roczny. 23 czerwca zdarza Ci się śledzić obcych ludzi, ale tak żeby czuli, że to oni śledzą Ciebie. 24 kwietnia rokrocznie opracowujesz logistykę wypicia 24 piw w 24 godziny. 13-ego każdego miesiąca niezależnie od warunków pogodowo-przestrzenno-bytowych wymieniasz się obrazem z przyjacielem. Losowo i nie corocznie, ale hucznie obchodzisz Dzień Młodszej Siostry. Na co dzień bywasz widziany jak podrygujesz w samotności w rytm Dream the Impossible Dream z Don Kichote’a de la Manchy. Ważne są dla Ciebie: czas dla siebie, czytanie, Twoje siostry, kawa, ziomki i Chesterfieldy. W przedszkolu zamiast bawić się z innymi dziećmi, patrzyłeś przez okno na dom. Marzyłeś też żeby mieć trzecią rękę - mogłaby się w tylu sytuacjach przydać. W gimnazjum poznałeś Szwarca i Tatara i sprawy przybrały nieco inny obrót. Zdarzało Ci się kogoś nękać – dziś bardzo tego żałujesz. Lubisz odwiedzać swoją siostrę w szkole - nie zawsze w tej, do której akurat uczęszcza,ale to nie ma dla Ciebie znaczenia. Dużo wiesz, a czasem wiesz że nic nie wiesz. Oprócz Paula Newmana i pistacji uwielbiasz Doctora Who, Panammę, Hana Solo, Szufla, Barańczaka i Bruca Willisa. Tak jak oni bierzesz dużo zadań na swoje barki, ale kiedy trzeba – potrafisz rzucić wszystko i pędzić tam gdzie jesteś najbardziej potrzebny. Jakbyś mógł, chciałbyś mieć supermoce, mógłbyś nawet być superzłoczyńcą, ale nie chciałbyś władzy nad światem. Lubisz podróżować. Najbardziej do Krakowa, Tarnowa, Poznania i do Włoch. Niespecjalnie lubisz zwierzęta – wyjątkiem są konie, szczególnie te łyse. Nienawidzisz kanarów (bardziej niż policji) i nazistów (z wyjątkiem tych filmowych). Film w Twoim rozumieniu filmu jest pewną całością, wymaga doskonałej jakości obrazu, a także ciszy i skupienia – z wyjątkiem takich bardzo słabych, na których oficjalnie można rozmawiać. Twierdzisz, że umiesz latać, a Twoi bliscy nie wyprowadzają Cię z błędu. Kiedyś myślałeś - a może nadal myślisz - że najśmieszniejszym żartem jest puszczanie reklamy Fisielu czyli najlepszego kisielu na świecie. W weekendy wolne od prac zdarza Ci się kotwić słupki na Jazdowie. Cieszą Cię ludzkie zajawki. Znasz dobrze odpowiedź na pytanie kto robi najlepsze tosty w mieście. Ty. Znasz też dobrze odpowiedź na pytanie “jakie piwo?”. Jest zawsze ta sama: najtańsze. Potrzebującemu oddałbyś ostatnią kurtkę, a w każdym razie na pewno papierosa, piwo i swój czas (są na to liczne dowody). Z zasady nie używasz interpunkcji w smsach. Nie jesteś przekonany do sportów, a szczególnie do ich uprawiania – ale chętnie pojeździłbyś na nartach robiąc śnieżki. A jeszcze chętniej pooglądałbyś z Eskiem Karaczana. Masz takie dni, których głównym celem jest ich nieplanowanie. W przyszłości, jak rysunkowo przewidział kiedyś Adi Boro, będziesz wyglądał jak Duży Jaca.",
      film: "Stop. Powinno być: ulubione filmy. Raz na jakiś czas tworzysz sobie zestawy ulubionych dziesięciu. Stan na kilka lat temu: Pat Garret i Billy the Kid, Star Warsy (IV, V , VI), Annie Hall, O Lucky Man!, 7 samurajów, Wściekłe Psy, Blues Brothers, no i Pulp Fiction.",
      zespol: "łatwiej mówić o najważniejszych: Gang Albanii, Kult, Red Hot Chili Peppers, Nick Cave & Bad Seeds."
    },
  korpo:
    {
      opis: "Jacek ułożony pracownik korporacji produkującej szampony (wynajmuje mieszkanie w Miasteczku Wilanów, jeździ do pracy nową Skodą Octavią 1.6 108KM, pracuje po 11h przez 5 dni w tygodniu, raz na dwa miesiące spotyka się ze swoim kumplem z pracy Maxem, który czasem pożycza mu psa do zdjęcia na Tinderze. Jego ulubione miejsce na Ziemi – wulkaniczne wyspy Kanaryjskie, gdzie Jacek odkrył swoją ukochaną agroturystykę gdzie już od 6 lat jeździ na jedyny i wyczekiwany urlop podczas Świąt Bożego Narodzenia, gdzie może naładować baterie przed kolejnym rokiem pełnym wyzwań i sukcesów w karierze zawodowej)",
      film: "",
      zespol: ""
    },

  quicksilver:
    {
      opis: "Nazywasz się Jacek, ale większość ludzi (a w szczególności internautów) zna cię jako Jacę Duże Wu. Twój kanał na YouTubie śledzi ponad 100 tysięcy osób, masz już za sobą wizyty w Pytanie na Śniadanie i Dzień Dobry TVN. Jeśli ktoś chcę doświadczyć jak to jest wieść życie ekstremalne – zagląda na twój kanał. Twoje filmy ze skoków na spadochronie, surfingu, free skiingu i base jumpingu robią niesamowite wrażenie. Od zawsze wiedziałeś, że zwykłe życie nie jest dla Ciebie. Normalna praca, mieszkanie w jednym miejscu? Okropność. Ostatnie lata spędziłeś głównie przemierzając swoim kamperem południową Azję. Wchodząc w nową dekadę swojego życia z uśmiechem wspominasz swoje lata dwudzieste. Ile się wydarzyło! Fjordy w Norwegii, ocean w Maroku... Pierwsza umowa sponsorska z Quicksilverem... Ile byś dał by przeżyć to jeszcze raz! Z kolei z lekkim niepokojem myślisz o nadchodzącej dekadzie – trudno ci jest myśleć o starzeniu się... Czy kiedyś będziesz musiał ściąć swoje piękne sięgające ci do ramion loki? Niee... To chyba jeszcze prędko się nie wydarzy. Ale może trzeba zacząć myśleć o jakimś zabezpieczeniu? Co jeśli przytrafiłaby ci się jednak jakaś kontuzja? Ech... Trochę przygnębiają cię takie myśli, ale z drugiej strony twoja intuicja nigdy cię jeszcze nie zawiodła. Bywało gorzej – ludzie klaskali!",
      film: "72 godziny",
      zespol: "The Beach Boys"
    },
  majster:
    {
      opis: "Nazywasz się Jacek, ale większość osób zwraca się do ciebie per „szefie”, albo w każdym razie tak powinno być. \"Nie zawsze jest łatwo, ale zawsze jest do celu” oraz „Jak się coś zrobi - to coś jest” to twoje dwie dewizy, które doprowadziły cię tam, gdzie jesteś, czyli na przedmieścia Birmingham. Pracujesz jako szef ekipy remontowej i chełpisz się tym, że jako jedyny w okolicy nie wymagasz od swoich pracowników kwalifikacji ani znajomości angielskiego. Z tego powodu usługi świadczone przez twoją formalnie niezarejestrowaną  ”firmę” mają konkurencyjne ceny.. Kursujesz między Jukejem a Holandią - bo  na wylotówce z Rotterdamu mieszkają Twoje córki i ich arabscy partnerzy, którzy okazali się wyjątkowo bezproblemowi i do tego fani Roberta Lewandowskiego i pijący. Da się żyć, choć w przykościelnym schronisku dla ubogich, gdzie podnajmujesz na czarno pokój od polskiego księdza-alkoholika bywa zimno i tęskno za Ojczyzną, ale na to pomaga akurat piwsko Okocim Jasne Pełne, które jest często dostępne w sklepach spożywczych na przedmieściach Birmingham ze względu na duże stężenie rodaków. Wykupujesz często dwa dwunastopaki, co daje idealną na sobotni wieczór liczbę 24 browarów.  Da się żyć, chociaż masz dosyć Ukraińców, co się tu nazjeżdżali i w konsekwencji coraz rzadziej  masz do kogo gębę otworzyć na robocie. No, ale jesteś kowalem swojego losu i dobrze, że nie masz kontaktu ze swoją rodziną - to byli dziwni ludzie, którzy mieszkali w dziwnym białym domu na przedmieściach Warszawy. Coś jakby arystokracja, ale ostatecznie dobrze, że się pokłóciliście. Ty nie byłeś skrojony na takie życie. Jak się coś zrobi -  to coś jest.",
      film: "Kilerów Dwóch",
      zespol: "Kobranocka"
    },
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

function showResults(maxKey) {
  $(".inner").hide()
  let result = results[maxKey]
  $("#wynik-opis").text(result["opis"])
  $("#ulub-film").text(`Ulubiony film: ${result["film"]}`)
  $("#ulub-zespol").text(`Ulubiony zespół: ${result["zespol"]}`)
  $(".inner-result").fadeIn(1100)
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
    $(".inner").fadeIn(1100)
  } else {
    var maxKey = Object.keys(score).reduce(function (a, b) {
      return score[a] > score[b] ? a : b
    });
    showResults(maxKey)
  }
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
  $('.inner-result').hide()
  counter = 0
  let content = story[counter]
  fillQuestion(content.question)
  fillAnswers(content)
  $(".inner").fadeIn(2000)
}
