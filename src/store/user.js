import {defineStore} from 'pinia';
import {GOSH, SHUCKS, DANG, DARN, HECK, FRICK} from 'assets/js/constants.js';
import SaveFile from 'assets/js/models/SaveFile.js';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('userStore', () => {
    const user = ref(null);
    const saveFile = ref(null);

    const isAuthenticated = computed(() => user.value != null);
    const selectedDifficulty = computed(() => saveFile.value?.selectedDifficulty ?? GOSH);

    const isGosh = computed(() => selectedDifficulty.value === GOSH);
    const isShucks = computed(() => selectedDifficulty.value === SHUCKS);
    const isDang = computed(() => selectedDifficulty.value === DANG);
    const isDarn = computed(() => selectedDifficulty.value === DARN);
    const isHeck = computed(() => selectedDifficulty.value === HECK);
    const isFrick = computed(() => selectedDifficulty.value === FRICK);
    const difficultyName = computed(() => {
        switch (selectedDifficulty.value) {
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
    });

    function setUser(newUser) {
        user.value = newUser;

        // TODO FIXME remove this when we feel confident about our save system
        if (localStorage.getItem('panic') === 'true') {
            saveFile.value = new SaveFile();
            return;
        }

        if (newUser?.privateData?.saveFile) {
            saveFile.value = new SaveFile(SaveFile
                .deserialize(newUser.privateData.saveFile));
        } else {
            saveFile.value = new SaveFile();
            if (user.value) {
                saveFile.value.save();
            }
        }
    }

    function setDifficulty(difficulty) {
        saveFile.value.setDifficulty(difficulty);
        saveFile.value.save();
    }

    return {
        difficultyName,
        isAuthenticated,
        isGosh,
        isShucks,
        isDang,
        isDarn,
        isHeck,
        isFrick,
        saveFile,
        selectedDifficulty,
        setDifficulty,
        setUser,
        user,
    };
});


