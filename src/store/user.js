import {defineStore} from 'pinia';
import SaveFile from 'assets/js/models/SaveFile.js';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('userStore', () => {
    const user = ref(null);
    const saveFile = ref(null);

    const isAuthenticated = computed(() => user.value != null);

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

    return {
        isAuthenticated,
        saveFile,
        setUser,
        user,
    };
});


