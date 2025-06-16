import { DEPTH_LEVELS } from './constants';

export const insertPlayerAtSpot = (list, player, spot) => {
  const index = DEPTH_LEVELS.indexOf(spot);
  if (index === -1) return list;

  list.splice(index, 0, player);
  if (list.length > DEPTH_LEVELS.length) {
    list.pop();
  }
  return list;
};
