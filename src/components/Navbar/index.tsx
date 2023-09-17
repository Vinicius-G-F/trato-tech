import styles from './Navbar.module.scss'
import { ReactComponent as Logo  } from '../../assets/logo.svg'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {RiShoppingCart2Line, RiShoppingCartFill} from "react-icons/ri"
import Busca from 'components/Busca'

const iconeProps = {
  color: "white",
  size: 24
}

export default function Navbar() {
  const currentPath = useLocation().pathname
  const navigate = useNavigate()
  return (
    <nav className={styles.nav}>
        <Logo className={styles.logo} onClick={()=> navigate('/')} />
        <div>
          <Link to={"/"} className={classNames(styles.link, {
            [styles.selected] : currentPath === "/"
          })}>
            Página Inicial
          </Link>
        </div>
        <div className={styles.busca}>
          <Busca />
        </div>
        <div className={styles.icones}>
          <Link to="/carrinho">
            {currentPath === "/carrinho"
              ? <RiShoppingCartFill {...iconeProps} />
              : <RiShoppingCart2Line {...iconeProps} />
            }
          </Link>
        </div>
    </nav>
  )
}
