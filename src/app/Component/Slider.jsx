import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider1 from '../../photos/home/first.jpg'

const Slider = () => {
    return (
        <Box>
        <Link href={""}>
          <Image
            src={Slider1}
            alt="This is slider"
            style={{
              width: "100%",
              height: "90vh",
            }}
          />
        </Link>
      </Box>
    );
};

export default Slider;