module.exports.createBackup = async function (req, res, next) {
    try {
        const test = await db.Database.create({
            name: 'Nghi',
            connect_string: 'dep trai',
            type: 'mongodb'
        });
        console.log(test)
        res.end('done');
    } catch (e) {
        next(e);
    }
}