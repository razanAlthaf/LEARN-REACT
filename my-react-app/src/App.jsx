import React from "react";

const Button = (props) => {
  const {children, variant = "bg-black"} = props;
    return(
      <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit"> {children}</button>
    );
};

function App() {
  return ( 
  <div className="flex justify-center bg-red-400 min-h-screen items-center">
    <div className="flex gap-3">
      <Button variant = "bg-red-700">sign up</Button>
      <Button variant = "bg-black">sign in</Button>
      <Button variant = "bg-slate-700">Logout</Button>

    </div>
  </div>
  )
}

export default App
