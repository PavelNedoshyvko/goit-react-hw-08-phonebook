import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Grid container spacing={5} sx={{ flexGrow: 1 }}>
        <Grid item>
          <Typography sx={{ fontSize: '22px' }}>
            <NavLink to="/register">Register</NavLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: '22px' }}>
            <NavLink to="/login">LogIn</NavLink>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
