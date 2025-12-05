import React from 'react'

const navbar = () => {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid text-white">
                    <a class="navbar-brand text-white" href="#">SkillMatch</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">My Applications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Logout</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
           

    )
}

export default navbar
