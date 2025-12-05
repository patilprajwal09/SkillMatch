import React from "react";

const Footer = () => {
    return (
        <footer 
            className="bg-dark text-white py-5 mt-auto"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
        >
            <div className="container text-white">
                <div className="row g-4">

                    {/* Company Info */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="fw-bold mb-3 text-danger">SkillMatch</h5>
                        <p className="text-white mb-3">
                            Find your dream job or hire the best talent. Connect with opportunities that matter.
                        </p>

                        <div className="d-flex gap-3">
                            <a href="#" className="text-white text-decoration-none"><i className="bi bi-facebook fs-5"></i></a>
                            <a href="#" className="text-white text-decoration-none"><i className="bi bi-twitter fs-5"></i></a>
                            <a href="#" className="text-white text-decoration-none"><i className="bi bi-linkedin fs-5"></i></a>
                            <a href="#" className="text-white text-decoration-none"><i className="bi bi-instagram fs-5"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/index" className="text-white text-decoration-none">Find Jobs</a></li>
                            <li className="mb-2"><a href="/addJob" className="text-white text-decoration-none">Post a Job</a></li>
                            <li className="mb-2"><a href="/addCompany" className="text-white text-decoration-none">Add Company</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">About Us</a></li>
                        </ul>
                    </div>

                    {/* For Employers */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3 text-white">For Employers</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Post a Job</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Browse Candidates</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Pricing Plans</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Employer Resources</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="fw-bold mb-3 text-white">Contact Us</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2 text-white"><i className="bi bi-envelope me-2"></i>info@skillmatch.com</li>
                            <li className="mb-2 text-white"><i className="bi bi-telephone me-2"></i>+1 (555) 123-4567</li>
                            <li className="mb-2 text-white"><i className="bi bi-geo-alt me-2"></i>123 Job Street, Tech City</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <hr className="my-4" style={{ borderColor: "#444" }} />

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="text-white mb-0">© 2024 SkillMatch. All Rights Reserved.</p>
                    </div>

                    <div className="col-md-6 text-md-end">
                        <a href="/addJob" className="btn btn-danger btn-sm shadow">Post a Job</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
