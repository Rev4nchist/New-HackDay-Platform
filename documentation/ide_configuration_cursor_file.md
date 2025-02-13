# ============================= IDE CONFIGURATION CURSOR FILE

Document Name: ide_configuration_cursor_file Version: 1.2 Date: October 26, 2023 Author: Senior Product Manager

1.  PROJECT OVERVIEW

This document outlines the configuration and integration details for the HackDay 2025 Idea Management Portal MVP – a web-based platform focused on managing and showcasing pre-submitted project ideas via CSV uploads. The system is designed to enable idea listing, interactive engagement (watch counts, animated reaction buttons), and basic team formation through detailed project views. Organizers will manage and curate imported ideas through a secure admin panel, while the platform anticipates future enhancements such as live investment dashboards during Demo Day.

1.  TECH STACK & DEVELOPMENT ENVIRONMENT

Frontend: • Next.js 14 with App Router • TypeScript • Tailwind CSS (utilizing pre-designed components from the TaskIn template by ui8.net)

Backend: • Node.js server runtime • RESTful API endpoints for data interactions • Supabase Postgres as primary database • Supabase Authentication (supplemented with Microsoft Azure SSO/OAuth integration)

Development Tools: • Cursor – Advanced IDE for AI-powered coding with real-time suggestions • ESLint & Prettier for code quality and formatting

1.  USER ONBOARDING & APP FLOW

• Users land on a clean, engaging landing page and are prompted to log in/register using their company credentials via Microsoft Azure SSO. • Upon authentication, they are presented with a dashboard that showcases pre-submitted ideas in visually striking cards. Each card displays key details – project title, short description, category, submission date, and real-time watch count. • Enhanced search and filtering enable exploration based on keywords, categories, and high-level HackDay topics (Sparks of AI, Ignition Projects, Phoenix Initiative). Additional filter suggestions include date ranges and impact areas. • Clicking an idea card navigates users to a detailed project view featuring the full description, impact areas, team size, required skills, and contact information. Interactive elements such as the animated watch button and reaction buttons ("🔥 Hot Idea!", "💡 Interesting!", "🤔 Tell me more!") are embedded to drive engagement. • For potential team formation, the portal displays all necessary project data to facilitate manual contacts between prospective team members and idea submitters.

Admin Panel Flow: • Dedicated admin login for HackDay organizers. • Admins import ideas via CSV uploads (from the external form data source) into the platform. • Post-import, organizers review ideas and execute approve/reject workflows. They also have capabilities to edit idea details, manage categories, and track basic analytics (overall idea counts, trending projects by watch counts) through a straightforward dashboard.

1.  CONFIGURATION & INTEGRATION DETAILS

A. CSV Import Process (Idea Management): • Admin users upload the CSV file containing pre-submitted ideas. • Data validation routines process the CSV to ensure all required fields (title, description, category, submission date, team size, skills, and contact info) are present and consistent. • The ideas are then ingested into the Supabase Postgres database and rendered on the public portal after a review process.

B. Company Authentication Integration using Microsoft Azure: • All users authenticate using their existing company credentials. • Recommended Integration Steps for IT Team: 1. Set up an Azure Active Directory (AAD) application to represent the Idea Management Portal. 2. Configure the AAD application with appropriate redirect URIs, scopes, and permissions. 3. Integrate OAuth/SSO on the backend by linking Supabase Authentication with Azure’s identity endpoints. 4. Implement callback endpoints in Next.js that securely handle authentication tokens. 5. Test the complete workflow by ensuring users are automatically assigned roles based on their company credentials. 6. Document any troubleshooting steps and security considerations as per Microsoft’s guidelines.

C. Responsive Design & UI Guidelines: • Leverage the TaskIn template for a modern, visually engaging experience. • Follow mobile-first best practices using Tailwind CSS to support desktops, tablets, and mobile devices. • Ensure that interactive components (reaction buttons, watch counters) include subtle animations and visual feedback for enhanced usability.

D. Hosting & Deployment Recommendations: • Evaluate both internal hosting infrastructure and modern cloud providers (AWS, Azure, Vercel, etc.). • Cloud provider recommendations: • Use fully-managed platforms such as Vercel for Next.js deployments, which offer excellent performance and seamless integrations. • Alternatively, deploying in a containerized environment (using Docker/Kubernetes) on Azure or AWS offers robust scalability. • Ensure the chosen deployment platform supports auto-scaling, SSL/TLS cert management, and integrated CI/CD pipelines.

1.  FUTURE ENHANCEMENTS & ARCHITECTURAL CONSIDERATIONS

• The current architecture is modular, with clear separation between the idea management logic, UI components, and authentication processes. This facilitates future integration of advanced features such as:

*   Live Demo Day Dashboard for real-time project voting and investment credit assignment.
*   Enhanced team formation functionalities including in-app "express interest" mechanisms.
*   Additional host metrics and analytics modules.

• All core modules are documented and configured for scalability, while ensuring that future developers can seamlessly integrate new functionalities without major refactoring.

1.  ADDITIONAL NOTES & BEST PRACTICES

• All code should follow ESLint and Prettier formatting standards to maintain consistency. • Regular testing and optimization for performance will be critical, particularly for real-time features (watch count updates and reaction animations). • Extensive browser and device testing is recommended to ensure that the responsive design works flawlessly across all platforms. • Keep security considerations at the forefront by reviewing OAuth/SSO flows, handling token expiration, and securing API endpoints.

# =========================================================== End of Configuration Document for ide_configuration_cursor_file
