import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


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


const Project7 = () => {
    const [text, setText] = useState(people);
    const [value, setValue] = useState(0);
    

    useEffect(() => {
        const lastIndex = text.length - 1;
        if (value < 0){
           setValue(lastIndex)
        }
        if (value > lastIndex){
            setValue(0)
        }
    }, [text, value])
    useEffect(() => {
        const slider = setInterval(() => {
            setValue(value + 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [value])
    return (
        <>
            <section className="section">
                <div className="title">
                    <h2>
                        <span>/</span>reviews
                    </h2>
                </div>
            </section>
            <section className="section-center">
                {text.map((item, itemIndex) => {
                    const { id, image, name, title, quote } = item;

                    let position = "nextSlide";
                    if (itemIndex === value) {
                        position = "activeSlide";
                        if (itemIndex === value  - 1 || (value === 0 && itemIndex === text.length - 1)) {
                            position = "lastSlide";
                        }

                    }
                    return (
                        <article className={position}>
                            <img className="person-img" src={image} alt={name} />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote} </p>
                            <FaQuoteRight className="icon" />
                        </article>
                    )
                })}
                <button className = "prev"  onClick={() => setValue(value - 1)}><FiChevronLeft  /></button>
                <button className = "next" onClick={() => setValue(value + 1)}><FiChevronRight  /></button>
            </section>
        </>
    )
}

export default Project7;