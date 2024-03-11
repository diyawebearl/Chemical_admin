import Grid from "@mui/material/Grid";
import { BASE_URL } from "BASE_URL";
import axios from "axios";
import MDBox from "components/MDBox";
import CatalogStatisticsCard from "examples/Cards/StatisticsCards/CatalogstatickCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Catelog() {
  const { _id } = useParams();

  const [companyDetails, setCompanyDetails] = useState("");
  console.log(companyDetails);

  const fetchUserList = async () => {
    try {
      const token = `Bearer ${localStorage.getItem("chemToken")}`;
      const response = await axios.get(
        `${BASE_URL}/company/companyDetail/${_id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCompanyDetails(response?.data?.company?.catalogs);
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <Grid container spacing={3}>
      {companyDetails &&
        companyDetails.map((e) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <CatalogStatisticsCard
                    color="dark"
                    icon="weekend"
                    // title="Selling Inquiries"
                    count={20}
                    percentage={{
                      color: "success",
                      amount: "+55%",
                      label: "than last week",
                    }}
                    bank_name={e.category}
                    grade={e.grade}
                    max_lot_q={e.max_lot_qty}
                    one_lot_qty_price={`${e.one_lot_qty_price} ${e.one_lot_qty_type}`}
                    price={`${e.min_price} - ${e.max_price} rs`}
                    purity={e.purity}
                    quantity={`${e.qty} ${e.qty_type}`}
                    subcat={e.subcategory}
                    storage={e.storage}
                    supply_capacity={e.supply_capacity}
                    country_origin={e.country_origin}
                    packaging_size="10 * 10 sqf"
                    packaging_type="box"
                    appearance={e.appearance}
                  />
                </MDBox>
              </Grid>
            </>
          );
        })}
    </Grid>
  );
}

export default Catelog;
