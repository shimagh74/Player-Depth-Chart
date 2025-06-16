import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSport } from '../store/depthChartSlice';
import { SportIcon } from './SportIcon';

const Header = () => {
  const dispatch = useDispatch();
  const { sport, sports } = useSelector(state => state.depthChart);

  const sportOptions = useMemo(
    () => Object.entries(sports).map(([key, { name }]) => ({ key, name })),
    [sports]
  );

  const handleSportChange = useCallback((e) => {
    dispatch(setSport(e.target.value));
  }, [dispatch]);

  return (
    <header className="bg-gradient-to-r from-brand-blue to-brand-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight flex items-center space-x-2">
            Depth Chart <span className="text-brand-yellow text-xl font-normal pl-2 pt-2">Manager</span>
          </h1>

          <div className="relative group">
            <select
              className="appearance-none bg-brand-blue backdrop-blur-md text-white 
                         px-8 py-3 rounded-xl min-w-[180px] border-2 border-brand-yellow  
                         outline-none focus:border-brand-yellow font-medium text-sm cursor-pointer pl-14"
              value={sport}
              onChange={handleSportChange}
            >
              {sportOptions.map(({ key, name }) => (
                <option key={key} value={key} className="bg-white text-gray-800 p-8 py-20 text-sm font-medium">
                  {name}
                </option>
              ))}
            </select>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/70 group-hover:text-white transition-colors">
              <SportIcon sport={sport} className="w-5 h-5" />
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
