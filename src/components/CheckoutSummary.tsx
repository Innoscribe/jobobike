'use client';

import { calculateTotal } from '@/utils/pricing';

interface CheckoutSummaryProps {
  productPrice: number;
  weightKg: number;
}

export default function CheckoutSummary({ productPrice, weightKg }: CheckoutSummaryProps) {
  const breakdown = calculateTotal(weightKg, productPrice);

  const formatNOK = (amount: number) => `${amount.toLocaleString('no-NO')} kr`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Bestillingsoversikt</h2>
      
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-gray-700">
          <span>Produktpris</span>
          <span>{formatNOK(breakdown.productPrice)}</span>
        </div>
        
        <div className="flex justify-between text-gray-700">
          <span>Frakt & Toll</span>
          <span>{formatNOK(breakdown.shipping)}</span>
        </div>
        
        <div className="flex justify-between text-gray-700">
          <span>MVA (25%)</span>
          <span>{formatNOK(breakdown.vat)}</span>
        </div>
      </div>
      
      <div className="border-t pt-3">
        <div className="flex justify-between text-lg font-bold text-gray-900">
          <span>Totalt</span>
          <span>{formatNOK(breakdown.total)}</span>
        </div>
      </div>
    </div>
  );
}
