const main = () => {
    setInterval(() => {
        showTime();
    }, 1000);
};

const showTime = () => {
    const dt = new Date();

    const hrs = dt.getHours();
    const mins = dt.getMinutes();
    const sec = dt.getSeconds();

    console.log(hrs + ":" + mins + ":" + sec);
};

main();
