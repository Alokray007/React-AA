import { Redirect, useHistory } from 'react-router-dom';

function Stocks() {
  const loggedIn = true;
  if (loggedIn === false) {
    return <Redirect to='/not-logged-in' />;
  }
  
  const history = useHistory();
  const handleClick = () => {
    window.alert('Sending info to the DB!');
    history.push('/');
  };

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;