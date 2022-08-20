import { ThreeDots } from 'react-loader-spinner';
import { Box } from '../Box';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="red"
        ariaLabel="three-dots-loading"
      />
    </Box>
  );
};

export default Loader;
