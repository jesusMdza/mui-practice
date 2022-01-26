import { Grid, Box } from '@mui/material';
import BannerLink from './BannerLink/BannerLink';

const Banner = () => {
  const bannerLinks = ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME'];

  return (
    <Box sx={{ backgroundColor: '#f4dcd6', paddingTop: 2, paddingBottom: 3 }}>
      <Grid justifyContent="center" container>
        <Grid item xs={12}>
          <Box
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              color: '#222',
              fontSize: 28,
            }}
          >
            Just dropped: New arrivals for everyone!
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid justifyContent="center" container spacing={1}>
            {bannerLinks.map((value) => (
              <Grid item>
                <BannerLink value={value} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
