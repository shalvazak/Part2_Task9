import { Link } from "react-router-dom";

const AboutPage = () =>{
    return (
        <div className="card">
            <div className="card-content">
                <h3>Spider-Man</h3>
                <p>
                    როდესაც ადამიანი ობობა პირველად 1960-იანების დასაწყისში გამოჩნდა, 
                    მოზარდები სუპერგმირულ კომიქსებში უფრო ხშირად ძირითადი პერსონაჟის 
                    თანაშემწეები იყვნენ. თუმცა, სერიამ უმალვე პოპულარობა მოიპოვა, ვინაიდან
                    პიტერ პარკერმა (ინგლ. Peter Parker), ადამიანი ობობის ნამდვილმა სახემ, 
                    სკოლის მოსწავლემ, საკუთარი პიროვნებით მკითხველის მხრიდან ინტერესი გამოიწვია.
                </p>
                <br />
                <Link to={"/"}>Home</Link>
                <br />
                <Link to={"/facts/1"}>facts</Link>

            </div>
        </div>
    )
}

export default AboutPage;