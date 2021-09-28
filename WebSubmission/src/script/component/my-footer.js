class MyFooter extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="wrapper">
                <a href="https://www.facebook.com/bryanrinaldoo" class="icon facebook" target="_blank"
                    rel="noopener noreferrer">
                    <div class="tooltip">Facebook</div>
                    <span><i class="fab fa-facebook-f"></i></span>
                </a>
                <a href="https://twitter.com/bryanrinaldoo" class="icon twitter" target="_blank"
                    rel="noopener noreferrer">
                    <div class="tooltip">Twitter</div>
                    <span><i class="fab fa-twitter"></i></span>
                </a>
                <a href="https://twitter.com/bryanrinaldoo" class="icon instagram" target="_blank"
                    rel="noopener noreferrer">
                    <div class="tooltip">Instagram</div>
                    <span><i class="fab fa-instagram"></i></span>
                </a>
                <a href="https://github.com/bryanrinaldoo" class="icon github" target="_blank"
                    rel="noopener noreferrer">
                    <div class="tooltip">Github</div>
                    <span><i class="fab fa-github"></i></span>
                </a>

                <a href="https://www.linkedin.com/in/bryanrinaldoo/" class="icon linkedin" target="_blank"
                    rel="noopener noreferrer">
                    <div class="tooltip">LinkedIn</div>
                    <span><i class="fab fa-linkedin-in"></i></span>
                </a>
            </div>
        
        `;
    }
}

customElements.define('my-footer', MyFooter);

