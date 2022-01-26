import { Box } from '@mui/material';

const ProductLink = ({ value }) => {
  return (
    <Box
      sx={{
        typography: 'subtitle1',
      }}
    >
      {value}
    </Box>
  );
};

export default ProductLink;
