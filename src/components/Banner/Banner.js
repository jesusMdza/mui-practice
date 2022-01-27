import { Grid, Box, Stack } from '@mui/material';
import BannerLink from './BannerLink/BannerLink';

const Banner = () => {
  const bannerLinks = ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME'];

  return (
    <Box>
      <Grid
        sx={{
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 3,
          paddingRight: 3,
          fontSize: 14,
        }}
        alignItems="center"
        container
      >
        <Grid item xs={4}>
          Free shipping over $40: Select Expedited, Standard, Ship to Store or
          UPS Access Point™ at checkout
        </Grid>

        <Grid item xs={4}>
          Become a Loyalty Member
        </Grid>

        <Grid item xs={4}>
          Gift Card
        </Grid>
      </Grid>

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
    </Box>
  );
};

export default Banner;
