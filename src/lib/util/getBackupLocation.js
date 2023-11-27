module.exports = function getBackupLocation(save, PZ_PATH) {
    return `${PZ_PATH}/Saves/${save}.backup`;
}