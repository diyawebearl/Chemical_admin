// data/requestDemoTableData.js

const authorsTableData = (data) => {
    const columns = [
      { Header: "Company name", accessor: "company_name", width: "20%", align: "left" },
      { Header: "Contact person name", accessor: "contact_person_name", width: "20%", align: "left" },
      { Header: "Contact number", accessor: "contact_number", width: "20%", align: "left" },
      { Header: "Date", accessor: "contact_date", width: "20%", align: "left" },
      { Header: "Time", accessor: "contact_time", width: "20%", align: "left" },
      { Header: "Status", accessor: "status", width: "20%", align: "center" },
    ];
  
    const rows = data.map((item) => ({
      company_name: item.company_name,
      contact_person_name: item.contact_person_name,
      contact_number: item.contact_number,
      contact_date: new Date(item.contact_date).toLocaleString(),
      contact_time: item.contact_time, // format date as needed
      status: item.status,
    }));
  
    return { columns, rows };
  };
  
  export default authorsTableData;
  