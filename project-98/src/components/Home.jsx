function Home(){
    //functionaility
    //Homepage subtitle function
    function HomepageSubtitle(message) {
        message = 'Look out for all deals!!!';
        //return message
        return message
    }
    //Render Content
    return(
        <>
        <section>
            <div className="home-bg">
                {/**Container for home greeting content */}
                <div className="home-greeting-div">
                    <h3 className="homepage-title">Homepage</h3>
                    <h6 className="homepage-subtitle">{HomepageSubtitle()}</h6>
                </div>
            </div>
        </section>
        </>
    )
}

//Export function
export default Home