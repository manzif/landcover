import React from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppHospitalChart({ sectorNames, optionData}) {

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: sectorNames
    }
  }

  const series = [
    {
      name: "Km",
      data: optionData
    }
  ]
  return (
    <Card>
      <CardHeader title="Average distance to Health facilities per sector in Kigali" subheader="Kilometers (km)" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={series} options={options} height={364} />
      </Box>
    </Card>
  );
}
