import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';

// ----------------------------------------------------------------------

export default function AppSchoolChart({sectorNames, optionData }) {

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
      <CardHeader title="Average distance to school per sector in Kigali" subheader="Kilometers (km)" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={series} options={options} height={364} />
      </Box>
    </Card>
  );
}
