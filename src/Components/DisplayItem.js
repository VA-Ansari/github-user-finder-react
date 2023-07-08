import React from 'react'
import style from './displayItem.module.css'

export default function DisplayItem({user}) {
  return (
    <div className={style.container}>
        <div className={style.card} >
          <div className={style.header}>
            <img src={user.avatar_url}/>
            <h1>{user.name}</h1>
          </div>

          <div className={style.userItems}>
            <p> <b> User Name : </b> {user.login}</p>
            <p> <b> Email : </b> {user.email ? user.email: 'not mentioned'}</p>
            <p> <b> Bio : </b> {user.bio ? user.bio: 'not mentioned'}</p>
            <p> <b> Repositories : </b>{user.public_repos ? user.public_repos: 'not mentioned'}</p>
            <p> <b> Followers : </b>{user.followers ? user.followers: 'not mentioned'}</p>
            <p> <b> Following : </b>{user.following ? user.following: 'not mentioned'}</p>
          </div>

        </div>
    </div>
  )
}
