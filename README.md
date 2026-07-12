# YouTube India — DPDP Consent & Privacy Prototype

An interactive, clickable prototype demonstrating how YouTube India could implement user consent and privacy management flows compliant with India's **Digital Personal Data Protection (DPDP) Act**.

> **Note:** This is a **UI prototype** for demonstration purposes only — it is not affiliated with or endorsed by YouTube or Google.

---

## ✨ Features

- **Step-by-step user journey** through 4 key screens inside a realistic phone mockup
- **First-run consent screen** with individual, itemised toggles per data purpose (no dark patterns)
- **Home feed** with confirmation toast reinforcing user control
- **Privacy Center** showing consent status at a glance and self-serve data rights
- **Data rights confirmation** with instant receipt, reference number, and SLA timeline
- **Contextual annotations** that highlight design rationale alongside each screen
- **Smooth animations** including screen transitions, toast notifications, and micro-interactions

---

## 🖥️ Demo Screens

| Step | Screen | Description |
|------|--------|-------------|
| 1 | **Consent** | Itemised toggles for watch history, ad personalisation, location, and voice/comments |
| 2 | **Home Feed** | Personalised feed with a green success toast confirming saved choices |
| 3 | **Privacy Center** | Dashboard showing all consent statuses and data rights actions |
| 4 | **Data Rights** | Confirmation receipt when exercising view, correct, download, or erase rights |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and accessibility |
| **CSS3** | Custom properties, animations, responsive layout |
| **Vanilla JavaScript** | Screen navigation, toast notifications, interactive logic |
| **Google Fonts** | Inter (body) and Playfair Display (headings) |

No frameworks, no build tools, no dependencies — just open and run.

---

## 🚀 Getting Started

### Prerequisites

Any modern web browser (Chrome, Firefox, Edge, Safari).

### Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rupeswarbhainsa777/You-tube-Prototype.git
   cd You-tube-Prototype
   ```

2. **Open in browser**
   ```
   Open index.html directly in your browser
   ```
   Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```

3. **Interact with the prototype**
   - Click the step pills (1–4) at the top, or
   - Use the buttons inside the phone screen to navigate the flow

---

## 📁 Project Structure

```
├── index.html      # Main HTML — all 4 screens and annotation cards
├── Styling.css     # Complete stylesheet (design tokens, phone mockup, all screens)
├── Main.js         # Navigation logic, toast, data-rights handler
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

---

## 🎨 Design Decisions

- **Itemised consent** — Each data purpose (history, ads, location, voice) gets its own toggle rather than a single "accept all" button, aligning with DPDP Act requirements for granular, informed consent.
- **"Why we ask" links** — Every toggle includes a plain-language explanation so users understand the consequence of their choice.
- **Works with everything off** — The prototype emphasises that YouTube remains functional even if all optional consents are declined.
- **Self-serve data rights** — Users can view, correct, download, or erase their data without filing support tickets.
- **Instant confirmation receipts** — Every data rights action produces an immediate acknowledgement with a reference number and timeline.

---

## 📜 DPDP Act Context

This prototype addresses key requirements of India's [Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/data-protection-framework):

- **Section 6** — Consent must be free, specific, informed, unconditional, and unambiguous
- **Section 6(3)** — Consent requests must be in clear, plain language
- **Section 8** — Right to withdraw consent at any time, as easily as it was given
- **Section 11–14** — Rights of the Data Principal (access, correction, erasure, grievance redressal)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for:

- Accessibility improvements
- Additional screen flows (e.g., grievance redressal, consent withdrawal)
- Localisation / multilingual support
- Mobile-responsive enhancements

---
