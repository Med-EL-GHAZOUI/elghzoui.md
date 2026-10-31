import Portfolio from "@/components/Portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed El-Ghazoui",
  jobTitle: "Développeur Full-Stack",
  email: "mailto:elghazoui.md@gmail.com",
  telephone: "+212 6 82 44 49 21",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressCountry: "MA"
  },
  alumniOf: "EMSI Rabat",
  url: "https://elghzouimd.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/mohamed-el-ghazoui",
    "https://github.com/Med-EL-GHAZOUI"
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Portfolio />
    </>
  );
}
