import { createSlice } from '@reduxjs/toolkit';
import { sportsConfig, DEPTH_LEVELS } from './constants';
import { insertPlayerAtSpot } from './utils';


const buildInitialData = (sportsConfig) => {
  const data = {};
  for (const sportKey of Object.keys(sportsConfig)) {
    data[sportKey] = sportsConfig[sportKey].positions;
  }
  return data;
};

const initialState = {
  sport: 'NFL',
  sports: sportsConfig,
  data: buildInitialData(sportsConfig),
  error: null
};

const depthChartSlice = createSlice({
  name: 'depthChart',
  initialState,
  reducers: {
    setSport: (state, action) => {
      state.sport = action.payload;
      state.error = null;
    },

    addPlayer: (state, action) => {
      const { player, position, spot } = action.payload;
      const sportData = state.data[state.sport];
      const currentList = sportData[position];
      if (!currentList) return;

      if (spot && spot !== 'end') {
        insertPlayerAtSpot(currentList, player, spot);
      } else {
        if (currentList.length >= DEPTH_LEVELS.length) {
          state.error = `Depth chart for ${position} is full.`;
          return;
        }
        currentList.push(player);
      }

      state.error = null;
    },

    removePlayer: (state, action) => {
      const { position, index } = action.payload;
      const list = state.data[state.sport][position];
      list.splice(index, 1);
      state.error = null;
    },

    clearError: (state) => {
      state.error = null;
    }
  }
});

export const { setSport, addPlayer, removePlayer, clearError } = depthChartSlice.actions;
export default depthChartSlice.reducer;
export { DEPTH_LEVELS };
