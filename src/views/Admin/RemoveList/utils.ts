const removeItem = async (slug: string, token: string) => {
    try {
        const res = await fetch(
            `https://upml-bank.dmitriy.icu/api/card/${slug}/delete`,
            {
                method: 'delete',
                headers: { Authentification: `Token ${token}` }
            }
        );
        if (!res.ok) throw res.statusText;
        return res.text();
    } catch (err) {
        console.log();
    }
};

export { removeItem };
