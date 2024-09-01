import { Box, Stack, Button, Typography } from '@mui/material';
import useCounterStore from '../stores/useCounterStore';

const Component = () => {
  const { counter, increment } = useCounterStore();
  return (
    <Box>
      <Stack>
        <Typography>Count: {counter}</Typography>
        <Button onClick={() => increment()}>up</Button>
      </Stack>
    </Box>
  );
};

export default Component;
