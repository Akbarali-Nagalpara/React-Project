import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Portfoliosection from "./components/Portfoliosection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={"6"}
        >
          <GridItem colSpan={"2"}>
            <Portfoliosection />
          </GridItem>
          <GridItem colSpan={"1"}>
            <PriceSection />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
