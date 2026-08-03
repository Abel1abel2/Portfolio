import Home from '/icons/home.png'
import Projects from '/icons/app.png'
import Experience from '/icons/expertise.png'
import Skills from '/icons/coding.png'
import Connect from '/icons/link.png'
import linkedin from '/icons/linkedin.png'
import github from '/icons/github.png'
import logo from '/icons/agremoved.png'
import react from '/icons/React.png'
import html from '/icons/HTML5.png'
import tailwind from '/icons/Tailwind CSS.png'
import next from '/icons/Next.js.png'
import typescript from '/icons/TypeScript.png'
import vite from '/icons/Vite.js.png'
import three from '/icons/Three.js.png'
import zustand from '/icons/zustand.png'
import gsap from '/icons/gsap.png'
import redux from '/icons/Redux.png'
import material from '/icons/Material UI.png'
import node from '/icons/Node.js.png'
import express from '/icons/Express.png'
import js from '/icons/JavaScript.png'
import mongoose from '/icons/Mongoose.js.png'
import python from '/icons/Python.png'
import figma from '/icons/Figma.png'
import postman from '/icons/Postman.png'
import vercel from '/icons/Vercel.png'
import blender from '/icons/Blender.png'
import canva from '/icons/Canva.png'
import mongo from '/icons/MongoDB.png'
import sql from '/icons/MySQL.png'
import redis from '/icons/Redis.png'
import cs from '/icons/cs.png'
import blend from '/icons/blend.png'
import web from '/icons/web.png'
import threeD from '/icons/3d.png'
import project from '/imgs/project.png'
import file from '/imgs/AbelGirma.pdf'
import mern from '/imgs/mern.PNG'
import bunashop from '/imgs/bunashop.PNG'
import lalibela from '/imgs/lalibela.PNG'
import room from '/imgs/room.PNG'
export const imgs={
    Home,
    Projects,
    Experience,
    Skills,
    Connect,
    logo,
    linkedin,
    github,
    cs,
    blend,
    threeD,
    web,
    file
    
}

export const stack=[
    {
        text:'Frontend',
        tools:[react,html,tailwind,next,typescript,vite,three,zustand,gsap,material,redux]
    },
    {
        text:'Backend',
        tools:[node,express,js,mongoose,python]
    },
    {
        text:"Database",
        tools:[mongo,sql,redis]
    },{
        text:'Software',
        tools:[figma,postman,vercel,blender,canva]
    }
]

export const expert=[
    {
        year:'2021-2025',
        title:'Cs Degree',
        content: 'Studied core computer science and algorithmic problem-solving.' 

    },
     {
        year:'2022-current',
        title:'Blender Skill',
        content: 'Mastered 3D modeling, texturing and animation' 
  },
     {
        year:'2023-current',
        title:'Full Stack',
        content: 'Building responsive and secured web applications' 
   },
     {
        year:'2023-current',
        title:'3d web dev',
      content: 'Creating interactive 3D graphics in the browser.' 
  },
     
]
export const projects=[
    {
        title:'Mern Auth',
        content:'This is authentication project that include otp verification and google authentication',
        img:mern,
        icons:[react,node,express,mongo,figma,]

    },
    {
        title:'BunaShop',
        content:'This is coffee shop web with cool animations',
        img:bunashop,
        icons:[react,gsap,three,tailwind,blender,figma]

    },
    {
        title:'Lalibela Showcase',
        content:'The project has ease navigation of lalibela view',
        img:lalibela,
        icons:[react,three,tailwind,blender]

    },
    {
        title:'Setup Room',
        content:'Interactive Setup Room',
        img:room,
        icons:[react,three,tailwind,blender]

    }
]