export type BujinkanSchool = {
  id: string;
  name: string;
  kanji: string;
  fullName: string;
  century: string;
  founder: string;
  region: string;
  characteristics: string;
  description: string;
};

export const bujinkanSchools: BujinkanSchool[] = [
  {
    id: "togakure",
    name: "Togakure Ryū",
    kanji: "戸隠流",
    fullName: "Togakure Ryū Ninpō Taijutsu",
    century: "Século XII",
    founder: "Daisuke Nishina Togakure",
    region: "Província de Iga",
    characteristics: "Estratégia, evasão, adaptação e sobrevivência",
    description:
      "Tradição associada ao ninjutsu, com ênfase em deslocamento discreto e resposta estratégica ao ambiente.",
  },
  {
    id: "gyokko",
    name: "Gyokko Ryū",
    kanji: "玉虎流",
    fullName: "Gyokko Ryū Kosshijutsu",
    century: "Período Heian",
    founder: "Yo Gyokko",
    region: "Tradição atribuída à China e ao Japão",
    characteristics: "Kosshijutsu, articulações e movimentos circulares",
    description:
      "Base de diversos princípios corporais do Bujinkan, com foco em eficiência e controle.",
  },
  {
    id: "kuki",
    name: "Kuki Shinden Ryū",
    kanji: "九鬼神伝流",
    fullName: "Kuki Shinden Happō Bikenjutsu",
    century: "Período Muromachi",
    founder: "Izumo Kanja Yoshiteru",
    region: "Tradição ligada à família Kuki",
    characteristics: "Armas tradicionais e happō bikenjutsu",
    description: "Estudo amplo do combate armado com múltiplas ferramentas marciais.",
  },
  {
    id: "koto",
    name: "Kotō Ryū",
    kanji: "虎倒流",
    fullName: "Kotō Ryū Koppōjutsu",
    century: "Período Kamakura",
    founder: "Sakagami Tarō Kunishige",
    region: "Região de Hōki",
    characteristics: "Koppōjutsu, golpes diretos e quebra de estrutura",
    description: "Técnicas objetivas voltadas à desestabilização do oponente.",
  },
  {
    id: "shinden-fudo",
    name: "Shinden Fudō Ryū",
    kanji: "神伝不動流",
    fullName: "Shinden Fudō Ryū Dakentaijutsu",
    century: "Período Muromachi",
    founder: "Izumo Kanja Yoshiteru",
    region: "Tradição japonesa clássica",
    characteristics: "Dakentaijutsu, postura firme e golpes",
    description: "Enfatiza estabilidade, presença e controle corporal.",
  },
  {
    id: "takagi",
    name: "Takagi Yoshin Ryū",
    kanji: "高木揚心流",
    fullName: "Takagi Yoshin Ryū Jūtaijutsu",
    century: "Período Edo",
    founder: "Takagi Oriemon Shigenobu",
    region: "Região de Kishū",
    characteristics: "Jūtaijutsu, projeções e redirecionamento",
    description: "Tradição voltada a quedas e princípios de suavidade no combate.",
  },
  {
    id: "gikan",
    name: "Gikan Ryū",
    kanji: "義鑑流",
    fullName: "Gikan Ryū Koppōjutsu",
    century: "Período Sengoku",
    founder: "Uryū Hangan Gikanbō",
    region: "Província de Yamato",
    characteristics: "Combate em curta distância e koppōjutsu",
    description: "Técnicas diretas para situações de proximidade imediata.",
  },
  {
    id: "gyokushin",
    name: "Gyokushin Ryū",
    kanji: "玉心流",
    fullName: "Gyokushin Ryū Ninpō",
    century: "Período Edo",
    founder: "Sasaki Goemon Teruyoshi",
    region: "Tradição de espionagem e informação",
    characteristics: "Inteligência, informação e movimentação estratégica",
    description: "Tradição ligada à percepção e condução estratégica da ação.",
  },
  {
    id: "kumogakure",
    name: "Kumogakure Ryū",
    kanji: "雲隠流",
    fullName: "Kumogakure Ryū Ninpō",
    century: "Período Heian",
    founder: "Tradição atribuída à região de Iga",
    region: "Província de Iga",
    characteristics: "Ocultação, evasão e uso do ambiente",
    description: "Técnicas de ocultação integrando corpo e contexto.",
  },
];
