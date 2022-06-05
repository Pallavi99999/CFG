import React from "react";

import CustomTableStudent from "./CustomTableStudent";

const StudentList = () => {
  const studentsDataHeader = [
    "id",
    "Name of Student",

    "Address",
    "Aadhaar Card Number",
    "Parent Name",
    "Date",
    "Progress",
    "Options",
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street",
      aadhaar: "123456789",
      parent: "John Doe",
      date: "12/12/2019",

      progress: "60",
    },
    {
      id: 2,
      name: "John Doe",
      address: "123 Main Street",
      aadhaar: "123456789",
      parent: "John Doe",
      date: "12/12/2019",

      progress: "80",
    },
    {
      id: 3,
      name: "John Doe",
      address: "123 Main Street",
      aadhaar: "123456789",
      parent: "John Doe",
      date: "12/12/2019",

      progress: "80",
    },
  ];

  return (
    <div>
      <CustomTableStudent header={studentsDataHeader} rows={rows} />
    </div>
  );
};

export default StudentList;