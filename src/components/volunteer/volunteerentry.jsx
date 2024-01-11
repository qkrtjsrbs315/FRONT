import React from "react"
import {Link} from 'react-router-dom';


function VolunteerEntry(){


    return (
        <>
            <Link to="/volunteerwrite">봉사이력쓰러가기</Link>
            <Link to="/volunteerboard">봉사이력조회하러가기</Link>
        </>
    )
}
export default VolunteerEntry;