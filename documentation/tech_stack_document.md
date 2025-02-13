# Tech Stack Document for HackDay 2025 Idea Management Portal

## Introduction

The HackDay 2025 Idea Management Portal is a web-based platform designed to showcase and manage pre-submitted project ideas collected via CSV uploads. It aims to offer a visually engaging, interactive space where team members can explore projects, administrators can manage idea approvals, and staff investors can prepare for future live investment events. The platform has been built with a focus on enhanced user experience, secure authentication, and scalability to support future enhancements like real-time investment dashboards on Demo Day.

## Frontend Technologies

The frontend has been developed using Next.js 14, TypeScript, and Tailwind CSS. Next.js provides a modern framework for building fast, responsive web pages, while TypeScript adds static typing to ensure more robust code. Tailwind CSS is employed for styling, which not only speeds up the development process but also helps in maintaining a consistent design. Additionally, we are leveraging a pre-designed UI template from ui8.net known as TaskIn, which supplies a modern, visually appealing layout that aligns with the HackDay 2025 theme. The combination of these tools results in a highly interactive and responsive user interface that is mobile-first and accessible across a range of devices.

## Backend Technologies

The backend of the platform is built with Node.js and utilizes a RESTful API to handle data interactions seamlessly. Supabase Postgres serves as the primary database, offering reliable data storage and real-time updates. Authentication is managed through Supabase Authentication, which works in conjunction with Microsoft Azure’s SSO/OAuth for secure login and registration. This dual approach not only streamlines user management but also ensures compliance with company security protocols. CSV processing libraries have been integrated to facilitate the import of project ideas, making administrative tasks efficient and straightforward.

## Infrastructure and Deployment

For hosting and deployment, the portal has flexible infrastructure recommendations. It is designed to work either with the company’s internal hosting infrastructure or with modern cloud providers. The deployment pipeline incorporates CI/CD practices to ensure that updates are released safely and efficiently, while version control systems maintain code integrity. This approach guarantees that the platform remains reliable and scalable as it grows and as future features, such as the Demo Day investment dashboard, are integrated.

## Third-Party Integrations

The project takes advantage of a number of third-party services to enhance functionality. The integration with Microsoft Azure for authentication ensures a secure single sign-on experience for all users. In addition, we have embedded the TaskIn UI template from ui8.net, which provides a robust and visually appealing set of components that streamline the development process. Furthermore, tools such as Cursor are used as an advanced integrated development environment, providing real-time coding suggestions and ensuring that the implementation is consistent and efficient across the team. These third-party integrations together create a seamless user experience by reducing development overhead and increasing overall platform reliability.

## Security and Performance Considerations

Security has been prioritized through multiple layers of protection. By combining Supabase Authentication with Microsoft Azure’s SSO protocols, the platform ensures secure user logins and role management. Careful measures have been taken to protect sensitive data and to adhere to corporate security policies. On the performance front, the technology choices such as Next.js and responsive design principles via Tailwind CSS contribute to fast load times and smooth interactions. Additionally, real-time features like watch count updates and animated reaction buttons are optimized to maintain a high-quality user experience without compromising on performance, even during peak usage scenarios.

## Conclusion and Overall Tech Stack Summary

The HackDay 2025 Idea Management Portal’s tech stack has been carefully chosen to balance modern design, robust functionality, and strict security requirements. On the frontend, Next.js, TypeScript, and Tailwind CSS work together to deliver an engaging user interface inspired by the TaskIn template. The backend leverages Node.js, a RESTful API, and Supabase Postgres with Supabase Authentication, reinforced by Microsoft Azure’s SSO integration for secure access. The deployment strategy and hosting options have been designed to be scalable and reliable, while third-party integrations enhance the overall productivity and user satisfaction. This comprehensive and modular tech stack not only meets the immediate needs of the HackDay 2025 MVP but also lays a strong foundation for future enhancements and integrations.
