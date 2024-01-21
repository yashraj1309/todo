import React from 'react'
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

interface CustomToastType {
  ToastHandler: ()=>void
}

export default function CustomToast(props: CustomToastType) {
  return (
    <ToastContainer
      position="top-end"
      className="p-4"
      style={{ marginTop: "5%" }}
    >
      <Toast style={{ width: "280px" }}>
        <div
          className="d-flex justify-content-center align-items-center p-2 text-danger"
          style={{ width: "100%" }}
        >
          Please Enter all the details &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
            onClick={props.ToastHandler}
            style={{ cursor: "pointer" }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
      </Toast>
    </ToastContainer>
  );
}
