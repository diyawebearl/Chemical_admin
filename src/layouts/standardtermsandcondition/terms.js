import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Modal } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Padding, WidthFull } from "@mui/icons-material";
import { BASE_URL } from "BASE_URL";
import MDSnackbar from "components/MDSnackbar";
import axios from "axios";

function StandardTerms() {
    const [successSB, setSuccessSB] = useState(false);
    const [errorSB, setErrorSB] = useState(false);
    const [message, setMessage] = useState("");

    const openSuccessSB = () => setSuccessSB(true);
    const closeSuccessSB = () => setSuccessSB(false);
    const openErrorSB = () => setErrorSB(true);
    const closeErrorSB = () => setErrorSB(false);

    const renderSuccessSB = (
        <MDSnackbar
            color="success"
            icon="check"
            title="Successful"
            content={message}
            dateTime="1 sec"
            open={successSB}
            onClose={closeSuccessSB}
            close={closeSuccessSB}
            bgWhite
        />
    );

    const renderErrorSB = (
        <MDSnackbar
            color="error"
            icon="warning"
            title="Error"
            content={message}
            dateTime="1 sec ago"
            open={errorSB}
            onClose={closeErrorSB}
            close={closeErrorSB}
            bgWhite
        />
    );

    const [terms, setTerms] = useState("");
    const [termsId, setTermsId] = useState("");

    const fetchTerms = async () => {
        const token = `Bearer ${localStorage.getItem("chemToken")}`;
        try {
            const res = await fetch(`${BASE_URL}/api/standard_terms_and_condition/display`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            const data = await res.json();
            console.log(data);
            setTerms(data.data?.[0]?.details)
            setTermsId(data.data?.[0]?._id)
        } catch (error) {
            setMessage("Error fetching terms and conditions.");
            openErrorSB();
            console.error("Error fetching terms:", error.message);
        }
    };

    useEffect(() => {
        fetchTerms();
    }, []);

    const handleSubmit = async () => {
        if (!terms) {
            setMessage("Please Enter Terms & Condition");
            openErrorSB();
            return;
        }

        const token = `Bearer ${localStorage.getItem("chemToken")}`;

        try {
            const response = await axios.put(
                `${BASE_URL}/api/standard_terms_and_condition/update/${termsId}`,
                { details: terms },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );

            console.log(response.status);

            if (response.status === 200) {
                setMessage("Standard Terms & Condition Updated Successfully");
                openSuccessSB();
            } else {
                setMessage("Failed to update Terms & Condition.");
                openErrorSB();
            }
        } catch (error) {
            setMessage("Error updating Terms & Condition.");
            openErrorSB();
            console.error("Error updating terms:", error.message);
        }
    };

    const style = {
        backgroundColor: "transparent",
        border: "1px solid black",
        borderRadius: "10px",
        width: "100%",
        padding: "10px 20px"
    };

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <textarea
                            cols="30"
                            rows="8"
                            value={terms}
                            style={style}
                            onChange={(e) => setTerms(e.target.value)}
                        ></textarea>
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="contained" style={{ color: "white" }} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </MDBox>
            {renderSuccessSB}
            {renderErrorSB}
            <Footer />
        </DashboardLayout>
    );
}

export default StandardTerms;
