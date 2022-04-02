import {useLocation, useParams} from 'react-router-dom';
import DrinksContext from '../context/drinks-context';

import React, { useContext, useState } from 'react'


function Details(props) {

  
  const location = useLocation();
  const allDrinks = location.allDrinks;
  const [tmp,setTmp] = useState([]);

  const [ctx] = useContext(DrinksContext);

  setTmp(ctx);
  console.log(ctx);

  // const params = useParams();

  // let data = [];
  // let drinkID = 1;

  // const drinkInfo = data.find(drink => drinkID === params.drinkID);

  // console.log(params.drinkName);

  // console.log(props.drinkName);

  return (
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut numquam distinctio illum laudantium mollitia dolor maiores id quia reiciendis. Magnam eveniet minima iure hic aspernatur dolorem cum, deleniti at aut. Ad doloribus, ipsum illum ratione itaque quae hic dolores suscipit, voluptate consequatur voluptates ipsa optio corrupti modi voluptatem quidem sunt exercitationem amet vitae! Voluptas nesciunt maiores provident assumenda placeat facilis dignissimos, repellat minima? Quasi quo dignissimos ducimus, vero sint voluptate amet cupiditate harum, aut natus sapiente recusandae nemo placeat numquam similique asperiores magnam eum modi odio cum dicta culpa soluta inventore! Nemo cupiditate reprehenderit, quo a quidem maiores, molestiae beatae minima libero illum fuga perferendis repudiandae asperiores hic consequatur voluptas expedita animi, ad praesentium harum. Quo omnis quas esse sed dolorem harum distinctio totam ullam tempore quaerat dicta corrupti reprehenderit incidunt assumenda placeat, rerum asperiores dignissimos et reiciendis? Unde, qui praesentium. Animi laboriosam tempore rem amet aut, doloremque distinctio ab officiis dolorem tenetur. Quis animi harum enim tempora rem. Rem, odit cum id ab, perspiciatis sequi eligendi tempore deleniti commodi provident molestias dolorem officia eaque, fugiat dolorum ut at! Quod, nesciunt recusandae. Esse nostrum ullam laudantium aspernatur recusandae? Officiis deleniti blanditiis odio, itaque ratione fugiat vitae rerum? Nemo perspiciatis nihil quis explicabo aliquam! Consequatur, rem. Minima cum, deserunt animi earum molestiae iusto aliquid odio commodi possimus? Unde repellat sed quia, reprehenderit magnam assumenda dolorum architecto veniam optio repellendus sunt rerum. Dolorum quia totam ipsam quidem consequuntur iure architecto praesentium illo quibusdam aspernatur, id, debitis minus, asperiores iste odio. Totam magnam modi quo! Saepe eaque dolor quasi repudiandae deleniti totam expedita facilis aliquid cupiditate reprehenderit nulla sit asperiores beatae non veritatis cum et eveniet, recusandae fugit maiores debitis illo perspiciatis nesciunt temporibus. Aperiam nostrum autem quas neque hic consequatur, officia magni est, perferendis, magnam praesentium. Facere voluptate ipsam nemo iste.</div>
  )
}

export default Details