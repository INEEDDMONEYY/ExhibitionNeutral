import '../css/Cards.css'

function ContentCards() {
    //function for cards 
    //Dev message function, this will change later to someting more professional.[]
    function DevMessage(message) {
        message = "Looking to travel on a spectacular price to a spectacular place?"
        return message
    }

    //Time function [DONE]
    function CurrentTime() {
            const date = new Date();
            const formattedDate = date.toDateString()
            //Return Time
            return formattedDate
        }
    //Hotel API function for displaying accurate hotel listing data.

    return(
        <>
        <div className="card-bg-container"> 
            <div className="">
                {/**Dev message container */}
                <div className="">
                    <h3>{DevMessage()}</h3>
                    <p>{CurrentTime()}</p>
                </div>
                {/**Scrollable div for locations, intergrate hotel API to bring up specific info for each location */}
                <div className="">
                    <ul>
                        <li className="">Denver</li>
                        <li className="">Texas</li>
                        <li className="">London</li>
                        <li className="">Italy</li>
                        <li className="">France</li>
                        <li className="">Rhode Island</li>
                        <li className="">New York</li>
                        <li className="">California</li>
                        <li className="">Florida</li>
                        <li className="">Kansas</li>
                        <li className="">Africa</li>
                        <li className="">Mexico</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

//Export function
export default ContentCards