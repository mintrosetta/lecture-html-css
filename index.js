function getUsername(id) {
    if (id === undefined) throw new Error('id is required');

    return 1;
}

try {
    const userId = undefined;
    const userName = getUsername(userId);

    console.log(userName);
} catch (ex) {
    console.log(ex);
}

