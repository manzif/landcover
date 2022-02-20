import { Icon } from '@iconify/react';
import sharpSchool from '@iconify/icons-ic/sharp-school';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  // boxShadow: '3px 3PX',
  textAlign: 'center',
  padding: theme.spacing(1, 0),
  color: '#808285',
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
  color: '#808285',
  backgroundImage: `linear-gradient(135deg, ${alpha('#808285', 0)} 0%, ${alpha(
    '#808285',
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppTotalSchools({ number }) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={sharpSchool} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{number}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Schools
      </Typography>
    </RootStyle>
  );
}
