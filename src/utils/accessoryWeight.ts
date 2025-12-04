// Accessory weight mapping based on product codes/names
export function getAccessoryWeight(accessoryId: string, accessoryName: string): number {
  // Weight mapping by product code or name keywords
  const weightMap: { [key: string]: number } = {
    // By product code
    'JBL-012-03': 7,      // Canopy Frame
    'JBL-012-01': 1.5,    // Baby Fence (Monkey bar)
    'JBF-035': 5,         // Armrests
    'JBL-011-01': 2.5,    // Load-bearing plate
    'JBL-008-01': 3,      // Large basket
    'JBH-065': 1,         // Baby chair conversion seat
  };

  // Check by ID first
  if (weightMap[accessoryId]) {
    return weightMap[accessoryId];
  }

  // Check by name keywords
  const nameLower = accessoryName.toLowerCase();
  
  // Heavy items (7 kg)
  if (nameLower.includes('chair') || nameLower.includes('seat')) return 7;
  if (nameLower.includes('rack') || nameLower.includes('frame')) return 7;
  if (nameLower.includes('canopy') && nameLower.includes('frame')) return 7;
  
  // Specific weights
  if (nameLower.includes('canopy') && nameLower.includes('cloth')) return 2;
  if (nameLower.includes('monkey bar') || nameLower.includes('baby fence')) return 1.5;
  if (nameLower.includes('armrest')) return 5;
  if (nameLower.includes('cushion')) return 0.5;
  if (nameLower.includes('load-bearing') || nameLower.includes('plate')) return 2.5;
  if (nameLower.includes('basket') && nameLower.includes('large')) return 3;
  
  // Default weight for other accessories
  return 2;
}
