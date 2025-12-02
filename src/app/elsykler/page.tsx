import { Metadata } from 'next';
import ProductPage from "@/components/ProductPage";

export const metadata: Metadata = {
  title: 'El-sykler Norge | Premium Elektriske Sykler - JOBOBIKE',
  description: 'Utforsk vårt komplette utvalg av premium el-sykler. Fatbike, lastesykkel, pendlersykkel og mer. Gratis frakt over 3000 kr. 2 års garanti. Kjøp nå!',
  keywords: 'el-sykler, elektriske sykler, fatbike, lastesykkel, pendlersykkel, ebike norge, kjøp el-sykkel',
  openGraph: {
    title: 'El-sykler Norge - JOBOBIKE Premium Elektriske Sykler',
    description: 'Komplett utvalg av premium el-sykler med gratis frakt og 2 års garanti.',
    url: 'https://jobobike.no/elsykler',
  },
};

export default function Page() {
  return <ProductPage />;
}
