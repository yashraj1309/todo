import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface EmptyType {
  message: string;
  returnUrl: string;
}

export default function EmptyList(props: EmptyType) {
  const navigate = useNavigate();

  const [count, setCount] = useState(3);

    
  useEffect(()=> {
    const timer = setTimeout(()=> {
      if(count>0) {
        setCount((prev)=> prev-1);
      }
      else {
        // navigate('/')
        navigate(props.returnUrl);
      }
    },1000)
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column text-center">
      <img
        width="200"
        height="200"
        src="https://img.icons8.com/bubbles/200/list.png"
        alt="list"
      />
      <div
        style={{
          fontWeight: "bold",
          width: "fit-content",
          margin: "auto",
          color: 'red'
        }}
      >
        {/* No Tasks are Completed.. */}
        {props.message}
        <br></br>
        <div style={{ color: "green" }}>
          Redirecting you to Home Page in <b>&nbsp;{count}&nbsp; </b> Seconds...
        </div>
      </div>
    </div>
  );
}
 