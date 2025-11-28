// Utility to extract weight from product specifications
export function extractWeightInKg(weightString: string | undefined): number {
  if (!weightString) return 1; // Default weight if not specified
  
  // Extract number from strings like "27 kg", "27kg", "27 kg", etc.
  const match = weightString.match(/(\d+(?:\.\d+)?)/);
  if (match) {
    return parseFloat(match[1]);
  }
  
  return 1; // Default weight if parsing fails
}

// Product weight mapping for known products (as backup)
export const PRODUCT_WEIGHTS: Record<string, number> = {
  'luxe-snow-001': 36,
  'robin-001': 42.5,
  'robin-pro-001': 42.5,
  'romer-001': 41.4,
  'romer-pro-001': 41.4,
  'ace-pro-001': 26,
  'romer-c-001': 41.4,
  'sam-001': 31,
  'dyno-gt-001': 36,
  'lyon-pro-001': 36,
  'transer-001': 43,
  'mover-001': 35.5,
  'eddy-x-001': 40.8,
  'astra-001': 36,
  'viva-001': 29,
  'viva-st-001': 29,
  'henry-001': 33.6,
  'ace-001': 26,
  'linda-001': 35.6,
  'triker-001': 56,
  'dyno-001': 36,
};

export function getProductWeight(productId: string, weightSpec?: string): number {
  // Always use hardcoded mapping first (most accurate)
  if (PRODUCT_WEIGHTS[productId]) {
    return PRODUCT_WEIGHTS[productId];
  }
  
  // Try to extract from specification as fallback
  if (weightSpec) {
    const extracted = extractWeightInKg(weightSpec);
    if (extracted > 0) return extracted;
  }
  
  return 1;
}
