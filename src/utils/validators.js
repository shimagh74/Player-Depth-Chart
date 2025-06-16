export const validatePlayerForm = ({ player, position }) => {
  const errors = {};
  if (!player.trim()) {
    errors.player = 'Player name is required';
  }
  if (!position) {
    errors.position = 'Position must be selected';
  }
  return errors;
};
