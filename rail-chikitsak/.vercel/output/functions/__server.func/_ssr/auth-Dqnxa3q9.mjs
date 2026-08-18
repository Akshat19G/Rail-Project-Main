import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, n as CheckboxIndicator, p as require_jsx_runtime, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getServerFnById, r as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-BJDVnsBT2.mjs";
import { t as DEMO_CREDENTIALS } from "./railcare-demo-BdmqCUnU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { S as supabase, a as useI18n, b as useJourney, f as useTrust, m as DEMO_PASSENGER, p as DEMO_DOCTOR, u as clearTrustStorage, x as loadAccount } from "./router-Dwfe-FwJ.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-DRsC1qZi.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { P as Check, i as User, l as Stethoscope } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitcher, r as hero_train_default, t as BrandMark } from "./logo-C6-1l70k.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Dqnxa3q9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Ensures the two demo accounts exist as real, confirmed accounts with their
* profile and journey rows. Safe to call repeatedly — it is idempotent.
*/
var ensureDemoAccounts = createServerFn({ method: "POST" }).handler(createSsrRpc("d3ec4dd35e3e325f74f1dae57691d0e168542742de5e2651ffc4c0742ff65814"));
function AuthPage() {
	const j = useJourney();
	const navigate = useNavigate();
	const { resetTrustLayer } = useTrust();
	const { t } = useI18n();
	const [tab, setTab] = (0, import_react.useState)("login");
	const [role, setRole] = (0, import_react.useState)("passenger");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [pendingConfirm, setPendingConfirm] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (j.authReady && j.account) navigate({
			to: j.account.role === "doctor" ? "/doctor" : "/journey",
			replace: true
		});
	}, [j.authReady, j.account]);
	const PENDING_ROLE_KEY = "railcare.pendingGoogleRole";
	function accountFromGoogle(forRole, user) {
		const meta = user.user_metadata ?? {};
		const name = String(meta["full_name"] ?? meta["name"] ?? user.email?.split("@")[0] ?? "Rail Chikitsak user");
		const base = forRole === "doctor" ? DEMO_DOCTOR : DEMO_PASSENGER;
		return {
			...base,
			demo: false,
			name,
			email: user.email ?? base.email
		};
	}
	async function adoptGoogleSession(forRole) {
		const { data } = await supabase.auth.getUser();
		if (!data.user) return false;
		localStorage.removeItem(PENDING_ROLE_KEY);
		enter(await loadAccount(data.user.id) ?? accountFromGoogle(forRole, data.user));
		return true;
	}
	async function signInWithGoogle(forRole) {
		try {
			localStorage.setItem(PENDING_ROLE_KEY, forRole);
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: `${window.location.origin}/auth` }
			});
			if (error) {
				localStorage.removeItem(PENDING_ROLE_KEY);
				toast.error("Google sign-in failed. Please try again.");
			}
		} catch {
			localStorage.removeItem(PENDING_ROLE_KEY);
			toast.error("Google sign-in failed. Please try again.");
		}
	}
	(0, import_react.useEffect)(() => {
		if (j.account) return;
		const pending = typeof window !== "undefined" ? localStorage.getItem(PENDING_ROLE_KEY) : null;
		if (!pending) return;
		adoptGoogleSession(pending === "doctor" ? "doctor" : "passenger");
	}, [j.authReady]);
	function enter(account) {
		clearTrustStorage();
		resetTrustLayer();
		j.signIn(account);
		j.reset();
		toast.success(`Signed in as ${account.name}`);
		navigate({
			to: account.role === "doctor" ? "/doctor" : "/journey",
			replace: true
		});
	}
	/** Real email + password sign-in against the account database. */
	async function login(email, password, forRole) {
		setBusy(true);
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		setBusy(false);
		if (error || !data.user) {
			toast.error(error?.message ?? "Could not sign in.");
			return;
		}
		enter(await loadAccount(data.user.id) ?? {
			...forRole === "doctor" ? DEMO_DOCTOR : DEMO_PASSENGER,
			demo: false,
			email
		});
	}
	/** Real sign-up. Accounts must confirm their email before the first sign-in. */
	async function register(account, password) {
		setBusy(true);
		const { data, error } = await supabase.auth.signUp({
			email: account.email,
			password,
			options: { emailRedirectTo: `${window.location.origin}/auth` }
		});
		setBusy(false);
		if (error) {
			toast.error(error.message);
			return;
		}
		if (!data.session) {
			setPendingConfirm(account.email);
			try {
				localStorage.setItem("railcare.pendingProfile", JSON.stringify(account));
			} catch {}
			toast.success("Confirm your email to finish creating the account.");
			return;
		}
		enter(account);
	}
	/** Signs into the shared demo accounts — real records in the database. */
	async function enterDemo(forRole) {
		setBusy(true);
		try {
			await ensureDemoAccounts();
			const creds = forRole === "doctor" ? DEMO_CREDENTIALS.doctor : DEMO_CREDENTIALS.passenger;
			const { data, error } = await supabase.auth.signInWithPassword(creds);
			if (error || !data.user) {
				toast.error("Demo sign-in unavailable right now.");
				return;
			}
			enter(await loadAccount(data.user.id) ?? (forRole === "doctor" ? DEMO_DOCTOR : DEMO_PASSENGER));
		} finally {
			setBusy(false);
		}
	}
	(0, import_react.useEffect)(() => {
		if (!j.authReady || j.account) return;
		(async () => {
			const { data } = await supabase.auth.getUser();
			if (!data.user) return;
			const raw = localStorage.getItem("railcare.pendingProfile");
			if (!raw) return;
			localStorage.removeItem("railcare.pendingProfile");
			enter({
				...JSON.parse(raw),
				email: data.user.email ?? ""
			});
		})();
	}, [j.authReady]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-[1.05fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative isolate hidden overflow-hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_train_default,
					alt: "Passenger train at a modern railway platform at dusk",
					width: 1600,
					height: 1e3,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/85" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-full flex-col justify-between p-12 text-navy-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold tracking-tight",
								children: "Rail Chikitsak"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "max-w-md font-display text-5xl font-semibold leading-[1.05] tracking-tight",
							children: ["One tap.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-accent",
								children: "The response starts."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-sm leading-relaxed text-navy-foreground/70",
							children: "From emergency detection to medical readiness — before the train reaches the station."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.18em] text-navy-foreground/50",
							children: "“Every second matters.”"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "flex items-center justify-center px-5 py-12 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { className: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-semibold tracking-tight",
								children: "Rail Chikitsak"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex justify-end lg:mt-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), " Every second matters"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-4xl font-semibold tracking-tight",
						children: t("auth.tagline")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("auth.sub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-1 rounded-xl border border-border bg-muted/60 p-1",
						children: ["login", "signup"].map((tabKey) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTab(tabKey),
							className: `rounded-lg py-2 text-sm font-medium transition-colors ${tab === tabKey ? "bg-card shadow-elevate" : "text-muted-foreground"}`,
							children: tabKey === "login" ? t("auth.login") : t("auth.signup")
						}, tabKey))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
							icon: User,
							label: "Passenger",
							active: role === "passenger",
							onClick: () => setRole("passenger")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleCard, {
							icon: Stethoscope,
							label: "Doctor",
							active: role === "doctor",
							onClick: () => setRole("doctor")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							className: "h-12 w-full gap-3 text-base",
							onClick: () => void signInWithGoogle(role),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleGlyph, { className: "h-5 w-5" }), "Continue with Google"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
									children: "or use email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
							]
						})]
					}),
					pendingConfirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-border bg-muted/40 p-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Confirm your email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted-foreground",
								children: [
									"We sent a confirmation link to ",
									pendingConfirm,
									". Open it to activate your account, then sign in."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								className: "mt-3 h-9 px-0 text-sm",
								onClick: () => setPendingConfirm(null),
								children: "Back to sign in"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						children: tab === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginForm, {
							role,
							busy,
							onSubmit: (email, password) => void login(email, password, role)
						}) : role === "passenger" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassengerSignup, {
							busy,
							onSubmit: (a, p) => void register(a, p)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorSignup, {
							busy,
							onSubmit: (a, p) => void register(a, p)
						})
					}, `${tab}-${role}`),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
								children: t("auth.quick")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid gap-2 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "h-11 justify-start gap-2",
									disabled: busy,
									onClick: () => void enterDemo("passenger"),
									children: "▶ PASSENGER"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "h-11 justify-start gap-2",
									disabled: busy,
									onClick: () => void enterDemo("doctor"),
									children: "▶ DOCTOR"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/demo",
								className: "mt-3 block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									className: "h-10 w-full text-sm",
									children: t("auth.chooseRole")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[11px] leading-relaxed text-muted-foreground",
								children: [
									"Passenger: ",
									DEMO_PASSENGER.name,
									", age ",
									DEMO_PASSENGER.age,
									" · coach ",
									DEMO_PASSENGER.coach,
									", seat",
									" ",
									DEMO_PASSENGER.seat,
									". Doctor: ",
									DEMO_DOCTOR.name,
									", ",
									DEMO_DOCTOR.specialization,
									" · coach",
									" ",
									DEMO_DOCTOR.coach,
									", seat ",
									DEMO_DOCTOR.seat,
									"."
								]
							})
						]
					})
				]
			})
		})]
	});
}
function GoogleGlyph({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#4285F4",
				d: "M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#34A853",
				d: "M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.1A12 12 0 0 0 12 24Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#FBBC05",
				d: "M5.29 14.28a7.2 7.2 0 0 1 0-4.56v-3.1H1.28a12 12 0 0 0 0 10.76l4.01-3.1Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#EA4335",
				d: "M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.18 15.23 0 12 0A12 12 0 0 0 1.28 6.62l4.01 3.1C6.23 6.88 8.88 4.77 12 4.77Z"
			})
		]
	});
}
function RoleCard({ icon: Icon, label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${active ? "border-foreground/30 bg-card shadow-elevate" : "border-border bg-background hover:border-foreground/15"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `grid h-9 w-9 shrink-0 place-items-center rounded-lg ${active ? "bg-navy text-navy-foreground" : "bg-muted text-muted-foreground"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-sm font-semibold",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[11px] text-muted-foreground",
				children: label === "Doctor" ? "Onboard responder" : "Travelling"
			})]
		})]
	});
}
function Field({ label, name, type = "text", required = true, defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: name,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: name,
			name,
			type,
			required,
			defaultValue
		})]
	});
}
function LoginForm({ role, busy, onSubmit }) {
	function handle(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		onSubmit(String(f.get("email")), String(f.get("password")));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-5 space-y-4",
		onSubmit: handle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Password",
				name: "password",
				type: "password",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				className: "h-12 w-full text-base",
				children: role === "doctor" ? "SIGN IN AS DOCTOR" : "SIGN IN AS PASSENGER"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: "Don't have an account? Use the SIGN UP tab above."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-muted-foreground",
				children: "Accounts, journeys, emergencies and rewards are stored securely on your account."
			})
		]
	});
}
function PassengerSignup({ busy, onSubmit }) {
	function handle(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		onSubmit({
			role: "passenger",
			name: String(f.get("name")),
			mobile: String(f.get("mobile")),
			email: String(f.get("email")),
			age: Number(f.get("age")) || 54,
			bloodGroup: String(f.get("blood") ?? ""),
			emergencyContact: String(f.get("contact") ?? ""),
			allergies: String(f.get("allergies") ?? ""),
			demo: false,
			coach: String(f.get("coach") || "B2"),
			seat: String(f.get("seat") || "41")
		}, String(f.get("password")));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-5 space-y-4",
		onSubmit: handle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				name: "name",
				defaultValue: "Amit Sharma"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Mobile number",
					name: "mobile",
					defaultValue: "DEMO-90000-11122"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Age",
					name: "age",
					type: "number",
					defaultValue: 54
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Password",
				name: "password",
				type: "password",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Emergency contact",
					name: "contact",
					defaultValue: "Meera Sharma"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Blood group",
					name: "blood",
					defaultValue: "B+"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Allergies (optional)",
				name: "allergies",
				required: false,
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Coach",
					name: "coach",
					defaultValue: "B2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Seat",
					name: "seat",
					defaultValue: "41"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				className: "h-12 w-full text-base",
				children: "CREATE PASSENGER ACCOUNT"
			})
		]
	});
}
function DoctorSignup({ busy, onSubmit }) {
	const [willing, setWilling] = (0, import_react.useState)(true);
	function handle(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		onSubmit({
			role: "doctor",
			name: String(f.get("name")),
			mobile: String(f.get("mobile")),
			email: String(f.get("email")),
			specialization: String(f.get("specialization")),
			willing,
			demo: false,
			coach: String(f.get("coach") || "B3"),
			seat: String(f.get("seat") || "28")
		}, String(f.get("password")));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-5 space-y-4",
		onSubmit: handle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Full name",
				name: "name",
				defaultValue: "Dr. Ananya Sharma"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Mobile number",
				name: "mobile",
				defaultValue: "DEMO-90000-55566"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Email",
				name: "email",
				type: "email",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Specialization",
				name: "specialization",
				defaultValue: "Cardiologist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Password",
				name: "password",
				type: "password",
				defaultValue: ""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Coach",
					name: "coach",
					defaultValue: "B3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Seat",
					name: "seat",
					defaultValue: "28"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-3 rounded-xl border border-border p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					checked: willing,
					onCheckedChange: (v) => setWilling(Boolean(v)),
					className: "mt-0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "I am willing to assist passengers during medical emergencies while travelling."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				className: "h-12 w-full text-base",
				children: "CREATE DOCTOR ACCOUNT"
			})
		]
	});
}
//#endregion
export { AuthPage as component };
