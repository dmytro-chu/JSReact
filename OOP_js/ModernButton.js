class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        super.render();
        const button = document.getElementsByTagName('button');
        button[0].style.borderRadius = this.borderRadius + 'px';
    }
}