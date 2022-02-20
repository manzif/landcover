import { Icon } from '@iconify/react';
import busAlt from '@iconify/icons-cil/bus-alt';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  // boxShadow: '3px 3PX',
  textAlign: 'center',
  padding: theme.spacing(1, 0),
  color: '#A5CF4D',
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
  color: '#A5CF4D',
  backgroundImage: `linear-gradient(135deg, ${alpha('#A5CF4D', 0)} 0%, ${alpha(
    '#A5CF4D',
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppTotalBus({ number }) {

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={busAlt} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{number}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Bus Stops
      </Typography>
    </RootStyle>
  );
}
