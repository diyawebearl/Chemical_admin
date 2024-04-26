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

function Terms() {

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
            title="Successfull"
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
        const res = await fetch(`${BASE_URL}/api/admin_teams_and_condition/display?adminId=${localStorage.getItem("admin_id")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
        const data = await res.json()
        console.log(data);
        setTerms(data.data.values);
        setTermsId(data.data._id);
    }

    useEffect(() => {
        fetchTerms();
    }, []);

    const handleSubmit = async () => {
        if (!terms) {
            setMessage("Please Enter Terms & Condition")
            openErrorSB()
        }

        const token = `Bearer ${localStorage.getItem("chemToken")}`;

        try {
            const response = await axios.put(
                `${BASE_URL}/api/admin_teams_and_condition/update?adminId=${localStorage.getItem("admin_id")}`,
                {
                    values: terms,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );

            if (response.status === 200) {
                setMessage("Terms & Condition Updated Successfully")
                openSuccessSB()

            } else {

            }
        } catch (error) {
            console.error("Error adding category:", error.message);
        }

    };

    const style = {
        backgroundColor: "transparent",
        border: "1px solid black",
        borderRadius: "10px",
        width: "100%",
        padding: "10px 20px"
    }

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <textarea name="" id="" cols="30" rows="8" value={terms} style={style} onChange={(e) => setTerms(e.target.value)}></textarea>
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="contained" style={{ color: "white" }} className="text-end" onClick={handleSubmit}>
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

export default Terms;
