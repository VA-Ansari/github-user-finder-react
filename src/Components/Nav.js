import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nav() {
    return (
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <Link class="navbar-brand" to='/'>Navbar</Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href='home'>Home</a>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="github">GitHub</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
        <div>
            <Outlet />
        </div>


        </>
    )
}
