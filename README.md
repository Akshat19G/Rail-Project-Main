<div align="center">

# 🚆 Rail Chikitsak

### Medical help for train passengers, one tap away.

*When a passenger falls sick between stations, every minute counts. Rail Chikitsak connects them to help before the next platform.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://rail-project-main.vercel.app)
![Hackathon](https://img.shields.io/badge/Built%20for-Hackathon-orange?style=for-the-badge)
![Domain](https://img.shields.io/badge/Domain-HealthTech-red?style=for-the-badge)

[🌐 Live App](https://rail-project-main.vercel.app) · [🎥 Demo Video](#) · [📊 Pitch Deck](#)

</div>

---

## 📖 Table of Contents

1. [The Problem](#-the-problem)
2. [Our Solution](#-our-solution)
3. [Features](#-features)
4. [User Workflow](#-user-workflow)
5. [System Architecture](#-system-architecture)
6. [Request Sequence](#-request-sequence)
7. [Data Model](#-data-model)
8. [Tech Stack](#-tech-stack)
9. [Getting Started](#-getting-started)
10. [Project Structure](#-project-structure)
11. [Challenges and Learnings](#-challenges-and-learnings)
12. [Roadmap](#-roadmap)
13. [Team](#-team)

---

## 🚨 The Problem

Indian Railways carries millions of passengers every day, many on journeys of 12 hours or more. A medical emergency on a moving train is a uniquely hard situation:

- **No clear point of contact.** Passengers don't know whom to call or what number to dial.
- **Information gets lost.** Coach, seat, symptoms and medical history are explained again and again to different people.
- **Help arrives late.** Doctors and ambulances can only be arranged once someone at the next station knows to expect them.

## 💡 Our Solution

**Rail Chikitsak** (*chikitsak* means "physician") is a web app that turns a stressful, confusing moment into a structured, fast process.

A passenger or a fellow traveller raises an alert with their journey details and symptoms. The system checks how urgent the situation is, then routes the case to the right responders and the **next suitable station** so that medical help is waiting when the train arrives.

> **In one line:** report symptoms, get triaged, get help at the next stop.

---

## ✨ Features

| | Feature | What it does |
|---|---|---|
| 🆘 | **One-tap emergency alert** | Raise a request in seconds with minimal typing, built for panic situations. |
| 🩺 | **Symptom triage** | Classifies each case as low, medium or critical so responders know where to focus. |
| 🚉 | **Next-station routing** | Picks the upcoming station best placed to receive the patient. |
| 📋 | **Shareable case summary** | Journey details, symptoms and history in one view, so nobody has to repeat themselves. |
| 📡 | **Live status tracking** | The passenger sees whether help has been notified, accepted, or is on the way. |
| 📱 | **Mobile-first, lightweight UI** | Works on a small phone screen and a weak connection. |

> ✏️ *Edit this table to match what your build actually does.*

---

## 🔄 User Workflow

The journey from "someone feels unwell" to "help is waiting on the platform":

```mermaid
flowchart TD
    A([🧑 Passenger feels unwell]) --> B[Open Rail Chikitsak]
    B --> C[Enter journey details<br/>Train, coach, seat]
    C --> D[Describe symptoms]
    D --> E{Triage engine<br/>assesses severity}

    E -->|Low| F[Self-care guidance<br/>+ optional doctor request]
    E -->|Medium| G[Alert railway medical staff]
    E -->|Critical| H[🚨 Emergency escalation]

    G --> I[Next-station routing]
    H --> I

    I --> J[Station medical team notified<br/>with case summary]
    J --> K[Help accepts the case]
    K --> L[Passenger sees live status]
    L --> M([🚉 Medical help ready on arrival])

    F --> N([✅ Case logged, resolved])

    style E fill:#fff3cd,stroke:#e0a800,color:#000
    style H fill:#f8d7da,stroke:#dc3545,color:#000
    style M fill:#d4edda,stroke:#28a745,color:#000
    style N fill:#d4edda,stroke:#28a745,color:#000
```

---

## 🏗️ System Architecture

A clean three-layer design: a fast client, a stateless API layer that holds the business logic, and managed data and notification services.

```mermaid
flowchart LR
    subgraph Client["🖥️ Client Layer"]
        UI["Web App<br/>Mobile-first UI"]
    end

    subgraph Edge["☁️ Vercel Platform"]
        FE["Frontend Hosting<br/>CDN + SSR"]
        API["Serverless API Routes"]
    end

    subgraph Logic["⚙️ Core Logic"]
        TRIAGE["Triage Engine<br/>severity scoring"]
        ROUTE["Station Router<br/>next-stop selection"]
        NOTIFY["Notification Service"]
    end

    subgraph Data["🗄️ Data Layer"]
        DB[("Database<br/>cases, stations, responders")]
        TRAIN[("Train and Schedule Data")]
    end

    subgraph Responders["🏥 Responders"]
        STAFF["Railway Medical Staff"]
        STATION["Station Medical Team"]
    end

    UI <--> FE
    FE <--> API
    API --> TRIAGE
    API --> ROUTE
    TRIAGE --> DB
    ROUTE --> TRAIN
    ROUTE --> DB
    API --> NOTIFY
    NOTIFY --> STAFF
    NOTIFY --> STATION
    STAFF -->|status updates| API
    STATION -->|status updates| API

    style Client fill:#e3f2fd,stroke:#1976d2,color:#000
    style Edge fill:#f3e5f5,stroke:#8e24aa,color:#000
    style Logic fill:#fff8e1,stroke:#f9a825,color:#000
    style Data fill:#e8f5e9,stroke:#43a047,color:#000
    style Responders fill:#ffebee,stroke:#e53935,color:#000
```

### Design principles

- **Stateless API.** Each request carries what it needs, so the app scales on serverless without session headaches.
- **Triage separate from routing.** Each can be improved or swapped (rules today, ML later) without touching the other.
- **Responder-first notifications.** The case summary is delivered pre-packaged, so responders act instead of asking questions.

---

## 🔁 Request Sequence

What happens, step by step, when a critical alert is raised:

```mermaid
sequenceDiagram
    autonumber
    actor P as Passenger
    participant UI as Web App
    participant API as API Layer
    participant T as Triage Engine
    participant R as Station Router
    participant DB as Database
    participant N as Notifier
    actor S as Station Medical Team

    P->>UI: Submit train, seat, symptoms
    UI->>API: POST /api/alerts
    API->>T: Assess symptoms
    T-->>API: Severity = CRITICAL
    API->>R: Find next suitable station
    R->>DB: Read schedule and station capability
    DB-->>R: Station + ETA
    R-->>API: Station selected
    API->>DB: Save case (status: PENDING)
    API->>N: Dispatch alert + case summary
    N->>S: 🚨 Incoming patient notification
    API-->>UI: Alert ID + station + ETA
    UI-->>P: "Help notified at [Station], ETA [time]"

    S->>API: Accept case
    API->>DB: Update status to ACCEPTED
    API-->>UI: Live status update
    UI-->>P: "Medical team is ready"
```

---

## 🗃️ Data Model

```mermaid
erDiagram
    PASSENGER ||--o{ ALERT : raises
    TRAIN ||--o{ ALERT : "occurs on"
    STATION ||--o{ ALERT : "assigned to"
    STATION ||--o{ RESPONDER : employs
    ALERT ||--o{ STATUS_UPDATE : tracks
    RESPONDER ||--o{ STATUS_UPDATE : posts

    PASSENGER {
        string id PK
        string name
        int age
        string medical_notes
        string contact
    }
    TRAIN {
        string number PK
        string name
        string route
    }
    STATION {
        string code PK
        string name
        boolean has_medical_unit
    }
    ALERT {
        string id PK
        string passenger_id FK
        string train_number FK
        string station_code FK
        string coach
        string seat
        string symptoms
        string severity
        string status
        datetime created_at
    }
    RESPONDER {
        string id PK
        string station_code FK
        string role
        string contact
    }
    STATUS_UPDATE {
        string id PK
        string alert_id FK
        string responder_id FK
        string status
        datetime timestamp
    }
```

### Alert lifecycle

```mermaid
stateDiagram-v2
    [*] --> Pending : Alert raised
    Pending --> Accepted : Responder accepts
    Pending --> Escalated : No response in time
    Escalated --> Accepted : Backup responder accepts
    Accepted --> OnTheWay : Team dispatched
    OnTheWay --> Resolved : Patient attended
    Resolved --> [*]
```

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | `[React / Next.js]`, `[Tailwind CSS]` |
| **Backend** | `[Serverless API routes / Node.js]` |
| **Database** | `[MongoDB / Supabase / Firebase]` |
| **Notifications** | `[SMS / WhatsApp / Email provider]` |
| **Hosting and CI/CD** | Vercel |

> ✏️ *Replace the bracketed items with your real stack.*

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, yarn or pnpm
- Git

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Akshat19G/Rail-Project-Main.git

# 2. Enter the app directory
cd Rail-Project-Main/rail-chikitsak

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Environment variables

Create a `.env` file in `rail-chikitsak/`:

```env
# Add whatever your project needs, for example:
DATABASE_URL=your_database_url
NOTIFICATION_API_KEY=your_key_here
```

### Production build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
Rail-Project-Main/
├── rail-chikitsak/          # Main application
│   ├── src/ (or app/)       # Pages, components, API routes
│   ├── public/              # Static assets
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🧗 Challenges and Learnings

- **Designing for panic.** The first version asked too many questions. We cut the form down to the few fields that actually change the outcome.
- **Triage without being a doctor.** We deliberately framed the tool as a routing and alerting aid, never a diagnosis, and kept escalation conservative.
- **[Add your own]**: a real bug, a trade-off, or a decision you'd make differently.

---

## 🗺️ Roadmap

```mermaid
gantt
    title Rail Chikitsak Roadmap
    dateFormat  YYYY-MM-DD
    axisFormat  %b

    section Done
    Core alert flow and triage      :done, a1, 2026-01-01, 30d
    Next-station routing            :done, a2, after a1, 20d

    section Next
    Real-time live location         :b1, after a2, 30d
    SMS and WhatsApp alerts         :b2, after a2, 25d

    section Future
    Multilingual support            :c1, after b1, 30d
    Integration with railway systems:c2, after c1, 45d
```

- [ ] Real-time location tracking
- [ ] SMS and WhatsApp notifications for low-connectivity passengers
- [ ] Hindi and regional language support
- [ ] Teleconsultation with an on-call doctor
- [ ] Analytics dashboard for railway authorities

---

## ⚠️ Disclaimer

Rail Chikitsak is a **hackathon prototype**. It is not a medical device and does not provide diagnosis or treatment. In a real emergency, contact railway helpline **139** or national emergency services **112**.

---

## 👥 Team


| Name | Role | Links |
|---|---|---|
| **Akshat Srivastava** | Team Leader | [GitHub](https://github.com/Akshat19G) |
| **Harsh Mudiya** | Team Member | — |
| **Anisha Singh** | Team Member | — |
| **Gauri Borhade** | Team Member | — |
| **Ansh** | Team Member | — |
| **Kaushal Bhalerao** | Team Member | — |

Built for **[Hackathon Name]**, 2026.

---

<div align="center">

**If this project helped or inspired you, give it a ⭐**

*Made with ☕ and a lot of late nights.*

</div>
