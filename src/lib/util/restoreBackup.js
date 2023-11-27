const fs = require("fs-extra");
const getSaveLocation = require("./getSaveLocation");
const getBackupLocation = require("./getBackupLocation");

/**
 *
 * @param {string} save
 * @param {string} PZ_PATH
 * @return {Promise<boolean>}
 */
module.exports = async function restoreBackup(save, PZ_PATH) {
    const original = getSaveLocation(save,PZ_PATH);
    const backup = getBackupLocation(save, PZ_PATH);

    try {
        await fs.emptyDir(original);
        await fs.copy(backup, original);

        return true;
    } catch (e) {
        console.log(e);

        return false;
    }}