import React ,{useState, useEffect, }from 'react'
import MobileInput from './mobileInput';


const EmulatorModel=()=> {
    const intialValues = {
        height: "",
        width: "",
      };
      const [values, setValues] = useState(intialValues);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    
    const handleReset = () => {
        this.setState({
          intialValues: 0
        });
      };
    const SubmitEve =(e)=>{
      e.preventDefault();
      MobileInput(values.height,values.width)
    }
    
  return (
    <div >
    <div className='header'>
    <h1>Mobile Emulator</h1>
    </div>
    <form>
      Height
    <input 
      value={values.height}
      type="Number"
      name="height"
      label="Height"
      onChange={handleInputChange}
      placeholder="Enter height"
    />
    Width
    <input
      value={values.width}
      name="width"
      type="Number"
      label="Width"
      onChange={handleInputChange}
      placeholder="Enter height"
    />
    <button onClick={handleReset}>
      Reset
    </button>
  <button onClick={SubmitEve}>
  Submit
    </button>
    </form>
  {values.height>0? 
            <MobileInput/>
          :<p></p>
      }
    </div>
  )
}

export default EmulatorModel