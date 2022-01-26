import './Header.css';
import { Grid, Box, Paper } from '@mui/material';

import CustomLink from './CustomLink/CustomLink';
import ProductLink from './ProductLink/ProductLink';

const Header = () => {
  const linksLeft = ['Customer Service', 'Student Discount', 'Find a store'];
  const linksRight = ['Sign In', 'Favorites', 'Shopping bag'];

  const linksProducts = [
    'Women',
    'Divided',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sale',
    'Sustainability',
  ];

  return (
    <div className="header">
      <Grid container>
        <Grid justifyContent="space-between" container>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              {linksLeft.map((value) => (
                <Grid key={value} item>
                  <CustomLink value={value} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid justifyContent="flex-end" container spacing={3}>
              {linksRight.map((value) => (
                <Grid key={value} item>
                  <CustomLink value={value} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid justifyContent="center" container>
          <Grid item>
            <img className="logo" src="/images/hm-logo.png" alt="HM" />
          </Grid>
        </Grid>

        <Grid justifyContent="center" container spacing={3}>
          {linksProducts.map((value) => (
            <Grid key={value} item>
              <CustomLink value={value} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
