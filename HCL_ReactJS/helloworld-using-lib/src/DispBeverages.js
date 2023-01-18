function DisplayBeverages(props){
    return(
        <div>    
            {props.drinks.map((d)=>(
                <div key={d.id} >
                    <h4>{d.id}</h4>
                    <h5>{d.Title}</h5>
                    <h6>{d.price}</h6>
                </div>
            ))}
        </div>
    );

}


export default DisplayBeverages;