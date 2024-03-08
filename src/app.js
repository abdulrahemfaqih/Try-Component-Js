class BlogPost extends HTMLElement {
    title = ''
    description = ''
    link = ''

    constructor() {
        super()

        this.attachShadow({
            mode: 'open',
        })
    }

    connectedCallback() {
        console.log('-- connected callback')
        this.render()
    }
    static get observedAttributes() {
        return ['title', 'description', 'link']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('-- atribut canged')
        this[name] = newValue || ''
        this.render()
    }

    render() {
        const {title, description, link} = this
        this.shadowRoot.innerHTML = `
        <div class="blog-post">
            <h2>${title}</h2>
            <p>${description}</p>
            <a href="${link}">learn more</a>
        </div>
    `

    }


}

customElements.define('blog-post', BlogPost)