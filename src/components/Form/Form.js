import './Form.css';
import { Grid } from '@mui/material';

const Box = () => {
  return (
    <div className="form">
      <Grid container>
        <Grid item xs={12}>
          <h1 className="title">Form</h1>
        </Grid>
        <Grid item xs={5}>
          <div className="section">A</div>
        </Grid>
        <Grid item xs={7}>
          <div className="section">B</div>
        </Grid>
        <Grid item xs={4}>
          <div className="section">C</div>
        </Grid>
        <Grid item xs={8}>
          <div className="section">D</div>
        </Grid>
      </Grid>

      <div className="button-container">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p> Sign Up</p>
          </Grid>
          <Grid item xs={6}>
            <p>Login</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Box;
