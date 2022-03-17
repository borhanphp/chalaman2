import Link from 'next/link';
import styles from '../../styles/Nav.module.css'
import styled from 'styled-components';


const Wrapper = styled.div`
    // margin-left: 40px;
    // margin-right: 40px;
`;




const Navbar = () => {
    // const showBlogCategories = blog =>
    //     blog.categories.map((c, i) => (
    //         <Link key={i} href={`/categories/${c.slug}`}>
    //             <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
    //         </Link>
    //     ));
  return (
      <Wrapper>
      <nav className={styles.nav}>
      
          <ul>
              <li><i class="fa-solid fa-bars"></i></li>
              <li>
                  <Link href='/'>প্রচ্ছদ</Link>
              </li>
              <li>
                  <Link href='#'>প্রদান খবর </Link>
              </li>
              <li>
                  <Link href='/categories/america'>আমেরিকা </Link>
              </li>
              <li>
                  <Link href='/categories/bangladesh'>বাংলাদেশ </Link>
              </li>
              <li>
                  <Link href='/categories/world-news'>বিশ্বজুড়ে </Link>
              </li>
              <li>
                  <Link href='/categories/politics'>রাজনীতি </Link>
              </li>
              
              <li>
                  <Link href='/categories/economy'>অর্থনীতি </Link>
              </li>
              <li>
                  <Link href='/categories/sports'>খেলা </Link>
              </li> 
          </ul>
            <span>
                <div>
                    <button className={styles.button1} >Classified</button>
                </div>
            
                <div>
                    <button className={styles.button2}>English Version</button>
                </div>
            </span>
      </nav>
      </Wrapper>
  );
};

export default Navbar;
