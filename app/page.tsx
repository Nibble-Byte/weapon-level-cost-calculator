'use client';

import { useState } from 'react';

import { counts as Counts, calcCostTo30 } from './costs';
import LevelCountInput from './components/LevelCountInput';
import { Box, Grid, Typography } from '@mui/material';
import { useDebouncedEffect } from './hooks/useDebouncedEffect';

export default function Home() {
  const [counts, setCounts] = useState(Counts);
  const [totalCost, setTotalCost] = useState({ glimmer: 0, cores: 0 });
  const levels = [...Array(29)];

  useDebouncedEffect(
    () => {
      const totalCost = { glimmer: 0, cores: 0 };

      Object.entries(counts).forEach(([level, count]) => {
        const cost = calcCostTo30(+level);
        const glimmer = cost.glimmer * count;
        const cores = cost.cores * count;

        totalCost.glimmer += glimmer;
        totalCost.cores += cores;
      });

      setTotalCost(totalCost);
    },
    [counts],
    200
  );

  const handleChange = (val: number, level: number) => {
    if (val < 0) return;

    setCounts((prev) => {
      const newState = { ...prev };
      newState[level] = val;
      return newState;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Box sx={{ paddingBottom: '2rem', textAlign: 'center' }}>
        <Typography>Input the number of each level of weapon you have.</Typography>
        <Typography>
          The amount of glimmer and enhancement cores you need to Level every weapon to Level 30
          will be displayed
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {levels.map((_, i) => (
          <LevelCountInput
            key={i}
            value={counts[i + 1]}
            level={i + 1}
            handleChange={handleChange}
          />
        ))}
      </Grid>
      <Box sx={{ paddingTop: '2rem', textAlign: 'center' }}>
        <Typography>Glimmer: {totalCost.glimmer}</Typography>
        <Typography>Cores: {totalCost.cores}</Typography>
      </Box>
    </main>
  );
}
