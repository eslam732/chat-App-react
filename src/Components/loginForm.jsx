import { useState } from 'react'
import axios from 'axios'


const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [error, seterror] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('we are herte')
        const authObject = {
            'Project-ID': "ee1fbd6a-f5f6-4a38-bfc0-7f06f8f56a52",
            'USer-Name': userName,
            'User-Secret': password
        }
        try{
          await axios.get('https://api.chatengine.io/chats',{headers:authObject});

          localStorage.setItem('userName',userName);
          localStorage.setItem('password',password);
          window.location.reload();
        }catch(e){
            console.log('eeeeeeee',e)
seterror('incorrect setings')
        }
    }

    return (
        <div className={'wrapper'}>
            <div className={'form'}>
                <h1 className={"title"}>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className={'input'}
                        placeholder='User Name' type="text"
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                        required />
                    <input
                        className={'input'}
                        placeholder='Password' type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required />
                    <div align='center' >
                        <button type='submit' className={'button'}>
                            <span>Start Chating</span>
                        </button>
                    </div>

                   <h2 className='error'>{error}</h2>
                </form>
            </div>

        </div>
    )

}

export default LoginForm;