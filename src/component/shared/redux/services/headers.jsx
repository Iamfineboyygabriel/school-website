export default function authHeader() {
  const admin = sessionStorage.getItem("adminData");
  
    if (admin) {
      return {
        Authorization: "Bearer " + admin,
        // "user-id": ,
      };
    } else {
      return { 
        // "user-id": "4207cdf9-4588-43bf-9c4f-7c5056c14b4d" 
      };
    }
}