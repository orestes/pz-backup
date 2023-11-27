const notify = require("./lib/util/notify.js");
const PzBackup = require("./lib/PzBackup");

(async function() {
    const PZ_PATH =  `${process.env.USERPROFILE}/Zomboid`;
    const pzb = new PzBackup(PZ_PATH);
    const latestSave = await pzb.getLatestSave();

    if (!latestSave) {
        notify('Could not find your latest save :(')
    }

    try {
        await pzb.restoreBackup(latestSave, PZ_PATH)
        notify(`Backup restored! :)\n${latestSave}`)
    } catch (e) {
        notify('Could not restore backup :(')
    }
})()
