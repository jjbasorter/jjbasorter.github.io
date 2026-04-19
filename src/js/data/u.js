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
    img: "b/bd/latest/20221006234855/Jonathan_Infobox_Manga.png",
    opts: {
      series: ["PB"]
    }
  },
  {
    name: "Joseph Joestar",
    img: "e/e2/latest/20221006235618/Joseph_Joestar_Infobox_Manga.png",
    opts:{
      series: ["BT"]
    }
  },
  {
    name: "Jotaro Kujo",
    img: "6/69/latest/20201130220440/Jotaro_SC_Infobox_Manga.png",
    opts:{
      series: ["SDC"]
    }
  },
  {
    name: "Josuke Higashikata",
    img: "a/a1/latest/20221007024100/Josuke_DU_Infobox_Manga.png",
    opts:{
      series: ["DIU"]
    }
  },
  {
    name: "Giorno Giovanna",
    img: "2/21/latest/20210313222135/Giorno_Giovanna_Infobox_Manga.png",
    opts:{
      series: ["VA"]
    }
  },
  {
    name: "Jolyne Cujoh",
    img: "2/20/latest/20200923041552/Jolyne_Infobox_Manga.png",
    opts:{
      series: ["SO"]
    }
  },
  {
    name: "Johnny Joestar",
    img: "b/b7/latest/20230129074253/Johnny_Joestar_Infobox_Manga.png",
    opts:{
      series: ["SBR"]
    }
  },
  {
    name: "Josuke Higashikata (JJL)",
    img: "3/3a/latest/20210617175837/Josuke_JJL_Infobox_Manga.png",
    opts:{
      series: ["JJL"]
    }
  },
  {
    name: "Jodio Joestar",
    img: "8/86/latest/20240714175735/Jodio_Joestar_Infobox_Manga.png",
    opts:{
      series: ["TJL"]
    }
  },
];
