import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Button, Grid, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item>
          <Typography sx={{ fontSize: '24px' }}>
            Welcome, {user.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="button"
            variant="contained"
            onClick={() => dispatch(logOut())}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
