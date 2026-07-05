// ============================================================
// セーブデータ管理ファイル (Save System)
// プレイヤーの通貨・研究ポイント・研究済み機体を localStorage に保存/読込する
// 注意: PLANE_DB (data/planes-data.js) に依存するため、
//       このファイルは planes-data.js の後、本体スクリプトより前に読み込むこと
// ============================================================
    // === プレイヤーデータ(通貨・研究ポイント・研究済み機体)の永続管理 ===
    // localStorageに保存し、ブラウザを閉じても進行状況が残るようにする。
    const SAVE_KEY = 'airfights_player_data_v1';
    const DEFAULT_UNLOCKED = ['ZERO', 'WILDCAT', 'BF109G', 'SPITFIRE', 'IL2']; // 各国Tier1機体は最初から解禁
    function loadPlayerData() {
        try {
            const raw = localStorage.getItem(SAVE_KEY);
            if (raw) {
                const data = JSON.parse(raw);
                if (!Array.isArray(data.unlockedPlanes)) data.unlockedPlanes = DEFAULT_UNLOCKED.slice();
                if (typeof data.tokens !== 'number') data.tokens = 20000;
                if (typeof data.exp !== 'number') data.exp = 0;
                if (typeof data.debugMode !== 'boolean') data.debugMode = false;
                return data;
            }
        } catch (e) { /* 破損データは無視して初期化 */ }
        return { tokens: 20000, exp: 0, unlockedPlanes: DEFAULT_UNLOCKED.slice(), debugMode: false };
    }
    let playerData = loadPlayerData();
    function savePlayerData() {
        try { localStorage.setItem(SAVE_KEY, JSON.stringify(playerData)); } catch (e) { /* ストレージ利用不可時は無視 */ }
    }
    function isPlaneUnlocked(planeKey) {
        return playerData.debugMode || playerData.unlockedPlanes.includes(planeKey);
    }
    function isPrereqMet(planeKey) {
        if (playerData.debugMode) return true;
        const db = PLANE_DB_PREREQ_LOOKUP[planeKey];
        if (!db || !db.prereq || db.prereq.length === 0) return true;
        return db.prereq.every(p => playerData.unlockedPlanes.includes(p));
    }
    // researchPlane: 研究(トークン+EXP消費)を実行し、成功したらtrueを返す
    function researchPlane(planeKey) {
        if (isPlaneUnlocked(planeKey)) return true;
        const db = PLANE_DB[planeKey];
        if (!db) return false;
        const cost = db.stats;
        if (!isPrereqMet(planeKey)) return false;
        if (playerData.exp < cost.researchCost || playerData.tokens < cost.purchaseCost) return false;
        playerData.exp -= cost.researchCost;
        playerData.tokens -= cost.purchaseCost;
        playerData.unlockedPlanes.push(planeKey);
        savePlayerData();
        return true;
    }
    // ミッション成績に応じたトークン/EXP付与
    function grantMissionRewards(baseToken, baseExp, resultInfo) {
        // resultInfo: { success: bool, kills: number, survived: bool }
        let tokenMul = 1.0, expMul = 1.0;
        if (playerData.debugMode) { tokenMul = 3.0; expMul = 3.0; } // デバッグ時は研究を進めやすくする
        if (resultInfo.success) { tokenMul += 0.5; expMul += 0.5; }
        if (resultInfo.survived) { tokenMul += 0.2; expMul += 0.2; }
        tokenMul += (resultInfo.kills || 0) * 0.15;
        expMul += (resultInfo.kills || 0) * 0.2;
        const tokenGain = Math.round(baseToken * tokenMul);
        const expGain = Math.round(baseExp * expMul);
        playerData.tokens += tokenGain;
        playerData.exp += expGain;
        savePlayerData();
        return { tokenGain, expGain };
    }
