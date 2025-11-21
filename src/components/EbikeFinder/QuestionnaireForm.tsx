// components/EbikeFinder/QuestionnaireForm.tsx
'use client';

import { useState } from 'react';
import { type UserPreferences } from './calculatorLogic';

// Add custom CSS for range sliders
const rangeSliderStyles = `
  .range-slider {
    -webkit-appearance: none;
    appearance: none;
    height: 8px;
    border-radius: 4px;
    background: #e5e7eb;
    outline: none;
  }
  
  .range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #12b190;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .range-slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #12b190;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: none;
  }
`;

interface QuestionnaireFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export default function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState<Partial<UserPreferences>>({
    gender: 'male',
    age: 30,
    height: 170,
    weight: 70,
    usageType: [],
    terrain: 'flat',
    distancePerTrip: '5-15',
    rangeRequirement: 50,
    budget: 25000,
    weightPreference: 'medium',
    motorPreference: 'Not sure',
    comfortLevel: 'normal',
    extraNeeds: [],
  });

  const [errors, setErrors] = useState<{age?: string; height?: string; weight?: string}>({});
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handleChange = (field: keyof UserPreferences, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'age' || field === 'height' || field === 'weight') {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleMultiSelect = (field: 'usageType' | 'extraNeeds', value: string) => {
    setFormData(prev => {
      const current = prev[field] as string[] || [];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentPage === totalPages && isFormValid()) {
      onSubmit(formData as UserPreferences);
    }
  };

  const validateInputs = () => {
    const newErrors: {age?: string; height?: string; weight?: string} = {};
    
    if (formData.age && (formData.age < 10 || formData.age > 100)) {
      newErrors.age = 'Vennligst skriv inn en realistisk alder (10-100 år)';
    }
    if (formData.height && (formData.height < 100 || formData.height > 250)) {
      newErrors.height = 'Vennligst skriv inn en realistisk høyde (100-250 cm)';
    }
    if (formData.weight && (formData.weight < 30 || formData.weight > 200)) {
      newErrors.weight = 'Vennligst skriv inn en realistisk vekt (30-200 kg)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return formData.usageType && formData.usageType.length > 0 && validateInputs();
  };

  const nextPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (currentPage === 1 && !validateInputs()) return;
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: rangeSliderStyles }} />
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Step {currentPage} of {totalPages}</span>
          <span className="text-sm font-medium text-[#12b190]">{Math.round((currentPage / totalPages) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-[#12b190] to-[#0f9a7a] h-3 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>

      {/* Page 1: Personal Info */}
      {currentPage === 1 && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Fortell oss om deg selv</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kjønn</label>
              <select 
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] focus:border-[#12b190] transition-all"
              >
                <option value="male">Mann</option>
                <option value="female">Kvinne</option>
                <option value="other">Annet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alder</label>
              <input 
                type="number"
                value={formData.age}
                onChange={(e) => handleChange('age', Number(e.target.value))}
                className={`w-full px-4 py-3 bg-white border-2 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] transition-all ${
                  errors.age ? 'border-red-500' : 'border-gray-300 focus:border-[#12b190]'
                }`}
                min="10"
                max="100"
              />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Høyde (cm)</label>
              <input 
                type="number"
                value={formData.height}
                onChange={(e) => handleChange('height', Number(e.target.value))}
                className={`w-full px-4 py-3 bg-white border-2 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] transition-all ${
                  errors.height ? 'border-red-500' : 'border-gray-300 focus:border-[#12b190]'
                }`}
                min="100"
                max="250"
              />
              {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vekt (kg)</label>
              <input 
                type="number"
                value={formData.weight}
                onChange={(e) => handleChange('weight', Number(e.target.value))}
                className={`w-full px-4 py-3 bg-white border-2 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] transition-all ${
                  errors.weight ? 'border-red-500' : 'border-gray-300 focus:border-[#12b190]'
                }`}
                min="30"
                max="200"
              />
              {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Budsjett (NOK)</label>
            <div className="relative">
              <div className="w-full h-2 bg-gray-200 rounded-lg">
                <div 
                  className="h-2 bg-gradient-to-r from-[#12b190] to-[#0f9a7a] rounded-lg transition-all duration-200"
                  style={{ width: `${((formData.budget! - 10000) / (60000 - 10000)) * 100}%` }}
                />
              </div>
              <input 
                type="range"
                value={formData.budget}
                onChange={(e) => handleChange('budget', Number(e.target.value))}
                className="absolute top-0 w-full range-slider cursor-pointer bg-transparent"
                min="10000"
                max="60000"
                step="1000"
              />
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
              <span>10,000</span>
              <span className="font-bold text-[#12b190] text-sm sm:text-base">{(formData.budget || 25000).toLocaleString()} NOK</span>
              <span>60,000</span>
            </div>
          </div>
        </div>
      )}

      {/* Page 2: Usage & Terrain */}
      {currentPage === 2 && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Hvordan vil du bruke den?</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Bruksområde (Velg alle som passer)</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[{no: 'Pendling', en: 'Commuting'}, {no: 'Terreng', en: 'Off-road'}, {no: 'By', en: 'City'}, {no: 'Tur', en: 'Touring'}, {no: 'Familie', en: 'Family'}, {no: 'Sport', en: 'Sport'}].map(type => (
                <button
                  key={type.en}
                  type="button"
                  onClick={() => handleMultiSelect('usageType', type.en)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    formData.usageType?.includes(type.en)
                      ? 'border-[#12b190] bg-[#12b190] text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#12b190] hover:text-[#12b190]'
                  }`}
                >
                  {type.no}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Terreng</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[{no: 'Flatt', en: 'Flat'}, {no: 'Små bakker', en: 'Small hills'}, {no: 'Kupert', en: 'Hilly'}, {no: 'Fjell', en: 'Mountain'}].map(terrain => (
                <button
                  key={terrain.en}
                  type="button"
                  onClick={() => handleChange('terrain', terrain.en)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    formData.terrain === terrain.en
                      ? 'border-[#12b190] bg-[#12b190] text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#12b190] hover:text-[#12b190]'
                  }`}
                >
                  {terrain.no}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Avstand per tur</label>
            <select 
              value={formData.distancePerTrip}
              onChange={(e) => handleChange('distancePerTrip', e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] focus:border-[#12b190] transition-all"
            >
              <option value="<5">Mindre enn 5 km</option>
              <option value="5-15">5-15 km</option>
              <option value="15-30">15-30 km</option>
              <option value="30+">30+ km</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Minimum rekkevidde nødvendig (km)</label>
            <div className="relative">
              <div className="w-full h-2 bg-gray-200 rounded-lg">
                <div 
                  className="h-2 bg-gradient-to-r from-[#12b190] to-[#0f9a7a] rounded-lg transition-all duration-200"
                  style={{ width: `${((formData.rangeRequirement! - 20) / (150 - 20)) * 100}%` }}
                />
              </div>
              <input 
                type="range"
                value={formData.rangeRequirement}
                onChange={(e) => handleChange('rangeRequirement', Number(e.target.value))}
                className="absolute top-0 w-full range-slider cursor-pointer bg-transparent"
                min="20"
                max="150"
                step="5"
              />
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
              <span>20 km</span>
              <span className="font-bold text-[#12b190] text-sm sm:text-base">{formData.rangeRequirement} km</span>
              <span>150 km</span>
            </div>
          </div>
        </div>
      )}

      {/* Page 3: Preferences */}
      {currentPage === 3 && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Siste preferanser</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Komfortnivå</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[{no: 'Sporty', en: 'Sporty'}, {no: 'Normal', en: 'Normal'}, {no: 'Ekstra komfort', en: 'Extra comfort'}].map(comfort => (
                <button
                  key={comfort.en}
                  type="button"
                  onClick={() => handleChange('comfortLevel', comfort.en)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    formData.comfortLevel === comfort.en
                      ? 'border-[#12b190] bg-[#12b190] text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#12b190] hover:text-[#12b190]'
                  }`}
                >
                  {comfort.no}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Vektpreferanse</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[{no: 'Lett', en: 'light'}, {no: 'Medium', en: 'medium'}, {no: 'Tung', en: 'heavy'}].map(weight => (
                <button
                  key={weight.en}
                  type="button"
                  onClick={() => handleChange('weightPreference', weight.en)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    formData.weightPreference === weight.en
                      ? 'border-[#12b190] bg-[#12b190] text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#12b190] hover:text-[#12b190]'
                  }`}
                >
                  {weight.no}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Motorpreferanse</label>
            <select 
              value={formData.motorPreference}
              onChange={(e) => handleChange('motorPreference', e.target.value)}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#12b190] focus:border-[#12b190] transition-all"
            >
              <option value="Not sure">Usikker / Ingen preferanse</option>
              <option value="Front hub">Forhjulsmotor</option>
              <option value="Rear hub">Bakhjulsmotor</option>
              <option value="Mid-drive">Midtmotor</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Ekstra funksjoner (Valgfritt)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[{no: 'Bagasjebrett', en: 'Luggage rack'}, {no: 'Barnesete', en: 'Child seat'}, {no: 'Sammenleggbar', en: 'Foldable'}, {no: 'Terrengg dekk', en: 'Off-road tires'}].map(feature => (
                <button
                  key={feature.en}
                  type="button"
                  onClick={() => handleMultiSelect('extraNeeds', feature.en)}
                  className={`px-3 py-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    formData.extraNeeds?.includes(feature.en)
                      ? 'border-[#12b190] bg-[#12b190] text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-[#12b190] hover:text-[#12b190]'
                  }`}
                >
                  {feature.no}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
        {currentPage > 1 && (
          <button
            type="button"
            onClick={prevPage}
            className="px-4 md:px-6 py-3 border-2 border-gray-300 bg-white rounded-xl font-medium text-gray-700 hover:border-[#12b190] hover:text-[#12b190] transition-all"
          >
            ← Forrige
          </button>
        )}
        
        {currentPage < totalPages ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            className="ml-auto px-6 md:px-8 py-3 bg-gradient-to-r from-[#12b190] to-[#0f9a7a] text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Neste →
          </button>
        ) : (
          <button
            type="submit"
            disabled={!isFormValid()}
            className="ml-auto px-6 md:px-8 py-3 bg-gradient-to-r from-[#12b190] to-[#0f9a7a] text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            Finn min el-sykkel
          </button>
        )}
      </div>
    </form>
    </>
  );
}