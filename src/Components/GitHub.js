import React, { useState } from 'react'
import style from "./github.module.css"
import DisplayItem from './DisplayItem'

export default function GitHub() {
  const [name, setName] = useState()
  const [userData, setUserData] = useState(null)

  const clickHandler = async(e)=>{
    e.preventDefault()
    try{
      //fetch
        const url = await fetch(`https://api.github.com/users/${name}`)
        if(url.ok){
            //json
            const data = await url.json()
            setUserData(data)
            console.log(userData);
        } else{
          throw new Error('userNotFound')
        }

    } catch(error){
      console.log('error');
      console.log(error);
    }

  }

  return (
    <div className={style.searchBox}>
      <form onSubmit={clickHandler} className="container-fluid">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={(e) => { setName(e.currentTarget.value) }} />
          <button className='btn border-primary' type='submit'>Search</button>
        </div>
      </form>
      { userData && <DisplayItem user={userData}/>

      }
    </div>
  )
}
