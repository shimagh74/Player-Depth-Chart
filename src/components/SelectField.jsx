import React from 'react';

const SelectField = ({ label, value, onChange, options, error, required = false, helperText }) => (
  <div>
    <label className="block text-sm font-medium text-brand-dark mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        className={`appearance-none w-full rounded-lg py-2.5 px-4 pr-10 border 
          ${error ? 'border-red-500' : 'border-gray-200'} bg-white 
          focus:border-blue-500 focus:outline-none transition-colors text-gray-600 shadow-sm`}
        value={value}
        onChange={onChange}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
    {helperText && <p className="text-gray-500 text-xs mt-1">{helperText}</p>}
  </div>
);

export default SelectField;
