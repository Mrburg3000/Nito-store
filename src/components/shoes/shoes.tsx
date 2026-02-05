import MegaMenu from '../megaMenu/MegaMenu';
import './shoes.css'

export default function Shoes() {
    return (
        <div className="shoes-container">
            <div className='classics'>
                <h2>Nito Classics</h2>
            </div>
            
            <div className="shoes-column">
                <img src="/type1.jpeg" alt="Nito Classic 1" className='type1' />
                <img src="/type2.jpeg" alt="Nito Classic 2" className='type2' />
                <img src="/type3.jpeg" alt="Nito Classic 3" className='type3' />
                <img src="/type4.jpeg" alt="Nito Classic 4" className='type4' />
            </div>
            
            <div className="products">
                <h2>Most Requested Products</h2>
                
                <MegaMenu />
                
            </div>
        </div>
    );
}