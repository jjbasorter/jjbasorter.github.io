dataSetVersion = "2026-04-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    imgUrls: ["Jonathan_Infobox_Manga.png"],
    opts: {
      series: ["PB"]
    }
  },
  {
    name: "Joseph Joestar",
    imgUrls: ["Joseph_Joestar_Infobox_Manga.png"],
    opts:{
      series: ["BT"]
    }
  },
  {
    name: "Jotaro Kujo",
    imgUrls: ["Jotaro_SC_Infobox_Manga.png"],
    opts:{
      series: ["SDC"]
    }
  },
  {
    name: "Josuke Higashikata",
    imgUrls: ["Josuke_DU_Infobox_Manga.png"],
    opts:{
      series: ["DIU"]
    }
  },
  {
    name: "Giorno Giovanna",
    imgUrls: ["Giorno_Giovanna_Infobox_Manga.png"],
    opts:{
      series: ["VA"]
    }
  },
  {
    name: "Jolyne Cujoh",
    imgUrls: ["Jolyne_Infobox_Manga.png"],
    opts:{
      series: ["SO"]
    }
  },
  {
    name: "Johnny Joestar",
    imgUrls: ["Johnny_Joestar_Infobox_Manga.png"],
    opts:{
      series: ["SBR"]
    }
  },
  {
    name: "Josuke Higashikata (JJL)",
    imgUrls: ["Josuke_JJL_Infobox_Manga.png"],
    opts:{
      series: ["JJL"]
    }
  },
  {
    name: "Jodio Joestar",
    imgUrls: ["Jodio_Joestar_Infobox_Manga.png"],
    opts:{
      series: ["TJL"]
    }
  },
];
