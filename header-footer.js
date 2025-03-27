//Header
class Header extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
        <header class="sticky-top">
            <nav class="navbar navbar-expand-md navbar-dark" style="background: linear-gradient(to right, #8BCFD4, #42A5AC); font-family: 'Verdana', sans-serif;">
            <div class="container-fluid">   
                <a class="navbar-brand" href="/Question_8_WEB_SOEN287_FULLSTACK/index.html">
                <img src="/Question_8_WEB_SOEN287_FULLSTACK/_assets/images/logo.png" alt="Future Fuzzy Logo" width="250" height="150" class="d-inline-block align-text-top">
                </a>
                <div class="social" style="font-size: 30px; padding: 10px;">
                <div class="container mt-5">
                    <div class="col justify-content-center d-flex gap-4" style="margin-right: 15px;">
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-2" style="background: #8BCFD4; width: 200px; height: 100vh; position: fixed; z-index: 10; transition: transform 0.3s ease; font-family: 'Verdana', sans-serif;" id="sidebar">
                <button class="btn btn-primary" id="toggleSidebar"><i class="fas fa-bars"></i></button>
                <ul class="nav flex-column" style="font-weight: bold; margin-top: 50px;">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/Question_8_WEB_SOEN287_FULLSTACK/index.html" style="color: white; padding: 15px;"> Home </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Question_8_WEB_SOEN287_FULLSTACK/available-pets/pets.html" style="color: white; padding: 15px;">Available Pets</a>
                    </li>
                    <li class="nav-item">
                    <a  class="nav-link" id="findFuzzyLink" style="color: white; padding: 15px;" data-bs-toggle="modal" data-bs-target="#findFuzzyModal">Find a Fuzzy</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Question_8_WEB_SOEN287_FULLSTACK/Fuzzy-care/care.html" style="color: white; padding: 15px;">Fuzzy care</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Question_8_WEB_SOEN287_FULLSTACK/Adoption/adoption.html" style="color: white; padding: 15px;">Adoption</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Question_8_WEB_SOEN287_FULLSTACK/Contact-us/contact.html" style="color: white; padding: 15px;">Contact Us</a>
                    </li>
                </ul>
                </div>    
            </div>
            <div class="time mt-5" style="font-family: 'Verdana', sans-serif;"></div>
            </div>
        </header>

        `;
    }
}

customElements.define('custom-header', Header);

//Footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="text-center" style="background: linear-gradient(to right, #8BCFD4, #42A5AC);">
                <div class="container p-4 text-center">
                    <div class="row justify-content-center px-3">
                        <strong>Disclaimer</strong>
                        <p>Your privacy is important to us. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt iure animi modi molestias repellat quae dolores voluptatibus odio debitis.
                        </p>
                    </div>
                </div>
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                    © 2025 All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);

//Modal
class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="findFuzzyModal" tabindex="-1" aria-labelledby="findFuzzyModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="findFuzzyModalLabel">Find a Fuzzy</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post" onsubmit="return validateFormFindFuzzy()" name="findFuzzyForm">
                    <div class="mb-3">
                        <label for="fuzzyType" class="form-label">Type of Fuzzy</label>
                        <select name="fuzzyType" id="fuzzyType" class="form-select" >
                            <option value="" disabled selected>Select a type</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="petBreed" class="form-label">Breed</label>
                        <input name="petBreed" type="text" class="form-control" id="petBreed" list="breedList" >
                        <datalist id="breedList">
                            <option value="Mixed Breed"></option>
                        </datalist>
                    </div>
                    <div class="mb-3">
                        <label for="fuzzyAge" class="form-label">Age</label>
                        <select name="fuzzyAge" id="fuzzyAge" class="form-select" >
                            <option value="" disabled selected>Select an age</option>
                            <option value="0-1">0-1</option>
                            <option value="1-3">1-3</option>
                            <option value="3-5">3-5</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="fuzzyGender" class="form-label">Gender</label>
                            <select name="fuzzyGender" id="fuzzyGender" class="form-select" >
                                <option value="" disabled selected>Select a gender</option>
                                <option value="neither">Neither</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                    </div>
                    <div class="mb-3">
                        <label for="personality" class="form-label">Peronality</label>

                        <select name="personality" id="personality" class="form-select" >
                            <option value="" disabled selected>Select a personality</option>
                            <option value="neither">Neither</option>
                            <option value="friendly">Friendly</option>
                            <option value="aggressive">Aggressive</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="reset" class="btn btn-secondary">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        `;
    }
}

customElements.define('custom-modal', Modal);
  
//toggle sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebar = document.getElementById('toggleSidebar');
    let isCollapsed = false;

    toggleSidebar.addEventListener('click', () => {
        if (isCollapsed) {
            sidebar.style.transform = 'translateX(0)';
        } else {
            sidebar.style.transform = 'translateX(-200px)';
        }
        isCollapsed = !isCollapsed;
    });
});

