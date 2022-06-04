import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CatDelete = ({deleteHandler}) => {
    const location = useLocation();
    const cat = location.state.cat;

    //const name = useState(cat.name);
    const [choose, setChoose] = useState(false);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        console.log("CHOOSE: ", choose);
        if (choose){
            deleteHandler(cat);
        }
        navigate('/cats');
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Confirm delete of cat named {cat.name}?</label>
            </div>
            <button onClick={()=>{setChoose(true)}}>Yes</button>
            <button>No</button>
        </form> 
    );
    
}

export default CatDelete;