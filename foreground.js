const clickSkipAd = (event) => {
    if (event.key == 's') {
        document.querySelector('.ytp-ad-skip-button').click();
    };
};

document.addEventListener('keydown', clickSkipAd);
