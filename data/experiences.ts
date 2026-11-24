import { Experience } from "@/types/experiences";
export const experiencesData: Experience[] = [
  {
    role: "Software Developer",
    company: "Your Company Name",
    period: "202X - Present",
    description:
      "Developing and maintaining business applications, backend services, and system integrations.",
    responsibilities: [
      "Developing REST APIs and backend business logic.",
      "Working with relational databases and data processing.",
      "Integrating services using messaging technologies.",
      "Maintaining and improving existing applications.",
    ],
    technologies: ["Java", "Spring Boot", "Kotlin", "PostgreSQL"],
  },
  {
    role: "Backend Developer",
    company: "Previous Company",
    period: "202X - 202X",
    description:
      "Building backend applications and integrating systems to support business operations.",
    responsibilities: [
      "Implementing backend features and database operations.",
      "Developing system integrations and asynchronous processes.",
      "Troubleshooting application issues and improving performance.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "RabbitMQ"],
  },
];
