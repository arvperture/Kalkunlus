# Product Requirement Document (PRD)

## Project Name: Kalkunlus
**Version:** 1.0  
**Date:** June 18, 2026  
**Author:** Product Management Team  
**Status:** Approved  

---

## 1. Executive Summary & Vision
### 1.1 Objective
`Kalkunlus` is a web-based educational platform designed to strengthen and rebuild foundational mathematical concepts for students ranging from elementary school to higher education (university level). 

The core philosophy of Kalkunlus is that **mathematics requires deep conceptual understanding rather than rote memorization**. The platform shifts the focus from "finding the quick answer" to "understanding the structural workflow" of mathematical logic, utilizing modern AI and interactive interfaces to act as an encouraging peer and an expert private tutor.

---

## 2. Target Audience
* **Primary School Students (SD):** Need visual, highly intuitive guidance for basic arithmetic, fractions, and introductory geometry.
* **Junior & Senior High School Students (SMP/SMA):** Need structural step-by-step clarity for algebra, calculus, trigonometry, and matrix operations.
* **University Students:** Need advanced conceptual verification for multivariable calculus, linear algebra, discrete mathematics, and differential equations.

---

## 3. System Architecture & Tech Stack

### 3.1 Technology Stack
* **Frontend:** HTML5, Tailwind CSS, JavaScript (React.js)
* **Backend Ecosystem (Hybrid Engine):**
    * **PHP Laravel 12:** Handles relational business logic, core user authentication, user progress persistence, database seeding, authorization, and standard CRUD operations for quizzes.
    * **Python FastAPI:** Handles high-performance mathematical computing, AI generations, Dynamic Graph routing, OCR matrix translations, and low-latency WebSocket connections for the Live Talk system.
* **Database:** SQL via MySQL

### 3.2 Architectural Pattern: MVVM (Model-View-ViewModel)
The frontend application will strictly adhere to the **MVVM** pattern to decouple UI presentation from mathematical computation and state transformation.

* **Model:** Represents the data layer (e.g., API payloads from Laravel/FastAPI containing equation steps, quiz structures, user stats, or coordinate points).
* **View:** React components styled using Tailwind CSS. Views are strictly declarative and passive; they listen to the ViewModel and render UI changes.
* **ViewModel:** Manages UI state, formatting, and mathematical operational states. It fetches raw data from Models, encapsulates business transformations, and exposes clean stream data to the View.

#### 🌟 Architecture Constraint: State Management
* **DO NOT use Observable Objects** (e.g., avoid monolithic class instances wrapped as objects that observe everything inside them).
* **DO use plain Observables** (e.g., fine-grained atomic observables or reactive hooks/functional streams like RxJS observables or lightweight functional observer patterns). This prevents unnecessary component re-renders when solving large, multi-step math problems.

---

## 4. Engineering & Programming Rules

To ensure long-term maintainability, readability, and performance across the Laravel and FastAPI backends as well as the React frontend, all engineers must follow these three architectural rules:

### 4.1 Naming Convention
Code clarity must reflect domain-specific mathematical and educational context. Cryptic variable naming is strictly prohibited.
* **Bad:** `$x`, `$data`, `let d = ...;`, `function calc($a) {}`
* **Good:** `$totalMatematika` (camelCase for PHP/JS), `total_matematika` (snake_case for Python), `math_score_average`, `currentEquationPayload`.

### 4.2 DRY (Don't Repeat Yourself)
Redundant mathematical parsing, equation rendering, or coordinate plotting code must be completely centralized.
* *Implementation:* If a quadratic formula calculation engine (`hitungRumusKuadrat`) or a LaTeX parsing utility is needed across 5 different dashboard interfaces, it must be abstracted into a single global service/utility library, then imported wherever necessary.

### 4.3 Single Responsibility Principle (SRP) at Function Level
Every individual function or method must perform exactly one isolated task.
* *Example:* A function named `hitungNilai()` must exclusively compute mathematical numerical values. It is strictly forbidden from executing a database transaction (`simpanKeDatabase()`) or triggering a student notification email (`kirimEmailKeSiswa()`). These side effects must be split into isolated, testable pipeline stages.

---

## 5. Detailed Functional Features

### 5.1 Interactive Step-by-Step Solver
* **Description:** Rather than jumping from an equation directly to a final value, this module decomposes equations into atomic conceptual rules (e.g., distributing terms, applying the chain rule, finding common denominators).
* **Workflow:**
    1.  User inputs or selects an equation.
    2.  The system renders the expression using clear formatting (LaTeX/MathJax style representation).
    3.  The UI presents an interactive "Next Step" workflow where users can click to reveal the next logical progression accompanied by an explicit rule description (e.g., *"Rule Applied: Power Rule $rac{d}{dx}[x^n] = n x^{n-1}$"*).

### 5.2 Dynamic Graph Plotter
* **Description:** A reactive Cartesian coordinate plotting module to visualize algebraic, trigonometric, and calculus functions.
* **Workflow:**
    1.  As the user modifies coefficients in an equation (e.g., altering $m$ and $c$ in $y = mx + c$), the graph updates in real-time.
    2.  Provides visual indicators for crucial mathematical concepts: roots/x-intercepts, y-intercepts, turning points, and asymptotes.

### 5.3 Educational Photo Equation Scanner
* **CRITICAL PHILOSOPHY:** This feature is strictly educational. It **MUST NOT** serve as a shortcut to bypass homework or output direct immediate answers without cognitive friction.
* **Workflow:**
    1.  The user uploads or captures an image of a math problem.
    2.  The FastAPI OCR engine processes the image text.
    3.  Instead of printing "Answer: 42", the interface initializes the **Interactive Step-by-Step Solver**. It extracts the core formulas and questions the user's conceptual path, forcing them to learn the mechanics behind the problem.

### 5.4 Progress Tracker & AI-Driven Quiz Dashboard
* **Daily Learning Loop:**
    * Every user receives exactly **5 customized questions per day**.
    * Questions are synthesized dynamically by the AI engine hosted on FastAPI, referencing the student's historical weak points preserved in the MySQL database via Laravel.
* **Personalization Engine:**
    * Adaptive Difficulty: If an elementary school user struggles with fractional division, the system automatically slows down progression to reinforce common denominators before serving higher-order problems.
* **Review Quizzes:** Periodic milestones designed to revisit historical mistakes to ensure long-term retention.

### 5.5 Live Talk & Ambient Math Assistant
An interactive audio voice system driven by WebSockets via FastAPI. It features an adjustable mode selector to accommodate different study scenarios:
* **Mode A: Live Calculate (Study Buddy Mode - Enabled)**
    * The assistant operates with passive ambient listening. 
    * If a student is solving a problem on paper and out loud mutters: *"What is 7 plus 3 times 2 again?"*, the system naturally responds via audio: *"That would be 14, remember to compute the multiplication first!"* acts like an active study group peer.
* **Mode B: Private Tutor Mode (Live Calculate - Disabled)**
    * When the user disables direct computation responses, the AI changes its conversational behavior.
    * If the user asks the exact same question, the system refuses to supply the direct answer "14". Instead, it responds: *"Let's look at the order of operations. You have addition and multiplication; which operation takes priority according to BODMAS/PEMDAS?"*, functioning as a patient, structural private tutor.

---

## 6. UI/UX & Layout Design Specifications

### 6.1 Design Aesthetics
* **Style:** Strict minimalism, high-contrast typography optimized for readability, clean spacing, and calming, desaturated accent colors to mitigate math anxiety.
* **Layout Structure (Three-Column Layout):**
    * **Left Sidebar:** Persistent navigation containing User Profile, Curated Math Topics, Progress Analytics, and the Quiz Dashboard.
    * **Center Main Content Workspace:** Dynamic area where the Interactive Step-by-Step Solver, Dynamic Graph Plotter, or Quiz interface renders.
    * **Right Sidebar:** Dedicated interface for the **AI Assistant Workspace** and **Live Talk Control Unit** (containing the Live Calculate toggle switch, voice visualizer, and live chat transcripts).

---

## 7. Non-Functional Requirements & Security
* **Performance:** Math formula rendering must take less than 200ms. WebSocket connections for Live Talk must maintain sub-150ms audio streaming latencies.
* **Data Integrity:** All user state transactions, quiz submissions, and historical records must be relational and validated via Laravel's middleware architecture before updating MySQL records.
