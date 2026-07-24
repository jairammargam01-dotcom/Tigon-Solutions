interface JobPostingJsonLdProps {
  jobs: {
    title: string;
    shortDescription: string;
    employmentType: string;
    location: string;
    applyUrl: string;
    createdAt: string;
  }[];
}

export default function JobPostingJsonLd({
  jobs,
}: JobPostingJsonLdProps) {
  return (
    <>
      {jobs.map((job) => (
        <script
          key={job.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",

              "@type":
                "JobPosting",

              title: job.title,

              description:
                job.shortDescription,

              datePosted:
                job.createdAt,

              employmentType:
                job.employmentType,

              hiringOrganization: {
                "@type":
                  "Organization",

                name: "Tygon Solutions",

                sameAs:
                  "https://tygon-solutions.vercel.app",

                logo:
                  "https://tygon-solutions.vercel.app/logo.png",
              },

              jobLocationType:
                job.location ===
                "Remote"
                  ? "TELECOMMUTE"
                  : undefined,

              applicantLocationRequirements:
                job.location ===
                "Remote"
                  ? {
                      "@type":
                        "Country",

                      name: "India",
                    }
                  : undefined,

              directApply: true,

              url: job.applyUrl,
            }),
          }}
        />
      ))}
    </>
  );
}