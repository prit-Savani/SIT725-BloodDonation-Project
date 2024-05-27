import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  // Extract loading and error state from the auth slice of Redux store
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {/* Display error message if error state is not null */}
      {error && <span>{alert(error)}</span>}
      {/* Display spinner if loading state is true, otherwise display registration form */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner ">
            {/* Display banner image */}
            <img src="./assets/images/banner2.jpg" alt="registerImage" />
          </div>
          <div className="col-md-4 form-container">
            {/* Render registration form */}
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
