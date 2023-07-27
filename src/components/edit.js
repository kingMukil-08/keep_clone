import React from 'react'
import { Link } from 'react-router-dom'
import icon from "../logo/icon.png"

export default function Edit() {
  return (
    <div>
        <head>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/> */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </head>
        <body>
            <nav class="nav">
                <ul>
                    {/* <li>
                        <a href='#' class="logo">
                            <img src={icon} alt=""/>//
                        </a>
                    </li> */}
                    <li>
                        <Link to="/notes">
                            <div class="b">
                            <i class="bx bx-bulb"></i>
                            <span class="  nav-item">Notes</span></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/remember">
                            <i class="bx bx-bell"></i>
                            <span class="nav-item">Remainder</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/edit">
                            <i class="a bx bx-pencil"></i>
                            <span class="nav-item">Edit label</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive">
                            <i class="bx bx-archive"></i>
                            <span class="nav-item">Archive</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/trash">
                            <i class="bx bx-trash"></i>
                            <span class="nav-item">Trash</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </body>
    </div>
  )
}
