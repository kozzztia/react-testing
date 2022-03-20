import React, {useState} from 'react';
import classes from './Navigation.module.scss';
// const nav = [
//   {title: 'Портфолио', link: '#' , id: "portpholio"},
//   {title: 'Виды работ', link: '#' , id: "works"},
//   {title: 'О фотостудии', link: '#', id: "studio"},
//   {title: 'Услуги и цены', link: '#', id: "price"},
//   {title: 'Контакты', link: '#', id: "contacts"},
// ];


function Navigation(){
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(true);
  React.useEffect(() => {
    setLoading(true);
  const fetchData = async() =>{
    try {
      const responce =await fetch('https://jsonplaceholder.typicode.com/posts');
      const data =await responce.json();
      setPosts(data);
    }catch(error){
      console.log(error);
    }
    setLoading(false)
  }
  fetchData();
}, [])
console.log(posts);
  return (
    
    <ul className={classes.navigation}>
      {/* nav/posts */}
      {loading && "loading...//////////////////////////////////////////////////////////////////////////////////"}
      {posts.map((item , id) =>(
      <li className={classes.navigation__item} key={item.id}><a href={item.link} className={classes.navigation__link}>{item.title}</a></li>
      ) )}
    </ul>
  )
}
export default Navigation
