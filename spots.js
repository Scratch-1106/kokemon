// spots.js - すべてのスポット情報の一元管理データ
const SPOT_DATA = {
  // --- ジム ---
  "reizouko": {
    type: "gym",
    name: "冷蔵庫",
    desc: "仮。",
    photo: "reizouko.jpg",
    // マップ上の位置（例: パーセンテージや座標。マップの仕様に合わせて調整できます）
    x: 50, // %
    y: 40  // %
  },
  "park": {
    type: "gym",
    name: "各務原公園",
    desc: "仮",
    photo: "park.jpg",
    x: 75,
    y: 60
  },

  // --- ポケストップ ---
  "玄関": {
    type: "pokestop",
    name: "玄関の扉",
    desc: "あいうえおだよ仮",
    photo: "genkan.jpg",
    x: 30,
    y: 70
  }
};
