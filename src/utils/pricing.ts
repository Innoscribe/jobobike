// Configuration: Set to true once sales exceed 50k NOK
export const IS_VAT_REGISTERED = false;

export interface PricingBreakdown {
  productPrice: number;
  shipping: number;
  taxableBasis: number;
  vat: number;
  total: number;
}

export function calculateShippingForWeight(weightKg: number): number {
  const effectiveWeight = Math.max(weightKg, 1);
  return Math.round(440 + (28 * (effectiveWeight - 1)));
}

export function calculateTotal(weightKg: number, originalPriceNOK: number): PricingBreakdown {
  // Step 1: Calculate Shipping & Customs
  // IMPORTANT: weightKg should be the actual product weight (e.g., 27 for Luxe)
  // Use getProductWeight() from @/utils/productWeight to extract correct weights
  const shipping = calculateShippingForWeight(weightKg);

  // Step 2: Calculate Taxable Basis
  const taxableBasis = originalPriceNOK + shipping;

  // Step 3: Calculate VAT (50k threshold switch)
  const vat = IS_VAT_REGISTERED ? Math.round(taxableBasis * 0.25) : 0;

  // Step 4: Final Total
  const total = Math.round(taxableBasis + vat);

  return {
    productPrice: originalPriceNOK,
    shipping,
    taxableBasis,
    vat,
    total
  };
}
