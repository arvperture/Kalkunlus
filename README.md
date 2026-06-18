# Kalkunlus 🦃🔢

Kalkunlus is a modern web-based educational platform designed to strengthen and rebuild foundational mathematical concepts for students from elementary school to higher education. The platform shifts the educational focus from rote memorization to deep structural and conceptual understanding.

---

## 🚀 Core Philosophy
In mathematics, comprehension matters more than speed. Kalkunlus does not act as a lazy shortcut for homework; instead, it serves as an interactive guide, an encouraging peer, and a patient private tutor that explains the *why* behind every formula.

## 🛠️ Tech Stack & Hybrid Architecture

Kalkunlus utilizes a decentralized **Hybrid Backend Engine** coupled with a strict declarative frontend to balance relational business logic, real-time audio streams, and heavy mathematical computation.

### 1. Frontend
* **Framework:** React.js
* **Styling:** Tailwind CSS
* **Architectural Pattern:** MVVM (Model-View-ViewModel)
* **State Management Constraint:** **DO NOT** use Observable Objects. You must use fine-grained, plain **Observables** (or reactive functional streams/hooks) to optimize mathematical rendering performance and prevent redundant component re-renders.

### 2. Backend
* **PHP Laravel:** Responsible for user authentication, relational database management, data persistence, and core CRUD quiz flows.
* **Python FastAPI:** Responsible for high-performance mathematical engine parsing, AI generations, dynamic graph routing, OCR transformations, and low-latency WebSocket communication for real-time audio.
* **Database:** SQL via MySQL.

---

## ✨ Key Features

1. **Interactive Step-by-Step Solver:** Decomposes equations into granular, atomic rules (e.g., power rules, common denominators) using LaTeX/MathJax visual structures.
2. **Dynamic Graph Plotter:** A fully reactive Cartesian plotting engine that dynamically responds as users tweak algebraic or trigonometric coefficients (e.g., $y = mx + c$).
3. **Educational Photo Equation Scanner:** Driven by FastAPI OCR. This feature intercepts raw images and extracts formulas into the Step-by-Step Solver rather than just giving away direct final answers.
4. **AI-Driven Quiz Dashboard:** Generates exactly 5 tailored math questions daily using an adaptive AI engine based on historical performance and user skill levels.
5. **Live Talk & Ambient Assistant:** A WebSocket-based real-time voice feature featuring two modes:
   * **Study Buddy Mode (Live Calculate Enabled):** Actively listens and provides instant math calculations mid-sentence (e.g., *"That would be 14, multiply first!"*).
   * **Private Tutor Mode (Live Calculate Disabled):** Refuses direct answers and prompts users with conceptual hints (e.g., *"Which operation takes priority according to PEMDAS?"*).

---

## 📋 Engineering & Programming Rules

All contributors must strictly adhere to the following code quality parameters:

### 1. Naming Convention
Cryptic variable naming is heavily penalized. Variable names must convey explicit mathematical or logical context.
* ❌ *Bad:* `$x`, `$data`, `let d = ...;`
*  *Good:* `$totalMatematika` (camelCase for PHP/JS), `total_matematika` (snake_case for Python).

### 2. DRY (Don't Repeat Yourself)
Do not duplicate calculation algorithms, LaTeX parsers, or plotting modules. Centralize global math engines into reusable utility functions/services and import them wherever needed.

### 3. Single Responsibility Principle (SRP)
Every function or method must execute exactly **one** isolated task.
* ❌ *Bad:* A function `hitungNilai()` that computes scores, saves them to MySQL, and triggers an email notification.
*  *Good:* Isolate `hitungNilai()` solely for numerical calculation. Separate `simpanKeDatabase()` and `kirimEmailKeSiswa()` into distinct pipeline services.

---

## 💻 Getting Started

### Prerequisites
* PHP >= 8.2 & Composer
* Python >= 3.10 & Poetry/Pipenv
* Node.js >= 18 & npm/yarn
* MySQL Server

### 📦 Installation Steps

#### 1. Repository Setup
```bash
git clone [https://github.com/arvperture/kalkunlus.git](https://github.com/arvperture/kalkunlus.git)
cd kalkunlus
