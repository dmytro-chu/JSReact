class Button {
    constructor (width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value; 
    }
    render() {
        const button = document.createElement('button');
        button.style.width = this.width + 'px' ;
        button.style.height = this.height + 'px';
        button.style.background = this.background;
        button.style.value = this.value;
        button.setAttribute('value', this.value);
        document.body.appendChild(button);
        button.innerText = this.value;

    }
}