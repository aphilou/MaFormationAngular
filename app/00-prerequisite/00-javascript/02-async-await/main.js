async function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function sleepWithError(time) {
    return new Promise((resolve, reject) => {
        if ( time % 2 === 0) {
            reject("ERROR")
        }
        setTimeout(() => {
            resolve("GOOD");
        }, time);
    });
}

(async () => {
    console.log('start');
    await sleep(1000);
    console.log('end');
})();

(async () => {
    try {
        console.log('aaaa');
        const t = await sleepWithError(1000);
        console.log('zzzz', t);
    } catch (e) {
        console.log('error', e);
    }
})();