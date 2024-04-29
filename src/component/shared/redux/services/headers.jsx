export default function authHeader(metaData) {
  const adminData = sessionStorage.getItem("adminData");
  const studentData = sessionStorage.getItem("studentData");

  console.log(adminData);

  //auth header i now recieving arguments in cae extra data is needed in the header for some request
  if (adminData) {
    return {
      Authorization: "Bearer " + adminData,

      // Additional headers for admin if needed
    };
  } else if (studentData) {
    return {
      Authorization: "Bearer " + studentData,
      // Additional headers for student if needed
    };
  } else {
    return {};
  }
}
