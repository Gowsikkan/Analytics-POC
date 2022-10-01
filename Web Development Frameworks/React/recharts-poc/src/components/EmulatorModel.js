import React ,{useState}from 'react'
import MobileInput from './mobileInput'


const EmulatorModel=()=> {
    const intialValues = {
        height: "",
        width: "",
      };
      //const isLoggedIn= false 
      const points =[[90, 20], [20, 100], [66, 44], [53, 80], [24, 182], [80, 72], [10, 76], [33, 150], [100, 15]];
      const [values, setValues] = useState(intialValues);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
        //isLoggedIn=true
      };
    
    const handleReset = () => {
        this.setState({
          intialValues: 0
        });
      };
    const SubmitEve =(e)=>{
      e.preventDefault();
      MobileInput(values.height,values.width,points)
      //isLoggedIn=false
    }
    
  return (
    <div >
    <h1>Mobile Emulator</h1>
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
    {values.height>0 && values.width>0?
    //isLoggedIn?
    <MobileInput/>:<p></p>}
    </div>
  )
}

export default EmulatorModel