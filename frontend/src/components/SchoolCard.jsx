import React from "react";
import Styles from "../styles/card.module.css";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const SchoolCard = ({ image, name, address, city }) => {
  return (
    <Box className={Styles.card}>
      <Box className={Styles.image}>
        <img src={image} alt="logo" />
      </Box>
      <Box>
        <Text fontSize={'20px'} fontWeight={600}>{name}</Text>
        <Text color={'grey'}>{city}</Text>
        <Text color={'grey'}>{address}</Text>
      </Box>
    </Box>
  );
};

export default SchoolCard;
