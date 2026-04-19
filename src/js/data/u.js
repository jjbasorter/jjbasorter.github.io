dataSetVersion = "2018-06-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Part",
    key: "series",
    tooltip: "Check this to restrict to parts.",
    checked: true,
    sub: [
      { name: "Phantom Blood", key: "PB" },
      { name: "Battle Tendency", key: "BT" },
      { name: "Stardust Crusaders", key: "SDC" },
      { name: "Diamond is Unbreakable", key: "DIU"},
      { name: "Vento Aureo", key: "VA"},
      { name: "Stone Ocean", key: "SO"},
      { name: "Steel Ball Run", key: "SBR"},
      { name: "JoJolion", key: "JJL"},
      { name: "The JOJOLands", key: "TJL"}
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Jonathan Joestar",
    img: "Jonathan_Infobox_Manga.png",
    opts: {
      series: ["PB"]
    }
  },
  {
    name: "Joseph Joestar",
    img: "Joseph_Joestar_Infobox_Manga.png",
    opts:{
      series: ["BT"]
    }
  },
  {
    name: "Jotaro Kujo",
    img: "Jotaro_SC_Infobox_Manga.png",
    opts:{
      series: ["SDC"]
    }
  },
  {
    name: "Josuke Higashikata",
    img: "Josuke_DU_Infobox_Manga.png",
    opts:{
      series: ["DIU"]
    }
  },
  {
    name: "Giorno Giovanna",
    img: "Giorno_Giovanna_Infobox_Manga.png",
    opts:{
      series: ["VA"]
    }
  },
  {
    name: "Jolyne Cujoh",
    img: "Jolyne_Infobox_Manga.png",
    opts:{
      series: ["SO"]
    }
  },
  {
    name: "Johnny Joestar",
    img: "Johnny_Joestar_Infobox_Manga.png",
    opts:{
      series: ["SBR"]
    }
  },
  {
    name: "Josuke Higashikata (JJL)",
    img: "Josuke_JJL_Infobox_Manga.png",
    opts:{
      series: ["JJL"]
    }
  },
  {
    name: "Jodio Joestar",
    img: "Jodio_Joestar_Infobox_Manga.png",
    opts:{
      series: ["TJL"]
    }
  },
];
