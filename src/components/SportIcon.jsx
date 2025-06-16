import React from 'react';
import { sportIconMap, defaultIcon } from '../constants/icons';

export const SportIcon = ({ sport, className = '' }) => {
  const IconComponent = sportIconMap[sport] || defaultIcon;
  return <IconComponent className={className} />;
};
