import React, {  useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token || token === "null" || token === "undefined") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Session Timeout Please Login Again',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/'); // Redirect to the profile page
        }
      });
    }
  }, [navigate]);

  return;
};

export default useAuth;