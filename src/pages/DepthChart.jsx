
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DepthChartTable from '../components/DepthChartTable';
import { removePlayer } from '../store/depthChartSlice';

const DepthChart = () => {
  const sport = useSelector((state) => state.depthChart.sport);
  const chartData = useSelector((state) => state.depthChart.data[sport]);
  const dispatch = useDispatch();

  const handleRemove = (position, index) => {
    dispatch(removePlayer({ position, index }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-3xl font-bold text-center text-brand-dark mb-6 border-b pb-4">
        {sport} Depth Chart
      </h1>
      <DepthChartTable data={chartData} onRemove={handleRemove} />
    </div>
  );
};

export default DepthChart;
