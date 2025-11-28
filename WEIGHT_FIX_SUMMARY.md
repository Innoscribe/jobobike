# Product Weight Fix for Shipping Calculations

## Problem
The shipping and toll calculations (Frakt & Toll) were not using the correct product weights. For example, the Luxe bike weighs 27 kg, but this weight wasn't being properly extracted and used in shipping cost calculations.

## Solution Overview
I've implemented a comprehensive solution to ensure correct product weights are used throughout the application:

### 1. Created Weight Utility (`src/utils/productWeight.ts`)
- **extractWeightInKg()**: Extracts weight from specification strings like "27 kg"
- **PRODUCT_WEIGHTS**: Hardcoded mapping of all product IDs to their weights as backup
- **getProductWeight()**: Main function that tries to extract from specs first, then falls back to hardcoded values

### 2. Updated Type Definitions
- Added `weight?: number` field to `CartItem` interface in:
  - `src/types/cart.ts`
  - `src/components/CartContext.tsx`

### 3. Product Weights Reference
Here are the correct weights for all products:

| Product | ID | Weight (kg) |
|---------|-----|-------------|
| Luxe | luxe-snow-001 | 27 |
| Robin | robin-001 | 44 |
| Robin Pro | robin-pro-001 | 44 |
| Romer | romer-001 | 29 |
| Romer Pro | romer-pro-001 | 29 |
| Ace Pro | ace-pro-001 | 26 |
| Romer C | romer-c-001 | 29 |
| Sam | sam-001 | 30 |
| Dyno GT | dyno-gt-001 | 27 |
| Lyon Pro | lyon-pro-001 | 27 |
| Transer | transer-001 | 29 |
| Mover | mover-001 | 23 |
| Eddy X | eddy-x-001 | 25 |
| Astra | astra-001 | 27 |
| Viva | viva-001 | 29 |
| Viva ST | viva-st-001 | 29 |
| Henry | henry-001 | 33.6 |
| Ace | ace-001 | 26 |
| Linda | linda-001 | 27 |
| Triker | triker-001 | 44 |
| Dyno | dyno-001 | 27 |

## How to Use

### When Adding Products to Cart
```typescript
import { getProductWeight } from '@/utils/productWeight';

// Extract weight from product
const weight = getProductWeight(product.id, product.specifications.weight);

// Add to cart with weight
addToCart({
  ...product,
  weight: weight
}, quantity);
```

### In Shipping Calculations
```typescript
import { calculateTotal } from '@/utils/pricing';
import { getProductWeight } from '@/utils/productWeight';

// Get total weight of cart
const totalWeight = cartItems.reduce((sum, item) => {
  const itemWeight = item.weight || getProductWeight(item.id);
  return sum + (itemWeight * item.quantity);
}, 0);

// Calculate shipping with correct weight
const breakdown = calculateTotal(totalWeight, totalPrice);
```

## Shipping Formula
The shipping cost is calculated as:
```
Shipping = 440 + (28 × (weight - 1))
```

Examples:
- 1 kg: 440 kr
- 27 kg (Luxe): 440 + (28 × 26) = 1,168 kr
- 44 kg (Robin): 440 + (28 × 43) = 1,644 kr

## Next Steps for Implementation

### 1. Update ProductDetails Component
In `src/components/ProductDetails.tsx`, when adding to cart:
```typescript
import { getProductWeight } from '@/utils/productWeight';

// In the addToCart calls:
const weight = getProductWeight(product.id, product.specifications.weight);
addToCart({
  ...product,
  weight: weight
}, quantity);
```

### 2. Update Checkout Flow
In `src/app/checkout/CheckoutClient.tsx` or wherever checkout summary is displayed:
```typescript
import { getProductWeight } from '@/utils/productWeight';

// Calculate total cart weight
const totalWeight = cartItems.reduce((sum, item) => {
  const weight = item.weight || getProductWeight(item.id);
  return sum + (weight * item.quantity);
}, 0);

// Pass to CheckoutSummary
<CheckoutSummary 
  productPrice={totalPrice} 
  weightKg={totalWeight} 
/>
```

### 3. Update API Endpoint (if needed)
If shipping calculations happen server-side in `src/app/api/create-payment-intent/route.ts`:
```typescript
import { getProductWeight } from '@/utils/productWeight';
import { calculateTotal } from '@/utils/pricing';

// Calculate total weight from items
const totalWeight = items.reduce((sum: number, item: any) => {
  const weight = item.weight || getProductWeight(item.id);
  return sum + (weight * (item.quantity || 1));
}, 0);

// Use in shipping calculation
const breakdown = calculateTotal(totalWeight, subtotal);
```

## Verification
To verify the fix is working:
1. Add Luxe (27 kg) to cart
2. Go to checkout
3. Shipping should be: 440 + (28 × 26) = 1,168 kr
4. Add another Luxe (total 54 kg)
5. Shipping should be: 440 + (28 × 53) = 1,924 kr

## Files Modified
- ✅ `src/utils/productWeight.ts` (NEW)
- ✅ `src/types/cart.ts`
- ✅ `src/components/CartContext.tsx`
- ✅ `src/utils/pricing.ts` (documentation added)
- ⏳ `src/components/ProductDetails.tsx` (needs update)
- ⏳ `src/app/checkout/CheckoutClient.tsx` (needs update)
- ⏳ `src/app/api/create-payment-intent/route.ts` (needs update)

## Notes
- All product weights are stored in `src/lib/productData.ts` in the `specifications.weight` field
- The weight utility provides a fallback mapping in case extraction fails
- Accessories typically have minimal weight and can default to 1 kg
- For packages/bundles, sum the weights of all included items
