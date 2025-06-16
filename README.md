# Player Depth Chart Manager

A React application for managing sports team depth charts with support for multiple sports and positions.

## Features

- Add players to multiple positions across different sports
- Automatic player position management with bumping system
- Support for NFL and Soccer positions
- Real-time depth chart updates
- Position-specific validation
- Interactive UI with notifications

## Prerequisites

- Node.js (16.x or higher)
- npm (8.x or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shimagh74/Player-Depth-Chart.git
cd Player-Depth-Chart
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
playerDepthChart/
├── src/
│   ├── components/
│   │   ├── AddPlayerForm.jsx    # Player addition form
│   │   ├── DepthChartTable.jsx  # Depth chart display
│   │   ├── Header.jsx           # App header with sport selector
│   │   ├── SelectField.jsx      # Reusable select component
│   │   └── SportIcon.jsx        # Sport-specific icons
│   ├── constants/
│   │   └── icons.js            # Sport icon mappings
│   ├── pages/
│   │   └── DepthChart.jsx      # Main depth chart page
│   ├── store/
│   │   ├── constants.js        # Sport configurations
│   │   ├── depthChartSlice.js  # Redux state management
│   │   ├── index.js           # Store configuration
│   │   └── utils.js           # Helper functions
│   ├── utils/
│   │   └── validators.js      # Form validation
│   ├── App.jsx               # Root component
│   ├── index.css            # Global styles
│   └── main.jsx            # Entry point
└── package.json
```

## Usage

### Adding Players
1. Enter player name
2. Select position
3. Optionally select depth position:
   - If no depth position is selected, player is added to the end
   - If position is full (4 players), you'll be notified
   - Selecting a specific position will bump existing players down

### Managing Depth Chart
- Players can be removed using the delete button
- Players in lower positions automatically move up when spots become available
- Players can be added to multiple positions
- Maximum 4 players per position

### Sport Selection
- Switch between sports using the dropdown in header
- Each sport has its own set of positions
- Depth charts are maintained separately per sport

## Dependencies

```json
{
  "dependencies": {
    "@mui/material": "^5.x",
    "@reduxjs/toolkit": "^1.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-hot-toast": "^2.x",
    "react-icons": "^4.x",
    "react-redux": "^8.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "vite": "^4.x"
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

## Acknowledgments

- React for the UI framework
- Redux Toolkit for state management
- Tailwind CSS for styling
- Material-UI for components
- React Hot Toast for notifications
