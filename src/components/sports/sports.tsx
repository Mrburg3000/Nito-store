import './sports.css';

export default function Sports() {
    return (
        <div className="sports-container">
            <div className="sports-column">
                <img src="/ornstein.jpeg" alt="ornstein-ad" className='ornstein' />
                <img src="/chosen.jpeg" alt="chosen-ad" className='chosen' />
                <img src="/solaire.jpeg" alt="solaire-ad" className='solaire' />
            </div>
        </div>
    );
}