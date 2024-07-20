// // data/requestDemoTableData.js

// const authorsTableData = (data) => {
//     const columns = [
//       { Header: "Full name", accessor: "fullName", width: "20%", align: "left" },
//       { Header: "Email id", accessor: "email_id", width: "20%", align: "left" },
//       { Header: "Contact number", accessor: "contact_no", width: "20%", align: "left" },
//       { Header: "Message", accessor: "message", width: "20%", align: "left" },
//       { Header: "Date", accessor: "createdAt", width: "20%", align: "left" },
  
//     ];
  
//     const rows = data.map((item) => ({
//       fullName: item.fullName,
//       email_id: item.email_id,
//       contact_no: item.contact_no,
//       message: item.message,
//       createdAt: new Date(item.createdAt).toLocaleString(),
//       contact_time: item.contact_time, // format date as needed

//     }));
  
//     return { columns, rows };
//   };
  
//   export default authorsTableData;
  


// data/requestDemoTableData.js

const authorsTableData = (data) => {
    let messages = [];
    
    // Check if the response is an object with a 'messages' array
    if (Array.isArray(data)) {
      messages = data;
    } else if (data && Array.isArray(data.messages)) {
      messages = data.messages;
    }
  
    const columns = [
 
      { Header: "Message", accessor: "message", width: "20%", align: "left" },
      { Header: "Subscriber", accessor: "subscriber", width: "20%", align: "left" },

    ];
  
    const rows = messages.map((item) => ({
      message: item.message,
      subscriber: item.subscriber
      
    }));
  
    return { columns, rows };
  };
  
  export default authorsTableData;
  