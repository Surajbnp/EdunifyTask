import { Box } from "@chakra-ui/react";
import React from "react";
import Styles from "../styles/school.module.css";
import Navbar from "../components/Navbar";
import SchoolCard from "../components/SchoolCard";

const ShowSchool = () => {
  let arr = [
    {
      name: "ABCD School",
      address: "ABCS",
      city: "HHGSHS, Jharkhand",
      image:
        "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais",
    },
    {
      name: "ABCD School",
      address: "ABCS",
      city: "HHGSHS, Jharkhand",
      image:
        "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais",
    },
    {
      name: "ABCD School",
      address: "ABCS",
      city: "HHGSHS, Jharkhand",
      image:
        "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais",
    },
    {
      name: "ABCD School",
      address: "ABCS",
      city: "HHGSHS, Jharkhand",
      image:
        "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais",
    },
    {
      name: "ABCD School",
      address: "ABCS",
      city: "HHGSHS, Jharkhand",
      image:
        "https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais",
    },
  ];
  return (
    <Box className={Styles.cardContainer}>
      <Navbar />

      <Box className={Styles.cards}>
        {arr.map((e) => {
          return <SchoolCard {...e} />;
        })}
      </Box>
    </Box>
  );
};

export default ShowSchool;
