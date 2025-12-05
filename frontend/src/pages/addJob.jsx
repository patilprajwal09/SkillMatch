import React, { useState } from "react";

const addJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    vacancies: "",
    experience: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // TODO: API POST request
    // axios.post("/storeJob", formData);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-header bg-danger text-white text-center rounded-4 border-0">
              <h4 className="mb-0">Create Job Listing</h4>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Example: Senior Laravel Developer"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Salary</label>
                  <input
                    type="text"
                    className="form-control"
                    name="salary"
                    placeholder="Example: 100000"
                    required
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Vacancies</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vacancies"
                    placeholder="Example: 1"
                    required
                    value={formData.vacancies}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Experience</label>
                  <input
                    type="text"
                    className="form-control"
                    name="experience"
                    placeholder="Example: 3 years"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Job Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="5"
                    placeholder="Include tasks, requirements, salary, etc"
                    required
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-danger btn-lg shadow">
                    Create Job Listing
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default addJob;
