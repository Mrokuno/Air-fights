// ============================================================
// ミッションデータファイル (Mission Database)
// air_fights.html から分離
// 各ミッションの目的地・タイプ・報酬情報を定義する
// 注意: THREE.Vector3 を使用するため、Three.js 本体の読み込み後、
//       かつこのファイルは air_fights.html の本体スクリプトより前に読み込むこと
// ============================================================
    const missions = [
        { id: 1, title: 'MISSION 1', desc: '前方基地へ移動せよ', learning: 'スロットル操作とピッチ（機首の上下）による高度調整、着陸の基本。', dest: new THREE.Vector3(5000, 0, -8000), rot: Math.PI / 4, type: 'LANDING', baseToken: 800, baseExp: 40 },
        { id: 2, title: 'MISSION 2', desc: '左方基地へ移動せよ', learning: 'ロール（機体の傾き）による旋回と、目標へのアプローチ方法。', dest: new THREE.Vector3(-6000, 0, -5000), rot: -Math.PI / 6, type: 'LANDING', baseToken: 900, baseExp: 45 },
        { id: 3, title: 'MISSION 3', desc: '長距離フライトを実行せよ', learning: 'トリム（姿勢維持）の感覚と、長距離飛行時の燃料・速度管理。', dest: new THREE.Vector3(2000, 0, -14000), rot: Math.PI / 2, type: 'LANDING', baseToken: 1000, baseExp: 50 },
        { id: 4, title: 'MISSION 4', desc: '敵戦闘機を迎撃せよ', learning: '目標のロックオン、機体の機動（ドッグファイト）、および機銃の偏差射撃。', dest: new THREE.Vector3(-4000, 0, -6000), rot: -Math.PI / 4, type: 'COMBAT', baseToken: 1500, baseExp: 80 },
        { id: 5, title: 'MISSION 5', desc: '敵駆逐艦を撃沈せよ', learning: '低空での対地・対艦攻撃、および爆弾投下のタイミング。', dest: new THREE.Vector3(-10000, 0, 10000), rot: Math.PI / 3, type: 'SHIP_STRIKE', baseToken: 1800, baseExp: 95 },
        { id: 6, title: 'MISSION 6', desc: '敵の戦闘機隊を迎撃せよ', learning: '多数の敵機を相手にする乱戦時の立ち回りと、ターゲット切り替え。', dest: new THREE.Vector3(8000, 0, -2000), rot: Math.PI / 2, type: 'FLEET_INTERCEPT', baseToken: 2500, baseExp: 130 },
        { id: 7, title: 'MISSION 7', desc: '敵前線基地を破壊せよ', learning: '対地爆撃の精密な照準と、目標への進入角度の調整。', dest: new THREE.Vector3(-12000, 0, -18000), rot: Math.PI / 4, type: 'BASE_STRIKE', baseToken: 2200, baseExp: 115 },
        { id: 8, title: 'MISSION 8', desc: '敵エース部隊を迎撃せよ', learning: '最高レベルのAIが操る3機編隊とのドッグファイト。エネルギー管理と一撃離脱が鍵。', dest: new THREE.Vector3(5000, 0, 10000), rot: -Math.PI / 3, type: 'ACE_COMBAT', baseToken: 3200, baseExp: 170 },
        { id: 9, title: 'MISSION 9', desc: '防空巡洋艦を撃沈せよ', learning: 'アトランタ級巡洋艦の濃密な防空弾幕を潜り抜けての雷撃・爆撃。', dest: new THREE.Vector3(15000, 0, -15000), rot: 0, type: 'CRUISER_STRIKE', baseToken: 3500, baseExp: 190 },
        { id: 10, title: 'MISSION 10', desc: '実装予定A', learning: '低空での対地・対艦攻撃、および爆弾投下のタイミング。', dest: new THREE.Vector3(-10000, 0, 10000), rot: Math.PI / 3, type: 'SHIP_STRIKE', baseToken: 1800, baseExp: 95 },
        { id: 11, title: 'MISSION 11', desc: '実装予定B', learning: '多数の敵機を相手にする乱戦時の立ち回りと、ターゲット切り替え。', dest: new THREE.Vector3(8000, 0, -2000), rot: Math.PI / 2, type: 'FLEET_INTERCEPT', baseToken: 2500, baseExp: 130 },
        { id: 12, title: 'MISSION 12', desc: '実装予定C', learning: '対地爆撃の精密な照準と、目標への進入角度の調整。', dest: new THREE.Vector3(-12000, 0, -18000), rot: Math.PI / 4, type: 'BASE_STRIKE', baseToken: 2200, baseExp: 115 },
        { id: 13, title: 'MISSION 13', desc: '実装予定D', learning: '最高レベルのAIが操る3機編隊とのドッグファイト。エネルギー管理と一撃離脱が鍵。', dest: new THREE.Vector3(5000, 0, 10000), rot: -Math.PI / 3, type: 'ACE_COMBAT', baseToken: 3200, baseExp: 170 },
        { id: 14, title: 'MISSION 14', desc: '実装予定E', learning: 'アトランタ級巡洋艦の濃密な防空弾幕を潜り抜けての雷撃・爆撃。', dest: new THREE.Vector3(15000, 0, -15000), rot: 0, type: 'CRUISER_STRIKE', baseToken: 3500, baseExp: 190 }
    ];
