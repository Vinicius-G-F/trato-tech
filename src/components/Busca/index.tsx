import { useLocation } from "react-router-dom"
import styles from "./Busca.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { useDispatch } from "react-redux"
import { mudarBusca, resetarBusca } from "store/reducers/busca"
import { useEffect } from "react"

export default function Busca() {
  const currentPath = useLocation().pathname
  const busca = useSelector((state: RootState)=> state.busca)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(resetarBusca())
  }, [currentPath, dispatch])
  return (
    <div className={styles.busca}>
        <input 
            type="text"
            className={styles.input}
            placeholder="O que você procura?" 
            value={busca}
            onChange={(e)=> dispatch(mudarBusca(e.target.value))}
        />
    </div>
  )
}
