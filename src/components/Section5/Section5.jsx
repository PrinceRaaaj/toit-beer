const Section5 = () => {
    return <>
        <section className="section5 d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="row container-fluid">
                <div className="col-sm-4 d-flex align-items-center justify-content-center p-5">
                    <p className="p-3 section5_heading1">Allow the beverages to come to you.</p>
                </div>
                <div className="col-sm-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src="/images/section5/Group 104.png" />
                </div>
                <div className="col-sm-4 d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column">
                        <p className="p-3 section5_heading2">Beer and food delivered in under 60 minutes</p>
                        <button className="section5_button p-2 mx-2 ">Order Now<span className="mx-1"><img width="20" src="/images/section5/Group 63.png" /></span></button>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Section5