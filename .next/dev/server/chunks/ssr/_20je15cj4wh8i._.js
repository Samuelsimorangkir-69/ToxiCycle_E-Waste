(()=>{"use strict";module.exports = [
"[project]/app/admin/kompartemen/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KompartemenDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
'use client';
;
;
;
const chambersData = [
    {
        id: 'chamber-1',
        tabLabel: 'Kompartemen 1',
        itemName: 'Baterai + Power Bank',
        title: 'Kompartemen 1 — Baterai + Power Bank',
        category: 'Limbah Baterai & Power Bank',
        capacityPercent: 68,
        ultrasonicDistance: 32,
        ultrasonicUnit: 'cm',
        ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
        loadCellWeight: 6.8,
        loadCellUnit: 'kg',
        loadCellLimit: 10.0,
        loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
        totalUnits: 342,
        status: 'Kapasitas Aman Terkendali',
        statusTone: 'safe',
        accentColor: 'oklch(0.72 0.18 152)',
        growth7d: '+44%',
        growthDesc: 'Pertumbuhan normal teratur',
        recentActivities: [
            {
                id: 1,
                name: 'Baterai + Power Bank',
                qty: '+1 unit',
                time: '10:48',
                status: 'Tersortir Otomatis'
            },
            {
                id: 2,
                name: 'Baterai + Power Bank',
                qty: '+1 unit',
                time: '08:15',
                status: 'Tersortir Otomatis'
            },
            {
                id: 3,
                name: 'Baterai + Power Bank',
                qty: '+2 unit',
                time: '07:30',
                status: 'Tersortir Otomatis'
            },
            {
                id: 4,
                name: 'Baterai + Power Bank',
                qty: '+1 unit',
                time: 'Kemarin',
                status: 'Tersortir Otomatis'
            }
        ],
        weeklyTrend: [
            {
                day: 'Sen',
                date: '14 Okt',
                percent: 24,
                weight: 2.4,
                diff: '+0%'
            },
            {
                day: 'Sel',
                date: '15 Okt',
                percent: 32,
                weight: 3.2,
                diff: '+8%'
            },
            {
                day: 'Rab',
                date: '16 Okt',
                percent: 39,
                weight: 3.9,
                diff: '+7%'
            },
            {
                day: 'Kam',
                date: '17 Okt',
                percent: 47,
                weight: 4.7,
                diff: '+8%'
            },
            {
                day: 'Jum',
                date: '18 Okt',
                percent: 53,
                weight: 5.3,
                diff: '+6%'
            },
            {
                day: 'Sab',
                date: '19 Okt',
                percent: 61,
                weight: 6.1,
                diff: '+8%'
            },
            {
                day: 'Min',
                date: '20 Okt',
                percent: 68,
                weight: 6.8,
                diff: '+7%'
            }
        ]
    },
    {
        id: 'chamber-2',
        tabLabel: 'Kompartemen 2',
        itemName: 'Keyboard + Mouse',
        title: 'Kompartemen 2 — Keyboard + Mouse',
        category: 'Limbah Keyboard & Mouse',
        capacityPercent: 45,
        ultrasonicDistance: 55,
        ultrasonicUnit: 'cm',
        ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
        loadCellWeight: 4.5,
        loadCellUnit: 'kg',
        loadCellLimit: 10.0,
        loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
        totalUnits: 185,
        status: 'Kapasitas Normal',
        statusTone: 'safe',
        accentColor: 'oklch(0.68 0.14 165)',
        growth7d: '+27%',
        growthDesc: 'Laju pembuangan stabil',
        recentActivities: [
            {
                id: 1,
                name: 'Keyboard + Mouse',
                qty: '+1 unit',
                time: '10:24',
                status: 'Tersortir Otomatis'
            },
            {
                id: 2,
                name: 'Keyboard + Mouse',
                qty: '+1 unit',
                time: '09:05',
                status: 'Tersortir Otomatis'
            },
            {
                id: 3,
                name: 'Keyboard + Mouse',
                qty: '+1 unit',
                time: '07:12',
                status: 'Tersortir Otomatis'
            },
            {
                id: 4,
                name: 'Keyboard + Mouse',
                qty: '+1 unit',
                time: 'Kemarin',
                status: 'Tersortir Otomatis'
            }
        ],
        weeklyTrend: [
            {
                day: 'Sen',
                date: '14 Okt',
                percent: 18,
                weight: 1.8,
                diff: '+0%'
            },
            {
                day: 'Sel',
                date: '15 Okt',
                percent: 22,
                weight: 2.2,
                diff: '+4%'
            },
            {
                day: 'Rab',
                date: '16 Okt',
                percent: 27,
                weight: 2.7,
                diff: '+5%'
            },
            {
                day: 'Kam',
                date: '17 Okt',
                percent: 31,
                weight: 3.1,
                diff: '+4%'
            },
            {
                day: 'Jum',
                date: '18 Okt',
                percent: 36,
                weight: 3.6,
                diff: '+5%'
            },
            {
                day: 'Sab',
                date: '19 Okt',
                percent: 40,
                weight: 4.0,
                diff: '+4%'
            },
            {
                day: 'Min',
                date: '20 Okt',
                percent: 45,
                weight: 4.5,
                diff: '+5%'
            }
        ]
    },
    {
        id: 'chamber-3',
        tabLabel: 'Kompartemen 3',
        itemName: 'Kabel',
        title: 'Kompartemen 3 — Kabel',
        category: 'Limbah Kabel',
        capacityPercent: 54,
        ultrasonicDistance: 46,
        ultrasonicUnit: 'cm',
        ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
        loadCellWeight: 5.4,
        loadCellUnit: 'kg',
        loadCellLimit: 10.0,
        loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
        totalUnits: 428,
        status: 'Kapasitas Normal',
        statusTone: 'safe',
        accentColor: 'oklch(0.70 0.16 160)',
        growth7d: '+34%',
        growthDesc: 'Akumulasi moderat',
        recentActivities: [
            {
                id: 1,
                name: 'Kabel',
                qty: '+1 unit',
                time: '09:55',
                status: 'Tersortir Otomatis'
            },
            {
                id: 2,
                name: 'Kabel',
                qty: '+2 unit',
                time: '08:35',
                status: 'Tersortir Otomatis'
            },
            {
                id: 3,
                name: 'Kabel',
                qty: '+1 unit',
                time: '06:50',
                status: 'Tersortir Otomatis'
            },
            {
                id: 4,
                name: 'Kabel',
                qty: '+1 unit',
                time: 'Kemarin',
                status: 'Tersortir Otomatis'
            }
        ],
        weeklyTrend: [
            {
                day: 'Sen',
                date: '14 Okt',
                percent: 20,
                weight: 2.0,
                diff: '+0%'
            },
            {
                day: 'Sel',
                date: '15 Okt',
                percent: 26,
                weight: 2.6,
                diff: '+6%'
            },
            {
                day: 'Rab',
                date: '16 Okt',
                percent: 32,
                weight: 3.2,
                diff: '+6%'
            },
            {
                day: 'Kam',
                date: '17 Okt',
                percent: 38,
                weight: 3.8,
                diff: '+6%'
            },
            {
                day: 'Jum',
                date: '18 Okt',
                percent: 43,
                weight: 4.3,
                diff: '+5%'
            },
            {
                day: 'Sab',
                date: '19 Okt',
                percent: 49,
                weight: 4.9,
                diff: '+6%'
            },
            {
                day: 'Min',
                date: '20 Okt',
                percent: 54,
                weight: 5.4,
                diff: '+5%'
            }
        ]
    },
    {
        id: 'chamber-4',
        tabLabel: 'Kompartemen 4',
        itemName: 'Charger',
        title: 'Kompartemen 4 — Charger',
        category: 'Limbah Charger & Adaptor',
        capacityPercent: 38,
        ultrasonicDistance: 62,
        ultrasonicUnit: 'cm',
        ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
        loadCellWeight: 3.8,
        loadCellUnit: 'kg',
        loadCellLimit: 10.0,
        loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
        totalUnits: 216,
        status: 'Kapasitas Lapang',
        statusTone: 'safe',
        accentColor: 'oklch(0.74 0.15 145)',
        growth7d: '+24%',
        growthDesc: 'Tingkat pengisian terendah',
        recentActivities: [
            {
                id: 1,
                name: 'Charger',
                qty: '+1 unit',
                time: '09:12',
                status: 'Tersortir Otomatis'
            },
            {
                id: 2,
                name: 'Charger',
                qty: '+1 unit',
                time: '08:00',
                status: 'Tersortir Otomatis'
            },
            {
                id: 3,
                name: 'Charger',
                qty: '+1 unit',
                time: '07:05',
                status: 'Tersortir Otomatis'
            },
            {
                id: 4,
                name: 'Charger',
                qty: '+1 unit',
                time: 'Kemarin',
                status: 'Tersortir Otomatis'
            }
        ],
        weeklyTrend: [
            {
                day: 'Sen',
                date: '14 Okt',
                percent: 14,
                weight: 1.4,
                diff: '+0%'
            },
            {
                day: 'Sel',
                date: '15 Okt',
                percent: 17,
                weight: 1.7,
                diff: '+3%'
            },
            {
                day: 'Rab',
                date: '16 Okt',
                percent: 21,
                weight: 2.1,
                diff: '+4%'
            },
            {
                day: 'Kam',
                date: '17 Okt',
                percent: 26,
                weight: 2.6,
                diff: '+5%'
            },
            {
                day: 'Jum',
                date: '18 Okt',
                percent: 30,
                weight: 3.0,
                diff: '+4%'
            },
            {
                day: 'Sab',
                date: '19 Okt',
                percent: 34,
                weight: 3.4,
                diff: '+4%'
            },
            {
                day: 'Min',
                date: '20 Okt',
                percent: 38,
                weight: 3.8,
                diff: '+4%'
            }
        ]
    },
    {
        id: 'chamber-5',
        tabLabel: 'Kompartemen 5',
        itemName: 'PCB',
        title: 'Kompartemen 5 — PCB',
        category: 'Limbah Papan Sirkuit Cetak (PCB)',
        capacityPercent: 82,
        ultrasonicDistance: 18,
        ultrasonicUnit: 'cm',
        ultrasonicMeta: 'Jarak sisa deteksi sensor ultrasonik menuju permukaan e-waste (tinggi ruang 100 cm)',
        loadCellWeight: 8.2,
        loadCellUnit: 'kg',
        loadCellLimit: 10.0,
        loadCellMeta: 'Berat aktual sensor load cell bawah (batas beban aman maksimal 10.0 kg)',
        totalUnits: 257,
        status: 'Mendekati Batas Kritis',
        statusTone: 'warning',
        accentColor: 'oklch(0.75 0.18 80)',
        growth7d: '+47%',
        growthDesc: 'Pertumbuhan tercepat / Waspada penjemputan',
        recentActivities: [
            {
                id: 1,
                name: 'PCB',
                qty: '+1 unit',
                time: '08:40',
                status: 'Tersortir Otomatis'
            },
            {
                id: 2,
                name: 'PCB',
                qty: '+1 unit',
                time: '07:22',
                status: 'Tersortir Otomatis'
            },
            {
                id: 3,
                name: 'PCB',
                qty: '+2 unit',
                time: '06:15',
                status: 'Tersortir Otomatis'
            },
            {
                id: 4,
                name: 'PCB',
                qty: '+1 unit',
                time: 'Kemarin',
                status: 'Tersortir Otomatis'
            }
        ],
        weeklyTrend: [
            {
                day: 'Sen',
                date: '14 Okt',
                percent: 35,
                weight: 3.5,
                diff: '+0%'
            },
            {
                day: 'Sel',
                date: '15 Okt',
                percent: 44,
                weight: 4.4,
                diff: '+9%'
            },
            {
                day: 'Rab',
                date: '16 Okt',
                percent: 52,
                weight: 5.2,
                diff: '+8%'
            },
            {
                day: 'Kam',
                date: '17 Okt',
                percent: 61,
                weight: 6.1,
                diff: '+9%'
            },
            {
                day: 'Jum',
                date: '18 Okt',
                percent: 69,
                weight: 6.9,
                diff: '+8%'
            },
            {
                day: 'Sab',
                date: '19 Okt',
                percent: 76,
                weight: 7.6,
                diff: '+7%'
            },
            {
                day: 'Min',
                date: '20 Okt',
                percent: 82,
                weight: 8.2,
                diff: '+6%'
            }
        ]
    }
];
function KompartemenDetailPage() {
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('chamber-1');
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeChamber = chambersData.find((c)=>c.id === selectedId) || chambersData[0];
    // Circle SVG Math (Radius: 88, Circumference: 2 * PI * 88 = 552.92)
    const circleRadius = 88;
    const circumference = 2 * Math.PI * circleRadius;
    const strokeOffset = circumference * (1 - activeChamber.capacityPercent / 100);
    // 7-Day Trend Chart SVG Math (ViewBox: 0 0 680 200)
    // X: 50 to 650 (step 100). Y: 0% = 165, 100% = 25. (Height range = 140)
    const trendPoints = activeChamber.weeklyTrend.map((item, idx)=>{
        const x = 50 + idx * 100;
        const y = 25 + (100 - item.percent) * 1.4;
        return {
            ...item,
            x,
            y
        };
    });
    // SVG Line path: M x0,y0 L x1,y1 ...
    const linePath = trendPoints.map((pt, idx)=>`${idx === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');
    // SVG Area path: M x0,y0 L ... L xN,yN L xN,165 L x0,165 Z
    const areaPath = `${linePath} L ${trendPoints[trendPoints.length - 1].x} 165 L ${trendPoints[0].x} 165 Z`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chamber-page-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "chamber-top-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bold text-[32px]",
                                children: "Detail Kompartemen Sensor"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-normal text-[16px]",
                                children: "Telemetri volumetrik ultrasonik dan penimbangan muatan aktif"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-switcher-pills rounded-xl",
                        role: "tablist",
                        "aria-label": "Pilihan Kompartemen Sensor",
                        children: chambersData.map((chamber)=>{
                            const isSelected = chamber.id === selectedId;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                role: "tab",
                                "aria-selected": isSelected,
                                tabIndex: 0,
                                onClick: ()=>{
                                    setSelectedId(chamber.id);
                                    setHoveredIndex(null);
                                },
                                className: `chamber-pill-btn font-medium text-[14px] rounded-xl ${isSelected ? 'active' : ''}`,
                                children: chamber.tabLabel
                            }, chamber.id, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kompartemen/page.jsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chamber-stage-card rounded-xl",
                "aria-live": "polite",
                "aria-label": `Data ${activeChamber.title}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-badge-type font-medium text-[14px] rounded-xl",
                        children: activeChamber.category
                    }, void 0, false, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-gauge-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "gauge-svg",
                                viewBox: "0 0 200 200",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "gauge-track",
                                        cx: "100",
                                        cy: "100",
                                        r: circleRadius
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        className: "gauge-indicator",
                                        cx: "100",
                                        cy: "100",
                                        r: circleRadius,
                                        stroke: activeChamber.accentColor,
                                        strokeDasharray: circumference,
                                        strokeDashoffset: strokeOffset
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gauge-center-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gauge-big-num font-bold text-[32px]",
                                        children: [
                                            activeChamber.capacityPercent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gauge-sub-label font-medium text-[13px]",
                                        children: "Volumetrik"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-medium text-[14px] rounded-xl",
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 0.9rem',
                            backgroundColor: 'var(--color-surface-elevated)',
                            border: '1px solid var(--color-border)',
                            marginBottom: '2rem',
                            color: 'var(--color-text-primary)'
                        },
                        children: [
                            activeChamber.statusTone === 'warning' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 16,
                                style: {
                                    color: activeChamber.accentColor
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 16,
                                style: {
                                    color: activeChamber.accentColor
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: activeChamber.status
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sensor-readings-wrapper gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sensor-box rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sensor-box-icon rounded-xl",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sensor-box-title font-medium text-[14px]",
                                                children: "Sensor Ultrasonik"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 338,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-value font-bold text-[32px]",
                                        children: [
                                            activeChamber.ultrasonicDistance,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[14px]",
                                                children: activeChamber.ultrasonicUnit
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sensor-box-meta font-medium text-[13px]",
                                        children: activeChamber.ultrasonicMeta
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sensor-box rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sensor-box-icon rounded-xl",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sensor-box-title font-medium text-[14px]",
                                                children: "Load Cell (Maks 10 kg)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-value font-bold text-[32px]",
                                        children: [
                                            activeChamber.loadCellWeight,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[14px]",
                                                children: activeChamber.loadCellUnit
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sensor-box-meta font-medium text-[13px]",
                                        children: activeChamber.loadCellMeta
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sensor-box rounded-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sensor-box-icon rounded-xl",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    size: 17
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sensor-box-title font-medium text-[14px]",
                                                children: [
                                                    "Total ",
                                                    activeChamber.itemName,
                                                    " Masuk"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sensor-box-value font-bold text-[32px]",
                                        children: [
                                            activeChamber.totalUnits,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[14px]",
                                                children: "unit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sensor-box-meta font-medium text-[13px]",
                                        children: [
                                            "Total unit ",
                                            activeChamber.itemName,
                                            " terdeteksi computer vision yang telah tersortir masuk ke ",
                                            activeChamber.tabLabel
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kompartemen/page.jsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chamber-items-card rounded-xl",
                "aria-label": `Log Aktivitas Deteksi ${activeChamber.title}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-items-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chamber-items-title-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-[24px]",
                                        style: {
                                            color: 'var(--color-text-primary)'
                                        },
                                        children: [
                                            "Log Aktivitas Deteksi AI & Sensor (",
                                            activeChamber.tabLabel,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-normal text-[16px]",
                                        style: {
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: [
                                            'Pencatatan real-time unit masuk sampah elektronik "',
                                            activeChamber.itemName,
                                            '" dari computer vision'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 391,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trend-badge-delta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 397,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Total Masuk: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: [
                                                    activeChamber.totalUnits,
                                                    " unit"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 398,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chamber-items-subpanel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "subpanel-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "subpanel-title font-semibold text-[14px]",
                                        children: [
                                            "Deteksi Masuk: ",
                                            activeChamber.itemName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[12px]",
                                        style: {
                                            color: 'var(--color-text-muted)'
                                        },
                                        children: "Node Sensor: Raspberry Pi 4 (AI Computer Vision)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "chamber-log-list",
                                children: activeChamber.recentActivities.map((act)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "chamber-log-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chamber-log-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "chamber-log-dot",
                                                        style: {
                                                            backgroundColor: activeChamber.accentColor
                                                        },
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "chamber-log-name font-medium text-[14px]",
                                                                children: act.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                                lineNumber: 422,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "chamber-log-qty",
                                                                children: [
                                                                    "(",
                                                                    act.qty,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-[12px]",
                                                        style: {
                                                            padding: '3px 8px',
                                                            borderRadius: 'var(--radius-sm)',
                                                            backgroundColor: 'var(--color-surface-elevated)',
                                                            color: 'var(--color-primary)',
                                                            border: '1px solid var(--color-border-subtle)'
                                                        },
                                                        children: act.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                        lineNumber: 427,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                        className: "chamber-log-time",
                                                        children: act.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                        lineNumber: 439,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, act.id, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kompartemen/page.jsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "chamber-trend-card rounded-xl",
                "aria-label": `Grafik Tren 7 Hari Terakhir ${activeChamber.title}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "trend-header-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trend-title-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-semibold text-[24px]",
                                        style: {
                                            color: 'var(--color-text-primary)'
                                        },
                                        children: "Tren Keterisian Kapasitas Akumulasi (7 Hari Terakhir)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-normal text-[16px]",
                                        style: {
                                            color: 'var(--color-text-secondary)'
                                        },
                                        children: [
                                            "Riwayat telemetri volume masuk untuk ",
                                            activeChamber.title,
                                            " (",
                                            activeChamber.growthDesc,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `trend-badge-delta ${activeChamber.statusTone === 'warning' ? 'warning' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Kenaikan 7 Hari: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: activeChamber.growth7d
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 464,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "trend-svg-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "trend-svg",
                            viewBox: "0 0 680 200",
                            preserveAspectRatio: "xMidYMid meet",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: `trend-grad-${activeChamber.id}`,
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: activeChamber.accentColor,
                                                stopOpacity: "0.32"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 479,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: activeChamber.accentColor,
                                                stopOpacity: "0.02"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "25",
                                    x2: "650",
                                    y2: "25",
                                    className: "trend-grid-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "40",
                                    y: "29",
                                    textAnchor: "end",
                                    className: "trend-axis-text",
                                    children: "100%"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "60",
                                    x2: "650",
                                    y2: "60",
                                    className: "trend-grid-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "40",
                                    y: "64",
                                    textAnchor: "end",
                                    className: "trend-axis-text",
                                    children: "75%"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "95",
                                    x2: "650",
                                    y2: "95",
                                    className: "trend-grid-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "40",
                                    y: "99",
                                    textAnchor: "end",
                                    className: "trend-axis-text",
                                    children: "50%"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "130",
                                    x2: "650",
                                    y2: "130",
                                    className: "trend-grid-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "40",
                                    y: "134",
                                    textAnchor: "end",
                                    className: "trend-axis-text",
                                    children: "25%"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "50",
                                    y1: "165",
                                    x2: "650",
                                    y2: "165",
                                    className: "trend-grid-line"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "40",
                                    y: "169",
                                    textAnchor: "end",
                                    className: "trend-axis-text",
                                    children: "0%"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 498,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: areaPath,
                                    fill: `url(#trend-grad-${activeChamber.id})`,
                                    className: "trend-area-path"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: linePath,
                                    stroke: activeChamber.accentColor,
                                    className: "trend-line-path"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/kompartemen/page.jsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                trendPoints.map((pt, idx)=>{
                                    const isHovered = hoveredIndex === idx;
                                    const isToday = idx === trendPoints.length - 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: pt.x,
                                                y1: "25",
                                                x2: pt.x,
                                                y2: "165",
                                                stroke: activeChamber.accentColor,
                                                strokeWidth: "1.5",
                                                strokeDasharray: "2 2",
                                                opacity: "0.75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 523,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: pt.x,
                                                cy: pt.y,
                                                r: isHovered ? 8 : isToday ? 6 : 4,
                                                fill: activeChamber.accentColor,
                                                opacity: isHovered ? 0.35 : isToday ? 0.25 : 0
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 536,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: pt.x,
                                                cy: pt.y,
                                                r: isHovered ? 5.5 : isToday ? 4.5 : 3.5,
                                                fill: activeChamber.accentColor,
                                                stroke: "var(--color-surface)",
                                                strokeWidth: "2",
                                                className: "trend-data-point",
                                                onMouseEnter: ()=>setHoveredIndex(idx),
                                                onMouseLeave: ()=>setHoveredIndex(null)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: pt.x,
                                                y: pt.y - 10,
                                                textAnchor: "middle",
                                                fill: isToday ? activeChamber.accentColor : 'var(--color-text-primary)',
                                                fontSize: isHovered || isToday ? '12px' : '11px',
                                                fontWeight: isHovered || isToday ? '700' : '600',
                                                children: [
                                                    pt.percent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 558,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: pt.x,
                                                y: "186",
                                                textAnchor: "middle",
                                                className: "trend-axis-text",
                                                fill: isToday ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                                                fontWeight: isToday ? '700' : '500',
                                                children: pt.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, pt.date, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/kompartemen/page.jsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "trend-days-grid",
                        role: "list",
                        "aria-label": "Rincian 7 Hari Terakhir",
                        children: activeChamber.weeklyTrend.map((item, idx)=>{
                            const isToday = idx === activeChamber.weeklyTrend.length - 1;
                            const isHovered = hoveredIndex === idx;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "listitem",
                                onMouseEnter: ()=>setHoveredIndex(idx),
                                onMouseLeave: ()=>setHoveredIndex(null),
                                className: `trend-day-card rounded-xl ${isToday ? activeChamber.statusTone === 'warning' ? 'active-warning' : 'active-today' : ''}`,
                                style: isHovered ? {
                                    borderColor: activeChamber.accentColor,
                                    backgroundColor: 'var(--color-surface-hover)'
                                } : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "trend-day-date",
                                        children: [
                                            item.day,
                                            ", ",
                                            item.date
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 611,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "trend-day-val",
                                        style: isToday ? {
                                            color: activeChamber.accentColor
                                        } : undefined,
                                        children: [
                                            item.percent,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 614,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "trend-day-kg",
                                        children: [
                                            item.weight,
                                            " kg"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 620,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `trend-day-delta ${activeChamber.statusTone === 'warning' && isToday ? 'accent' : ''}`,
                                        children: item.diff
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                                        lineNumber: 623,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.date, true, {
                                fileName: "[project]/app/admin/kompartemen/page.jsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/admin/kompartemen/page.jsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/kompartemen/page.jsx",
                lineNumber: 448,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/kompartemen/page.jsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "circle-check",
    size: 24,
    node: [
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "10",
                key: "1mglay"
            }
        ],
        [
            "path",
            {
                d: "m16 9-5.5 5.5L8 12",
                key: "xofnsj"
            }
        ]
    ],
    aliases: [
        "check-circle-2"
    ]
};
__iconData.node;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "layers",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
                key: "zw3jo"
            }
        ],
        [
            "path",
            {
                d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
                key: "1wduqc"
            }
        ],
        [
            "path",
            {
                d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
                key: "kqbvx6"
            }
        ]
    ],
    aliases: [
        "layers-3"
    ]
};
__iconData.node;
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Radio
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "radio",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M16.247 7.761a6 6 0 0 1 0 8.478",
                key: "1fwjs5"
            }
        ],
        [
            "path",
            {
                d: "M19.075 4.933a10 10 0 0 1 0 14.134",
                key: "ehdyv1"
            }
        ],
        [
            "path",
            {
                d: "M4.925 19.067a10 10 0 0 1 0-14.134",
                key: "1q22gi"
            }
        ],
        [
            "path",
            {
                d: "M7.753 16.239a6 6 0 0 1 0-8.478",
                key: "r2q7qm"
            }
        ],
        [
            "circle",
            {
                cx: "12",
                cy: "12",
                r: "2",
                key: "1c9p78"
            }
        ]
    ]
};
__iconData.node;
const Radio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-ssr] (ecmascript) <export default as Radio>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Radio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>Scale
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "scale",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M12 3v18",
                key: "108xh3"
            }
        ],
        [
            "path",
            {
                d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
                key: "zcdpyk"
            }
        ],
        [
            "path",
            {
                d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
                key: "1yorad"
            }
        ],
        [
            "path",
            {
                d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
                key: "eua70x"
            }
        ],
        [
            "path",
            {
                d: "M7 21h10",
                key: "1b0cd5"
            }
        ]
    ]
};
__iconData.node;
const Scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-ssr] (ecmascript) <export default as Scale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "shield-check",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }
        ],
        [
            "path",
            {
                d: "m9 12 2 2 4-4",
                key: "dzmm74"
            }
        ]
    ]
};
__iconData.node;
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "trending-up",
    size: 24,
    node: [
        [
            "path",
            {
                d: "M16 7h6v6",
                key: "box55l"
            }
        ],
        [
            "path",
            {
                d: "m22 7-8.5 8.5-5-5L2 17",
                key: "1t1m79"
            }
        ]
    ]
};
__iconData.node;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconData",
    ()=>__iconData,
    "default",
    ()=>TriangleAlert
]);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-ssr] (ecmascript)");
;
const __iconData = {
    name: "triangle-alert",
    size: 24,
    node: [
        [
            "path",
            {
                d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                key: "wmoenq"
            }
        ],
        [
            "path",
            {
                d: "M12 9v4",
                key: "juzpu7"
            }
        ],
        [
            "path",
            {
                d: "M12 17h.01",
                key: "p32p05"
            }
        ]
    ],
    aliases: [
        "alert-triangle"
    ]
};
__iconData.node;
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__iconData);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript) <export default as AlertTriangle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertTriangle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-ssr] (ecmascript)");
}),
];})()

//# sourceMappingURL=_20je15cj4wh8i._.js.map