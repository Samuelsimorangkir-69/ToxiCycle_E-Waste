module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/produk/[id]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var e = new Error("Could not parse module '[project]/app/produk/[id]/page.jsx', file not found");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/produk/[id]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/produk/[id]/page.jsx [app-rsc] (ecmascript)"));
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__085nttmb7w49z._.js.map