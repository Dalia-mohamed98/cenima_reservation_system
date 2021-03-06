import React from 'react'
import '../css/Movies.css'
export default function Movies() {
    const d = new Date();

    const navStyle = {
        marginTop: "30px",
        padding: "10px",
        background: "#eee"
    }
    const Box = {
        border: "1px #ccc solid",
        padding: "15px",
        marginBottom: "10px"
    }
    const badgeTime = {
        display: "inline-block",
        margin: "0 5px"
    }
    const borderLink = {
        
        borderBottom: "3px #27d727 solid"
    }
    return (
        <React.Fragment>
            <nav style={navStyle}>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-home" aria-selected="true">{d.toLocaleDateString()}</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-profile" aria-selected="false">{d.setDate(d.getDate() + 1),d.toLocaleDateString()}</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-contact" aria-selected="false">{d.setDate(d.getDate() + 1),d.toLocaleDateString()}</a>
                    <a className="nav-item nav-link " id="nav-home-tab" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-home" aria-selected="false">{d.setDate(d.getDate() + 1),d.toLocaleDateString()}</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-5" role="tab" aria-controls="nav-profile" aria-selected="false">{d.setDate(d.getDate() + 1),d.toLocaleDateString()}</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-6" role="tab" aria-controls="nav-contact" aria-selected="false">{d.setDate(d.getDate() + 1),d.toLocaleDateString()}</a>
               
               
                </div>
            </nav>
            <div style={Box} className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className="row" >
                        <div className="col-2">
                            <img src="https://demo.phpjabbers.com/1576790535_842/app/web/upload/events/1_29b325b95a1f0ecc8ec80859bb513692.jpg" height="200px"/>
                        </div>
                        <div className="col">
                            <h4>AVATAR</h4>
                            <p style={{color:'#27d727'}}>150 Minutes</p>
                            <div style={{paddingBottom:"10px"}}>
                            On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars.
                            
                            </div>
                            <div style={Box}>
                                Select Time: 
                                <h4 style={badgeTime}><a href="#" className="badge badge-info">10:00am</a></h4>
                                <h4 style={badgeTime}> <a href="#" className="badge badge-info">1:00pm</a></h4>
                                <h4 style={badgeTime}> <a href="#" className="badge badge-info">4:00pm</a></h4>
                                <h4 style={badgeTime}><a href="#" className="badge badge-info">7:00pm</a></h4>
                                <h4 style={badgeTime}><a href="#" className="badge badge-info">10:00pm</a></h4>
                                <h4 style={badgeTime}><a href="#" className="badge badge-info">1:00am</a></h4>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                <div className="tab-pane fade" id="nav-4" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
                <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div className="tab-pane fade" id="nav-6" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
        </React.Fragment>
        
    )

        

}
