import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS_DATA } from "@/lib/productData";
import { getCombinedProducts } from "@/lib/productVariants";
import CategoryClient from "@/components/CategoryClient";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categoryNames: { [key: string]: string } = {
  'sammenleggbar': 'Sammenleggbare El-sykler',
  'lastesykkel': 'Lastesykler',
  'pendler': 'Pendlersykler',
  'fatbike': 'Fatbike El-sykler',
  'terreng': 'Terreng El-sykler',
  'hybrid': 'Hybrid El-sykler',
};

const categoryDescriptions: { [key: string]: string } = {
  'sammenleggbar': 'Utforsk våre sammenleggbare el-sykler - perfekt for pendling og lagring. Kompakte, lette og kraftige.',
  'lastesykkel': 'Premium lastesykler for transport av barn og varer. Stabil, sikker og kraftig motor.',
  'pendler': 'El-sykler designet for daglig pendling. Komfortabel, pålitelig og effektiv.',
  'fatbike': 'Kraftige fatbike el-sykler for alle terreng. Store dekk for maksimal stabilitet.',
  'terreng': 'Terreng el-sykler for eventyr. Robust konstruksjon og kraftig ytelse.',
  'hybrid': 'Hybrid el-sykler som kombinerer det beste fra flere verdener. Allsidig og praktisk.',
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = categoryNames[slug.toLowerCase()] || slug;
  const description = categoryDescriptions[slug.toLowerCase()] || `Utforsk våre ${categoryName} hos JOBOBIKE Norge.`;

  return {
    title: `${categoryName} | JOBOBIKE Norge - Premium El-sykler`,
    description: `${description} Gratis frakt over 3000 kr. 2 års garanti. Kjøp nå!`,
    keywords: `${slug}, el-sykkel, ${categoryName}, jobobike, kjøp el-sykkel`,
    openGraph: {
      title: `${categoryName} - JOBOBIKE Norge`,
      description: description,
      url: `https://jobobike.no/category/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const categories = Array.from(
    new Set(
      PRODUCTS_DATA.flatMap((p) =>
        Array.isArray(p.category) ? p.category : [p.category]
      )
    )
  );

  return categories.map((cat) => ({ slug: cat }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const combinedProducts = getCombinedProducts();
  const filteredProducts = combinedProducts.filter((p) =>
    p.category.some(cat => cat.toLowerCase() === slug.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    notFound();
  }

  return <CategoryClient combinedProducts={filteredProducts} slug={slug} />;
}
