import { useState } from 'react';
import '../bootstrap.css';
import { useSelector, useDispatch } from 'react-redux';
function Filter(props) {

    const [options,setOptions] = useState([])
    // const countries = useSelector(state=>state.countries)
    return (
   
           <div className='row justify-content-center'>
            <div className='col-md-5 p-2'>
                <label htmlFor="">Countries</label>
                <select name="country" id="" className='form-control' value={props.inputs.country} onChange={(event)=>props.handleInputChange(event)}>
                    {
                        props.countries.map((elem)=>{
                            return <option value={elem.id} id={elem.id}>{elem.text}</option>
                        })
                        // console.log(props.countries)
                    }
                </select>
            </div>
            <div className='col-md-5 p-2'>
                <label htmlFor="">City</label>
                <input type="text" className='form-control' name='city' value={props.inputs.city} onChange={(event)=>props.handleInputChange(event)} />
            </div>
            <div className='col-md-10'>
                <button  className='btn btn-primary mt-4' onClick={()=> props.handleSearch()}>Search</button>
                </div> 
           </div>
     
    );
  }
  
  export default Filter;