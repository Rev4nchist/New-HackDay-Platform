# HackDay 2025 Idea Management Portal (MVP – No Submission)

Version: 1.2 • Date: October 26, 2023

## 1. Project Overview

This project is a web-based portal created for HackDay 2025 that focuses on managing and showcasing project ideas pre-submitted via an external CSV form. The idea behind the portal is to provide a central, intuitive space for team members, organizers, and staff investors to discover project ideas, explore detailed information, and get engaged using interactive features like project “watch” counts and fun reaction buttons.

The portal is being built to help jumpstart the idea management process for HackDay 2025. Key objectives include ensuring that users can easily browse, search, and filter through a curated list of pre-submitted ideas; enabling basic team formation by displaying relevant project details; and providing a secure admin panel for organizers to import and manage ideas. The ultimate measure of success will be high user engagement, smooth functionality, and positive feedback during the MVP launch—laying a solid foundation for future enhancements such as a live investment dashboard on Demo Day.

## 2. In-Scope vs. Out-of-Scope

**In-Scope:**

*   **Idea Listing & Discovery:**\
    • Display a searchable, browsable list of pre-submitted ideas with title, short description, category, submission date, and reaction statistics.\
    • Enhanced filtering (by keywords, categories, and broad HackDay topic filters like Sparks of AI, Ignition Projects, and Phoenix Initiative) along with suggestions for date range or impact area filters.
*   **Idea Detail View:**\
    • Detailed project page that includes full description, impact areas, team size preferences, necessary skills, and interactive elements such as “watch” and reaction buttons.
*   **Interactive Engagement Features:**\
    • “Watch” feature with real-time count updates.\
    • Fun reaction buttons (“🔥 Hot Idea!”, “💡 Interesting!”, “🤔 Tell me more!”) that are animated and visually engaging.
*   **Basic Team Formation Display:**\
    • Display pre-submitted project details and contact information for manual team formation rather than collecting new user data.
*   **Admin Panel and Idea Management:**\
    • Secure admin login and dedicated interface for organizers to import pre-submitted ideas using CSV uploads, review and approve/reject ideas, and edit details.\
    • Category management and basic analytics (idea counts, trending projects).
*   **HackDay Information Hub:**\
    • A section featuring general event details and updates about HackDay 2025.
*   **Authentication:**\
    • Integration with a company authentication system using Microsoft Azure (SSO/OAuth), ensuring secure login and registration.
*   **Responsive Design:**\
    • A mobile-first, responsive layout built on pre-designed UI components from the ui8.net “TaskIn” template.

**Out-of-Scope:**

*   Full idea submission functionality from within the portal (all ideas are pre-submitted externally).
*   Advanced team formation features (beyond displaying contact information, no in-app “express interest” functionality).
*   Full Demo Day investment dashboard features (voting, credit management, and investment live updates are planned for future phases).
*   Additional metrics beyond what is specified for basic analytics in the admin panel.
*   Deep integration with non-CSV form data sources (CSV import is the defined process for this MVP).

## 3. User Flow

A typical user journey begins by landing on a clean, engaging landing page that introduces the purpose of the HackDay 2025 portal. New users are prompted to log in or register using the company authentication system integrated with Microsoft Azure. Once authenticated, they are directed to the main dashboard where pre-submitted ideas are displayed as visually appealing cards. Navigation is simple with a left sidebar (if applicable) and clear menu options guiding users to explore ideas, use search and filter tools, or check detailed pages.

When a user selects an idea card, they are taken to a detailed view that provides more comprehensive information about the project. Here, users see full project descriptions, impact information, team size preferences, and required skills along with interactive features such as animated reaction buttons and a prominently displayed watch button. Organizers and staff can also use this detailed view to assess interest—watch counts and reaction interactions update in real-time. Admins have a separate portal access where they import ideas via CSV and manage the content, ensuring fresh and relevant ideas appear on the main platform.

## 4. Core Features (Bullet Points)

*   **User Authentication & Onboarding:**\
    • Secure login and registration using Microsoft Azure SSO/OAuth.\
    • Automatic role detection based on company credentials (team member, organizer/admin, investor roles).
*   **Idea Listing & Discovery:**\
    • Browse a list of pre-submitted ideas with key details (title, short description, category, submission date).\
    • Powerful search and filtering functionality including high-level HackDay topics (Sparks of AI, Ignition Projects, Phoenix Initiative) and suggestions for additional filters (date ranges, impact areas).
*   **Idea Detail View:**\
    • Detailed project pages that include extended descriptions, team size, skill requirements, and contact information.\
    • Real-time watch count and reaction display.
*   **Interactive Engagement:**\
    • “Watch” button allowing users to follow projects and see live updates.\
    • Fun, animated reaction buttons for “🔥 Hot Idea!”, “💡 Interesting!”, “🤔 Tell me more!” with icon animations and count displays.
*   **Basic Team Formation Display:**\
    • Show pre-submitted details to enable team members to manually contact idea submitters.
*   **Admin Panel & Idea Management:**\
    • Secure admin login for HackDay Organizers.\
    • CSV upload functionality to import ideas from an external form.\
    • Tools to view, approve/reject, edit ideas, and manage categories.\
    • Basic analytics dashboard showing counts of ideas, category distributions, and trending projects.
*   **HackDay Information Hub:**\
    • Dedicated space for event details, announcements, and general HackDay information.
*   **Responsive & Visually Engaging UI:**\
    • Implemented with Next.js, Tailwind CSS, and a pre-designed ui8.net “TaskIn” template for a modern, responsive design.

## 5. Tech Stack & Tools

*   **Frontend:**\
    • Next.js 14 with the App Router\
    • TypeScript\
    • Tailwind CSS (using components from the TaskIn template for consistent design)
*   **Backend:**\
    • Node.js (server runtime)\
    • RESTful API for data interactions\
    • Supabase Postgres as the primary database\
    • Supabase Authentication for additional security (complemented by Microsoft Azure SSO integration)
*   **Integration & AI Tools:**\
    • Integration with Microsoft Azure for secure user authentication (SSO/OAuth)\
    • Cursor as an advanced IDE for real-time coding suggestions and integration consistency
*   **Miscellaneous Tools:**\
    • CSV processing libraries for idea imports\
    • ESLint and Prettier for code quality and formatting\
    • Recommendations for hosting: either through the company’s internal hosting infrastructure or modern cloud providers (detailed guidance to be provided to the IT team)

## 6. Non-Functional Requirements

*   **Performance:**\
    • Fast load times despite enhanced visual elements and interactive features.\
    • Real-time updates for watch counts and reaction feedback without noticeable latency.
*   **Security:**\
    • Secure authentication using Microsoft Azure protocols integrated with Supabase Authentication.\
    • Follow best practices for API security and data protection.
*   **Usability:**\
    • A mobile-first, responsive design that supports desktop, tablet, and mobile devices.\
    • An intuitive, visually engaging UI that aligns with the HackDay 2025 theme using the TaskIn template.
*   **Accessibility:**\
    • Adherence to standard accessibility guidelines so that the portal is usable by everyone.\
    • Interactive elements (like reaction buttons) provide visual and accessible feedback.
*   **Compliance:**\
    • Ensure data handling and authentication methods comply with corporate security policies.

## 7. Constraints & Assumptions

*   **Constraints:**\
    • The platform will ingest ideas only via CSV file uploads; no other data source integrations are part of the MVP.\
    • Advanced team formation features (e.g., in-app “express interest” forms) and Demo Day live investment voting are planned for future phases and not implemented in this MVP.\
    • Hosting recommendations are open; deployment could use internal infrastructure or demand guidance towards modern cloud providers.
*   **Assumptions:**\
    • Users will have company credentials that allow seamless Microsoft Azure SSO integration.\
    • The CSV import file is well-structured and provides all necessary fields (title, description, category, submission date, team size, skill requirements, contact info).\
    • The design guidelines from the TaskIn template are followed for all UI elements to ensure visual consistency and rapid development.\
    • The real-time features such as watch count updates and reaction animations will be handled efficiently by the chosen tech stack (Next.js, Supabase, etc.).

## 8. Known Issues & Potential Pitfalls

*   **Data Import Challenges:**\
    • CSV data may have inconsistencies or missing fields. Mitigation: Implement robust validation and error-handling routines during import.
*   **Real-Time Update Overheads:**\
    • Ensuring real-time updates for watch counts and reaction animations may affect performance. Mitigation: Optimize frontend rendering and use efficient data polling/subscription methods.
*   **Authentication Integration Complexity:**\
    • Integrating Microsoft Azure’s SSO with the existing Supabase Authentication system could be challenging. Mitigation: Provide detailed, step-by-step integration documentation for the IT team, including OAuth/SSO flow guidelines.
*   **Responsive Design Fidelity:**\
    • Ensuring a consistent experience across all device sizes may require extra testing and adjustments. Mitigation: Follow mobile-first best practices and conduct extensive browser/device testing.
*   **Future Scalability Considerations:**\
    • Although the platform is designed with future Demo Day and investment dashboard integrations in mind, premature optimization or tightly coupled modules might hamper future enhancements.\
    Mitigation: Keep core modules modular and document integration points clearly for future development.

This PRD establishes a clear, detailed reference for the HackDay 2025 Idea Management Portal MVP. It outlines the project scope, user journey, key functionalities, technical infrastructure, and non-functional standards. The detailed instructions ensure that the portal is built with present needs in mind while laying a robust foundation for future upgrades and integrations.
