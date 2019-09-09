/*
const continueButton = document.querySelector('#continue-btn');
continueButton.addEventListener('click', () => {
    if (!('indexedDB' in window)) {
        return;
    }

    var dbPromise = idb.open('test-db2', 1, function(upgradeDb) {
        console.log('making a new object store');
        if (!upgradeDb.objectStoreNames.contains('firstOS')) {
            upgradeDb.createObjectStore('firstOS');
        }
    });
});
*/