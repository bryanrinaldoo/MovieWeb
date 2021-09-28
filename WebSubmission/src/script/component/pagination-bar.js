class Pagination extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="page" id="prev">Prev</div>
        <div class="current" id="current">1</div>
        <div class="page" id="next">Next</div>
        `;
    }
}

customElements.define('pagination-bar', Pagination);

