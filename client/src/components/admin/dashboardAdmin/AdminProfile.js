import React, { Fragment, useContext, useState, useEffect } from "react";
import { DashboardContext } from ".";
// import { DashboardUserContext } from "../../shop/dashboardUser/Layout";
// import { updatePersonalInformationAction } from "../../shop/dashboardUser/Action.js";

const AdminProfile = (props) => {
//   const { data, dispatch } = useContext(DashboardUserContext);
//   const userDetails = data.userDetails !== null ? data.userDetails : "";
//   const [fData, setFdata] = useState({
//     id: "",
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     blood_group:"",
//     address:"",
//     organ:"",
//     ehrNo:"",
//     success: false,
//   });

//   useEffect(() => {
//     setFdata({
//       ...fData,
//       id: userDetails._id,
//       name: userDetails.name,
//       email: userDetails.email,
//       phone: userDetails.phoneNumber,
//       age: userDetails.age,
//       blood_group: userDetails.blood_group,
//       address: userDetails.address,
//       organ: userDetails.organ,
//       ehrNo: userDetails.ehrNo,
//     });

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [userDetails]);

//   const handleSubmit = () => {
//     updatePersonalInformationAction(dispatch, fData);
//   };

//   if (data.loading) {
//     return (
//       <div className="w-full md:w-9/12 flex items-center justify-center ">
//         <svg
//           className="w-12 h-12 animate-spin text-gray-600"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//           ></path>
//         </svg>
//       </div>
//     );
//   }
// const { data, dispatch } = useContext(DashboardContext);
  return (
    <Fragment>
      
      <div className="flex flex-col w-full my-4 md:my-0 md:w-9/12 md:px-8">
        <div className="shadow-lg border">
          <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
            Personal Information
          </div>
          <hr />
          <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
            {/* {fData.success ? (
              <div className="bg-green-200 px-4 py-2 rounded">
                {fData.success}
              </div>
            ) : (
              ""
            )} */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                // onChange={(e) => setFdata({ ...fData, name: e.target.value })}
                // value={fData.name}
                type="text"
                id="name"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                // value={fData.email}
                readOnly
                type="email"
                id="email"
                className="cursor-not-allowed border px-4 py-2 bg-gray-200 w-full focus:outline-none focus:cursor-not-allowed"
              />
              <span className="text-xs text-gray-500">
                You can't change your email
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="number">Phone Number</label>
              <input
                // onChange={(e) => setFdata({ ...fData, phone: e.target.value })}
                // value={fData.phone}
                type="number"
                id="number"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="age">Age</label>
              <input
                // onChange={(e) => setFdata({ ...fData, age: e.target.value })}
                // value={fData.age}
                type="number"
                id="age"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="bg">Blood Group</label>
              <input
                // onChange={(e) => setFdata({ ...fData, blood_group: e.target.value })}
                // value={fData.blood_group}
                type="text"
                id="blood_group"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="add">Address</label>
              <input
                // onChange={(e) => setFdata({ ...fData, address: e.target.value })}
                // value={fData.address}
                type="text"
                id="address"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="organ">Organ</label>
              <input
                // onChange={(e) => setFdata({ ...fData, organ: e.target.value })}
                // value={fData.organ}
                type="text"
                id="organ"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="organ">EHR No</label>
              <input
                // onChange={(e) => setFdata({ ...fData, organ: e.target.value })}
                // value={fData.ehrNo}
                type="text"
                id="ehrNo"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div
            //   onClick={(e) => handleSubmit()}
              style={{ background: "#303031" }}
              className="w-full text-center cursor-pointer px-4 py-2 text-gray-100"
            >
              Update Information
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default AdminProfile;