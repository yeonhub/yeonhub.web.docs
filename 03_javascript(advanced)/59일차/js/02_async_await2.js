const getName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000);
    });
};

const showName = async () => {
    const reset = await getName('HELLO');
    console.log(reset)
}
showName();