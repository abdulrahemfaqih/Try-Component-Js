class BlogPost extends HTMLElement {
    title = 'Web Component'

    constructor() {
        super()

        this.attachShadow({
            mode: 'open',
        })
    }

    connectedCallback() {
        this.render()
    }
    static get observedAttributes() {
        return ['title', 'description', 'link']
    }

    attributeChangedCallback(name, oldValue, newValue) {
     
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div class="blog-post">
            <h2>Simple Blog</h2>
            <p>Excepteur voluptate velit ipsum ea et. Amet anim tempor tempor adipisicing ullamco. Pariatur consectetur Lorem laborum magna incididunt mollit. Veniam proident consectetur occaecat occaecat officia exercitation non commodo cillum labore consectetur voluptate. Non do aute consectetur laboris deserunt aliquip aute sunt duis. Exercitation laborum sint pariatur duis anim aliquip deserunt sit Lorem mollit.</p>
            <a href='#'>learn more</a>
        </div>
    `

    }


}

customElements.define('blog-post', BlogPost)