import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Router'
import {
  RouterProvider,
} from "react-router-dom";
import { PokemonProvider } from './context/PokemonProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PokemonProvider>
      <RouterProvider router={router}/>
    </PokemonProvider>,
)
