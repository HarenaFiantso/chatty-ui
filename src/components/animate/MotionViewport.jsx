import { varContainer } from '.';
import { Box } from '@mui/material';
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import useResponsive from '../../hooks/useResponsive';

MotionViewport.propTypes = {
  children: PropTypes.node.isRequired,
  disableAnimatedMobile: PropTypes.bool,
};

export default function MotionViewport({ children, disableAnimatedMobile = false, ...other }) {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
