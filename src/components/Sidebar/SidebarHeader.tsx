import { Badge, Box, Button, FormControl, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material';
import { CustomLogo } from 'components/Logo/CustomLogo';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const SidebarHeader = () => {
  return (
    <Box paddingLeft={3} paddingRight={1} paddingY={3} overflow={'hidden'}>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Button
          style={{ padding: 0 }}
          onClick={() => {
            window.location.href = '/dashboard';
          }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <CustomLogo>M</CustomLogo>
            <Typography fontWeight={'bold'} color="#0098e5" fontSize={'large'}>
              Market
            </Typography>
          </Stack>
        </Button>

        <Box>
          <IconButton
            size="small"
            onClick={() => {
              window.location.href = '/notifications';
            }}
          >
            <Badge badgeContent={0} color="error">
              <NotificationsNoneIcon color="action" />
            </Badge>
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default SidebarHeader;
