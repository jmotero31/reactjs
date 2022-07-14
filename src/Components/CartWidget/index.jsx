import React from 'react';
import './styles.css';
import {IoMdCart} from 'react-icons/io';
import { useContext } from 'react';
import { Shop } from '../../Contex/ShopContext';

const CardWidget = () => {
const {cart} = useContext(Shop)


  return (
    <div>
      <IoMdCart className='tamano'/>
      {cart.length && <span>({cart.length})</span>}
    </div>
  )
}

export default CardWidget