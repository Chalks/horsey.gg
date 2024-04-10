import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from '~/assets/js/constants.js';

export default (difficulty) => {
    switch (difficulty) {
        case FRICK:
            return 'FRICK';
        case HECK:
            return 'HECK';
        case DARN:
            return 'DARN';
        case DANG:
            return 'DANG';
        case SHUCKS:
            return 'SHUCKS';
        case GOSH:
        default:
            return 'GOSH';
    }
};
