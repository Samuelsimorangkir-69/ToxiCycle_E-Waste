(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0620vuzjfem_z._.js",
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
;
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://placeholder-project.supabase.co") || 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "placeholder-anon-key") || 'placeholder-anon-key';
async function middleware(request) {
    const { pathname } = request.nextUrl;
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: request.headers
        }
    });
    let isAuthenticated = false;
    // 1. Check for local verified admin session cookie
    const adminCookie = request.cookies.get('toxiccycle_admin_session');
    if (adminCookie?.value) {
        isAuthenticated = true;
    }
    // 2. Check for Supabase session if configured
    const isSupabaseConfigured = ("TURBOPACK compile-time value", "https://placeholder-project.supabase.co") && ("TURBOPACK compile-time value", "placeholder-anon-key") && !("TURBOPACK compile-time value", "https://placeholder-project.supabase.co").includes('placeholder');
    if (!isAuthenticated && isSupabaseConfigured) {
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(SUPABASE_URL, SUPABASE_ANON_KEY, {
                cookies: {
                    getAll () {
                        return request.cookies.getAll();
                    },
                    setAll (cookiesToSet) {
                        cookiesToSet.forEach(({ name, value })=>request.cookies.set(name, value));
                        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                            request
                        });
                        cookiesToSet.forEach(({ name, value, options })=>response.cookies.set(name, value, options));
                    }
                }
            });
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                isAuthenticated = true;
            }
        } catch  {
            isAuthenticated = false;
        }
    }
    // Handle root "/" path
    if (pathname === '/') {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = isAuthenticated ? '/admin' : '/login';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // Handle "/login" path
    if (pathname === '/login') {
        if (isAuthenticated) {
            const redirectUrl = request.nextUrl.clone();
            redirectUrl.pathname = '/admin';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
        }
        return response;
    }
    // Protect all other routes (such as /admin, /admin/*, etc.)
    if (!isAuthenticated) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = '/login';
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    return response;
}
const config = {
    matcher: [
        /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (e.g. .svg, .png, .jpg)
     */ '/((?!_next/static|_next/image|favicon.ico|manifest\\.json|sw\\.js|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest|json)$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0620vuzjfem_z._.js.map