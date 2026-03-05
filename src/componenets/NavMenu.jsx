import Logo from '../assets/Background+Shadow.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { domain } from '../store';

export default function NavMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    let endPoint = "/api/categories";
    let url = domain + endPoint;
    axios.get(url,{
      params:{
        populate: '*',
      },
    }).then((res)=>{
       setCategories(res.data.data);

    })
  },[]);

  return (
    <div className="w-24 bg-white border-r border-r-border py-8 flex flex-col">
      <img className="w-23.75" src={Logo} />

      <div className="w-full px-2 flex flex-col grow h-2.5  items-center gap-4 ">
        {categories.map((el) => (
          <NavLink to={el.documentId} key={el.documentId} className={({ isActive }) => (isActive && 'bg-mainGreen/10 text-mainGreen ') + ' activeGreen items-center'}>
            <img className="w-6" src={domain + el.img.url} />
            <p className="text-[10px] uppercase ">{el.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="w-full flex justify-center py-3">
        <FiLogOut />
      </div>
    </div>
  );
}
