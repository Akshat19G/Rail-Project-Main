import { r as __toESM } from "../_runtime.mjs";
import { m as require_react, p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as __exportAll } from "./server-BJDVnsBT.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dwfe-FwJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CtcomgWa.css";
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "cuaenvjfhcmiwwtzsiac",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_gcG_bECZ_B1Zc5Q6zTGr_w_dnHtOJy9",
		"VITE_SUPABASE_URL": "https://cuaenvjfhcmiwwtzsiac.supabase.co"
	}["VITE_SUPABASE_URL"] || process.env["SUPABASE_URL"];
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "cuaenvjfhcmiwwtzsiac",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_gcG_bECZ_B1Zc5Q6zTGr_w_dnHtOJy9",
		"VITE_SUPABASE_URL": "https://cuaenvjfhcmiwwtzsiac.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Check your .env file.`;
		console.error(`[Supabase] ${message}`);
		throw new Error(message);
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			storage: typeof window !== "undefined" ? localStorage : void 0,
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
/**
* Rail Chikitsak — real database access layer.
*
* Every helper here talks to the live backend as the signed-in user (RLS
* applies). Nothing is stored in localStorage any more.
*/
async function loadAccount(userId) {
	const [{ data: profile }, { data: journey }] = await Promise.all([supabase.from("profiles").select("*").eq("id", userId).maybeSingle(), supabase.from("journeys").select("*").eq("user_id", userId).maybeSingle()]);
	if (!profile) return null;
	const role = profile.role === "doctor" ? "doctor" : "passenger";
	return {
		role,
		name: profile.full_name || "Rail Chikitsak user",
		email: profile.email ?? "",
		mobile: profile.mobile ?? "",
		...profile.age != null ? { age: profile.age } : {},
		...profile.blood_group ? { bloodGroup: profile.blood_group } : {},
		...profile.emergency_contact ? { emergencyContact: profile.emergency_contact } : {},
		...profile.allergies ? { allergies: profile.allergies } : {},
		...profile.specialization ? { specialization: profile.specialization } : {},
		willing: profile.is_responder,
		demo: false,
		coach: journey?.coach ?? (role === "doctor" ? "B3" : "B2"),
		seat: journey?.seat ?? (role === "doctor" ? "28" : "41")
	};
}
async function saveAccount(userId, account) {
	await supabase.from("profiles").upsert({
		id: userId,
		role: account.role,
		full_name: account.name,
		mobile: account.mobile || null,
		email: account.email || null,
		age: account.age ?? null,
		blood_group: account.bloodGroup || null,
		emergency_contact: account.emergencyContact || null,
		allergies: account.allergies || null,
		specialization: account.specialization || null,
		is_responder: account.role === "doctor" ? account.willing ?? true : false
	}, { onConflict: "id" });
	const { data: existing } = await supabase.from("journeys").select("id").eq("user_id", userId).maybeSingle();
	const journey = {
		role: account.role,
		coach: account.coach,
		seat: account.seat,
		available: account.role === "doctor" ? account.willing ?? true : false
	};
	if (existing) await supabase.from("journeys").update(journey).eq("id", existing.id);
	else await supabase.from("journeys").insert({
		user_id: userId,
		...journey
	});
}
function asStation(value) {
	return STATIONS.includes(value) ? value : STATIONS[0];
}
async function createEmergency(input) {
	const { data, error } = await supabase.from("emergencies").insert({
		code: input.code,
		passenger_id: input.passengerId,
		passenger_name: input.passengerName,
		passenger_age: input.passengerAge ?? null,
		blood_group: input.bloodGroup ?? null,
		emergency_contact: input.emergencyContact ?? null,
		coach: input.coach,
		seat: input.seat,
		current_station: input.station,
		emergency_type: input.emergencyType,
		symptoms: input.symptoms,
		priority: input.priority,
		triage_reason: input.triageReason,
		status: "TRIAGE_COMPLETE"
	}).select("id").maybeSingle();
	if (error) console.error("[railcare] createEmergency", error.message);
	return data?.id ?? null;
}
async function updateEmergency(id, patch) {
	const { error } = await supabase.from("emergencies").update(patch).eq("id", id);
	if (error) console.error("[railcare] updateEmergency", error.message);
}
async function logEmergencyEvent(emergencyId, detail, actor = "System") {
	await supabase.from("emergency_events").insert({
		emergency_id: emergencyId,
		event_type: "TIMELINE",
		actor,
		detail
	});
}
async function loadHistory(userId) {
	const { data } = await supabase.from("emergencies").select("*").eq("passenger_id", userId).order("created_at", { ascending: false }).limit(20);
	return (data ?? []).map((row) => ({
		id: row.code,
		at: row.created_at,
		station: asStation(row.current_station),
		type: row.emergency_type,
		priority: row.priority ?? "—",
		doctor: row.assigned_doctor_name,
		hospital: row.hospital_name,
		outcome: row.resolution ?? (row.hospital_notified ? "Hospital contacted" : "Onboard response")
	}));
}
/** Most recent SOS raised on the train, used by the doctor console. */
async function loadLatestEmergency() {
	const { data } = await supabase.from("emergencies").select("*").neq("status", "ARCHIVED").order("created_at", { ascending: false }).limit(1).maybeSingle();
	if (!data) return null;
	return {
		code: data.code,
		passengerName: data.passenger_name,
		age: data.passenger_age,
		coach: data.coach,
		seat: data.seat,
		station: asStation(data.current_station),
		emergencyType: data.emergency_type,
		symptoms: data.symptoms,
		priority: data.priority ?? "MEDIUM",
		triageReason: data.triage_reason ?? ""
	};
}
async function clearHistoryFor(userId) {
	await supabase.from("emergencies").update({ status: "ARCHIVED" }).eq("passenger_id", userId);
}
async function loadReports() {
	const { data } = await supabase.from("emergency_reports").select("*").order("created_at", { ascending: false }).limit(50);
	return data ?? [];
}
async function insertReport(input) {
	const { data, error } = await supabase.from("emergency_reports").insert({
		emergency_code: input.emergencyCode,
		reporter_id: input.reporterId,
		reporter_role: input.reporterRole,
		reported_user_id: input.reportedUserId,
		reason: input.reason,
		description: input.description,
		status: "SUBMITTED"
	}).select("*").maybeSingle();
	if (error) console.error("[railcare] insertReport", error.message);
	return data ?? null;
}
async function patchReport(id, patch) {
	const { error } = await supabase.from("emergency_reports").update(patch).eq("id", id);
	if (error) console.error("[railcare] patchReport", error.message);
}
async function loadRewards(userId) {
	const [{ data: tx }, { data: redeemed }] = await Promise.all([supabase.from("reward_transactions").select("id, label, points, kind, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(50), supabase.from("redeemed_rewards").select("id, reward_id, name, detail, cost, code, created_at").eq("user_id", userId).order("created_at", { ascending: false }).limit(50)]);
	return {
		tx: tx ?? [],
		redeemed: redeemed ?? []
	};
}
async function insertRewardTx(userId, label, points, kind) {
	const { data, error } = await supabase.from("reward_transactions").insert({
		user_id: userId,
		label,
		points,
		kind
	}).select("id, label, points, kind, created_at").maybeSingle();
	if (error) console.error("[railcare] insertRewardTx", error.message);
	return data ?? null;
}
async function insertRedeemed(userId, reward, code) {
	const { data, error } = await supabase.from("redeemed_rewards").insert({
		user_id: userId,
		reward_id: reward.id,
		name: reward.name,
		detail: reward.detail,
		cost: reward.cost,
		code
	}).select("id, reward_id, name, detail, cost, code, created_at").maybeSingle();
	if (error) console.error("[railcare] insertRedeemed", error.message);
	return data ?? null;
}
async function loadTrustScore(userId) {
	const { data } = await supabase.from("profiles").select("trust_score").eq("id", userId).maybeSingle();
	return data?.trust_score ?? null;
}
async function saveTrustScore(userId, score) {
	await supabase.from("profiles").update({ trust_score: score }).eq("id", userId);
}
async function countEmergenciesFor(userId) {
	const { count } = await supabase.from("emergencies").select("id", {
		count: "exact",
		head: true
	}).eq("passenger_id", userId);
	return count ?? 0;
}
/**
* Rail Chikitsak — self-contained demo store.
* SIMULATED DEMO DATA only. No railway, IRCTC, GPS, hospital or SMS system is contacted.
*/
var STATIONS = [
	"Pune Central",
	"Talegaon",
	"Lonavala",
	"Karjat",
	"Kalyan",
	"Thane",
	"Mumbai Central"
];
var HOSPITALS = {
	"Pune Central": {
		name: "Pune Government Medical Center",
		contact: "DEMO CONTACT · 100-2001",
		ambulance: "RC-AMB-01"
	},
	Talegaon: {
		name: "Talegaon Government Medical Center",
		contact: "DEMO CONTACT · 100-2002",
		ambulance: "RC-AMB-04"
	},
	Lonavala: {
		name: "Lonavala Government Medical Center",
		contact: "DEMO CONTACT · 100-2003",
		ambulance: "RC-AMB-02"
	},
	Karjat: {
		name: "Karjat Government Medical Center",
		contact: "DEMO CONTACT · 100-2004",
		ambulance: "RC-AMB-07"
	},
	Kalyan: {
		name: "Kalyan Government Medical Center",
		contact: "DEMO CONTACT · 100-2005",
		ambulance: "RC-AMB-03"
	},
	Thane: {
		name: "Thane Government Medical Center",
		contact: "DEMO CONTACT · 100-2006",
		ambulance: "RC-AMB-05"
	},
	"Mumbai Central": {
		name: "Mumbai Government Medical Center",
		contact: "DEMO CONTACT · 100-2007",
		ambulance: "RC-AMB-09"
	}
};
var EMERGENCY_TYPES = [
	{
		id: "chest",
		icon: "❤️",
		label: "Chest Pain",
		weight: 4
	},
	{
		id: "breathing",
		icon: "🫁",
		label: "Breathing Difficulty",
		weight: 4
	},
	{
		id: "fainting",
		icon: "🧠",
		label: "Fainting / Seizure",
		weight: 3
	},
	{
		id: "injury",
		icon: "🩸",
		label: "Injury / Bleeding",
		weight: 3
	},
	{
		id: "illness",
		icon: "🌡️",
		label: "Severe Illness",
		weight: 2
	},
	{
		id: "other",
		icon: "⚠️",
		label: "Other",
		weight: 1
	}
];
var TRAIN = "RC Express 2047";
/** Onboard medical responders travelling on the train. */
var DOCTOR_POOL = [
	{
		name: "Dr. Ananya Sharma",
		specialization: "Cardiologist",
		coach: "B3",
		seat: "28"
	},
	{
		name: "Dr. Rohan Mehta",
		specialization: "Emergency Medicine",
		coach: "A1",
		seat: "12"
	},
	{
		name: "Dr. Kavita Nair",
		specialization: "General Physician",
		coach: "B1",
		seat: "07"
	},
	{
		name: "Dr. Imran Qureshi",
		specialization: "Pulmonologist",
		coach: "S4",
		seat: "33"
	},
	{
		name: "Dr. Neha Deshpande",
		specialization: "Anaesthesiologist",
		coach: "B5",
		seat: "19"
	},
	{
		name: "Dr. Arjun Rao",
		specialization: "Orthopaedic Surgeon",
		coach: "A2",
		seat: "44"
	}
];
/** Randomly notify 2–3 onboard responders. */
function pickResponders() {
	return [...DOCTOR_POOL].sort(() => Math.random() - .5).slice(0, 2 + Math.floor(Math.random() * 2));
}
var DEMO_PASSENGER = {
	role: "passenger",
	demo: true,
	name: "Amit Sharma",
	email: "amit@demo.railcare.ai",
	mobile: "DEMO-90000-11122",
	age: 54,
	bloodGroup: "B+",
	emergencyContact: "Meera Sharma · DEMO-90000-33344",
	coach: "B2",
	seat: "41"
};
var DEMO_DOCTOR = {
	role: "doctor",
	demo: true,
	name: "Dr. Ananya Sharma",
	email: "ananya@demo.railcare.ai",
	mobile: "DEMO-90000-55566",
	specialization: "Cardiologist",
	willing: true,
	coach: "B3",
	seat: "28"
};
var JOURNEY_MS = 6e4;
var LEG_MS = JOURNEY_MS / (STATIONS.length - 1);
var JourneyContext = (0, import_react.createContext)(null);
function clock() {
	return (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", { hour12: false });
}
function newEmergencyId() {
	return `RC-EMG-${1e3 + Math.floor(Math.random() * 8999)}`;
}
function formatCountdown(s) {
	const m = Math.floor(Math.max(0, s) / 60);
	const sec = Math.max(0, s) % 60;
	return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function RailCareJourneyProvider({ children }) {
	const [account, setAccount] = (0, import_react.useState)(null);
	const [authReady, setAuthReady] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [emergency, setEmergency] = (0, import_react.useState)(null);
	const [timeline, setTimeline] = (0, import_react.useState)([]);
	const [history, setHistory] = (0, import_react.useState)([]);
	const timers = (0, import_react.useRef)([]);
	const [userId, setUserId] = (0, import_react.useState)(null);
	const rowId = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function hydrate(uid) {
			if (!uid) {
				if (!active) return;
				setAccount(null);
				setHistory([]);
				setAuthReady(true);
				return;
			}
			const [acc, hist] = await Promise.all([loadAccount(uid), loadHistory(uid)]);
			if (!active) return;
			setAccount(acc);
			setHistory(hist);
			setAuthReady(true);
		}
		supabase.auth.getSession().then(({ data }) => {
			const uid = data.session?.user.id ?? null;
			setUserId(uid);
			hydrate(uid);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			const uid = session?.user.id ?? null;
			setUserId(uid);
			if (event === "SIGNED_OUT") {
				setAccount(null);
				setHistory([]);
				return;
			}
			if (event === "SIGNED_IN" || event === "USER_UPDATED") hydrate(uid);
		});
		return () => {
			active = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	const clearHistory = (0, import_react.useCallback)(() => {
		setHistory([]);
		if (userId) clearHistoryFor(userId);
	}, [userId]);
	const clearTimers = (0, import_react.useCallback)(() => {
		timers.current.forEach(clearTimeout);
		timers.current = [];
	}, []);
	(0, import_react.useEffect)(() => () => clearTimers(), [clearTimers]);
	const push = (0, import_react.useCallback)((label) => {
		setTimeline((t) => {
			if (t.some((e) => e.label === label)) return t;
			if (rowId.current) logEmergencyEvent(rowId.current, label);
			return [...t, {
				time: clock(),
				label
			}];
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase !== "running" || paused) return;
		const id = setInterval(() => {
			setElapsed((e) => {
				const next = e + 100;
				if (next >= 6e4) {
					setPhase("completed");
					return JOURNEY_MS;
				}
				return next;
			});
		}, 100);
		return () => clearInterval(id);
	}, [phase, paused]);
	const stationIndex = Math.min(Math.floor(elapsed / LEG_MS), STATIONS.length - 1);
	const liveStation = STATIONS[stationIndex];
	const currentStation = liveStation;
	const nextStation = stationIndex < STATIONS.length - 1 ? STATIONS[stationIndex + 1] : null;
	const progress = Math.round(elapsed / JOURNEY_MS * 100);
	const remaining = Math.max(0, Math.ceil((JOURNEY_MS - elapsed) / 1e3));
	/** Called after a real sign-in / sign-up — persists the profile + journey. */
	const signIn = (0, import_react.useCallback)((a) => {
		setAccount(a);
		(async () => {
			const { data } = await supabase.auth.getUser();
			const uid = data.user?.id;
			if (!uid) return;
			setUserId(uid);
			await saveAccount(uid, a);
			setHistory(await loadHistory(uid));
		})();
	}, []);
	const signOut = (0, import_react.useCallback)(() => {
		setAccount(null);
		setHistory([]);
		rowId.current = null;
		supabase.auth.signOut();
	}, []);
	const start = (0, import_react.useCallback)(() => {
		clearTimers();
		setElapsed(0);
		rowId.current = null;
		setEmergency(null);
		setTimeline([]);
		setPaused(false);
		setPhase("running");
	}, [clearTimers]);
	const reset = (0, import_react.useCallback)(() => {
		clearTimers();
		setElapsed(0);
		rowId.current = null;
		setEmergency(null);
		setTimeline([]);
		setPaused(false);
		setPhase("idle");
	}, [clearTimers]);
	/** Clear the emergency and let the halted train continue its run. */
	const resumeJourney = (0, import_react.useCallback)(() => {
		clearTimers();
		rowId.current = null;
		setEmergency(null);
		setTimeline([]);
		setPaused(false);
		setPhase((p) => p === "emergency" ? "running" : p);
	}, [clearTimers]);
	const pause = (0, import_react.useCallback)(() => setPaused(true), []);
	const resume = (0, import_react.useCallback)(() => setPaused(false), []);
	const jumpTo = (0, import_react.useCallback)((index) => {
		setElapsed(Math.min(Math.max(index, 0), STATIONS.length - 1) * LEG_MS);
		setPhase((p) => p === "emergency" ? p : "running");
	}, []);
	const escalateToHospital = (0, import_react.useCallback)((reason) => {
		setEmergency((e) => e ? {
			...e,
			hospitalStatus: "ALERTED",
			ambulanceStatus: "PREPARING",
			escalationReason: reason
		} : e);
		push("Hospital escalation triggered");
		push("Medical team preparing");
		timers.current.push(setTimeout(() => {
			setEmergency((e) => e ? {
				...e,
				ambulanceStatus: "READY"
			} : e);
			push("Ambulance ready at the halt");
		}, 1500));
	}, [push]);
	(0, import_react.useEffect)(() => {
		if (!emergency || emergency.stage !== "response" || emergency.doctorStatus !== "PENDING") return;
		const id = setInterval(() => {
			setEmergency((e) => {
				if (!e || e.doctorStatus !== "PENDING") return e;
				const next = e.countdown - 1;
				if (next <= 0) return {
					...e,
					countdown: 0,
					doctorStatus: "NO_RESPONSE"
				};
				return {
					...e,
					countdown: next
				};
			});
		}, 1e3);
		return () => clearInterval(id);
	}, [
		emergency?.stage,
		emergency?.doctorStatus,
		emergency?.id
	]);
	(0, import_react.useEffect)(() => {
		if (emergency?.doctorStatus === "NO_RESPONSE" && emergency.hospitalStatus === "IDLE") {
			push("No onboard responder available");
			escalateToHospital(`No onboard doctor was available — the hospital at ${emergency.hospitalStation} has been contacted directly.`);
		}
	}, [
		emergency?.doctorStatus,
		emergency?.hospitalStatus,
		emergency?.hospitalStation,
		escalateToHospital,
		push
	]);
	(0, import_react.useEffect)(() => {
		if (!emergency || emergency.stage !== "response") return;
		const hospitalAlerted = emergency.hospitalStatus === "ALERTED";
		const outcome = hospitalAlerted ? emergency.respondingDoctor ? "Doctor attended · hospital alerted" : "No doctor available · hospital contacted" : emergency.doctorStatus === "ACCEPTED" ? "Onboard doctor attending" : "Searching for medical assistance";
		const record = {
			id: emergency.id,
			at: (/* @__PURE__ */ new Date()).toISOString(),
			station: emergency.station,
			type: emergency.type ?? "Medical emergency",
			priority: emergency.priority ?? "—",
			doctor: emergency.respondingDoctor?.name ?? null,
			hospital: hospitalAlerted ? HOSPITALS[emergency.hospitalStation].name : null,
			outcome
		};
		setHistory((h) => [record, ...h.filter((r) => r.id !== record.id)].slice(0, 20));
		if (!userId || account?.role !== "passenger") return;
		const hospital = HOSPITALS[emergency.hospitalStation];
		let cancelled = false;
		(async () => {
			if (!rowId.current) {
				const id = await createEmergency({
					code: emergency.id,
					passengerId: userId,
					passengerName: emergency.passenger,
					passengerAge: emergency.age ?? account.age,
					bloodGroup: account.bloodGroup,
					emergencyContact: account.emergencyContact,
					coach: emergency.coach,
					seat: emergency.seat,
					station: emergency.station,
					emergencyType: emergency.type ?? "Medical emergency",
					symptoms: emergency.symptoms,
					priority: emergency.priority ?? "MEDIUM",
					triageReason: emergency.triageReason
				});
				if (cancelled) return;
				rowId.current = id;
			}
			if (!rowId.current) return;
			await updateEmergency(rowId.current, {
				status: hospitalAlerted ? "HOSPITAL_ALERTED" : emergency.doctorStatus === "ACCEPTED" ? "DOCTOR_ASSIGNED" : "AWAITING_RESPONDER",
				assigned_doctor_name: emergency.respondingDoctor?.name ?? null,
				doctor_specialization: emergency.respondingDoctor?.specialization ?? null,
				doctor_coach: emergency.respondingDoctor?.coach ?? null,
				assessment: emergency.assessment,
				escalated: hospitalAlerted,
				hospital_notified: hospitalAlerted,
				hospital_name: hospitalAlerted ? hospital.name : null,
				hospital_station: hospitalAlerted ? emergency.hospitalStation : null,
				hospital_contact: hospitalAlerted ? hospital.contact : null,
				ambulance_id: hospitalAlerted ? hospital.ambulance : null,
				ambulance_status: emergency.ambulanceStatus,
				resolution: outcome
			});
		})();
		return () => {
			cancelled = true;
		};
	}, [
		userId,
		account,
		emergency?.id,
		emergency?.stage,
		emergency?.doctorStatus,
		emergency?.hospitalStatus,
		emergency?.ambulanceStatus,
		emergency?.assessment,
		emergency?.respondingDoctor?.name,
		emergency?.priority
	]);
	const baseEmergency = (0, import_react.useCallback)((station, hospitalStation) => ({
		id: newEmergencyId(),
		station,
		hospitalStation,
		stage: "form",
		passenger: account?.role === "passenger" ? account.name : DEMO_PASSENGER.name,
		coach: account?.role === "passenger" ? account.coach : DEMO_PASSENGER.coach,
		seat: account?.role === "passenger" ? account.seat : DEMO_PASSENGER.seat,
		age: (account?.role === "passenger" ? account.age : DEMO_PASSENGER.age) ?? null,
		forSelf: true,
		reportedBy: null,
		relation: null,
		type: null,
		icon: null,
		symptoms: "",
		priority: null,
		triageReason: "",
		notifiedDoctors: pickResponders(),
		respondingDoctor: null,
		doctorStatus: "PENDING",
		countdown: 120,
		assessment: null,
		hospitalStatus: "IDLE",
		ambulanceStatus: "IDLE",
		escalationReason: null
	}), [account]);
	/** The train halts here; if nobody responds onboard, the next halt's hospital is engaged. */
	const haltStation = liveStation;
	const onwardStation = nextStation ?? liveStation;
	const triggerSos = (0, import_react.useCallback)(() => {
		clearTimers();
		setElapsed(stationIndex * LEG_MS);
		setPhase("emergency");
		const em = baseEmergency(haltStation, onwardStation);
		setEmergency(em);
		setTimeline([
			{
				time: clock(),
				label: "SOS activated"
			},
			{
				time: clock(),
				label: `Train halted at ${haltStation}`
			},
			{
				time: clock(),
				label: "Emergency location identified"
			}
		]);
	}, [
		baseEmergency,
		clearTimers,
		haltStation,
		onwardStation,
		stationIndex
	]);
	const triage = (0, import_react.useCallback)((typeId, symptoms) => {
		const type = EMERGENCY_TYPES.find((t) => t.id === typeId) ?? EMERGENCY_TYPES[5];
		const text = symptoms.toLowerCase();
		const boost = (text.includes("breath") ? 1 : 0) + (text.includes("unconscious") || text.includes("faint") ? 1 : 0) + (text.includes("dizz") ? 1 : 0);
		const score = type.weight + boost;
		const priority = score >= 5 ? "CRITICAL" : score >= 4 ? "HIGH" : score >= 3 ? "MEDIUM" : "LOW";
		return {
			type,
			priority,
			triageReason: priority === "CRITICAL" ? "Reported symptoms match a time-critical cardiac/respiratory pattern. Immediate medical response recommended." : priority === "HIGH" ? "Symptoms indicate an urgent condition requiring medical attention at the current station." : "Symptoms suggest a non-critical condition. Monitoring and first-aid support recommended."
		};
	}, []);
	const submitEmergency = (0, import_react.useCallback)(({ typeId, symptoms, patient }) => {
		const { type, priority, triageReason } = triage(typeId, symptoms);
		setEmergency((e) => {
			if (!e) return e;
			const forSelf = patient?.forSelf ?? true;
			return {
				...e,
				stage: "triage",
				type: type.label,
				icon: type.icon,
				symptoms,
				priority,
				triageReason,
				forSelf,
				reportedBy: forSelf ? null : e.passenger,
				relation: forSelf ? null : patient?.relation?.trim() || null,
				passenger: forSelf ? e.passenger : patient?.name?.trim() || "Unknown passenger",
				coach: forSelf ? e.coach : patient?.coach?.trim() || e.coach,
				seat: forSelf ? e.seat : patient?.seat?.trim() || e.seat,
				age: forSelf ? e.age : patient?.age ?? null
			};
		});
		push(patient && !patient.forSelf ? `Emergency reported on behalf of ${patient.name?.trim() || "another passenger"}` : "Emergency details submitted");
		clearTimers();
		timers.current.push(setTimeout(() => {
			setEmergency((e) => e ? {
				...e,
				stage: "response"
			} : e);
			push("AI triage completed");
			setEmergency((e) => {
				if (e) push(`${e.notifiedDoctors.length} onboard medical responders alerted`);
				return e;
			});
		}, 1100));
		timers.current.push(setTimeout(() => {
			setEmergency((e) => {
				if (!e || e.doctorStatus !== "PENDING") return e;
				if (!(Math.random() < .6)) return {
					...e,
					doctorStatus: "NO_RESPONSE",
					countdown: 0
				};
				const doc = e.notifiedDoctors[Math.floor(Math.random() * e.notifiedDoctors.length)] ?? DOCTOR_POOL[0];
				push(`${doc.name} (${doc.specialization}) accepted — coach ${doc.coach}`);
				return {
					...e,
					doctorStatus: "ACCEPTED",
					respondingDoctor: doc
				};
			});
		}, 2600 + Math.floor(Math.random() * 1800)));
	}, [
		clearTimers,
		push,
		triage
	]);
	/** Incoming passenger SOS arriving at the doctor console. */
	const triggerIncomingEmergency = (0, import_react.useCallback)(() => {
		const { type, priority, triageReason } = triage("chest", "Chest pain and breathlessness, feeling dizzy");
		clearTimers();
		setElapsed(stationIndex * LEG_MS);
		setPhase("emergency");
		setEmergency({
			...baseEmergency(haltStation, onwardStation),
			passenger: DEMO_PASSENGER.name,
			coach: DEMO_PASSENGER.coach,
			seat: DEMO_PASSENGER.seat,
			age: DEMO_PASSENGER.age ?? null,
			stage: "response",
			type: type.label,
			icon: type.icon,
			symptoms: "Chest pain + breathlessness",
			priority,
			triageReason
		});
		loadLatestEmergency().then((live) => {
			if (!live) return;
			setEmergency((e) => e ? {
				...e,
				id: live.code,
				passenger: live.passengerName,
				age: live.age,
				coach: live.coach,
				seat: live.seat,
				type: live.emergencyType,
				symptoms: live.symptoms,
				priority: live.priority,
				triageReason: live.triageReason || e.triageReason
			} : e);
		});
		setTimeline([
			{
				time: clock(),
				label: "SOS activated"
			},
			{
				time: clock(),
				label: `Train halted at ${haltStation}`
			},
			{
				time: clock(),
				label: "AI triage completed"
			},
			{
				time: clock(),
				label: "Onboard medical responder notified"
			}
		]);
	}, [
		baseEmergency,
		clearTimers,
		haltStation,
		onwardStation,
		stationIndex,
		triage
	]);
	const acceptEmergency = (0, import_react.useCallback)(() => {
		const self = account?.role === "doctor" ? {
			name: account.name,
			specialization: account.specialization ?? "Medical responder",
			coach: account.coach,
			seat: account.seat
		} : null;
		setEmergency((e) => e ? {
			...e,
			doctorStatus: "ACCEPTED",
			respondingDoctor: self ?? e.respondingDoctor
		} : e);
		push("Doctor accepted the emergency");
	}, [account, push]);
	const declineEmergency = (0, import_react.useCallback)(() => {
		setEmergency((e) => e ? {
			...e,
			doctorStatus: "DECLINED"
		} : e);
		push("Doctor declined — escalating");
		escalateToHospital("The onboard medical responder declined the emergency.");
	}, [escalateToHospital, push]);
	const setAssessment = (0, import_react.useCallback)((a) => {
		setEmergency((e) => e ? {
			...e,
			assessment: a
		} : e);
		push("Medical assessment completed");
		if (a === "MONITOR") push("First aid / monitoring recommended");
		else escalateToHospital(a === "CRITICAL" ? "Doctor marked the case as critical — immediate hospital response required." : "Doctor determined that hospital assistance is required.");
	}, [escalateToHospital, push]);
	const escalateAfterMonitoring = (0, import_react.useCallback)(() => {
		push("Condition worsened during monitoring");
		escalateToHospital("Doctor escalated after monitoring — hospital assistance now required.");
	}, [escalateToHospital, push]);
	const fastForwardTimer = (0, import_react.useCallback)(() => {
		setEmergency((e) => e && e.doctorStatus === "PENDING" ? {
			...e,
			countdown: 5
		} : e);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		account,
		authReady,
		signIn,
		signOut,
		phase,
		paused,
		elapsed,
		progress,
		remaining,
		stationIndex,
		currentStation,
		nextStation,
		emergency,
		timeline,
		history,
		clearHistory,
		start,
		pause,
		resume,
		reset,
		resumeJourney,
		jumpTo,
		triggerSos,
		submitEmergency,
		triggerIncomingEmergency,
		acceptEmergency,
		declineEmergency,
		setAssessment,
		escalateAfterMonitoring,
		fastForwardTimer
	}), [
		account,
		authReady,
		signIn,
		signOut,
		phase,
		paused,
		elapsed,
		progress,
		remaining,
		stationIndex,
		currentStation,
		nextStation,
		emergency,
		timeline,
		history,
		clearHistory,
		start,
		pause,
		resume,
		reset,
		resumeJourney,
		jumpTo,
		triggerSos,
		submitEmergency,
		triggerIncomingEmergency,
		acceptEmergency,
		declineEmergency,
		setAssessment,
		escalateAfterMonitoring,
		fastForwardTimer
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyContext.Provider, {
		value,
		children
	});
}
function useJourney() {
	const ctx = (0, import_react.useContext)(JourneyContext);
	if (!ctx) throw new Error("useJourney must be used inside RailCareJourneyProvider");
	return ctx;
}
var REPORT_REASONS = [
	"Suspected prank / false emergency",
	"Repeated misuse",
	"Abusive behavior",
	"Deliberate misinformation",
	"Other"
];
var TIERS = [
	{
		tier: "RESPONDER",
		label: "Responder",
		min: 0,
		max: 499
	},
	{
		tier: "SILVER",
		label: "Silver Responder",
		min: 500,
		max: 999
	},
	{
		tier: "GOLD",
		label: "Gold Responder",
		min: 1e3,
		max: 1999
	},
	{
		tier: "ELITE",
		label: "Elite Responder",
		min: 2e3,
		max: Number.POSITIVE_INFINITY
	}
];
function tierFor(points) {
	return TIERS.find((t) => points >= t.min && points <= t.max)?.tier ?? "RESPONDER";
}
function nextTier(points) {
	return TIERS.find((t) => t.min > points) ?? null;
}
var EARNING_RULES = [
	{
		label: "Emergency acknowledged",
		points: 20
	},
	{
		label: "Emergency responsibly assessed",
		points: 40
	},
	{
		label: "Hospital escalation when clinically appropriate",
		points: 50
	},
	{
		label: "Completing responder availability period",
		points: 10
	},
	{
		label: "Verified emergency assistance",
		points: 75
	}
];
var REDEEMABLES = [
	{
		id: "travel",
		name: "Railway Travel Voucher",
		cost: 1e3,
		detail: "Travel credit with a partner railway operator."
	},
	{
		id: "cafe",
		name: "Partner Café Voucher",
		cost: 500,
		detail: "Refreshment credit at participating station cafés."
	},
	{
		id: "cert",
		name: "Emergency Response Certificate",
		cost: 300,
		detail: "Formal record of responder participation."
	},
	{
		id: "badge",
		name: "Rail Chikitsak Recognition Badge",
		cost: 250,
		detail: "Verified responder badge on your profile."
	}
];
var BASE_TRUST_SCORE = 1e3;
var EMPTY_TRUST = {
	userId: "",
	score: BASE_TRUST_SCORE,
	status: "Good Standing",
	verifiedIncidents: 0,
	warnings: 0,
	emergencyRequests: 0,
	successfulResponses: 0
};
var EMPTY_REWARDS = {
	userId: "",
	points: 0,
	tier: "RESPONDER",
	history: []
};
var DEFAULT_IMPACT = {
	assisted: 12,
	successful: 9,
	escalations: 3,
	reliability: 98
};
var TrustContext = (0, import_react.createContext)(null);
/** Legacy local cache cleanup — all trust data now lives in the database. */
function clearTrustStorage() {
	try {
		localStorage.removeItem("railcare.trust.v1");
	} catch {}
}
function voucherCode() {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let out = "";
	for (let i = 0; i < 8; i += 1) out += chars[Math.floor(Math.random() * 32)];
	return `RC-${out.slice(0, 4)}-${out.slice(4)}`;
}
function toReport(row) {
	return {
		id: row.id,
		emergencyId: row.emergency_code,
		reporterId: row.reporter_id,
		reporterRole: row.reporter_role === "passenger" ? "passenger" : "doctor",
		reportedUserId: row.reported_user_id ?? "",
		reason: row.reason,
		description: row.description,
		status: row.status,
		reviewResult: row.review_result,
		resolution: row.resolution,
		createdAt: row.created_at
	};
}
function statusFor(verified) {
	return verified >= 3 ? "Restricted" : verified >= 1 ? "Warning" : "Good Standing";
}
function RailCareTrustProvider({ children }) {
	const [userId, setUserId] = (0, import_react.useState)(null);
	const [trust, setTrust] = (0, import_react.useState)(EMPTY_TRUST);
	const [rewards, setRewards] = (0, import_react.useState)(EMPTY_REWARDS);
	const [redeemedRewards, setRedeemedRewards] = (0, import_react.useState)([]);
	const [reports, setReports] = (0, import_react.useState)([]);
	const [feedback, setFeedback] = (0, import_react.useState)([]);
	const [available, setAvailable] = (0, import_react.useState)(true);
	const hydrate = (0, import_react.useCallback)(async (uid) => {
		if (!uid) {
			setTrust(EMPTY_TRUST);
			setRewards(EMPTY_REWARDS);
			setRedeemedRewards([]);
			setReports([]);
			return;
		}
		const [score, emergencies, rows, wallet] = await Promise.all([
			loadTrustScore(uid),
			countEmergenciesFor(uid),
			loadReports(),
			loadRewards(uid)
		]);
		const list = rows.map(toReport);
		const verified = list.filter((r) => r.reportedUserId === uid && r.status === "VERIFIED").length;
		setReports(list);
		setTrust({
			userId: uid,
			score: score ?? BASE_TRUST_SCORE,
			status: statusFor(verified),
			verifiedIncidents: verified,
			warnings: verified,
			emergencyRequests: emergencies,
			successfulResponses: emergencies
		});
		const points = wallet.tx.reduce((sum, t) => sum + t.points, 0);
		setRewards({
			userId: uid,
			points,
			tier: tierFor(points),
			history: wallet.tx.map((t) => ({
				id: t.id,
				label: t.label,
				points: t.points,
				at: t.created_at,
				kind: t.kind === "REDEEM" ? "REDEEM" : "EARN"
			}))
		});
		setRedeemedRewards(wallet.redeemed.map((r) => ({
			id: r.id,
			rewardId: r.reward_id,
			name: r.name,
			detail: r.detail,
			cost: r.cost,
			code: r.code,
			at: r.created_at
		})));
	}, []);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			const uid = data.session?.user.id ?? null;
			setUserId(uid);
			hydrate(uid);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
			const uid = session?.user.id ?? null;
			setUserId(uid);
			if (event === "SIGNED_OUT") hydrate(null);
			else if (event === "SIGNED_IN" || event === "USER_UPDATED") hydrate(uid);
		});
		return () => sub.subscription.unsubscribe();
	}, [hydrate]);
	const submitReport = (0, import_react.useCallback)((input) => {
		const optimistic = {
			id: `pending-${Date.now()}`,
			emergencyId: input.emergencyId,
			reporterId: userId ?? "",
			reporterRole: input.reporterRole ?? "doctor",
			reportedUserId: input.reportedUserId ?? "",
			reason: input.reason,
			description: input.description,
			status: "SUBMITTED",
			reviewResult: null,
			resolution: null,
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		setReports((r) => [optimistic, ...r]);
		if (userId) (async () => {
			const row = await insertReport({
				emergencyCode: input.emergencyId,
				reporterId: userId,
				reporterRole: optimistic.reporterRole,
				reportedUserId: input.reportedUserId ?? null,
				reason: String(input.reason),
				description: input.description
			});
			if (row) {
				setReports((r) => r.map((x) => x.id === optimistic.id ? toReport(row) : x));
				setTimeout(() => {
					patchReport(row.id, {
						status: "UNDER_REVIEW",
						review_result: null,
						resolution: null
					});
					setReports((r) => r.map((x) => x.id === row.id ? {
						...x,
						status: "UNDER_REVIEW"
					} : x));
				}, 900);
			}
		})();
		return optimistic;
	}, [userId]);
	const verifyReport = (0, import_react.useCallback)((reportId) => {
		const patch = {
			status: "VERIFIED",
			review_result: "Verified misuse",
			resolution: "Passenger warning issued"
		};
		setReports((r) => r.map((x) => x.id === reportId ? {
			...x,
			status: "VERIFIED",
			reviewResult: patch.review_result,
			resolution: patch.resolution
		} : x));
		if (!reportId.startsWith("pending-")) patchReport(reportId, patch);
		setTrust((t) => {
			const verified = t.verifiedIncidents + 1;
			const score = Math.max(0, t.score - 100);
			if (userId) saveTrustScore(userId, score);
			return {
				...t,
				score,
				verifiedIncidents: verified,
				warnings: t.warnings + 1,
				status: statusFor(verified)
			};
		});
	}, [userId]);
	const dismissReport = (0, import_react.useCallback)((reportId) => {
		const patch = {
			status: "DISMISSED",
			review_result: "No misuse found",
			resolution: "No action taken"
		};
		setReports((r) => r.map((x) => x.id === reportId ? {
			...x,
			status: "DISMISSED",
			reviewResult: patch.review_result,
			resolution: patch.resolution
		} : x));
		if (!reportId.startsWith("pending-")) patchReport(reportId, patch);
	}, []);
	const earnPoints = (0, import_react.useCallback)((label, points) => {
		let shouldPersist = false;
		setRewards((a) => {
			if (a.history.some((h) => h.label === label && h.kind === "EARN")) return a;
			shouldPersist = true;
			const next = a.points + points;
			return {
				...a,
				points: next,
				tier: tierFor(next),
				history: [{
					id: `local-${Date.now()}`,
					label,
					points,
					at: (/* @__PURE__ */ new Date()).toISOString(),
					kind: "EARN"
				}, ...a.history].slice(0, 50)
			};
		});
		if (userId && shouldPersist) insertRewardTx(userId, label, points, "EARN");
	}, [userId]);
	const redeem = (0, import_react.useCallback)((reward) => {
		if (rewards.points < reward.cost) return null;
		const issued = {
			id: `local-${Date.now()}`,
			rewardId: reward.id,
			name: reward.name,
			detail: reward.detail,
			cost: reward.cost,
			code: voucherCode(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const next = rewards.points - reward.cost;
		setRewards((a) => ({
			...a,
			points: next,
			tier: tierFor(next),
			history: [{
				id: `local-redeem-${Date.now()}`,
				label: `Redeemed · ${reward.name}`,
				points: -reward.cost,
				at: issued.at,
				kind: "REDEEM"
			}, ...a.history].slice(0, 50)
		}));
		setRedeemedRewards((list) => [issued, ...list]);
		if (userId) (async () => {
			await insertRewardTx(userId, `Redeemed · ${reward.name}`, -reward.cost, "REDEEM");
			const row = await insertRedeemed(userId, reward, issued.code);
			if (row) setRedeemedRewards((list) => list.map((x) => x.id === issued.id ? {
				...issued,
				id: row.id
			} : x));
		})();
		return issued;
	}, [rewards.points, userId]);
	const addFeedback = (0, import_react.useCallback)((f) => {
		setFeedback((list) => [{
			...f,
			id: `${Date.now()}`,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...list]);
	}, []);
	const resetTrustLayer = (0, import_react.useCallback)(() => {
		setFeedback([]);
		setAvailable(true);
		hydrate(userId);
	}, [hydrate, userId]);
	const value = (0, import_react.useMemo)(() => ({
		trust,
		rewards,
		redeemedRewards,
		impact: DEFAULT_IMPACT,
		reports,
		feedback,
		available,
		setAvailable,
		submitReport,
		verifyReport,
		dismissReport,
		earnPoints,
		redeem,
		addFeedback,
		resetTrustLayer
	}), [
		trust,
		rewards,
		redeemedRewards,
		reports,
		feedback,
		available,
		submitReport,
		verifyReport,
		dismissReport,
		earnPoints,
		redeem,
		addFeedback,
		resetTrustLayer
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustContext.Provider, {
		value,
		children
	});
}
function useTrust() {
	const ctx = (0, import_react.useContext)(TrustContext);
	if (!ctx) throw new Error("useTrust must be used inside RailCareTrustProvider");
	return ctx;
}
/**
* Lightweight in-app localisation for Rail Chikitsak.
* English plus seven Indian languages. Strings live here so the UI never
* hardcodes copy that needs to be translated.
*/
var LOCALES = [
	{
		code: "en",
		label: "English",
		native: "English"
	},
	{
		code: "hi",
		label: "Hindi",
		native: "हिन्दी"
	},
	{
		code: "mr",
		label: "Marathi",
		native: "मराठी"
	},
	{
		code: "bn",
		label: "Bengali",
		native: "বাংলা"
	},
	{
		code: "ta",
		label: "Tamil",
		native: "தமிழ்"
	},
	{
		code: "te",
		label: "Telugu",
		native: "తెలుగు"
	},
	{
		code: "gu",
		label: "Gujarati",
		native: "ગુજરાતી"
	},
	{
		code: "kn",
		label: "Kannada",
		native: "ಕನ್ನಡ"
	}
];
var en = {
	"hero.title": "Every second matters",
	"hero.titleAccent": "on the rails.",
	"hero.body": "Intelligent medical emergency response for railway journeys. One tap alerts the network, AI assesses the situation, and the nearest medical facility is prepared before the train arrives.",
	"hero.explore": "EXPLORE HOW IT WORKS",
	"hero.get": "GET STARTED",
	"nav.overview": "Overview",
	"nav.emergency": "Emergency",
	"nav.rewards": "Rewards",
	"nav.impact": "Impact",
	"nav.reports": "Reports",
	"nav.profile": "Profile",
	"nav.settings": "Settings",
	"nav.journey": "Journey",
	"nav.trust": "Trust",
	"nav.history": "History",
	"settings.title": "Settings",
	"settings.desc": "Language, appearance, accessibility and alerts for this device.",
	"settings.appearance": "Appearance",
	"settings.theme": "Theme",
	"settings.light": "Light",
	"settings.dark": "Dark",
	"settings.system": "System",
	"settings.accessibility": "Accessibility",
	"settings.textSize": "Text size",
	"settings.contrast": "High contrast",
	"settings.contrast.desc": "Stronger borders and text for low-light coaches.",
	"settings.motion": "Reduce motion",
	"settings.motion.desc": "Minimise animation for motion sensitivity.",
	"settings.notifications": "Alerts",
	"settings.sound": "Alert sound",
	"settings.sound.desc": "Play a tone when an emergency alert arrives.",
	"settings.toasts": "On-screen alerts",
	"settings.toasts.desc": "Show pop-up notifications for status updates.",
	"settings.data": "Data",
	"settings.reset": "Reset this session",
	"settings.reset.desc": "Clear points, redeemed rewards, reports and journey progress on this device.",
	"settings.saved": "Settings saved",
	"common.small": "Small",
	"common.default": "Default",
	"common.large": "Large",
	"common.on": "On",
	"common.off": "Off",
	"profile.rewards": "Redeemed rewards",
	"profile.rewards.empty": "Nothing redeemed in this session yet.",
	"nav.how": "How it works",
	"nav.features": "Features",
	"nav.safety": "Safety",
	"nav.signin": "Sign in",
	"nav.launch": "Launch app",
	"hero.badge": "Every second matters",
	"hero.sub": "From emergency detection to medical readiness — before the train reaches the station.",
	"hero.cta": "Start now",
	"hero.secondary": "Sign in",
	"auth.tagline": "Every Second Matters.",
	"auth.sub": "AI-assisted medical emergency response for railway journeys.",
	"auth.login": "LOGIN",
	"auth.signup": "SIGN UP",
	"auth.passenger": "Passenger",
	"auth.doctor": "Doctor",
	"auth.travelling": "Travelling",
	"auth.responder": "Onboard responder",
	"auth.quick": "Quick access",
	"auth.chooseRole": "CHOOSE YOUR ROLE →",
	"auth.email": "Email",
	"auth.password": "Password",
	"auth.signInDoctor": "SIGN IN AS DOCTOR",
	"auth.signInPassenger": "SIGN IN AS PASSENGER",
	"lang.label": "Language",
	"lang.title": "Choose language",
	"lang.changed": "Language changed",
	"settings.language.desc": "Choose the language used across Rail Chikitsak.",
	"rewards.title": "Rail Chikitsak Rewards",
	"rewards.balance": "Points balance",
	"rewards.points": "Rail Chikitsak Points",
	"rewards.redeem": "Redeem",
	"rewards.redeemed": "Redeemed",
	"rewards.wallet": "My rewards",
	"rewards.store": "Rewards store",
	"rewards.activity": "Points activity",
	"rewards.earn": "How points are earned"
};
var DICTS = {
	en,
	hi: {
		"hero.title": "हर सेकंड मायने रखता है",
		"hero.titleAccent": "पटरियों पर।",
		"hero.body": "रेल यात्रा के लिए बुद्धिमान चिकित्सा आपात प्रतिक्रिया। एक टैप पूरे नेटवर्क को सूचित करता है, एआई स्थिति का आकलन करता है, और ट्रेन पहुँचने से पहले निकटतम चिकित्सा सुविधा तैयार हो जाती है।",
		"hero.explore": "जानें यह कैसे काम करता है",
		"hero.get": "शुरू करें",
		"nav.overview": "अवलोकन",
		"nav.emergency": "आपात",
		"nav.rewards": "रिवॉर्ड्स",
		"nav.impact": "प्रभाव",
		"nav.reports": "रिपोर्ट",
		"nav.profile": "प्रोफ़ाइल",
		"nav.settings": "सेटिंग्स",
		"nav.journey": "यात्रा",
		"nav.trust": "ट्रस्ट",
		"nav.history": "इतिहास",
		"settings.title": "सेटिंग्स",
		"settings.desc": "इस डिवाइस के लिए भाषा, रूप, सुलभता और अलर्ट।",
		"settings.appearance": "रूप",
		"settings.theme": "थीम",
		"settings.light": "लाइट",
		"settings.dark": "डार्क",
		"settings.system": "सिस्टम",
		"settings.accessibility": "सुलभता",
		"settings.textSize": "टेक्स्ट आकार",
		"settings.contrast": "उच्च कंट्रास्ट",
		"settings.contrast.desc": "कम रोशनी वाले कोच के लिए गहरे बॉर्डर और टेक्स्ट।",
		"settings.motion": "मोशन कम करें",
		"settings.motion.desc": "एनिमेशन कम करें।",
		"settings.notifications": "अलर्ट",
		"settings.sound": "अलर्ट ध्वनि",
		"settings.sound.desc": "आपात अलर्ट आने पर ध्वनि बजाएँ।",
		"settings.toasts": "स्क्रीन अलर्ट",
		"settings.toasts.desc": "स्थिति अपडेट के लिए पॉप-अप दिखाएँ।",
		"settings.data": "डेटा",
		"settings.reset": "यह सत्र रीसेट करें",
		"settings.reset.desc": "पॉइंट, रिडीम किए रिवॉर्ड, रिपोर्ट और यात्रा प्रगति हटाएँ।",
		"settings.saved": "सेटिंग्स सहेजी गईं",
		"common.small": "छोटा",
		"common.default": "सामान्य",
		"common.large": "बड़ा",
		"common.on": "चालू",
		"common.off": "बंद",
		"profile.rewards": "रिडीम किए गए रिवॉर्ड",
		"profile.rewards.empty": "इस सत्र में अभी कुछ रिडीम नहीं किया गया।",
		"nav.how": "यह कैसे काम करता है",
		"nav.features": "विशेषताएँ",
		"nav.safety": "सुरक्षा",
		"nav.signin": "साइन इन",
		"nav.launch": "ऐप खोलें",
		"hero.badge": "हर सेकंड मायने रखता है",
		"hero.sub": "आपात स्थिति की पहचान से लेकर चिकित्सा तैयारी तक — ट्रेन के स्टेशन पहुँचने से पहले।",
		"hero.cta": "अभी शुरू करें",
		"hero.secondary": "साइन इन",
		"auth.tagline": "हर सेकंड मायने रखता है।",
		"auth.sub": "रेल यात्रा के लिए एआई-सहायित चिकित्सा आपात प्रतिक्रिया।",
		"auth.login": "लॉगिन",
		"auth.signup": "साइन अप",
		"auth.passenger": "यात्री",
		"auth.doctor": "डॉक्टर",
		"auth.travelling": "यात्रा कर रहे हैं",
		"auth.responder": "ऑनबोर्ड प्रतिसादकर्ता",
		"auth.quick": "त्वरित पहुँच",
		"auth.chooseRole": "अपनी भूमिका चुनें →",
		"auth.email": "ईमेल",
		"auth.password": "पासवर्ड",
		"auth.signInDoctor": "डॉक्टर के रूप में साइन इन करें",
		"auth.signInPassenger": "यात्री के रूप में साइन इन करें",
		"lang.label": "भाषा",
		"lang.title": "भाषा चुनें",
		"lang.changed": "भाषा बदल दी गई",
		"settings.language.desc": "Rail Chikitsak में उपयोग होने वाली भाषा चुनें।",
		"rewards.title": "रेलकेयर रिवॉर्ड्स",
		"rewards.balance": "पॉइंट बैलेंस",
		"rewards.points": "रेलकेयर पॉइंट्स",
		"rewards.redeem": "रिडीम करें",
		"rewards.redeemed": "रिडीम किया गया",
		"rewards.wallet": "मेरे रिवॉर्ड्स",
		"rewards.store": "रिवॉर्ड स्टोर",
		"rewards.activity": "पॉइंट गतिविधि",
		"rewards.earn": "पॉइंट कैसे मिलते हैं"
	},
	mr: {
		"hero.title": "प्रत्येक सेकंद महत्त्वाचा",
		"hero.titleAccent": "रुळांवर.",
		"hero.body": "रेल्वे प्रवासासाठी बुद्धिमान वैद्यकीय आपत्कालीन प्रतिसाद. एका टॅपने संपूर्ण नेटवर्कला सूचना जाते, एआय स्थितीचे मूल्यांकन करते आणि ट्रेन पोहोचण्यापूर्वी जवळचे रुग्णालय तयार असते.",
		"hero.explore": "हे कसे काम करते पहा",
		"hero.get": "सुरू करा",
		"nav.overview": "आढावा",
		"nav.emergency": "आपत्कालीन",
		"nav.rewards": "रिवॉर्ड्स",
		"nav.impact": "परिणाम",
		"nav.reports": "अहवाल",
		"nav.profile": "प्रोफाइल",
		"nav.settings": "सेटिंग्ज",
		"nav.journey": "प्रवास",
		"nav.trust": "विश्वास",
		"nav.history": "इतिहास",
		"settings.title": "सेटिंग्ज",
		"settings.desc": "या डिव्हाइससाठी भाषा, स्वरूप, सुलभता आणि सूचना.",
		"settings.appearance": "स्वरूप",
		"settings.theme": "थीम",
		"settings.light": "लाइट",
		"settings.dark": "डार्क",
		"settings.system": "सिस्टम",
		"settings.accessibility": "सुलभता",
		"settings.textSize": "मजकूर आकार",
		"settings.contrast": "उच्च कॉन्ट्रास्ट",
		"settings.contrast.desc": "कमी प्रकाशातील डब्यांसाठी ठळक मजकूर.",
		"settings.motion": "हालचाल कमी करा",
		"settings.motion.desc": "अ‍ॅनिमेशन कमी करा.",
		"settings.notifications": "सूचना",
		"settings.sound": "सूचना आवाज",
		"settings.sound.desc": "आपत्कालीन सूचना आल्यावर आवाज वाजवा.",
		"settings.toasts": "स्क्रीन सूचना",
		"settings.toasts.desc": "स्थिती अद्यतनांसाठी पॉप-अप दाखवा.",
		"settings.data": "डेटा",
		"settings.reset": "हे सत्र रीसेट करा",
		"settings.reset.desc": "पॉइंट, रिवॉर्ड, अहवाल आणि प्रवास प्रगती साफ करा.",
		"settings.saved": "सेटिंग्ज जतन केल्या",
		"common.small": "लहान",
		"common.default": "सामान्य",
		"common.large": "मोठा",
		"common.on": "चालू",
		"common.off": "बंद",
		"profile.rewards": "रिडीम केलेले रिवॉर्ड",
		"profile.rewards.empty": "या सत्रात अद्याप काहीही रिडीम केलेले नाही.",
		"nav.how": "हे कसे काम करते",
		"nav.features": "वैशिष्ट्ये",
		"nav.safety": "सुरक्षा",
		"nav.signin": "साइन इन",
		"nav.launch": "अ‍ॅप उघडा",
		"hero.badge": "प्रत्येक सेकंद महत्त्वाचा",
		"hero.sub": "आपत्कालीन ओळखीपासून वैद्यकीय तयारीपर्यंत — ट्रेन स्थानकावर पोहोचण्यापूर्वी.",
		"hero.cta": "आता सुरू करा",
		"hero.secondary": "साइन इन",
		"auth.tagline": "प्रत्येक सेकंद महत्त्वाचा.",
		"auth.sub": "रेल्वे प्रवासासाठी एआय-सहाय्यित वैद्यकीय आपत्कालीन प्रतिसाद.",
		"auth.login": "लॉगिन",
		"auth.signup": "साइन अप",
		"auth.passenger": "प्रवासी",
		"auth.doctor": "डॉक्टर",
		"auth.travelling": "प्रवासात",
		"auth.responder": "ऑनबोर्ड प्रतिसादकर्ता",
		"auth.quick": "जलद प्रवेश",
		"auth.chooseRole": "तुमची भूमिका निवडा →",
		"auth.email": "ईमेल",
		"auth.password": "पासवर्ड",
		"auth.signInDoctor": "डॉक्टर म्हणून साइन इन करा",
		"auth.signInPassenger": "प्रवासी म्हणून साइन इन करा",
		"lang.label": "भाषा",
		"lang.title": "भाषा निवडा",
		"lang.changed": "भाषा बदलली",
		"settings.language.desc": "Rail Chikitsak मध्ये वापरली जाणारी भाषा निवडा.",
		"rewards.title": "रेलकेअर रिवॉर्ड्स",
		"rewards.balance": "पॉइंट शिल्लक",
		"rewards.points": "रेलकेअर पॉइंट्स",
		"rewards.redeem": "रिडीम करा",
		"rewards.redeemed": "रिडीम केले",
		"rewards.wallet": "माझे रिवॉर्ड्स",
		"rewards.store": "रिवॉर्ड स्टोअर",
		"rewards.activity": "पॉइंट क्रियाकलाप",
		"rewards.earn": "पॉइंट कसे मिळतात"
	},
	bn: {
		"hero.title": "প্রতিটি সেকেন্ড গুরুত্বপূর্ণ",
		"hero.titleAccent": "রেলপথে।",
		"hero.body": "রেল যাত্রার জন্য বুদ্ধিমান চিকিৎসা জরুরি প্রতিক্রিয়া। এক ট্যাপে নেটওয়ার্ক সতর্ক হয়, এআই পরিস্থিতি মূল্যায়ন করে এবং ট্রেন পৌঁছানোর আগেই নিকটতম হাসপাতাল প্রস্তুত থাকে।",
		"hero.explore": "কিভাবে কাজ করে দেখুন",
		"hero.get": "শুরু করুন",
		"nav.overview": "সারসংক্ষেপ",
		"nav.emergency": "জরুরি",
		"nav.rewards": "পুরস্কার",
		"nav.impact": "প্রভাব",
		"nav.reports": "রিপোর্ট",
		"nav.profile": "প্রোফাইল",
		"nav.settings": "সেটিংস",
		"nav.journey": "যাত্রা",
		"nav.trust": "বিশ্বাস",
		"nav.history": "ইতিহাস",
		"settings.title": "সেটিংস",
		"settings.desc": "এই ডিভাইসের ভাষা, চেহারা, প্রবেশগম্যতা ও সতর্কতা।",
		"settings.appearance": "চেহারা",
		"settings.theme": "থিম",
		"settings.light": "লাইট",
		"settings.dark": "ডার্ক",
		"settings.system": "সিস্টেম",
		"settings.accessibility": "প্রবেশগম্যতা",
		"settings.textSize": "লেখার আকার",
		"settings.contrast": "উচ্চ কনট্রাস্ট",
		"settings.contrast.desc": "কম আলোয় স্পষ্ট লেখা ও সীমানা।",
		"settings.motion": "চলন কমান",
		"settings.motion.desc": "অ্যানিমেশন কমান।",
		"settings.notifications": "সতর্কতা",
		"settings.sound": "সতর্ক শব্দ",
		"settings.sound.desc": "জরুরি সতর্কতায় শব্দ বাজান।",
		"settings.toasts": "স্ক্রিন সতর্কতা",
		"settings.toasts.desc": "স্ট্যাটাস আপডেটের পপ-আপ দেখান।",
		"settings.data": "ডেটা",
		"settings.reset": "এই সেশন রিসেট",
		"settings.reset.desc": "পয়েন্ট, পুরস্কার, রিপোর্ট ও যাত্রা মুছুন।",
		"settings.saved": "সেটিংস সংরক্ষিত",
		"common.small": "ছোট",
		"common.default": "সাধারণ",
		"common.large": "বড়",
		"common.on": "চালু",
		"common.off": "বন্ধ",
		"profile.rewards": "রিডিম করা পুরস্কার",
		"profile.rewards.empty": "এই সেশনে এখনো কিছু রিডিম করা হয়নি।",
		"nav.how": "কিভাবে কাজ করে",
		"nav.features": "বৈশিষ্ট্য",
		"nav.safety": "নিরাপত্তা",
		"nav.signin": "সাইন ইন",
		"nav.launch": "অ্যাপ খুলুন",
		"hero.badge": "প্রতিটি সেকেন্ড গুরুত্বপূর্ণ",
		"hero.sub": "জরুরি শনাক্তকরণ থেকে চিকিৎসা প্রস্তুতি — ট্রেন স্টেশনে পৌঁছানোর আগেই।",
		"hero.cta": "এখনই শুরু করুন",
		"hero.secondary": "সাইন ইন",
		"auth.tagline": "প্রতিটি সেকেন্ড গুরুত্বপূর্ণ।",
		"auth.sub": "রেল যাত্রার জন্য এআই-সহায়ক জরুরি চিকিৎসা সাড়া।",
		"auth.login": "লগইন",
		"auth.signup": "সাইন আপ",
		"auth.passenger": "যাত্রী",
		"auth.doctor": "ডাক্তার",
		"auth.travelling": "ভ্রমণরত",
		"auth.responder": "অনবোর্ড রেসপন্ডার",
		"auth.quick": "দ্রুত প্রবেশ",
		"auth.chooseRole": "আপনার ভূমিকা বাছুন →",
		"auth.email": "ইমেইল",
		"auth.password": "পাসওয়ার্ড",
		"auth.signInDoctor": "ডাক্তার হিসেবে সাইন ইন",
		"auth.signInPassenger": "যাত্রী হিসেবে সাইন ইন",
		"lang.label": "ভাষা",
		"lang.title": "ভাষা নির্বাচন",
		"lang.changed": "ভাষা পরিবর্তিত হয়েছে",
		"settings.language.desc": "Rail Chikitsak-তে ব্যবহৃত ভাষা নির্বাচন করুন।",
		"rewards.title": "রেলকেয়ার রিওয়ার্ডস",
		"rewards.balance": "পয়েন্ট ব্যালেন্স",
		"rewards.points": "রেলকেয়ার পয়েন্ট",
		"rewards.redeem": "রিডিম",
		"rewards.redeemed": "রিডিম করা হয়েছে",
		"rewards.wallet": "আমার রিওয়ার্ড",
		"rewards.store": "রিওয়ার্ড স্টোর",
		"rewards.activity": "পয়েন্ট কার্যকলাপ",
		"rewards.earn": "পয়েন্ট কীভাবে অর্জিত হয়"
	},
	ta: {
		"hero.title": "ஒவ்வொரு நொடியும் முக்கியம்",
		"hero.titleAccent": "தண்டவாளத்தில்.",
		"hero.body": "ரயில் பயணங்களுக்கான அறிவார்ந்த மருத்துவ அவசர பதில். ஒரு தட்டலில் நெட்வொர்க் எச்சரிக்கப்படுகிறது, AI நிலைமையை மதிப்பிடுகிறது, ரயில் வருவதற்கு முன் அருகிலுள்ள மருத்துவமனை தயாராகிறது.",
		"hero.explore": "இது எப்படி வேலை செய்கிறது",
		"hero.get": "தொடங்குங்கள்",
		"nav.overview": "கண்ணோட்டம்",
		"nav.emergency": "அவசரம்",
		"nav.rewards": "வெகுமதிகள்",
		"nav.impact": "தாக்கம்",
		"nav.reports": "அறிக்கைகள்",
		"nav.profile": "சுயவிவரம்",
		"nav.settings": "அமைப்புகள்",
		"nav.journey": "பயணம்",
		"nav.trust": "நம்பிக்கை",
		"nav.history": "வரலாறு",
		"settings.title": "அமைப்புகள்",
		"settings.desc": "இந்த சாதனத்திற்கான மொழி, தோற்றம், அணுகல் மற்றும் எச்சரிக்கைகள்.",
		"settings.appearance": "தோற்றம்",
		"settings.theme": "தீம்",
		"settings.light": "ஒளி",
		"settings.dark": "இருள்",
		"settings.system": "கணினி",
		"settings.accessibility": "அணுகல்",
		"settings.textSize": "எழுத்து அளவு",
		"settings.contrast": "உயர் மாறுபாடு",
		"settings.contrast.desc": "மங்கிய வெளிச்சத்தில் தெளிவான உரை.",
		"settings.motion": "அசைவைக் குறை",
		"settings.motion.desc": "அனிமேஷனைக் குறைக்கவும்.",
		"settings.notifications": "எச்சரிக்கைகள்",
		"settings.sound": "எச்சரிக்கை ஒலி",
		"settings.sound.desc": "அவசர எச்சரிக்கையின் போது ஒலி.",
		"settings.toasts": "திரை அறிவிப்புகள்",
		"settings.toasts.desc": "நிலை புதுப்பிப்புகளை காட்டு.",
		"settings.data": "தரவு",
		"settings.reset": "இந்த அமர்வை மீட்டமை",
		"settings.reset.desc": "புள்ளிகள், வெகுமதிகள், அறிக்கைகள் அழிக்கவும்.",
		"settings.saved": "அமைப்புகள் சேமிக்கப்பட்டன",
		"common.small": "சிறியது",
		"common.default": "இயல்பு",
		"common.large": "பெரியது",
		"common.on": "இயக்கு",
		"common.off": "அணை",
		"profile.rewards": "பெறப்பட்ட வெகுமதிகள்",
		"profile.rewards.empty": "இந்த அமர்வில் இதுவரை எதுவும் இல்லை.",
		"nav.how": "எப்படி வேலை செய்கிறது",
		"nav.features": "அம்சங்கள்",
		"nav.safety": "பாதுகாப்பு",
		"nav.signin": "உள்நுழை",
		"nav.launch": "செயலியைத் திற",
		"hero.badge": "ஒவ்வொரு நொடியும் முக்கியம்",
		"hero.sub": "அவசர கண்டறிதல் முதல் மருத்துவ தயார்நிலை வரை — ரயில் நிலையத்தை அடைவதற்கு முன்பே.",
		"hero.cta": "இப்போது தொடங்கு",
		"hero.secondary": "உள்நுழை",
		"auth.tagline": "ஒவ்வொரு நொடியும் முக்கியம்.",
		"auth.sub": "ரயில் பயணங்களுக்கான AI உதவி மருத்துவ அவசர பதில்.",
		"auth.login": "உள்நுழைவு",
		"auth.signup": "பதிவு",
		"auth.passenger": "பயணி",
		"auth.doctor": "மருத்துவர்",
		"auth.travelling": "பயணத்தில்",
		"auth.responder": "ரயிலில் பதிலளிப்பவர்",
		"auth.quick": "விரைவு அணுகல்",
		"auth.chooseRole": "உங்கள் பங்கைத் தேர்ந்தெடுக்கவும் →",
		"auth.email": "மின்னஞ்சல்",
		"auth.password": "கடவுச்சொல்",
		"auth.signInDoctor": "மருத்துவராக உள்நுழை",
		"auth.signInPassenger": "பயணியாக உள்நுழை",
		"lang.label": "மொழி",
		"lang.title": "மொழியைத் தேர்வுசெய்",
		"lang.changed": "மொழி மாற்றப்பட்டது",
		"settings.language.desc": "Rail Chikitsak இல் பயன்படுத்தப்படும் மொழியைத் தேர்வுசெய்யவும்.",
		"rewards.title": "ரெயில்கேர் ரிவார்டுகள்",
		"rewards.balance": "புள்ளி இருப்பு",
		"rewards.points": "ரெயில்கேர் புள்ளிகள்",
		"rewards.redeem": "மீட்டெடு",
		"rewards.redeemed": "மீட்டெடுக்கப்பட்டது",
		"rewards.wallet": "என் வெகுமதிகள்",
		"rewards.store": "வெகுமதி கடை",
		"rewards.activity": "புள்ளி செயல்பாடு",
		"rewards.earn": "புள்ளிகள் எப்படி கிடைக்கும்"
	},
	te: {
		"hero.title": "ప్రతి క్షణం ముఖ్యం",
		"hero.titleAccent": "పట్టాలపై.",
		"hero.body": "రైలు ప్రయాణాలకు తెలివైన వైద్య అత్యవసర స్పందన. ఒక ట్యాప్‌తో నెట్‌వర్క్‌కు సమాచారం, AI పరిస్థితిని అంచనా వేస్తుంది, రైలు చేరుకునేలోపు సమీప ఆసుపత్రి సిద్ధమవుతుంది.",
		"hero.explore": "ఇది ఎలా పనిచేస్తుంది",
		"hero.get": "ప్రారంభించండి",
		"nav.overview": "అవలోకనం",
		"nav.emergency": "అత్యవసరం",
		"nav.rewards": "రివార్డ్స్",
		"nav.impact": "ప్రభావం",
		"nav.reports": "నివేదికలు",
		"nav.profile": "ప్రొఫైల్",
		"nav.settings": "సెట్టింగ్‌లు",
		"nav.journey": "ప్రయాణం",
		"nav.trust": "నమ్మకం",
		"nav.history": "చరిత్ర",
		"settings.title": "సెట్టింగ్‌లు",
		"settings.desc": "ఈ పరికరానికి భాష, రూపం, ప్రాప్యత మరియు హెచ్చరికలు.",
		"settings.appearance": "రూపం",
		"settings.theme": "థీమ్",
		"settings.light": "లైట్",
		"settings.dark": "డార్క్",
		"settings.system": "సిస్టమ్",
		"settings.accessibility": "ప్రాప్యత",
		"settings.textSize": "టెక్స్ట్ పరిమాణం",
		"settings.contrast": "హై కాంట్రాస్ట్",
		"settings.contrast.desc": "తక్కువ వెలుతురులో స్పష్టమైన టెక్స్ట్.",
		"settings.motion": "కదలిక తగ్గించు",
		"settings.motion.desc": "యానిమేషన్ తగ్గించండి.",
		"settings.notifications": "హెచ్చరికలు",
		"settings.sound": "హెచ్చరిక శబ్దం",
		"settings.sound.desc": "అత్యవసర హెచ్చరికకు శబ్దం.",
		"settings.toasts": "స్క్రీన్ నోటిఫికేషన్లు",
		"settings.toasts.desc": "స్థితి అప్‌డేట్‌లను చూపండి.",
		"settings.data": "డేటా",
		"settings.reset": "ఈ సెషన్ రీసెట్",
		"settings.reset.desc": "పాయింట్లు, రివార్డులు, నివేదికలు తొలగించండి.",
		"settings.saved": "సెట్టింగ్‌లు సేవ్ అయ్యాయి",
		"common.small": "చిన్నది",
		"common.default": "సాధారణం",
		"common.large": "పెద్దది",
		"common.on": "ఆన్",
		"common.off": "ఆఫ్",
		"profile.rewards": "రిడీమ్ చేసిన రివార్డులు",
		"profile.rewards.empty": "ఈ సెషన్‌లో ఇంకా ఏమీ లేదు.",
		"nav.how": "ఇది ఎలా పనిచేస్తుంది",
		"nav.features": "ఫీచర్లు",
		"nav.safety": "భద్రత",
		"nav.signin": "సైన్ ఇన్",
		"nav.launch": "యాప్ తెరవండి",
		"hero.badge": "ప్రతి క్షణం ముఖ్యం",
		"hero.sub": "అత్యవసర గుర్తింపు నుండి వైద్య సన్నద్ధత వరకు — రైలు స్టేషన్‌కు చేరుకునే ముందే.",
		"hero.cta": "ఇప్పుడే ప్రారంభించండి",
		"hero.secondary": "సైన్ ఇన్",
		"auth.tagline": "ప్రతి క్షణం ముఖ్యం.",
		"auth.sub": "రైలు ప్రయాణాలకు AI సహాయక వైద్య అత్యవసర స్పందన.",
		"auth.login": "లాగిన్",
		"auth.signup": "సైన్ అప్",
		"auth.passenger": "ప్రయాణికుడు",
		"auth.doctor": "వైద్యుడు",
		"auth.travelling": "ప్రయాణంలో",
		"auth.responder": "ఆన్‌బోర్డ్ స్పందనదారు",
		"auth.quick": "త్వరిత ప్రవేశం",
		"auth.chooseRole": "మీ పాత్రను ఎంచుకోండి →",
		"auth.email": "ఇమెయిల్",
		"auth.password": "పాస్‌వర్డ్",
		"auth.signInDoctor": "వైద్యుడిగా సైన్ ఇన్",
		"auth.signInPassenger": "ప్రయాణికుడిగా సైన్ ఇన్",
		"lang.label": "భాష",
		"lang.title": "భాషను ఎంచుకోండి",
		"lang.changed": "భాష మార్చబడింది",
		"settings.language.desc": "Rail Chikitsak లో ఉపయోగించే భాషను ఎంచుకోండి.",
		"rewards.title": "రైల్‌కేర్ రివార్డ్స్",
		"rewards.balance": "పాయింట్ బ్యాలెన్స్",
		"rewards.points": "రైల్‌కేర్ పాయింట్లు",
		"rewards.redeem": "రిడీమ్",
		"rewards.redeemed": "రిడీమ్ చేయబడింది",
		"rewards.wallet": "నా రివార్డ్స్",
		"rewards.store": "రివార్డ్ స్టోర్",
		"rewards.activity": "పాయింట్ కార్యకలాపం",
		"rewards.earn": "పాయింట్లు ఎలా లభిస్తాయి"
	},
	gu: {
		"hero.title": "દરેક સેકન્ડ મહત્વની છે",
		"hero.titleAccent": "પાટા પર.",
		"hero.body": "રેલ મુસાફરી માટે બુદ્ધિશાળી તબીબી કટોકટી પ્રતિસાદ. એક ટેપથી નેટવર્કને જાણ થાય છે, AI સ્થિતિનું મૂલ્યાંકન કરે છે અને ટ્રેન પહોંચે તે પહેલાં નજીકની હોસ્પિટલ તૈયાર થાય છે.",
		"hero.explore": "તે કેવી રીતે કામ કરે છે",
		"hero.get": "શરૂ કરો",
		"nav.overview": "ઝાંખી",
		"nav.emergency": "કટોકટી",
		"nav.rewards": "રિવોર્ડ્સ",
		"nav.impact": "અસર",
		"nav.reports": "અહેવાલ",
		"nav.profile": "પ્રોફાઇલ",
		"nav.settings": "સેટિંગ્સ",
		"nav.journey": "મુસાફરી",
		"nav.trust": "વિશ્વાસ",
		"nav.history": "ઇતિહાસ",
		"settings.title": "સેટિંગ્સ",
		"settings.desc": "આ ડિવાઇસ માટે ભાષા, દેખાવ, સુલભતા અને ચેતવણીઓ.",
		"settings.appearance": "દેખાવ",
		"settings.theme": "થીમ",
		"settings.light": "લાઇટ",
		"settings.dark": "ડાર્ક",
		"settings.system": "સિસ્ટમ",
		"settings.accessibility": "સુલભતા",
		"settings.textSize": "ટેક્સ્ટ કદ",
		"settings.contrast": "હાઈ કોન્ટ્રાસ્ટ",
		"settings.contrast.desc": "ઓછા પ્રકાશમાં સ્પષ્ટ લખાણ.",
		"settings.motion": "ગતિ ઘટાડો",
		"settings.motion.desc": "એનિમેશન ઘટાડો.",
		"settings.notifications": "ચેતવણીઓ",
		"settings.sound": "ચેતવણી અવાજ",
		"settings.sound.desc": "કટોકટી ચેતવણી વખતે અવાજ.",
		"settings.toasts": "સ્ક્રીન સૂચનાઓ",
		"settings.toasts.desc": "સ્થિતિ અપડેટ બતાવો.",
		"settings.data": "ડેટા",
		"settings.reset": "આ સત્ર રીસેટ કરો",
		"settings.reset.desc": "પોઈન્ટ, રિવોર્ડ, અહેવાલ સાફ કરો.",
		"settings.saved": "સેટિંગ્સ સાચવાઈ",
		"common.small": "નાનું",
		"common.default": "સામાન્ય",
		"common.large": "મોટું",
		"common.on": "ચાલુ",
		"common.off": "બંધ",
		"profile.rewards": "રિડીમ કરેલા રિવોર્ડ",
		"profile.rewards.empty": "આ સત્રમાં હજી કંઈ નથી.",
		"nav.how": "તે કેવી રીતે કામ કરે છે",
		"nav.features": "વિશેષતાઓ",
		"nav.safety": "સલામતી",
		"nav.signin": "સાઇન ઇન",
		"nav.launch": "એપ ખોલો",
		"hero.badge": "દરેક સેકન્ડ મહત્વની છે",
		"hero.sub": "કટોકટીની ઓળખથી તબીબી તૈયારી સુધી — ટ્રેન સ્ટેશને પહોંચે તે પહેલાં.",
		"hero.cta": "હમણાં શરૂ કરો",
		"hero.secondary": "સાઇન ઇન",
		"auth.tagline": "દરેક સેકન્ડ મહત્વની છે.",
		"auth.sub": "રેલ મુસાફરી માટે AI-સહાયિત તબીબી કટોકટી પ્રતિસાદ.",
		"auth.login": "લોગિન",
		"auth.signup": "સાઇન અપ",
		"auth.passenger": "મુસાફર",
		"auth.doctor": "ડૉક્ટર",
		"auth.travelling": "મુસાફરીમાં",
		"auth.responder": "ઓનબોર્ડ પ્રતિસાદકર્તા",
		"auth.quick": "ઝડપી ઍક્સેસ",
		"auth.chooseRole": "તમારી ભૂમિકા પસંદ કરો →",
		"auth.email": "ઇમેઇલ",
		"auth.password": "પાસવર્ડ",
		"auth.signInDoctor": "ડૉક્ટર તરીકે સાઇન ઇન",
		"auth.signInPassenger": "મુસાફર તરીકે સાઇન ઇન",
		"lang.label": "ભાષા",
		"lang.title": "ભાષા પસંદ કરો",
		"lang.changed": "ભાષા બદલાઈ",
		"settings.language.desc": "Rail Chikitsak માં વપરાતી ભાષા પસંદ કરો.",
		"rewards.title": "રેલકેર રિવોર્ડ્સ",
		"rewards.balance": "પોઇન્ટ બેલેન્સ",
		"rewards.points": "રેલકેર પોઇન્ટ્સ",
		"rewards.redeem": "રિડીમ",
		"rewards.redeemed": "રિડીમ થયું",
		"rewards.wallet": "મારા રિવોર્ડ્સ",
		"rewards.store": "રિવોર્ડ સ્ટોર",
		"rewards.activity": "પોઇન્ટ પ્રવૃત્તિ",
		"rewards.earn": "પોઇન્ટ કેવી રીતે મળે છે"
	},
	kn: {
		"hero.title": "ಪ್ರತಿ ಕ್ಷಣವೂ ಮುಖ್ಯ",
		"hero.titleAccent": "ಹಳಿಗಳ ಮೇಲೆ.",
		"hero.body": "ರೈಲು ಪ್ರಯಾಣಕ್ಕಾಗಿ ಬುದ್ಧಿವಂತ ವೈದ್ಯಕೀಯ ತುರ್ತು ಸ್ಪಂದನೆ. ಒಂದು ಟ್ಯಾಪ್‌ನಿಂದ ಜಾಲಕ್ಕೆ ಸೂಚನೆ, AI ಸ್ಥಿತಿಯನ್ನು ಅಂದಾಜಿಸುತ್ತದೆ, ರೈಲು ತಲುಪುವ ಮೊದಲು ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ಸಿದ್ಧವಾಗುತ್ತದೆ.",
		"hero.explore": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
		"hero.get": "ಪ್ರಾರಂಭಿಸಿ",
		"nav.overview": "ಅವಲೋಕನ",
		"nav.emergency": "ತುರ್ತು",
		"nav.rewards": "ರಿವಾರ್ಡ್ಸ್",
		"nav.impact": "ಪರಿಣಾಮ",
		"nav.reports": "ವರದಿಗಳು",
		"nav.profile": "ಪ್ರೊಫೈಲ್",
		"nav.settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
		"nav.journey": "ಪ್ರಯಾಣ",
		"nav.trust": "ವಿಶ್ವಾಸ",
		"nav.history": "ಇತಿಹಾಸ",
		"settings.title": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
		"settings.desc": "ಈ ಸಾಧನಕ್ಕೆ ಭಾಷೆ, ನೋಟ, ಪ್ರವೇಶ ಮತ್ತು ಎಚ್ಚರಿಕೆಗಳು.",
		"settings.appearance": "ನೋಟ",
		"settings.theme": "ಥೀಮ್",
		"settings.light": "ಲೈಟ್",
		"settings.dark": "ಡಾರ್ಕ್",
		"settings.system": "ಸಿಸ್ಟಂ",
		"settings.accessibility": "ಪ್ರವೇಶಸಾಧ್ಯತೆ",
		"settings.textSize": "ಪಠ್ಯ ಗಾತ್ರ",
		"settings.contrast": "ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್",
		"settings.contrast.desc": "ಕಡಿಮೆ ಬೆಳಕಿನಲ್ಲಿ ಸ್ಪಷ್ಟ ಪಠ್ಯ.",
		"settings.motion": "ಚಲನೆ ಕಡಿಮೆ",
		"settings.motion.desc": "ಅನಿಮೇಶನ್ ಕಡಿಮೆ ಮಾಡಿ.",
		"settings.notifications": "ಎಚ್ಚರಿಕೆಗಳು",
		"settings.sound": "ಎಚ್ಚರಿಕೆ ಶಬ್ದ",
		"settings.sound.desc": "ತುರ್ತು ಎಚ್ಚರಿಕೆಗೆ ಶಬ್ದ.",
		"settings.toasts": "ಪರದೆ ಸೂಚನೆಗಳು",
		"settings.toasts.desc": "ಸ್ಥಿತಿ ನವೀಕರಣ ತೋರಿಸಿ.",
		"settings.data": "ಡೇಟಾ",
		"settings.reset": "ಈ ಸೆಷನ್ ಮರುಹೊಂದಿಸಿ",
		"settings.reset.desc": "ಪಾಯಿಂಟ್, ರಿವಾರ್ಡ್, ವರದಿ ಅಳಿಸಿ.",
		"settings.saved": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಉಳಿಸಲಾಗಿದೆ",
		"common.small": "ಚಿಕ್ಕದು",
		"common.default": "ಸಾಮಾನ್ಯ",
		"common.large": "ದೊಡ್ಡದು",
		"common.on": "ಆನ್",
		"common.off": "ಆಫ್",
		"profile.rewards": "ರಿಡೀಮ್ ಮಾಡಿದ ರಿವಾರ್ಡ್",
		"profile.rewards.empty": "ಈ ಸೆಷನ್‌ನಲ್ಲಿ ಇನ್ನೂ ಏನೂ ಇಲ್ಲ.",
		"nav.how": "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
		"nav.features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
		"nav.safety": "ಸುರಕ್ಷತೆ",
		"nav.signin": "ಸೈನ್ ಇನ್",
		"nav.launch": "ಆ್ಯಪ್ ತೆರೆಯಿರಿ",
		"hero.badge": "ಪ್ರತಿ ಕ್ಷಣವೂ ಮುಖ್ಯ",
		"hero.sub": "ತುರ್ತು ಗುರುತಿಸುವಿಕೆಯಿಂದ ವೈದ್ಯಕೀಯ ಸಿದ್ಧತೆವರೆಗೆ — ರೈಲು ನಿಲ್ದಾಣ ತಲುಪುವ ಮೊದಲೇ.",
		"hero.cta": "ಈಗ ಪ್ರಾರಂಭಿಸಿ",
		"hero.secondary": "ಸೈನ್ ಇನ್",
		"auth.tagline": "ಪ್ರತಿ ಕ್ಷಣವೂ ಮುಖ್ಯ.",
		"auth.sub": "ರೈಲು ಪ್ರಯಾಣಕ್ಕಾಗಿ AI ನೆರವಿನ ವೈದ್ಯಕೀಯ ತುರ್ತು ಸ್ಪಂದನೆ.",
		"auth.login": "ಲಾಗಿನ್",
		"auth.signup": "ಸೈನ್ ಅಪ್",
		"auth.passenger": "ಪ್ರಯಾಣಿಕ",
		"auth.doctor": "ವೈದ್ಯರು",
		"auth.travelling": "ಪ್ರಯಾಣದಲ್ಲಿ",
		"auth.responder": "ಆನ್‌ಬೋರ್ಡ್ ಸ್ಪಂದಕ",
		"auth.quick": "ತ್ವರಿತ ಪ್ರವೇಶ",
		"auth.chooseRole": "ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆರಿಸಿ →",
		"auth.email": "ಇಮೇಲ್",
		"auth.password": "ಪಾಸ್‌ವರ್ಡ್",
		"auth.signInDoctor": "ವೈದ್ಯರಾಗಿ ಸೈನ್ ಇನ್",
		"auth.signInPassenger": "ಪ್ರಯಾಣಿಕರಾಗಿ ಸೈನ್ ಇನ್",
		"lang.label": "ಭಾಷೆ",
		"lang.title": "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
		"lang.changed": "ಭಾಷೆ ಬದಲಾಗಿದೆ",
		"settings.language.desc": "Rail Chikitsak ನಲ್ಲಿ ಬಳಸುವ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
		"rewards.title": "ರೈಲ್‌ಕೇರ್ ರಿವಾರ್ಡ್ಸ್",
		"rewards.balance": "ಪಾಯಿಂಟ್ ಬಾಕಿ",
		"rewards.points": "ರೈಲ್‌ಕೇರ್ ಪಾಯಿಂಟ್‌ಗಳು",
		"rewards.redeem": "ರಿಡೀಮ್",
		"rewards.redeemed": "ರಿಡೀಮ್ ಆಗಿದೆ",
		"rewards.wallet": "ನನ್ನ ರಿವಾರ್ಡ್ಸ್",
		"rewards.store": "ರಿವಾರ್ಡ್ ಸ್ಟೋರ್",
		"rewards.activity": "ಪಾಯಿಂಟ್ ಚಟುವಟಿಕೆ",
		"rewards.earn": "ಪಾಯಿಂಟ್‌ಗಳು ಹೇಗೆ ಸಿಗುತ್ತವೆ"
	}
};
var KEY$1 = "railcare.locale";
var I18nContext = (0, import_react.createContext)(null);
function RailCareI18nProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem(KEY$1);
		if (saved && saved in DICTS) setLocaleState(saved);
	}, []);
	const setLocale = (0, import_react.useCallback)((l) => {
		setLocaleState(l);
		try {
			localStorage.setItem(KEY$1, l);
		} catch {}
		if (typeof document !== "undefined") document.documentElement.lang = l;
	}, []);
	const t = (0, import_react.useCallback)((key) => DICTS[locale]?.[key] ?? en[key] ?? key, [locale]);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		setLocale,
		t
	}), [
		locale,
		setLocale,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used inside RailCareI18nProvider");
	return ctx;
}
var DEFAULT_SETTINGS = {
	theme: "light",
	textSize: "md",
	highContrast: false,
	reduceMotion: false,
	alertSound: true,
	toastAlerts: true
};
var KEY = "railcare.settings.v1";
var SettingsContext = (0, import_react.createContext)(null);
function apply(s) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	const dark = s.theme === "dark" || s.theme === "system" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
	root.classList.toggle("dark", !!dark);
	root.classList.toggle("rc-contrast", s.highContrast);
	root.classList.toggle("rc-reduce-motion", s.reduceMotion);
	root.dataset["textSize"] = s.textSize;
}
function RailCareSettingsProvider({ children }) {
	const [settings, setSettings] = (0, import_react.useState)(DEFAULT_SETTINGS);
	(0, import_react.useEffect)(() => {
		let next = DEFAULT_SETTINGS;
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) next = {
				...DEFAULT_SETTINGS,
				...JSON.parse(raw)
			};
		} catch {}
		setSettings(next);
		apply(next);
	}, []);
	const update = (0, import_react.useCallback)((key, value) => {
		setSettings((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			apply(next);
			try {
				localStorage.setItem(KEY, JSON.stringify(next));
			} catch {}
			return next;
		});
	}, []);
	const resetSettings = (0, import_react.useCallback)(() => {
		setSettings(DEFAULT_SETTINGS);
		apply(DEFAULT_SETTINGS);
		try {
			localStorage.removeItem(KEY);
		} catch {}
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		settings,
		update,
		resetSettings
	}), [
		settings,
		update,
		resetSettings
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsContext.Provider, {
		value,
		children
	});
}
function useSettings() {
	const ctx = (0, import_react.useContext)(SettingsContext);
	if (!ctx) throw new Error("useSettings must be used inside RailCareSettingsProvider");
	return ctx;
}
/** Short alert tone used when an emergency notification arrives. */
function playAlertTone() {
	try {
		const AudioCtor = window.AudioContext ?? window.webkitAudioContext;
		if (!AudioCtor) return;
		const ctx = new AudioCtor();
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "sine";
		osc.frequency.setValueAtTime(880, ctx.currentTime);
		osc.frequency.setValueAtTime(660, ctx.currentTime + .18);
		gain.gain.setValueAtTime(1e-4, ctx.currentTime);
		gain.gain.exponentialRampToValueAtTime(.2, ctx.currentTime + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .5);
		osc.connect(gain).connect(ctx.destination);
		osc.start();
		osc.stop(ctx.currentTime + .52);
		osc.onended = () => void ctx.close();
	} catch {}
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Rail Chikitsak — Railway Medical Emergency Response" },
			{
				name: "description",
				content: "Rail Chikitsak — intelligent medical emergency response for railway journeys."
			},
			{
				name: "author",
				content: "Rail Chikitsak"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailCareSettingsProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailCareI18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RailCareJourneyProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RailCareTrustProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" })] }) }) }) })
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Cv2bqzWG.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Rail Chikitsak — Every Second Matters on the Rails" },
		{
			name: "description",
			content: "Rail Chikitsak: one-tap medical SOS for railway passengers, AI-assisted triage and automatic hospital pre-alert."
		},
		{
			property: "og:title",
			content: "Rail Chikitsak — Every Second Matters"
		},
		{
			property: "og:description",
			content: "AI-assisted medical emergency response for railway passengers."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./auth-Dqnxa3q9.mjs");
var Route$3 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign In — Rail Chikitsak" },
		{
			name: "description",
			content: "Sign in to Rail Chikitsak as a passenger or onboard doctor to access railway medical emergency response."
		},
		{
			property: "og:title",
			content: "Sign In — Rail Chikitsak"
		},
		{
			property: "og:description",
			content: "Passenger and doctor access to Rail Chikitsak."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./demo-DHikkns3.mjs");
var Route$2 = createFileRoute("/demo")({
	head: () => ({ meta: [
		{ title: "Choose Your Role — Rail Chikitsak" },
		{
			name: "description",
			content: "Continue as a passenger or an onboard doctor and enter the Rail Chikitsak railway medical emergency response network."
		},
		{
			property: "og:title",
			content: "Choose Your Role — Rail Chikitsak"
		},
		{
			property: "og:description",
			content: "Passenger SOS journey and onboard medical responder console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./doctor-DVykoL11.mjs");
var Route$1 = createFileRoute("/doctor")({
	head: () => ({ meta: [
		{ title: "Responder Console — Rail Chikitsak Onboard Doctor" },
		{
			name: "description",
			content: "Onboard responder console: incoming medical emergencies, a 2-minute response window, medical assessment, hospital escalation, impact metrics and Rail Chikitsak rewards."
		},
		{
			property: "og:title",
			content: "Responder Console — Rail Chikitsak"
		},
		{
			property: "og:description",
			content: "Respond to onboard medical emergencies and track your responder impact and rewards."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./journey-CoXHTZmZ.mjs");
var Route = createFileRoute("/journey")({
	head: () => ({ meta: [
		{ title: "Passenger Console — Rail Chikitsak Medical SOS" },
		{
			name: "description",
			content: "Passenger console with live journey tracking, one-tap medical SOS, AI-assisted triage, Rail Chikitsak Trust and emergency history."
		},
		{
			property: "og:title",
			content: "Passenger Console — Rail Chikitsak"
		},
		{
			property: "og:description",
			content: "Track your journey, raise a medical SOS and follow the full emergency response."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AuthRoute: Route$3.update({
		id: "/auth",
		path: "/auth",
		getParentRoute: () => Route$5
	}),
	DemoRoute: Route$2.update({
		id: "/demo",
		path: "/demo",
		getParentRoute: () => Route$5
	}),
	DoctorRoute: Route$1.update({
		id: "/doctor",
		path: "/doctor",
		getParentRoute: () => Route$5
	}),
	JourneyRoute: Route.update({
		id: "/journey",
		path: "/journey",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { supabase as S, STATIONS as _, useI18n as a, useJourney as b, REPORT_REASONS as c, nextTier as d, useTrust as f, HOSPITALS as g, EMERGENCY_TYPES as h, LOCALES as i, TIERS as l, DEMO_PASSENGER as m, playAlertTone as n, EARNING_RULES as o, DEMO_DOCTOR as p, useSettings as r, REDEEMABLES as s, router_exports as t, clearTrustStorage as u, TRAIN as v, loadAccount as x, formatCountdown as y };
