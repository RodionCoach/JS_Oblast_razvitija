import React from 'react';

import ServiceBlock from './ServiceBlock';

import './Service.css';

const info = [
    {
        path: "images/home/services/web.png"
        text: "web design & development"
        alt: "web" // атрибут описание картинки для seo
    },
    {
        path: "images/home/services/app.png"
        text: "app design & software"
        alt: "web" // атрибут описание картинки для seo
    },
    {
        path: "images/home/services/branding.png"
        text: "brand identity & graphic design"
        alt: "web" // атрибут описание картинки для seo
    }
 ]

// const {text}  = this.props - это деструктуризация объекта props и выделение свойства text;

const Service = () => {
  return (
 //   <div className='services'>
        info.map( (item) => <ServiceBlock pathToImg={item.path} text={item.text} alt={item.alt}/>)
 //   </div>
  )
}

export default Service;
