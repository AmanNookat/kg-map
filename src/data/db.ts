export interface Region {
  name: string;
  districts: District[];
}

export interface District {
  title: string;
  population: number;
}

export const database: Region[] = [
  {
    name: "Чуйская область",
    districts: [
      {
        title: "Панфилов",
        population: 50452,
      },
      {
        title: "Жайыл",
        population: 117519,
      },
      {
        title: "Московский",
        population: 104107,
      },
      {
        title: "Сокулук",
        population: 266046,
      },
      {
        title: "Аламудун",
        population: 200972,
      },
      {
        title: "Ысык-Ата",
        population: 160298,
      },
      {
        title: "Чуй",
        population: 60376,
      },
      {
        title: "Кемин",
        population: 51905,
      },
    ],
  },
  {
    name: "Таласская область",
    districts: [
      {
        title: "Кара-Буура",
        population: 72368,
      },
      {
        title: "Бакай-Ата",
        population: 55322,
      },
      {
        title: "Манас",
        population: 36225,
      },
      {
        title: "Талас",
        population: 70589,
      },
    ],
  },
  {
    name: "Иссык-Кульская область",
    districts: [
      {
        title: "Иссык-куль",
        population: 99494,
      },
      {
        title: "Тюп",
        population: 72323,
      },
      {
        title: "Тон",
        population: 60552,
      },
      {
        title: "Ак-Суу",
        population: 75132,
      },
      {
        title: "Жети-Огуз",
        population: 101147,
      },
    ],
  },
  {
    name: "Нарынская область",
    districts: [
      {
        title: "Кочкор",
        population: 70184,
      },
      {
        title: "Жумгал",
        population: 49237,
      },
      {
        title: "Нарын",
        population: 53682,
      },
      {
        title: "Ак-Таала",
        population: 34694,
      },
      {
        title: "Ат-Башы",
        population: 61907,
      },
    ],
  },
  {
    name: "Джалал-Абадская область",
    districts: [
      {
        title: "Чаткал",
        population: 30799,
      },
      {
        title: "Токтогул",
        population: 107707,
      },
      {
        title: "Ала-Бука",
        population: 118291,
      },
      {
        title: "Аксы",
        population: 142559,
      },
      {
        title: "Ноокен",
        population: 155099,
      },
      {
        title: "Базар-Коргон",
        population: 197350,
      },
      {
        title: "Сузак",
        population: 332327,
      },
      {
        title: "Тогуз-Торо",
        population: 28232,
      },
    ],
  },
  {
    name: "Ошская область",
    districts: [
      {
        title: "Узген",
        population: 296071,
      },
      {
        title: "Кара-Кулжа",
        population: 101560,
      },
      {
        title: "Кара-Суу",
        population: 488247,
      },
      {
        title: "Араван",
        population: 147421,
      },
      {
        title: "Ноокат",
        population: 325926,
      },
      {
        title: "Алай",
        population: 93462,
      },
      {
        title: "Чон-Алай",
        population: 37367,
      },
    ],
  },
  {
    name: "Баткенская область",
    districts: [
      {
        title: "Баткен",
        population: 102094,
      },
      {
        title: "Кадамжай",
        population: 209899,
      },
      {
        title: "Лейлек",
        population: 153678,
      },
    ],
  },
];
