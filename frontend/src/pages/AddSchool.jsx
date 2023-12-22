import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Styles from "../styles/addschool.module.css";
import Navbar from "../components/Navbar";

const AddSchool = () => {
  return (
    <Box className={Styles.formContainer}>
      <Navbar />
      <form>
        <Box>
          <FormLabel>School Name</FormLabel>
          <Input focusBorderColor="#78BEFF" type="text" />
        </Box>
        <Box>
          <FormLabel>Address</FormLabel>
          <Input focusBorderColor="#78BEFF" type="text" />
        </Box>
        <Box>
          <FormLabel>City</FormLabel>
          <Input focusBorderColor="#78BEFF" type="text" />
        </Box>
        <Box>
          <FormLabel>State</FormLabel>
          <Input focusBorderColor="#78BEFF" type="text" />
        </Box>
        <Box>
          <FormLabel>Contact Number</FormLabel>
          <Input focusBorderColor="#78BEFF" type="number" />
        </Box>
        <Box>
          <FormLabel>School Image</FormLabel>
          <Input focusBorderColor="#78BEFF" type="file" />
        </Box>
        <Box>
          <input type="submit" />
        </Box>
      </form>
    </Box>
  );
};

export default AddSchool;
