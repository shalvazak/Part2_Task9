import { useParams } from "react-router-dom";

const data = [
    {id: 1, fact:'ზეადამიანური ფიზიკური ძალა'},
    {id: 2, fact:'ამტანობა'},
    {id: 3, fact:'სისწრაფე'},
    {id: 4, fact:'ქსელის გატყორცნა'},
    {id: 5, fact:'რეფლექსები, გამძლეობა და წონასწორობა'}
]

const ParamPage = () => {
    const param = useParams()

    const facts = data.find(fact => fact.id == param.id) 
    if(!facts){
        return <h1>ფაქტი ვერ მოიძებნა</h1>
    }

    return (
        <div>
            <h1>{facts.fact}</h1>
        </div>
    ) 

}

export default ParamPage;