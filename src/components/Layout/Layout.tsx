import {FC} from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'

const Layout: FC = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout