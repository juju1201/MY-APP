
import '../Styles/MainStyles.css';
import { Link } from 'react-router-dom';
import img1 from '../Componets/Assets/restaurant chef B.jpg';
import dish1 from '../Componets/Assets/greek salad.jpg';
import dish2 from '../Componets/Assets/lemon dessert.jpg';
import dish3 from '../Componets/Assets/transferir.jpg';


function Main() {
  
  return (
    <main>
      <section id='section1'>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Leo fermentum pharetra cursus auctor tristique sed dolor nisl facilisis. Tincidunt odio at libero scelerisque eget viverra.</p>
          <Link to="/booking">
            <button>Reserve a Table</button>
          </Link>
        </div>
        <div>
          <img src={img1} alt='littlelemon restaurant' />
        </div>
      </section>
      <section id='section2'>
        <h1>Specials</h1>
        <button>Online Menu</button>
      </section>
      <article>
        <section>
          <img src={dish1} alt='greek salad' />
          <h2>Name of the dish</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Leo fermentum pharetra cursus auctor tristique sed dolor nisl facilisis.</p>
        </section>
        <section>
          <img src={dish2} alt='lemon dessert' />
          <h2>Name of the dish</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Leo fermentum pharetra cursus auctor tristique sed dolor nisl facilisis.</p>
        </section>
        <section>
          <img src={dish3} alt='restaurantfood' />
          <h2>Name of the dish</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Leo fermentum pharetra cursus auctor tristique sed dolor nisl facilisis.</p>
        </section>
      </article>
    </main>
  );
}


export default Main;