import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { BASE_URL } from "BASE_URL"; // Replace with actual base URL
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        messageRow: {
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
        },
        messageBgSet: {
            backgroundColor: "gainsboro",
            width: "60%",
            textAlign: "left",
            padding: "10px",
            borderRadius: "10px",
            position: "relative",
            marginLeft: "20px",
        },
        cancelCard: {
            marginBottom: "10px",
        },
        cancelCardFirstP: {
            fontSize: "10px",
        },
        cancelCardSecondP: {
            fontSize: "14px",
            textAlign: "left",
            fontWeight: "600",
            borderBottom: "1px solid black",
            paddingBottom: "7px",
            marginBottom: "4px",
        },
        cancelCardThirdP: {
            fontSize: "10px",
            textAlign: "left",
            paddingBottom: "7px",
        },
        cancelGroup: {
            fontSize: "16px",
            textAlign: "left",
            paddingBottom: "7px",
        },
        orange: {
            color: theme.palette.getContrastText(theme.palette.secondary.main),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        cancelBtn: {
            fontSize: "18px",
            backgroundColor: "transparent",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px 0px",
            width: "100%",
            cursor: "pointer",
        },
        approvedBtn: {
            fontSize: "18px",
            backgroundColor: "black",
            color: "white",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px 0px",
            width: "100%",
            cursor: "pointer",
        },
    })
);

export const MessageRight = () => {};

export const MessageLeft = () => {
    const classes = useStyles();
    const { _id } = useParams();
    const [message, setMessage] = useState(null);
    const [receiverLogo, setReceiverLogo] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/api/chat/display/${_id}`) // Replace with your API endpoint
            .then((response) => response.json())
            .then((data) => {
                console.log(`Data fetched for ID ${_id}:`, data);
                if (data.success && data.data.length > 0) {
                    setMessage(data.data[0]);
                    // Set receiver logo
                    if (data.data[0].receiverDetails && data.data[0].receiverDetails.length > 0) {
                        const logo = data.data[0].receiverDetails[0].logo;
                        setReceiverLogo(logo);
                    }
                }
            })
            .catch((error) => {
                console.error('Error fetching chat details:', error);
            });
    }, [_id]);

    if (!message) {
        return <div></div>;
    }

    const senderCompany = message.senderDetails ? message.senderDetails[0].company_name : 'Unknown';

    return (
        <div className={classes.messageRow}>
          
            <Avatar
                alt={message.receiverDetails ? message.receiverDetails[0].company_name : 'Receiver'}
                className={classes.orange}
                src={receiverLogo}
            ></Avatar>
            <div className={classes.messageBgSet}>
                <div className={classes.cancelCard}>
                    <p className={classes.cancelCardFirstP}>Id: {message.senderId}</p>
                    <p className={classes.cancelCardSecondP}>Request from {senderCompany}</p>
                    <p className={classes.cancelCardThirdP}>{new Date(message.datetime).toLocaleTimeString()}</p>
                    <h6 className={classes.cancelGroup}>Quantity: {message.quantity} kg</h6>
                    <h6 className={classes.cancelGroup}>Price: ₹{message.final_price}</h6>
                    <h6 className={classes.cancelGroup}>Payment Term: {message.payment_terms}</h6>
                    <h6 className={classes.cancelGroup}>Delivery Time: {message.delivery_time}</h6>
                    <h6 className={classes.cancelGroup}>Inco Terms: {message.inco_terms}</h6>
                    {message.request_status === "approved" ? (
                        <button className={classes.approvedBtn}>Approved</button>
                    ) : (
                        message.request_status === "denied" ? (
                            <button className={classes.cancelBtn}>Denied</button>
                        ) : null // Added null as fallback in case neither condition matches
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageLeft;