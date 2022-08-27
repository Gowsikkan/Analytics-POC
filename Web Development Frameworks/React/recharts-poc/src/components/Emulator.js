import React ,{useState, useEffect, }from 'react'
import Mobile from './Mobile';

const Emulator=()=> {
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
    
    useEffect(() => {
      Mobile(values.height,values.width);
      });
    
    const handleReset = () => {
        this.setState({
          intialValues: 0
        });
      };
    
  return (
    <div>
    <form>
    <input
      value={values.height}
      onChange={handleInputChange}
      name="height"
      label="Height"
    />
    <input
      value={values.width}
      onChange={handleInputChange}
      name="width"
      label="Width"
    />
    <button onClick={handleReset}>
      Reset
    </button>
  </form>
  <div>
    <Mobile widths={200} heights={879}/>
    </div>
</div>
  )
}

export default Emulator