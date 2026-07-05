// ============================================================
// 飛行機モデル及びデータファイル (Plane Database)
// air_fights.html から分離
// 各機体のスペック・研究ツリー用情報を定義する
// このファイルは air_fights.html から <script src="data/planes-data.js"> で読み込まれる
// ============================================================
    const PLANE_DB = {
        ZERO: {
            label: 'A6M2 ZERO', brText: 'ランクII バトルレート 3.3',
            speedText: '533 km/h', climbText: '15.7 m/s', turnText: '11.0 s',
            wpnText: '7.7mm 機銃 x2 (500発/銃)<br>20mm 機関砲 x2 (60発/銃)<br>60kg 爆弾 x2',
            stats: {
                maxSpeed: 213, turnSpeed: 2.6, thrust: 32.0,
                wpn1Name: '7.7mm', wpn1MaxAmmo: 1000, wpn1Type: '7mm', wpn1FireRate: 0.08, wpn1Spread: 0.005, wpn1Offsets: [-0.4, 0.4], wpn1Pos: [0, 0.5, -5.5], wpn1BulletGeo: 'g7mm', wpn1BaseDamage: 1, wpn1MuzzleVel: 1000,
                wpn2Name: '20mm', wpn2MaxAmmo: 120, wpn2Type: '20mm', wpn2FireRate: 0.25, wpn2Spread: 0.015, wpn2Offsets: [-2.2, 2.2], wpn2Pos: [0, -0.2, -4.0], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4, wpn2MuzzleVel: 650,
                bombName: '60kg', bombMaxAmmo: 2, bombDamage: 120, bombRadius: 25,
                gearAnim: 'INWARD', modelScale: 1.0,
                // --- 空力パラメータ (零戦二一型 実機値ベース) ---
                wingLoading: 107.4, aspectRatio: 6.4, clMax: 1.5, clMaxFlap: 2.05, stallAoA: 16, oswaldEff: 0.87, criticalMach: 650,
                // --- 技術ツリー情報 ---
                nation: 'JAPAN', tier: 1, prereq: [], researchCost: 0, purchaseCost: 0
            }
        },
        WILDCAT: {
            label: 'F4F-4 WILDCAT', brText: 'ランクII バトルレート 3.0',
            speedText: '512 km/h', climbText: '9.9 m/s', turnText: '17.5 s',
            wpnText: '12.7mm 機銃 x6 (240発/銃)<br>100lb 爆弾 x2',
            stats: {
                maxSpeed: 205, turnSpeed: 1.85, thrust: 42.0,
                wpn1Name: '12.7mm', wpn1MaxAmmo: 1440, wpn1Type: '12.7mm', wpn1FireRate: 0.12, wpn1Spread: 0.008, wpn1Offsets: [-2.5, -2.0, -1.5, 1.5, 2.0, 2.5], wpn1Pos: [0, -0.2, -1.0], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 2, wpn1MuzzleVel: 900,
                wpn2Name: '---', wpn2MaxAmmo: 0,
                bombName: '100lb', bombMaxAmmo: 2, bombDamage: 100, bombRadius: 20,
                gearAnim: 'X', modelScale: 1.11,
                // --- 空力パラメータ (F4F-4 Wildcat 実機値ベース、小翼・高翼面荷重で旋回性に劣る) ---
                wingLoading: 151.0, aspectRatio: 5.85, clMax: 1.4, clMaxFlap: 1.9, stallAoA: 15, oswaldEff: 0.83, criticalMach: 660,
                nation: 'USA', tier: 1, prereq: [], researchCost: 0, purchaseCost: 0
            }
        },
        P51B: {
            label: 'P-51B MUSTANG', brText: 'ランクIII バトルレート 4.0',
            speedText: '708 km/h', climbText: '16.0 m/s', turnText: '20.0 s',
            wpnText: '12.7mm 機銃 x4<br>500lb 爆弾 x2',
            stats: {
                maxSpeed: 283, turnSpeed: 1.62, thrust: 50.0,
                wpn1Name: '12.7mm', wpn1MaxAmmo: 1260, wpn1Type: '12.7mm', wpn1FireRate: 0.1, wpn1Spread: 0.006, wpn1Offsets: [-2.5, -2.0, 2.0, 2.5], wpn1Pos: [0, -0.2, -1.0], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 2.2, wpn1MuzzleVel: 890,
                wpn2Name: '---', wpn2MaxAmmo: 0,
                bombName: '500lb', bombMaxAmmo: 2, bombDamage: 250, bombRadius: 40,
                gearAnim: 'INWARD', modelScale: 1.82,
                // --- 空力パラメータ (P-51B Mustang 実機値ベース、層流翼で高速域抗力に優れる) ---
                wingLoading: 172.0, aspectRatio: 5.83, clMax: 1.35, clMaxFlap: 1.85, stallAoA: 14, oswaldEff: 0.85, criticalMach: 780,
                nation: 'USA', tier: 2, prereq: ['WILDCAT'], researchCost: 1200, purchaseCost: 25000
            }
        },
        SPITFIRE: {
            label: 'SPITFIRE Mk.XIV', brText: 'ランクIV バトルレート 5.7',
            speedText: '721 km/h', climbText: '23.3 m/s', turnText: '14.5 s',
            wpnText: '20mm 機関砲 x2<br>12.7mm 機銃 x2<br>500lb 爆弾 x1',
            stats: {
                maxSpeed: 288, turnSpeed: 1.87, thrust: 48.0,
                wpn1Name: '12.7mm', wpn1MaxAmmo: 500, wpn1Type: '12.7mm', wpn1FireRate: 0.12, wpn1Spread: 0.007, wpn1Offsets: [-1.8, 1.8], wpn1Pos: [0, -0.1, -1.0], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 2, wpn1MuzzleVel: 890,
                wpn2Name: '20mm', wpn2MaxAmmo: 240, wpn2Type: '20mm', wpn2FireRate: 0.15, wpn2Spread: 0.012, wpn2Offsets: [-2.4, 2.4], wpn2Pos: [0, -0.1, -1.5], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4.5, wpn2MuzzleVel: 840,
                bombName: '500lb', bombMaxAmmo: 1, bombDamage: 250, bombRadius: 40,
                gearAnim: 'OUTWARD', modelScale: 1.77,
                // --- 空力パラメータ (Spitfire Mk.XIV 実機値ベース、楕円翼で誘導抗力が非常に小さく旋回性に優れる) ---
                wingLoading: 149.0, aspectRatio: 5.61, clMax: 1.55, clMaxFlap: 2.1, stallAoA: 15, oswaldEff: 0.92, criticalMach: 720,
                nation: 'BRITAIN', tier: 1, prereq: [], researchCost: 0, purchaseCost: 0
            }
        },
        BF109G: {
            label: 'Bf 109 G-6', brText: 'ランクIV バトルレート 4.7',
            speedText: '620 km/h', climbText: '17.0 m/s', turnText: '18.5 s',
            wpnText: '20mm 機関砲 x1 (モーターカノン)<br>13mm 機銃 x2<br>250kg 爆弾 x1',
            stats: {
                maxSpeed: 248, turnSpeed: 1.47, thrust: 50.0,
                wpn1Name: '13mm', wpn1MaxAmmo: 600, wpn1Type: '13mm', wpn1FireRate: 0.08, wpn1Spread: 0.008, wpn1Offsets: [-0.3, 0.3], wpn1Pos: [0, 0.5, -4.5], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 1.8, wpn1MuzzleVel: 710,
                wpn2Name: '20mm', wpn2MaxAmmo: 200, wpn2Type: '20mm', wpn2FireRate: 0.14, wpn2Spread: 0.01, wpn2Offsets: [0], wpn2Pos: [0, 0, -6.0], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 5.0, wpn2MuzzleVel: 790,
                bombName: '250kg', bombMaxAmmo: 1, bombDamage: 180, bombRadius: 35,
                gearAnim: 'OUTWARD', modelScale: 1.93,
                // --- 空力パラメータ (Bf 109 G-6 実機値ベース、小翼で高翼面荷重だが低ドラッグ) ---
                wingLoading: 190.0, aspectRatio: 6.0, clMax: 1.45, clMaxFlap: 1.95, stallAoA: 14, oswaldEff: 0.82, criticalMach: 700,
                nation: 'GERMANY', tier: 1, prereq: [], researchCost: 0, purchaseCost: 0
            }
        },
        KI61: {
            label: 'Ki-61-I 丁 Hien', brText: 'ランクIII バトルレート 4.3',
            speedText: '580 km/h', climbText: '15.0 m/s', turnText: '16.0 s',
            wpnText: '20mm 機関砲 x2<br>12.7mm 機銃 x2<br>250kg 爆弾 x2',
            stats: {
                maxSpeed: 232, turnSpeed: 1.80, thrust: 42.0,
                wpn1Name: '12.7mm', wpn1MaxAmmo: 500, wpn1Type: '12.7mm', wpn1FireRate: 0.1, wpn1Spread: 0.008, wpn1Offsets: [-0.3, 0.3], wpn1Pos: [0, 0.5, -4.5], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 1.8, wpn1MuzzleVel: 780,
                wpn2Name: '20mm', wpn2MaxAmmo: 240, wpn2Type: '20mm', wpn2FireRate: 0.15, wpn2Spread: 0.012, wpn2Offsets: [-2.0, 2.0], wpn2Pos: [0, -0.2, -1.0], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4.2, wpn2MuzzleVel: 720,
                bombName: '250kg', bombMaxAmmo: 2, bombDamage: 180, bombRadius: 35,
                gearAnim: 'INWARD', modelScale: 1.77,
                // --- 空力パラメータ (三式戦闘機 飛燕 実機値ベース、液冷エンジンで低ドラッグ) ---
                wingLoading: 155.0, aspectRatio: 5.9, clMax: 1.5, clMaxFlap: 2.0, stallAoA: 15, oswaldEff: 0.85, criticalMach: 680,
                nation: 'JAPAN', tier: 2, prereq: ['ZERO'], researchCost: 800, purchaseCost: 15000
            }
        },
        IL2: {
            label: 'IL-2 Sturmovik', brText: 'ランクIII バトルレート 3.3',
            speedText: '414 km/h', climbText: '10.4 m/s', turnText: '22.0 s',
            wpnText: '23mm 機関砲 x2<br>7.62mm 機銃 x2<br>100kg 爆弾 x2',
            stats: {
                maxSpeed: 165, turnSpeed: 1.36, thrust: 48.0,
                wpn1Name: '7.62mm', wpn1MaxAmmo: 1500, wpn1Type: '7mm', wpn1FireRate: 0.08, wpn1Spread: 0.006, wpn1Offsets: [-2.8, 2.8], wpn1Pos: [0, -0.2, -1.0], wpn1BulletGeo: 'g7mm', wpn1BaseDamage: 1.0, wpn1MuzzleVel: 800,
                wpn2Name: '23mm', wpn2MaxAmmo: 300, wpn2Type: '23mm', wpn2FireRate: 0.2, wpn2Spread: 0.015, wpn2Offsets: [-2.2, 2.2], wpn2Pos: [0, -0.2, -1.2], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 5.5, wpn2MuzzleVel: 900,
                bombName: '100kg', bombMaxAmmo: 2, bombDamage: 120, bombRadius: 25,
                gearAnim: 'X', modelScale: 1.88,
                // --- 空力パラメータ (Il-2 Sturmovik 実機値ベース、重装甲で高翼面荷重、旋回性能に劣る) ---
                wingLoading: 175.0, aspectRatio: 6.5, clMax: 1.4, clMaxFlap: 1.9, stallAoA: 14, oswaldEff: 0.8, criticalMach: 600,
                nation: 'USSR', tier: 1, prereq: [], researchCost: 0, purchaseCost: 0
            }
        },
        JU87: {
            label: 'Ju 87 D-3', brText: 'ランクII バトルレート 2.3',
            speedText: '400 km/h', climbText: '8.0 m/s', turnText: '19.0 s',
            wpnText: '7.92mm 機銃 x2<br>500kg 爆弾 x1',
            stats: {
                maxSpeed: 160, turnSpeed: 1.50, thrust: 44.0,
                wpn1Name: '7.92mm', wpn1MaxAmmo: 2000, wpn1Type: '7mm', wpn1FireRate: 0.08, wpn1Spread: 0.006, wpn1Offsets: [-2.5, 2.5], wpn1Pos: [0, -0.5, -1.0], wpn1BulletGeo: 'g7mm', wpn1BaseDamage: 1.2, wpn1MuzzleVel: 750,
                wpn2Name: '---', wpn2MaxAmmo: 0,
                bombName: '500kg', bombMaxAmmo: 1, bombDamage: 250, bombRadius: 40,
                gearAnim: 'FIXED', modelScale: 2.21,
                // --- 空力パラメータ (Ju 87 D-3 Stuka 実機値ベース、急降下爆撃特化・大型固定脚で高抗力) ---
                wingLoading: 158.0, aspectRatio: 8.0, clMax: 1.6, clMaxFlap: 2.2, stallAoA: 16, oswaldEff: 0.83, criticalMach: 550,
                nation: 'GERMANY', tier: 2, prereq: ['BF109G'], researchCost: 700, purchaseCost: 14000
            }
        },
        BF109K: {
            label: 'Bf 109 K-4', brText: 'ランクIV バトルレート 5.7',
            speedText: '715 km/h', climbText: '22.0 m/s', turnText: '19.5 s',
            wpnText: '30mm 機関砲 x1 (モーターカノン)<br>13mm 機銃 x2<br>500kg 爆弾 x1',
            stats: {
                maxSpeed: 286, turnSpeed: 1.36, thrust: 55.0,
                wpn1Name: '13mm', wpn1MaxAmmo: 600, wpn1Type: '13mm', wpn1FireRate: 0.08, wpn1Spread: 0.008, wpn1Offsets: [-0.3, 0.3], wpn1Pos: [0, 0.5, -4.5], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 1.8, wpn1MuzzleVel: 710,
                wpn2Name: '30mm', wpn2MaxAmmo: 65, wpn2Type: '30mm', wpn2FireRate: 0.18, wpn2Spread: 0.015, wpn2Offsets: [0], wpn2Pos: [0, 0, -6.0], wpn2BulletGeo: 'g30mm', wpn2BaseDamage: 8.0, wpn2MuzzleVel: 505,
                bombName: '500kg', bombMaxAmmo: 1, bombDamage: 250, bombRadius: 40,
                gearAnim: 'OUTWARD', modelScale: 1.93,
                // --- 空力パラメータ (Bf 109 K-4 実機値ベース、大戦後期型で高速性能に特化) ---
                wingLoading: 205.0, aspectRatio: 6.0, clMax: 1.45, clMaxFlap: 1.95, stallAoA: 14, oswaldEff: 0.82, criticalMach: 720,
                nation: 'GERMANY', tier: 2, prereq: ['BF109G'], researchCost: 1300, purchaseCost: 28000
            }
        },
        B25: {
            label: 'B-25J Mitchell', brText: 'ランクIII バトルレート 4.3',
            speedText: '438 km/h', climbText: '5.0 m/s', turnText: '24.0 s',
            wpnText: '12.7mm 機銃 x6 (機首固定)<br>12.7mm 機銃 x2 (上部銃座)<br>500lb 爆弾 x4',
            stats: {
                maxSpeed: 175, turnSpeed: 0.79, thrust: 52.0,
                wpn1Name: '12.7mm', wpn1MaxAmmo: 2400, wpn1Type: '12.7mm', wpn1FireRate: 0.1, wpn1Spread: 0.01, wpn1Offsets: [-0.6, -0.4, -0.2, 0.2, 0.4, 0.6], wpn1Pos: [0, 0, -6.5], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 2, wpn1MuzzleVel: 890,
                wpn2Name: 'Turret', wpn2MaxAmmo: 800, wpn2Type: '12.7mm', wpn2FireRate: 0.15, wpn2Spread: 0.02, wpn2Offsets: [-0.2, 0.2], wpn2Pos: [0, 1.5, -2.0], wpn2BulletGeo: 'g12mm', wpn2BaseDamage: 2, wpn2MuzzleVel: 890,
                bombName: '500lb', bombMaxAmmo: 4, bombDamage: 250, bombRadius: 40,
                gearAnim: 'BACKWARD', modelScale: 2.1,
                // --- 空力パラメータ (B-25J Mitchell 実機値ベース、双発中型爆撃機) ---
                wingLoading: 195.0, aspectRatio: 7.6, clMax: 1.5, clMaxFlap: 2.0, stallAoA: 15, oswaldEff: 0.8, criticalMach: 580,
                nation: 'USA', tier: 2, prereq: ['WILDCAT'], researchCost: 1000, purchaseCost: 22000
            }
        },
        FW200: {
            label: 'Fw 200 C-3 Condor', brText: 'ランクII バトルレート 2.7',
            speedText: '360 km/h', climbText: '3.5 m/s', turnText: '28.0 s',
            wpnText: '20mm 機関砲 x1 (前下方)<br>7.92mm 機銃 x4<br>250kg 爆弾 x6',
            stats: {
                maxSpeed: 144, turnSpeed: 0.71, thrust: 44.0,
                wpn1Name: '7.92mm', wpn1MaxAmmo: 3000, wpn1Type: '7mm', wpn1FireRate: 0.1, wpn1Spread: 0.015, wpn1Offsets: [-0.5, 0.5], wpn1Pos: [0, 1.5, -5.0], wpn1BulletGeo: 'g7mm', wpn1BaseDamage: 1.2, wpn1MuzzleVel: 750,
                wpn2Name: '20mm', wpn2MaxAmmo: 300, wpn2Type: '20mm', wpn2FireRate: 0.2, wpn2Spread: 0.01, wpn2Offsets: [0], wpn2Pos: [0, -1.5, -4.5], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4.5, wpn2MuzzleVel: 700,
                bombName: '250kg', bombMaxAmmo: 6, bombDamage: 180, bombRadius: 35,
                gearAnim: 'FORWARD', modelScale: 3.2,
                // --- 空力パラメータ (Fw 200 C-3 Condor 実機値ベース、4発長距離機で高アスペクト比・低機動性) ---
                wingLoading: 165.0, aspectRatio: 9.2, clMax: 1.55, clMaxFlap: 2.05, stallAoA: 16, oswaldEff: 0.78, criticalMach: 560,
                nation: 'GERMANY', tier: 3, prereq: ['JU87'], researchCost: 1500, purchaseCost: 32000
            }
        },
        HE177: {
            label: 'He 177 A-5 Greif', brText: 'ランクIV バトルレート 5.3',
            speedText: '488 km/h', climbText: '4.5 m/s', turnText: '27.0 s',
            wpnText: '20mm 機関砲 x2<br>13mm 機銃 x3<br>500kg 爆弾 x6',
            stats: {
                maxSpeed: 195, turnSpeed: 0.64, thrust: 54.0,
                wpn1Name: '13mm', wpn1MaxAmmo: 2000, wpn1Type: '13mm', wpn1FireRate: 0.12, wpn1Spread: 0.015, wpn1Offsets: [-0.3, 0, 0.3], wpn1Pos: [0, 1.5, -6.0], wpn1BulletGeo: 'g12mm', wpn1BaseDamage: 1.8, wpn1MuzzleVel: 710,
                wpn2Name: '20mm', wpn2MaxAmmo: 600, wpn2Type: '20mm', wpn2FireRate: 0.2, wpn2Spread: 0.012, wpn2Offsets: [-0.2, 0.2], wpn2Pos: [0, -1.0, -7.0], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4.5, wpn2MuzzleVel: 700,
                bombName: '500kg', bombMaxAmmo: 6, bombDamage: 250, bombRadius: 40,
                gearAnim: 'INWARD', modelScale: 3.0,
                // --- 空力パラメータ (He 177 A-5 Greif 実機値ベース、重爆撃機で機動性は低い) ---
                wingLoading: 210.0, aspectRatio: 7.3, clMax: 1.5, clMaxFlap: 2.0, stallAoA: 15, oswaldEff: 0.77, criticalMach: 570,
                nation: 'GERMANY', tier: 3, prereq: ['FW200'], researchCost: 2000, purchaseCost: 45000
            }
        },
        G4M: {
            label: '一式陸攻一一型 (G4M1)', brText: 'ランクII バトルレート 2.3',
            speedText: '428 km/h', climbText: '5.5 m/s', turnText: '21.0 s',
            wpnText: '20mm 機関砲 x1 (後部)<br>7.7mm 機銃 x4<br>800kg 爆弾 x1',
            stats: {
                maxSpeed: 171, turnSpeed: 1.20, thrust: 40.0,
                wpn1Name: '7.7mm', wpn1MaxAmmo: 2000, wpn1Type: '7mm', wpn1FireRate: 0.1, wpn1Spread: 0.015, wpn1Offsets: [-0.4, 0.4], wpn1Pos: [0, 0, -5.5], wpn1BulletGeo: 'g7mm', wpn1BaseDamage: 1, wpn1MuzzleVel: 750,
                wpn2Name: 'Tail 20mm', wpn2MaxAmmo: 240, wpn2Type: '20mm', wpn2FireRate: 0.2, wpn2Spread: 0.015, wpn2Offsets: [0], wpn2Pos: [0, 0, 6.0], wpn2BulletGeo: 'g20mm', wpn2BaseDamage: 4.0, wpn2MuzzleVel: 600,
                bombName: '800kg', bombMaxAmmo: 1, bombDamage: 400, bombRadius: 60,
                gearAnim: 'UPWARD', modelScale: 2.5,
                // --- 空力パラメータ (一式陸攻 実機値ベース、軽量構造で低翼面荷重だが防弾に劣る) ---
                wingLoading: 128.0, aspectRatio: 8.6, clMax: 1.55, clMaxFlap: 2.05, stallAoA: 16, oswaldEff: 0.82, criticalMach: 590,
                nation: 'JAPAN', tier: 2, prereq: ['ZERO'], researchCost: 900, purchaseCost: 18000
            }
        }
    };

// isPrereqMet等で使う軽量ルックアップ(PLANE_DB.stats.prereqへの参照をキー名だけで引けるようにする)
const PLANE_DB_PREREQ_LOOKUP = {};
Object.keys(PLANE_DB).forEach(key => { PLANE_DB_PREREQ_LOOKUP[key] = { prereq: PLANE_DB[key].stats.prereq || [] }; });

