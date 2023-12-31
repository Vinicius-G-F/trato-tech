import Header from 'components/Header';
import styles from './Carrinho.module.scss';
import { useSelector } from 'react-redux';
import Item from 'components/Item';
import { RootState } from 'store';
import { useDispatch } from 'react-redux';
import { resetarCarrinho } from 'store/reducers/carrinho';

export default function Carrinho() {
  const dispatch = useDispatch()
  let total = 0
  const {carrinho} = useSelector((state: RootState) => {
    const carrinhoReduce = state.carrinho.reduce((itens: any[], itemNoCarrinho) => {
      const item = state.itens.find(item => item.id === itemNoCarrinho.id);
      const regexp = new RegExp(state.busca, 'i')
      if(item) total += (item.preco * itemNoCarrinho.quantidade);

      if(item?.titulo.match(regexp)){
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      return itens;
    }, []);
    return ({
      carrinho: carrinhoReduce,
      total
    });
  });
  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>
        {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}
        <div className={styles.total}>
          <strong>
            Resumo da compra
          </strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <button className={styles.finalizar} onClick={()=> dispatch(resetarCarrinho())}>
          Finalizar Compra
        </button>
      </div>
    </div>
  )
}