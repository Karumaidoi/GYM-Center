// material-ui
import { useMediaQuery } from '@mui/material';

// project import
// import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <div style={{ display: 'flex' }}>
      <Notification />
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </div>
  );
};

export default HeaderContent;
