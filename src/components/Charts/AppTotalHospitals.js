import { Icon } from '@iconify/react';
import plusSquareOutlined from '@iconify/icons-ant-design/plus-square-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  // boxShadow: '3px 3PX',
  textAlign: 'center',
  padding: theme.spacing(1, 0),
  color: '#F57F29',
  backgroundColor: '#FFFFFF'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#F57F29',
  backgroundImage: `linear-gradient(135deg, ${alpha('#F57F29', 0)} 0%, ${alpha(
    '#F57F29',
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppTotalHospitals({ number }) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={plusSquareOutlined} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{ number }</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Health Facilities
      </Typography>
    </RootStyle>
  );
}
