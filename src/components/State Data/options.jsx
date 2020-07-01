import React,{useState,useEffect} from 'react';
import { FormControl , makeStyles, InputLabel,Select} from '@material-ui/core';
import {options} from '../../api/api'
import styles2 from './state.module.css' 


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 20,
    marginBottom:10,
    maxWidth: 220,
    display:'flex',
    justifyContent: 'center'

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const ComboBox = ({handleStateChange}) =>{
  const styles = useStyles();

  const [fetchedStates,setFetchedStates] = useState([]);
  const [ value , setValue] = useState('')
    useEffect(()=>{
        const fetchAPI = async() => {
            setFetchedStates(await options());
        }
        fetchAPI()
    },[value]);


  const inputEvent = (e) =>{
  console.log(e.target.value)
  setValue(e.target.value)
  handleStateChange(e.target.value)
}

    return (
    <div className={styles2.main}>
    <FormControl className={styles.formControl} variant="outlined">
        <InputLabel>States</InputLabel>
        <Select native
          // defaultValue="Assam"
          value={value}
          onChange={inputEvent}
          label="States"
        >
          {fetchedStates.map((states, i) => (
            <option key={states + i} value={states}>
              {states}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default  ComboBox

// value={value}