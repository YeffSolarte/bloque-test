export interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
  isInfected: boolean;
  emojiDescription: string;
  fishEmojis: string;
}

export interface Tier {
  example: string;
  range: string;
  representation: string;
}

export interface Legend {
  tiers: Tier[];
}

export interface Leaderboard {
  legend: Legend;
  players: Player[];
}

export interface Marketplace {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
  cost: number;
  type: string;
}