import './Cases.scss';

const Cases = ({country,cases,deaths,abbreviation}) => {
  
   
    return ( 
        <div className="case" key={country}>
            <div className="flag">
             {abbreviation && <img src={`/flags/${abbreviation.toLowerCase()}.svg`} alt="flag"  />}
           </div>
           <div className="info">
           <p className="parapgraph" ><span>Country : </span>  {country}</p>
            <p className="parapgraph" ><span>Cases :</span>{cases}</p>
            <p className="parapgraph" ><span> Deaths : </span>{deaths}</p>
           </div>
           
        </div>
     );
}
 
export default Cases;