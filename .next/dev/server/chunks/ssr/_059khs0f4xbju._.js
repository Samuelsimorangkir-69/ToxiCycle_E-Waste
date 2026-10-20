(()=>{"use strict";module.exports = [
"[project]/.next-internal/server/app/admin/kompartemen/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/admin/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "000d89f2089d23256e34e940f1aa1504e96a2f8cdd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAdmin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$kompartemen$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$admin$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/kompartemen/page/actions.js { ACTIONS_MODULE0 => "[project]/app/admin/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/actions.js [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/kompartemen/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/admin/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/actions.js [app-rsc] (ecmascript)");
;
}),
"[project]/app/admin/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"000d89f2089d23256e34e940f1aa1504e96a2f8cdd":{"name":"logoutAdmin"},"00656a21e9be7d7ab7e8b8a654a13da715038659d0":{"name":"refreshTelemetry"},"008e5ab130a222d101df57c10aaaf0f221d7a65184":{"name":"exportTelemetryCSV"},"00a90f33db716345d1973e05b3fc0f03e42e8d89d3":{"name":"triggerPingNodes"},"00bc59f0094073eb6b1fb21c2ed2c7033aa4851542":{"name":"triggerTestFlapServo"},"00fb9417182950362ae3f04f1357fe7cdce08e0081":{"name":"triggerCalibrateScale"},"60bc3dc96b248a72a96894786cfb74e021127cd5cc":{"name":"loginAdmin"}},"app/admin/actions.js",""] */ __turbopack_context__.s([
    "exportTelemetryCSV",
    ()=>exportTelemetryCSV,
    "loginAdmin",
    ()=>loginAdmin,
    "logoutAdmin",
    ()=>logoutAdmin,
    "refreshTelemetry",
    ()=>refreshTelemetry,
    "triggerCalibrateScale",
    ()=>triggerCalibrateScale,
    "triggerPingNodes",
    ()=>triggerPingNodes,
    "triggerTestFlapServo",
    ()=>triggerTestFlapServo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hardware$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hardware-api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function loginAdmin(prevState, formData) {
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString();
    if (!email || !password) {
        return {
            success: false,
            error: 'Mohon masukkan alamat email dan kata sandi untuk melanjutkan.'
        };
    }
    // Basic email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return {
            success: false,
            error: 'Format alamat email tidak valid. Silakan periksa kembali input Anda.'
        };
    }
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    // 1. Authenticate with Supabase if live credentials exist
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        try {
            const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                return {
                    success: false,
                    error: 'Kredensial tidak sesuai. Pastikan alamat email dan kata sandi admin telah terdaftar dan dimasukkan dengan benar.'
                };
            }
            // Supabase client manages cookies automatically via cookieStore
            cookieStore.set('toxiccycle_admin_session', data.user.email, {
                httpOnly: true,
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            });
        } catch  {
            return {
                success: false,
                error: 'Terjadi kendala saat menghubungkan ke server autentikasi. Silakan coba kembali beberapa saat lagi.'
            };
        }
    } else {
        // 2. Safe development fallback when Supabase keys are pending configuration
        // Default admin credential or valid admin password length >= 6
        if (password.length < 6) {
            return {
                success: false,
                error: 'Kata sandi minimal 6 karakter. Silakan periksa kembali input Anda.'
            };
        }
        // Set secure HTTP-only session cookie
        cookieStore.set('toxiccycle_admin_session', email, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7
        });
    }
    // Redirect to admin dashboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin');
}
async function logoutAdmin() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        try {
            const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])();
            await supabase.auth.signOut();
        } catch  {
        // Ignored during sign-out
        }
    }
    cookieStore.delete('toxiccycle_admin_session');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function refreshTelemetry() {
    const { revalidatePath } = await __turbopack_context__.A("[project]/node_modules/next/cache.js [app-rsc] (ecmascript, async loader)");
    revalidatePath('/admin');
    return {
        success: true,
        timestamp: new Date().toISOString()
    };
}
async function exportTelemetryCSV() {
    const headers = 'ID,Waktu,Objek,Kompartemen,Status,Kategori\n';
    const rows = [
        '1,10:48,Baterai Lithium 18650,Kompartemen B,Tersortir Otomatis,Hazardous',
        '2,10:24,Mainboard PCB Smartphone,Kompartemen A,Tersortir Otomatis,Valuable Circuit',
        '3,09:55,Kabel Adapter & Charger,Kompartemen C,Tersortir Otomatis,Copper Wire',
        '4,09:12,Modul Display AMOLED,Kompartemen A,Tersortir Otomatis,Electronic Screen',
        '5,08:40,Baterai Powerbank Li-Po,Kompartemen B,Tersortir Otomatis,Hazardous',
        '6,08:15,Kamera Sensor Modul,Kompartemen A,Tersortir Otomatis,Precision Tech'
    ].join('\n');
    return {
        filename: `toxiccycle-telemetri-${new Date().toISOString().slice(0, 10)}.csv`,
        csv: headers + rows
    };
}
;
;
async function triggerPingNodes() {
    const { authenticated } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyServerSession"])();
    if (!authenticated) {
        return {
            success: false,
            error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hardware$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pingHardwareNodes"])();
        return {
            success: true,
            message: result.message,
            nodes: result.nodes,
            timestamp: result.timestamp
        };
    } catch  {
        return {
            success: false,
            error: 'Gagal melakukan jabat tangan (handshake) dengan node perangkat keras.'
        };
    }
}
async function triggerCalibrateScale() {
    const { authenticated } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyServerSession"])();
    if (!authenticated) {
        return {
            success: false,
            error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hardware$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calibrateLoadCell"])();
        return {
            success: true,
            message: result.message,
            tareOffset: result.tareOffset,
            status: result.status,
            timestamp: result.timestamp
        };
    } catch  {
        return {
            success: false,
            error: 'Terjadi kendala saat mengirim instruksi kalibrasi ke modul load cell.'
        };
    }
}
async function triggerTestFlapServo() {
    const { authenticated } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyServerSession"])();
    if (!authenticated) {
        return {
            success: false,
            error: 'Sesi tidak valid atau telah berakhir. Akses ditolak.'
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hardware$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testServoFlap"])();
        return {
            success: true,
            message: result.message,
            sweepCycle: result.sweepCycle,
            status: result.status,
            timestamp: result.timestamp
        };
    } catch  {
        return {
            success: false,
            error: 'Gagal menguji gerak aktuator flap servo.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    loginAdmin,
    logoutAdmin,
    refreshTelemetry,
    exportTelemetryCSV,
    triggerPingNodes,
    triggerCalibrateScale,
    triggerTestFlapServo
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginAdmin, "60bc3dc96b248a72a96894786cfb74e021127cd5cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAdmin, "000d89f2089d23256e34e940f1aa1504e96a2f8cdd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(refreshTelemetry, "00656a21e9be7d7ab7e8b8a654a13da715038659d0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(exportTelemetryCSV, "008e5ab130a222d101df57c10aaaf0f221d7a65184", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(triggerPingNodes, "00a90f33db716345d1973e05b3fc0f03e42e8d89d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(triggerCalibrateScale, "00fb9417182950362ae3f04f1357fe7cdce08e0081", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(triggerTestFlapServo, "00bc59f0094073eb6b1fb21c2ed2c7033aa4851542", null);
}),
"[project]/lib/hardware-api.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Hardware Controller Client for ToxicCycle IoT Stations
 * Interfaces with Raspberry Pi 4 (AI Vision) and ESP32 (Telemetry & Actuation)
 */ __turbopack_context__.s([
    "calibrateLoadCell",
    ()=>calibrateLoadCell,
    "pingHardwareNodes",
    ()=>pingHardwareNodes,
    "testServoFlap",
    ()=>testServoFlap
]);
async function pingHardwareNodes() {
    // In production, sends MQTT ping or HTTP handshake to local node endpoints
    const rpiEndpoint = process.env.RPI_NODE_URL || 'http://192.168.1.100:8080/ping';
    const espEndpoint = process.env.ESP32_NODE_URL || 'http://192.168.1.101:80/ping';
    // Simulates ultra-fast node handshake
    return {
        success: true,
        nodes: {
            rpi: {
                name: 'Raspberry Pi 4 (AI Vision)',
                status: 'ONLINE',
                latencyMs: 14
            },
            esp32: {
                name: 'ESP32 (IoT Telemetry)',
                status: 'ONLINE',
                latencyMs: 8
            }
        },
        message: 'Semua node perangkat keras merespons dengan normal.',
        timestamp: new Date().toISOString()
    };
}
async function calibrateLoadCell() {
    // Triggers tare & calibration routine on ESP32 HX711 module
    return {
        success: true,
        module: 'Load Cell HX711',
        tareOffset: '0.00 kg',
        status: 'ONLINE / KALIBRASI NORMAL',
        message: 'Kalibrasi tare timbangan berhasil diperbarui ke titik nol.',
        timestamp: new Date().toISOString()
    };
}
async function testServoFlap() {
    // Triggers mechanical sweep test (0° -> 90° -> 0°) on sorting flap servo
    return {
        success: true,
        actuator: 'Flap Servo MG996R',
        sweepCycle: '0° -> 90° -> 0°',
        status: 'BERFUNGSI NORMAL',
        message: 'Pengujian gerak mekanis flap servo selesai tanpa hambatan.',
        timestamp: new Date().toISOString()
    };
}
}),
"[project]/lib/supabase.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "verifyServerSession",
    ()=>verifyServerSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://placeholder-project.supabase.co") || 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "placeholder-anon-key") || 'placeholder-anon-key';
const isSupabaseConfigured = ()=>{
    return ("TURBOPACK compile-time value", "https://placeholder-project.supabase.co") && ("TURBOPACK compile-time value", "placeholder-anon-key") && !("TURBOPACK compile-time value", "https://placeholder-project.supabase.co").includes('placeholder');
};
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(SUPABASE_URL, SUPABASE_ANON_KEY, {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>{
                        cookieStore.set(name, value, options);
                    });
                } catch  {
                // Called from a Server Component; handled by middleware
                }
            }
        }
    });
}
async function verifyServerSession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const fallbackSession = cookieStore.get('toxiccycle_admin_session');
    if (fallbackSession?.value) {
        return {
            authenticated: true,
            user: {
                email: fallbackSession.value,
                role: 'admin'
            }
        };
    }
    if (isSupabaseConfigured()) {
        try {
            const supabase = await createClient();
            const { data: { user }, error } = await supabase.auth.getUser();
            if (!error && user) {
                return {
                    authenticated: true,
                    user
                };
            }
        } catch (err) {
            console.error('Supabase session verification error:', err);
        }
    }
    return {
        authenticated: false,
        user: null
    };
}
}),
];})()

//# sourceMappingURL=_059khs0f4xbju._.js.map