import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const people = [
    {
        id: 1,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        title: 'office manager',
        quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',
        title: 'regular guy',
        quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',
        title: 'product designer',
        quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: 4,
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',
        title: 'the boss',
        quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
];


const Project7Clone2 = () => {
   const [ text, setText] = useState(people);
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex  = text.length - 1;
    if (index < 0){
        setIndex(lastIndex)
    }
    if (index > lastIndex){
        setIndex(0)
    }
  }, [index, text])


  useEffect(() => {
      let slider = setInterval(() => {
          setIndex(index + 1)
      },1000)
      return () => {
          clearInterval(slider) 
      }
  }, [index])
   return (
       <section className = "section">
           <div className = "title">
               <h2>
                   <span>/</span>reviews 
               </h2>
           </div>
           <div className = "section-center">
            
                 {text.map((person, personIndex) => {
                     const {id, title, name, quote, image } = person;

                     let position = "nextSlide";
                     if (personIndex === index){
                         position = "activeSlide";
                     }
          if (personIndex === index  - 1 || (index === 0 && personIndex === text.length - 1)){
              position = "lastSlide";
          }
                     
                     return (
                     <article className = {position}>
                         <img src = {image} alt = {name } className = "person-img" />
                         <h4>{name}</h4>
                         <p className = "title">{title}</p>
                         <p className = "text">{quote}</p>
                         <FaQuoteRight className = "icon" /> 
                     </article>
                     )
                 })}
             <button className = "prev" onClick = {() => setIndex(index -1)}><FiChevronLeft /></button>
             <button className = "next" onClick = {() => setIndex(index + 1)}><FiChevronRight /></button>
           </div>
       </section>
   )
}

export default Project7Clone2; 