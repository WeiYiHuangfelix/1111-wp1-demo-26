import React, { useState, useEffect } from 'react'
import List_26 from './components/List_26'
import Alert_26 from './components/Alert_26'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

const App_26 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

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

  const removeItem = (id) => {
    showAlert(true, 'item remove', 'dangr');
    setList(list.filter( (item) => item.id !== id));
  }

  const clearList = () => {
    showAlert(true, 'item remove', 'dangr');
    setList([]);
  }

  return (
  <>
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert_26 {...alert} removeAlert = {showAlert} />}
        <h3>Grocery Bud - 210410626</h3>
          <div className='form-control'>
            <input type='text' className='grocery' placeholder='e.g.eggs' value={name} onChange = {(e) => {setName(e.target.value)}}/>
            <button type='submit' className='submit-btn' placeholder='e.g.'>submit</button>
          </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-containr'>
            <List_26 items = {list} removeItem ={removeItem}/>
            <button className='clear-btn' onClick={clearList}> clear items</button>
        </div>
      )}
    </section>
  
  </>
  )
}


export default App_26
