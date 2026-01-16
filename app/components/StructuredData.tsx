export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Sebastian Quintero Ortiz",
    alternateName: "Sebastian Quintero",
    jobTitle: "Ingeniero de Software",
    description: "Ingeniero de Software Full-Stack especializado en React, Next.js, TypeScript, Node.js y PostgreSQL",
    url: "https://www.sebastianquintero.dev",
    image: "https://www.sebastianquintero.dev/portafolio.png",
    sameAs: [
      "https://github.com/SebasQuintero99",
      "https://www.linkedin.com/in/juan-sebastian-quintero"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Neiva",
      addressRegion: "Huila",
      addressCountry: "CO"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Surcolombiana",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Neiva",
          addressRegion: "Huila",
          addressCountry: "CO"
        }
      }
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Tailwind CSS",
      "Framer Motion",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development"
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Ingeniero de Software",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Universidad Surcolombiana"
      }
    }
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Juan Sebastian Quintero Ortiz - Portfolio",
    description: "Portafolio profesional de Juan Sebastian Quintero Ortiz, Ingeniero de Software Full-Stack",
    url: "https://www.sebastianquintero.dev",
    author: {
      "@type": "Person",
      name: "Juan Sebastian Quintero Ortiz"
    },
    inLanguage: "es-CO",
    copyrightYear: 2025,
    copyrightHolder: {
      "@type": "Person",
      name: "Juan Sebastian Quintero Ortiz"
    }
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Juan Sebastian Quintero Ortiz - Desarrollo de Software",
    description: "Servicios de desarrollo Full-Stack: aplicaciones web, sistemas empresariales, APIs REST",
    provider: {
      "@type": "Person",
      name: "Juan Sebastian Quintero Ortiz"
    },
    areaServed: {
      "@type": "Place",
      name: "Colombia"
    },
    serviceType: [
      "Desarrollo Full-Stack",
      "Desarrollo Frontend",
      "Desarrollo Backend",
      "Diseño de APIs",
      "Consultoría de Software"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceData) }}
      />
    </>
  );
}
