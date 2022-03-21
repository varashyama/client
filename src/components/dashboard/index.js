import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard  = () => {
    const[details,setDetails] = useState({});
    const params = useParams();
    const id = params.id;

    useEffect(() =>{
        axios.get(`http://localhost:5000/user/${id}`)
        .then(response => {
            const data = response.data;
            setDetails(data);
            console.log(data);
        })
    })
    return (
        <section>
            <div>
                <h2 className="text-center my-5 text-primary">WELCOME {details.fullName.toUpperCase()}</h2>
            </div>

        </section>
    )
}

export default Dashboard;