# Weight Update Summary

## Updated Weights

| Bike Model | Old Weight | New Weight | Product ID |
|------------|-----------|------------|------------|
| Luxe | 27 kg | **36 kg** | luxe-snow-001 |
| Astra | 27 kg | **36 kg** | astra-001 |
| Robin | 44 kg | **42.5 kg** | robin-001 |
| Robin Pro | 44 kg | **42.5 kg** | robin-pro-001 |
| Romer | 29 kg | **41.4 kg** | romer-001 |
| Romer Pro | 29 kg | **41.4 kg** | romer-pro-001 |
| Romer C | 29 kg | **41.4 kg** | romer-c-001 |
| Sam | 30 kg | **31 kg** | sam-001 |
| Dyno | 27 kg | **36 kg** | dyno-001 |
| Dyno GT | 27 kg | **36 kg** | dyno-gt-001 |
| Lyon Pro | 27 kg | **36 kg** | lyon-pro-001 |
| Transer | 29 kg | **43 kg** | transer-001 |
| Mover | 23 kg | **35.5 kg** | mover-001 |
| Eddy X | 25 kg | **40.8 kg** | eddy-x-001 |
| Viva | 29 kg | **29 kg** ✓ | viva-001 |
| Viva ST | 29 kg | **29 kg** ✓ | viva-st-001 |
| Henry | 33.6 kg | **33.6 kg** ✓ | henry-001 |
| Ace | 26 kg | **26 kg** ✓ | ace-001 |
| Ace Pro | 26 kg | **26 kg** ✓ | ace-pro-001 |
| Linda | 27 kg | **35.6 kg** | linda-001 |
| Triker | 44 kg | **56 kg** | triker-001 |

## Missing Bikes from Your List

These bikes are NOT in your current product database:

1. **Bruno A34L** - 29.6 kg
2. **Eddy N46** - 45 kg
3. **Commuter F46** - 35.5 kg
4. **E44 Apex** - 44 kg
5. **N38** - 56 kg

## Shipping Cost Examples (Updated)

### Single Bikes:
- **Luxe (36 kg)**: 440 + (28 × 35) = **1,420 kr**
- **Triker (56 kg)**: 440 + (28 × 55) = **1,980 kr**
- **Transer (43 kg)**: 440 + (28 × 42) = **1,616 kr**
- **Romer (41.4 kg)**: 440 + (28 × 40.4) = **1,571 kr**

### Multiple Bikes:
- **2× Luxe (72 kg)**: 1,420 + 1,420 = **2,840 kr**
- **Luxe + Robin (78.5 kg)**: 1,420 + 1,630 = **3,050 kr**

## Notes

- All weights have been updated in `src/utils/productWeight.ts`
- The function now prioritizes hardcoded weights over specification extraction
- Missing bikes should be added to your product database if they exist
- Robin weight uses average of 42.2/42.8 = 42.5 kg
