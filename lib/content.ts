export type Lang = "es" | "en";
export type Track = "data" | "dev";

type Bilingual = Record<Lang, string>;

export const links = {
  email: "ferwin.arias@gmail.com",
  github: "https://github.com/ferwinred",
  linkedin: "https://www.linkedin.com/in/ferwinarias",
};

export const ui = {
  navProjects: { es: "Proyectos", en: "Projects" },
  navExperience: { es: "Experiencia", en: "Experience" },
  navContact: { es: "Contacto", en: "Contact" },
  ctaProjects: { es: "Ver proyectos", en: "See projects" },
  ctaGithub: { es: "Ver GitHub", en: "View GitHub" },
  expTitle: { es: "Dónde he\nconstruido", en: "Where I have\nbuilt" },
  contactTitle: { es: "Construyamos\nalgo juntos.", en: "Let’s build\nsomething." },
  modality: { es: "híbrido o remoto", en: "hybrid or remote" },
  code: { es: "Código", en: "Code" },
  demo: { es: "Demo", en: "Live demo" },
  trackLabel: { es: "Perfil", en: "Profile" },
  langLabel: { es: "Idioma", en: "Language" },
  themeToDark: { es: "Activar modo oscuro", en: "Switch to dark mode" },
  themeToLight: { es: "Activar modo claro", en: "Switch to light mode" },
} satisfies Record<string, Bilingual>;

export const hero: Record<Track, { eyebrow: string; h1a: Bilingual; h1b: Bilingual; lead: Bilingual; panel: string }> = {
  data: {
    eyebrow: "fullstack developer → data engineering",
    h1a: { es: "Datos que fluyen,", en: "Data that flows," },
    h1b: { es: "decisiones que llegan.", en: "decisions that land." },
    lead: {
      es: "Llevo 4 años construyendo software en producción con .NET, Python, Angular y AWS, y escribiendo scripts de integración y migración de datos. Hoy llevo esa disciplina a la ingeniería de datos con Apache Spark, Kafka y dbt.",
      en: "I have spent 4 years shipping production software with .NET, Python, Angular and AWS, including data integration and migration scripts. Now I bring that discipline to data engineering with Apache Spark, Kafka and dbt.",
    },
    panel: "payments-lakehouse / pipeline",
  },
  dev: {
    eyebrow: "fullstack developer · .net · python · angular · aws",
    h1a: { es: "Software que escala,", en: "Software that scales," },
    h1b: { es: "sistemas que duran.", en: "systems that last." },
    lead: {
      es: "Construyo APIs REST y aplicaciones web con .NET (C#), Python, TypeScript y Angular, con bases SQL optimizadas, despliegues en AWS con Docker y CI/CD en GitHub Actions.",
      en: "I build REST APIs and web apps with .NET (C#), Python, TypeScript and Angular, with tuned SQL databases, AWS deployments with Docker and CI/CD on GitHub Actions.",
    },
    panel: "architecture",
  },
};

export const flow: Record<Track, { step: string; name: Bilingual; desc: Bilingual; tag: string }[]> = {
  data: [
    { step: "01", name: { es: "Ingesta", en: "Ingest" }, desc: { es: "Eventos de transacciones", en: "Transaction events" }, tag: "kafka" },
    { step: "02", name: { es: "Streaming", en: "Streaming" }, desc: { es: "Bronze en Parquet", en: "Bronze in Parquet" }, tag: "pyspark" },
    { step: "03", name: { es: "Calidad", en: "Quality" }, desc: { es: "Silver + quarantine", en: "Silver + quarantine" }, tag: "spark" },
    { step: "04", name: { es: "Modelado", en: "Modeling" }, desc: { es: "Marts y tests", en: "Marts and tests" }, tag: "dbt" },
  ],
  dev: [
    { step: "01", name: { es: "Frontend", en: "Frontend" }, desc: { es: "Interfaces en TypeScript", en: "TypeScript UIs" }, tag: "angular" },
    { step: "02", name: { es: "APIs", en: "APIs" }, desc: { es: "Servicios REST", en: "REST services" }, tag: ".net" },
    { step: "03", name: { es: "Datos", en: "Data" }, desc: { es: "Consultas optimizadas", en: "Tuned queries" }, tag: "mysql" },
    { step: "04", name: { es: "Entrega", en: "Delivery" }, desc: { es: "Contenedores y CI/CD", en: "Containers and CI/CD" }, tag: "aws" },
  ],
};

export const stats: { value: string; label: Bilingual }[] = [
  { value: "4", label: { es: "años desarrollando software", en: "years building software" } },
  { value: "−30%", label: { es: "tiempo de respuesta en consultas", en: "query response time" } },
  { value: "30+", label: { es: "repositorios públicos", en: "public repositories" } },
];

export type Project = {
  name: string;
  desc: Bilingual;
  stack: string[];
  code: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Record<Track, { title: Bilingual; items: Project[] }> = {
  data: {
    title: { es: "Proyectos de datos", en: "Data projects" },
    items: [
      {
        name: "payments-lakehouse",
        featured: true,
        desc: {
          es: "Lakehouse de transacciones de una billetera digital con datos sintéticos. Kafka y Spark Structured Streaming a bronze; 6 reglas de calidad que separan silver de quarantine; deduplicación idempotente; modelos dbt de doble partida, KPIs por canal y una señal de riesgo de cash-out rápido, todo con tests. Corre en Docker Compose y Kubernetes, y el CI ejecuta el pipeline completo.",
          en: "Digital-wallet transactions lakehouse on synthetic data. Kafka and Spark Structured Streaming into bronze; 6 data-quality rules splitting silver from quarantine; idempotent deduplication; dbt double-entry models, channel KPIs and a rapid cash-out risk signal, all tested. Runs on Docker Compose and Kubernetes, and CI runs the whole pipeline.",
        },
        stack: ["Kafka", "PySpark", "dbt", "DuckDB", "Docker", "Kubernetes", "GitHub Actions"],
        code: "https://github.com/ferwinred/payments-lakehouse",
      },
      {
        name: "Django JWT API",
        desc: {
          es: "API REST en Python con Django y autenticación basada en JSON Web Tokens.",
          en: "Python REST API built with Django and JSON Web Token authentication.",
        },
        stack: ["Python", "Django", "JWT"],
        code: "https://github.com/ferwinred/Django-API-Rest-and-JWT-Auth",
      },
    ],
  },
  dev: {
    title: { es: "Backend y fullstack", en: "Backend & fullstack" },
    items: [
      {
        name: "Flights App",
        desc: {
          es: "API Gateway y tres microservicios (vuelos, usuarios y pasajeros) en NestJS.",
          en: "API Gateway and three microservices (flights, users and passengers) in NestJS.",
        },
        stack: ["NestJS", "TypeScript", "Microservices"],
        code: "https://github.com/ferwinred/api-gateway-fligths-app",
      },
      {
        name: "FitCode",
        desc: {
          es: "API en Java con Spring Boot (Spring Data JPA y Spring Security) y frontend en Next.js con TypeScript.",
          en: "Java API with Spring Boot (Spring Data JPA and Spring Security) and a Next.js + TypeScript frontend.",
        },
        stack: ["Java", "Spring Boot", "Next.js"],
        code: "https://github.com/ferwinred/fitcode-api",
      },
      {
        name: "Django JWT API",
        desc: {
          es: "API REST en Python con Django y autenticación basada en JSON Web Tokens.",
          en: "Python REST API built with Django and JSON Web Token authentication.",
        },
        stack: ["Python", "Django", "JWT"],
        code: "https://github.com/ferwinred/Django-API-Rest-and-JWT-Auth",
      },
      {
        name: "PI Dogs",
        desc: {
          es: "Aplicación fullstack con React, Redux, Express, Sequelize y PostgreSQL.",
          en: "Fullstack app with React, Redux, Express, Sequelize and PostgreSQL.",
        },
        stack: ["React", "Node.js", "PostgreSQL"],
        code: "https://github.com/ferwinred/PI-Dogs",
        demo: "https://doggy-ten.vercel.app",
      },
    ],
  },
};

export const jobs: { dates: Bilingual; role: string; company: Bilingual; desc: Bilingual }[] = [
  {
    dates: { es: "03/2024 — hoy", en: "03/2024 — now" },
    role: "Fullstack Developer",
    company: { es: "VSDC SAS (NumRot)", en: "VSDC SAS (NumRot)" },
    desc: {
      es: "APIs REST con .NET (C#), scripts en Python para integración y migración de datos, soporte a un proyecto en Angular, MySQL y despliegues en AWS con Docker y GitHub Actions.",
      en: "REST APIs in .NET (C#), Python scripts for data integration and migration, support for an Angular project, MySQL and AWS deployments with Docker and GitHub Actions.",
    },
  },
  {
    dates: { es: "03/2022 — 06/2023", en: "03/2022 — 06/2023" },
    role: "Backend Developer",
    company: { es: "On The Fuze", en: "On The Fuze" },
    desc: {
      es: "APIs con Python y Node.js, integraciones con terceros y 30% menos tiempo de respuesta en consultas.",
      en: "Python and Node.js APIs, third-party integrations and 30% faster query response times.",
    },
  },
  {
    dates: { es: "2025 — hoy", en: "2025 — now" },
    role: "Data Engineering",
    company: { es: "proyectos y autoformación", en: "projects & self-study" },
    desc: {
      es: "Apache Spark (PySpark y Scala), Kafka, dbt, AWS Glue y Athena. También Java, Spring Boot y React.",
      en: "Apache Spark (PySpark and Scala), Kafka, dbt, AWS Glue and Athena. Also Java, Spring Boot and React.",
    },
  },
];

export const education: { title: Bilingual; place: string; dates: string }[] = [
  { title: { es: "Técnico en Desarrollo de Software", en: "Software Development Technician" }, place: "CESDE, Medellín", dates: "2025 —" },
  { title: { es: "Bootcamp Full Stack Developer", en: "Full Stack Developer Bootcamp" }, place: "Henry", dates: "2021 — 2022" },
];

export const stack: Record<"data" | "work" | "more", { title: Bilingual; items: string[] }> = {
  work: {
    title: { es: "Fullstack (laboral)", en: "Fullstack (work)" },
    items: [".NET / C#", "Python", "TypeScript", "Angular", "SQL", "Node.js"],
  },
  data: {
    title: { es: "Datos (proyectos)", en: "Data (projects)" },
    items: ["Apache Spark", "PySpark", "Scala", "Kafka", "dbt", "AWS Glue", "Athena"],
  },
  more: {
    title: { es: "Cloud, DevOps y más", en: "Cloud, DevOps & more" },
    items: ["AWS", "Docker", "GitHub Actions", "Git", "Java", "Spring Boot", "React"],
  },
};
