import React, { useState, useEffect } from 'react'
import List_26 from './components/List_26'
import Alert_26 from './components/Alert_26'

const App_26 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({show, msg, type});
  }


  const handleSubmit = (e) => {
    e.preventDefault();//自己控制
    if(!name) {
      showAlert(true, 'pleae enter value', 'danger')
    }else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
  <>
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>Grocery Bud - 210410626</h3>
          <div className='form-control'>
            <input type='text' className='grocery' placeholder='e.g.eggs' value={name} onChange = {(e) => {setName(e.target.value)}}/>
            <button type='submit' className='submit-btn' placeholder='e.g.'>submit</button>
          </div>
      </form>
    </section>
  
  </>
  )
}


export default App_26
