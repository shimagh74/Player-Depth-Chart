import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DEPTH_LEVELS } from '../store/constants';

const PlayerCell = ({ player, onRemove }) => {
  return player ? (
    <div className="flex items-center justify-between gap-2 px-2 py-1 text-gray-900 text-sm font-medium bg-white border rounded-md border-gray-200 shadow-sm">
      <span>{player}</span>
      <IconButton
        onClick={onRemove}
        size="small"
        className="hover:bg-red-50 text-gray-500 hover:text-red-600"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  ) : (
    <span className="text-gray-400 text-sm">--</span>
  );
};

const DepthChartTable = ({ data, onRemove }) => {
  return (
    <TableContainer component={Paper}  className="overflow-hidden">
      <Table sx={{ minWidth: 650 }} aria-label="depth chart table text-white">
        <TableHead>
          <TableRow  className="bg-brand-blue h-4">
            <TableCell className="!text-white font-bold">Position</TableCell>
            {DEPTH_LEVELS.map((level) => (
              <TableCell
                key={level}
                className="!text-white font-bold capitalize"
              >
                {level}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([position, players]) => (
            <TableRow
              key={position}
              className="hover:bg-gray-50 transition-colors duration-200 h-4"
            >
              <TableCell component="th" scope="row" sx={{ px: 1, py: 0.5 }}>
                <Typography
                  variant="subtitle2"
                  className="font-semibold text-gray-900"
                >
                  {position}
                </Typography>
              </TableCell>
              {DEPTH_LEVELS.map((level, idx) => (
                <TableCell key={level} sx={{ px: 4, py: 1 }}>
                  <PlayerCell
                    player={players[idx]}
                    onRemove={() => onRemove(position, idx)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DepthChartTable;
