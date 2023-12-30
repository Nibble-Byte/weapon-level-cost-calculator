'use client';

import { useEffect, useState } from 'react';

import { counts as Counts, calcCostTo30 } from './costs';
import LevelCountInput from './components/LevelCountInput';
import { Grid } from '@mui/material';

export default function Home() {
  const [counts, setCounts] = useState(Counts);
  const [totalCost, setTotalCost] = useState({ glimmer: 0, cores: 0 });
  const levels = [...Array(29)];

  useEffect(() => {
    const totalCost = { glimmer: 0, cores: 0 };

    Object.entries(counts).forEach(([level, count]) => {
      const cost = calcCostTo30(+level);
      const glimmer = cost.glimmer * count;
      const cores = cost.cores * count;

      totalCost.glimmer += glimmer;
      totalCost.cores += cores;
    });

    setTotalCost(totalCost);
  }, [counts]);

  const handleChange = (val: number, level: number) => {
    if (val < 0) return;

    setCounts((prev) => {
      const newState = { ...prev };
      newState[level] = val;
      return newState;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <pre>{JSON.stringify(totalCost, null, 2)}</pre>
    </main>
  );
}
