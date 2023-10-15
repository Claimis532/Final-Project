import { useStorage } from '../hooks/useStorage';
import './home.css'; 
import { useState } from 'react';

const Home = () =>{

const [user,setUser] = useStorage("user", "")
const [inputValue, setinputValue] = useState("")
    return <div>
           {user && (
        <div>
             <div className='text'> Приветствую, {user} </div>
             <button className='button' onClick={() => setUser('')}>Выход</button>    
        </div>
           )}

           {!user &&(
             <div>
                <label>Введите имя</label>
                <input 
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
                />
                <button onClick={() => setUser(inputValue)}>Сохранить</button>
             </div>
           )}
        </div>
    
};

export default Home;
