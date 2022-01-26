import { Box } from '@mui/material';

const BannerLink = ({ value }) => {
  return (
    <Box
      sx={{
        padding: 0.75,
        backgroundColor: 'rgb(34, 34, 34)',
        typography: 'subtitle1',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0.5,
      }}
    >
      {value}
    </Box>
  );
};

export default BannerLink;
