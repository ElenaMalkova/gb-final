export default {
    methods: {
        expandAndShadow(event) {
            event.target.style.transform = 'scale(1.05)';
            event.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        },
        shrinkAndNoShadow(event) {
            event.target.style.transform = 'scale(1.0)';
            event.target.style.boxShadow = 'none';
        },
        expandImage() {
            const img = this.$el.querySelector('.cat-card__img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        },
        shrinkImage() {
            const img = this.$el.querySelector('.cat-card__img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        },
    }
}