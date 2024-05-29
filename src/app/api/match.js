// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const times = [
  {
    id: 1,
    name: 'PSG',
    escudo: 'escudos/logo-psg-256.png'
  },
  {
    id: 2,
    name: 'Manchester United',
    escudo: 'escudos/logo-manchester-united-256.png'
  },
  {
    id: 3,
    name: 'Inter de Milão',
    escudo: 'escudos/logo-internazionale-256.png'
  },
  {
    id: 4,
    name: 'Chelsea',
    escudo: 'escudos/logo-chelsea-256.png'
  },
  {
    id: 5,
    name: 'Manchester City',
    escudo: 'escudos/logo-manchester-city-256.png'
  },
  {
    id: 6,
    name: 'Liverpool',
    escudo: 'escudos/logo-liverpool-256.png'
  },
  {
    id: 7,
    name: 'Atlético de Madrid',
    escudo: 'escudos/logo-atletico-madrid-256.png'
  },
  {
    id: 8,
    name: 'Real Madrid',
    escudo: 'escudos/logo-real-madrid-256.png'
  },
  {
    id: 9,
    name: 'Barcelona',
    escudo: 'escudos/logo-barcelona-256.png'
  },
  {
    id: 10,
    name: 'Bayern de Munique',
    escudo: 'escudos/logo-bayern-munique-256.png'
  },
  {
    id: 11,
    name: 'Tottenham',
    escudo: 'escudos/logo-tottenham-256.png'
  },
  {
    id: 12,
    name: 'Borussia Dortmund',
    escudo: 'escudos/logo-borussia-dortmund-256.png'
  },
  {
    id: 13,
    name: 'Juventus',
    escudo: 'escudos/logo-juventus-256.png'
  },
  {
    id: 14,
    name: 'RB Leipzig',
    escudo: 'escudos/logo-rb-leipzig-256.png'
  },
  {
    id: 15,
    name: 'Bayer Leverkusen',
    escudo: 'escudos/logo-bayer-leverkusen-256.png'
  },
  {
    id: 16,
    name: 'Roma',
    escudo: 'escudos/logo-roma-256.png'
  },
  {
    id: 17,
    name: 'Milan',
    escudo: 'escudos/logo-milan-256.png'
  },
  {
    id: 18,
    name: 'Sevilla',
    escudo: 'escudos/logo-sevilla-256.png'
  },
  {
    id: 19,
    name: 'Arsenal',
    escudo: 'escudos/logo-arsenal-256.png'
  },
  {
    id: 20,
    name: 'Villarreal',
    escudo: 'escudos/logo-villarreal-256.png'
  },
]

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function handler(req, res) {

  let home = getRandomIntInclusive(0, times.length - 1);
  let away = getRandomIntInclusive(0, times.length - 1);
  while (home === away) {

    away = getRandomIntInclusive(0, times.length - 1);

  }

  res.status(200).json({ home: times[home], away: times[away], date: new Date().toLocaleString('pt-BR', { timeZone: "America/Sao_Paulo" }) })
}
