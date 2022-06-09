import { useCycle, motion } from "framer-motion";
import { HiArrowCircleRight } from "react-icons/hi";
import { BsArrowUpRightSquare } from "react-icons/bs";

export default function Article({ 
    title = "", 
    description = [""], 
    photos = [], 
    onClick: setImage = () => {},
    link
}, index) {

    let [current, next] = useCycle(...photos);

    if (description instanceof Array) description = description.map(line => <><span className="description line">{line}</span><br/></>);
    else description = <><span className="description">{description}</span><br/></>

    const Img = (p, i) => <img key={i} loading="lazy" src={`/img/${p.src}`} alt="preview" className="preview" onClick={e => setImage(e.target.src)} />

    return <motion.div className="article" key={index}>
        <span className="title">{title}</span>
        <div className="img-container">
            {photos.length == 0 ? <img loading="lazy" src="/img/coming-soon.png" /> : <Img src={current} />}
            {photos.length > 1 && <button onClick={() => next()}><HiArrowCircleRight className="icon" /></button>}
        </div>
        <div>
            {description}
            {link && <span><a href={link}>Link to project source <BsArrowUpRightSquare className="icon" /></a></span>}
        </div>
    </motion.div>
}