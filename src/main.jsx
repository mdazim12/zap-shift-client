import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from 'aos';


Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-100 pt-2'>
      <div className='font-urbanist max-w-7xl mx-auto '>
      <RouterProvider router={router} />
    </div>
    </div>
  </StrictMode>,
)
