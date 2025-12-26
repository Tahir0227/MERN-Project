import React, { useState } from 'react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        // Centers the card in the middle of the laptop screen
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

            {/* Fixed width (400px) ensures it looks 'normal' on a laptop */}
            <div style={{ width: '400px' }}>
                <div className="card shadow-sm border-0 p-4 rounded-4">
                    <h3 className="fw-bold mb-4 text-start">Sign In</h3>

                    <form>
                        {/* Email Field */}
                        <div className="mb-3 text-start">
                            <label htmlFor="inputEmail" className="form-label fw-semibold">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                placeholder="name@example.com"
                            />
                        </div>

                        {/* Password Field with Eye Icon */}
                        <div className="mb-4 text-start">
                            <label htmlFor="inputPassword" className="form-label fw-semibold">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Enter password"
                                />
                                <button
                                    className="btn btn-outline-secondary border-start-0"
                                    type="button"
                                    style={{ borderLeft: 'none' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Full-width Button */}
                        <div className="d-grid">
                            <button className="btn btn-success btn-lg py-2 fw-bold">
                                Signin
                            </button>
                        </div>
                    </form>

                    <div className="mt-3 text-center">
                        <small className="text-muted">Forgot password? <a href="#" className="text-decoration-none">Reset here</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;