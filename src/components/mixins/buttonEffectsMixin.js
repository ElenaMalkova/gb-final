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

        addBackgroundColor(event) {
            event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';

        },
        removeBackgroundColor(event) {
            event.target.style.backgroundColor = 'transparent';
        },

        expandImage() {
            const img = this.$el.querySelector('.hover-img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        },
        shrinkImage() {
            const img = this.$el.querySelector('.hover-img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        },
        expandGaleryImage(event) {
            const img = event.target;
            img.style.transform = 'scale(1.1)';
            img.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        },
        shrinkGaleryImage(event) {
            const img = event.target;
            img.style.transform = 'scale(1)';
            img.style.boxShadow = 'none';
        }
    }
}