import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer } from '../store/depthChartSlice';
import toast from 'react-hot-toast';
import { validatePlayerForm } from '../utils/validators';
import SelectField from './SelectField';

const AddPlayerForm = () => {
  const dispatch = useDispatch();
  const sport = useSelector(state => state.depthChart.sport);
  const chartData = useSelector(state => state.depthChart.data);
  const positions = useMemo(() => Object.keys(chartData[sport]), [chartData, sport]);

  const [formData, setFormData] = useState({
    player: '',
    position: '',
    spot: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validatePlayerForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const currentList = chartData[sport][formData.position];
    if ((!formData.spot || formData.spot === 'end') && currentList.length >= 4) {
      toast.error(`Depth chart for ${formData.position} is already full!`);
      return;
    }

    try {
      dispatch(addPlayer({
        player: formData.player.trim(),
        position: formData.position,
        spot: formData.spot || 'end'
      }));

      toast.success("Player added successfully!");
      setFormData({ player: '', position: '', spot: '' });
      setErrors({});
    } catch (error) {
      toast.error("Failed to add player.");
    }
  };

  const spotOptions = ['Starter', 'Second', 'Third', 'Fourth'];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 sticky top-8">
      <h2 className="text-xl font-semibold text-brand-dark mb-6">Add New Player</h2>
      <div className="space-y-4">
        <>
          <label className="block text-sm font-medium text-brand-dark mb-1">
            Player Name <span className="text-red-500">*</span>
          </label>
          <input
            className={`w-full rounded-lg py-2.5 px-4 border ${errors.player ? 'border-red-500' : 'border-gray-200'} 
            focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-600 shadow-sm`}
            placeholder="Enter player name"
            value={formData.player}
            onChange={handleChange('player')}
          />
          {errors.player && <p className="text-red-500 text-xs mt-1">{errors.player}</p>}
        </>
        <SelectField
          label="Position"
          value={formData.position}
          onChange={handleChange('position')}
          options={positions}
          error={errors.position}
          required
        />
        <SelectField
          label="Spots"
          value={formData.spot}
          onChange={handleChange('spot')}
          options={spotOptions}
          helperText="(Optional - Will add to end if not selected)"
        />

        <button
          type="submit"
          className="w-full hover:bg-brand-dark bg-brand-blue text-white font-medium py-2.5 px-4 rounded-lg duration-200 focus:outline-none"
        >
          Add Player
        </button>
      </div>
    </form>
  );
};

export default AddPlayerForm;
