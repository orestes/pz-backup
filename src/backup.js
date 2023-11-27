const notify = require("./lib/util/notify.js");
const PzBackup = require("./lib/PzBackup");

(async function() {
    const PZ_PATH =  `${process.env.USERPROFILE}/Zomboid`;
    const pzb = new PzBackup(PZ_PATH);
    const latestSave = await pzb.getLatestSave();

    if (!latestSave) {
        notify('Could not find your latest save :(')
    }

    const saved = await pzb.makeBackup(latestSave);

    if (!saved) {
        notify('Could not create a backup :(')

        return;
    }

    notify(`Backup created! :)\n${latestSave}`)
})()
