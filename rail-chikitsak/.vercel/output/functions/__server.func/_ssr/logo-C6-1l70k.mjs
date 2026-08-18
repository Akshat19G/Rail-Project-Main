import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as useI18n, i as LOCALES } from "./router-Dwfe-FwJ.mjs";
import { D as Globe, P as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logo-C6-1l70k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LanguageSwitcher({ tone = "default" }) {
	const { locale, setLocale, t } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onDoc(e) {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		}
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, [open]);
	const trigger = tone === "inverted" ? "border-navy-foreground/25 text-navy-foreground hover:bg-navy-foreground/10" : "border-border text-foreground hover:bg-muted";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			"aria-label": t("lang.title"),
			onClick: () => setOpen((v) => !v),
			className: `inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-xs font-medium transition-colors ${trigger}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "max-w-[7rem] truncate",
				children: current.native
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "listbox",
			className: "absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-elevate",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground",
				children: t("lang.title")
			}), LOCALES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "option",
				"aria-selected": l.code === locale,
				onClick: () => {
					setLocale(l.code);
					setOpen(false);
					toast.success(`${l.native} · ${l.label}`);
				},
				className: `flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${l.code === locale ? "font-medium" : "text-muted-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 truncate",
					children: [l.native, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-[11px] text-muted-foreground",
						children: l.label
					})]
				}), l.code === locale ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 shrink-0 text-accent" }) : null]
			}, l.code))]
		}) : null]
	});
}
var hero_train_default = "/assets/hero-train-DDL_y47R.jpg";
var rail_chikitsak_mark_png_asset_default = {
	version: 1,
	asset_id: "cac7d0d0-d304-4e59-ad37-2992f23eb9f0",
	project_id: "780c4c78-0d67-4996-8129-d0c05527d9c2",
	url: "/__l5e/assets-v1/cac7d0d0-d304-4e59-ad37-2992f23eb9f0/rail-chikitsak-mark-v2.png",
	r2_key: "a/v1/780c4c78-0d67-4996-8129-d0c05527d9c2/cac7d0d0-d304-4e59-ad37-2992f23eb9f0/rail-chikitsak-mark-v2.png",
	original_filename: "rail-chikitsak-mark-v2.png",
	size: 270605,
	content_type: "image/png",
	created_at: "2026-08-16T17:03:06Z"
};
function BrandMark({ className = "h-9 w-9" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: rail_chikitsak_mark_png_asset_default.url,
		alt: "Rail Chikitsak logo",
		className: `shrink-0 object-contain ${className}`
	});
}
//#endregion
export { LanguageSwitcher as n, hero_train_default as r, BrandMark as t };
