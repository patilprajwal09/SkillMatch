import React from 'react'

const hero = () => {
    return (

        <div className=" justify-content-center align-item-center text-center vh-50% border">

            <h1 class="display-6 fw-bold mb-3">Welcome to SkillMatch</h1>
            <p class="lead mb-3">Connect with opportunities that matter</p>
            <h2 class="h3 mb-3 fw-bold">What are you looking for?</h2>
            <div className="py-3">
                <div className='row '>
                    <div className="col-sm ">

                        <button className='btn btn-danger btn-lg btn-outline-light rounded-pill p-3'>
                            i want to hire
                        </button>
                    </div>
                    <div className="col-sm-6">
                        <button className='btn btn-danger btn-lg btn-outline-light rounded-pill p-3'>
                            i want to work
                        </button>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default hero
