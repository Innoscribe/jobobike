import { notFound } from 'next/navigation';
import { accessoriesProducts, getAccessoryBySlug } from '@/lib/accessoriesProducts';
import AccessoryDetails from '@/components/AccessoryDetails';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return accessoriesProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function AccessoryProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = getAccessoryBySlug(slug);

  if (!product) {
    notFound();
  }

  return <AccessoryDetails product={product} />;
}
