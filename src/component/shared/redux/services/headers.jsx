export default function authHeader() {
  const adminData = sessionStorage.getItem("adminData");
  const studentData = sessionStorage.getItem("studentData");

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
