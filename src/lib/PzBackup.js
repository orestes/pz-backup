const makeBackup = require('./util/makeBackup');
const restoreBackup = require('./util/restoreBackup');
const getLatestSave = require('./util/getLatestSave');

/**
 * A library to create and restore backups of the Project Zomboid game
 */
class PzBackup {
    /**
     *
     * @param {string} path
     */
    constructor(path) {
        this.PZ_PATH = path;
    }

    /**
     *
     * @param {string} save
     * @return {Promise<boolean>}
     */
    async makeBackup(save) {
        return await makeBackup(save, this.PZ_PATH);
    }

    async restoreBackup(save) {
        return await restoreBackup(save, this.PZ_PATH);
    }

    async getLatestSave() {
        return await getLatestSave(this.PZ_PATH);
    }
}

module.exports = PzBackup;