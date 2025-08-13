import React from "react";
import "./FormPage.css";

function FormPage() {
  return (
    <div class="page-container">
      <div class="form-card">
        <div class="left-panel">
          <div class="logo"></div>
          <div class="left-panel-text">
            Say hello to global food and beverage producers and suppliers, all
            in one place
          </div>
        </div>

        <div class="right-panel">
          <div class="form-title">
            Let’s get started <br />
            with a few simple steps
          </div>

          <div class="form-section">
            <div class="input-group-container">
              <div class="input-wrapper">
                <div class="input-label">Email</div>
                <input class="input-field" />
              </div>
              <div class="input-wrapper">
                <div class="input-label">FullName</div>
                <input class="input-field" />
              </div>
              <div class="input-wrapper">
                <div class="input-label">Password</div>
                <input class="input-field" />
              </div>
            </div>

            <div class="submit-button">
              <div class="submit-button-text">Sign up</div>
            </div>
          </div>

          <div class="footer-links">
            <div class="footer-link-item">
              By signing up, you agree to our <span>Terms of Service</span>.
            </div>
            <div class="footer-link-item">
              Already have an account? <span class="login-link">Log in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
