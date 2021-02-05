import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/do">Link</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <Link class="dropdown-item" to="#">Action 1</Link>
                                <Link class="dropdown-item" to="#">Action 2</Link>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}


