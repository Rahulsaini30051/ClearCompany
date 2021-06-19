
import "../components/css/Card.css";
import DetailModal from "../components/DetailModal";



const Card=(props)=>{

const {original_title,vote_count,release_date,poster,overview,title,id}=props

return(<DetailModal id={id} overview={overview} title={title} poster={poster} vote_count={vote_count} release_date={release_date}  >

<img className="poster" src={"https://image.tmdb.org/t/p/w200"+poster} alt="title"/>
<b className="title">{title||original_title}</b>
<span className="release_date_vote_count">{vote_count}</span>
<span className="release_date_vote_count">{release_date}</span>

</DetailModal>);

}
export default Card;