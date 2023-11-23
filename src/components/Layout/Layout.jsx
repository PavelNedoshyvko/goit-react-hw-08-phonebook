import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './Layout.styled';
import { Suspense } from 'react';
import { HeaderBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <HeaderBar />
      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
