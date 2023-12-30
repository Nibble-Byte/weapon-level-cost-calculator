import { Add, Remove } from '@mui/icons-material';
import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';

interface Props {
  value: number;
  level: number;
  handleChange: (val: number, level: number) => void;
}

export default function LevelCountInput({ value, level, handleChange }: Props) {
  return (
    <Grid item xs={2}>
      <Typography fontSize={10} color={'gray'}>
        Level {level}
      </Typography>
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
        <TextField
          type="number"
          sx={{ border: 'none' }}
          inputProps={{ min: 0, style: { padding: 0, textAlign: 'center' } }}
          value={value}
          onChange={(e) => handleChange(+e.target.value, level)}
        />
        <IconButton onClick={() => handleChange(value + 1, level)}>
          <Add />
        </IconButton>
      </Box>
    </Grid>
  );
}
