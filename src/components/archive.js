import React from 'react'
import {MdDelete} from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import icon from "../logo/icon.png"
import Note from '../cmp/note'
export default function Archive({value,onDelete}) {
  
    const navigate = useNavigate()
    return (
    <div>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
    </head>
    <body>
        <nav class="nav">
            <ul>
                {/* <li>
                    <a href='#' class="logo">
                        <img src={icon} alt=""/>
                    </a>
                </li> */}
                <li>
                    <Link to="/notes">
                        <div class="b">
                        <i class=" bx bx-bulb"></i>
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
                        <i class="bx bx-pencil"></i>
                        <span class="nav-item">Edit label</span>
                    </Link>
                </li>
                <li>
                    <Link to="/archive">
                        <i class="a bx bx-archive"></i>
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
        <div className='arch'>
    {value.map((value1,index)=>{
        return(
        <div className='note' key={index} >
            <h1>{value1.title}</h1>
            <p>{value1.content}</p>
            {value1.imgfile===""?"":<img src={value1.imgfile} alt="5" width="220" height="240"/>}
            <button onClick={() => onDelete(value1.id)}><MdDelete size={25}/></button>
        </div>
        )
      })}
      {/* <button onClick={()=>navigate('/')}>home</button> */}
    </div>
    </body>
   
</div>
  )
}
