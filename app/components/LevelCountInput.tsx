import { Add, Remove } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography } from '@mui/material';

export default function LevelCountInput({
  value,
  level,
  handleChange
}: {
  value: number;
  level: number;
  handleChange: (val: number, level: number) => void;
}) {
  return (
    <Grid item xs={2}>
      <small style={{ paddingTop: '1rem' }}>Level {level}</small>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid grey',
          borderRadius: '4px',
          margin: '2px'
        }}
      >
        <IconButton onClick={() => handleChange(value - 1, level)}>
          <Remove />
        </IconButton>
        <Typography>{value}</Typography>
        <IconButton onClick={() => handleChange(value + 1, level)}>
          <Add />
        </IconButton>
      </Box>
    </Grid>
  );
}
