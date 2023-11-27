const fs = require("fs/promises");
const path = require("path");

module.exports = async function getLatestSave(PZ_PATH) {
    const INI_FILE = `${PZ_PATH}/latestSave.ini`;

    try {
        await fs.lstat(INI_FILE)
    } catch (e) {
        return null;
    }

    const buffer = await fs
        .readFile(INI_FILE)

    const lines = buffer
        .toString()
        .split("\r");

    if (lines.length < 2) {
        return null;
    }

    const save = lines[0].trim();
    const mode = lines[1].trim();

    return path.join(mode, save);
}