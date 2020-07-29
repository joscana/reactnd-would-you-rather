import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {

    const links = (props.username) ? (
        <ul>
            <li>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                    </NavLink>
            </li>
            <li>
                <NavLink to='/add' activeClassName='active'>
                    New Question
                    </NavLink>
            </li>
            <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leader Board
                    </NavLink>
            </li>
            <li>
                Hello, {props.username}
            </li>
            <li>
                <NavLink to='/logout' activeClassName='active'>
                    Logout
                </NavLink>
            </li>
        </ul>
    ) : (
        <ul>
            <li>
                <NavLink to='/' exact activeClassName='active'>
                    Home
                    </NavLink>
            </li>
            <li>
                <NavLink to='/add' activeClassName='active'>
                    New Question
                    </NavLink>
            </li>
            <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leader Board
                    </NavLink>
            </li>
        </ul>
    );

    return (
        <nav className='nav'>
            {links}
        </nav>
    )
}