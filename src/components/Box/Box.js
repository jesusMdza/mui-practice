import './Box.css';
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background: '#ccc',
}));

const Box = () => {
  return (
    <Grid className="box" container columnSpacing={2} rowSpacing={2}>
      <Grid item xs={8}>
        <Item>A</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>B</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>C</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>D</Item>
      </Grid>
    </Grid>
  );
};

export default Box;
