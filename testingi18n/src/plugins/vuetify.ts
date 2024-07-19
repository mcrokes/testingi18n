import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#882C43',
                    crimson: '#ED174C',
                    crimson25: '#E8B8C7',
                    blue: '#0B24FB',
                    skin: '#F9A6BA',
                    black: '#272928',
                    grey: '#737575',
                    'link-red': '#C40041',
                    'card-grey': '#F6F6F6',
                    'light-grey': '#F7F7F7',
                },
            },
        },
    },
});
