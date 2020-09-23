const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    uri: string,
    errorHandler: (err: any) => void,
    callBack?: (res: Response) => void,
    headers?: Headers | string[][] | Record<string, string> | undefined
) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const options: RequestInit = {
        method: 'POST',
        body: data,
        headers: headers
    };

    fetch('https://upml-bank.dmitriy.icu/' + uri, options)
        .then((res) => {
            if (!res.ok) throw res.statusText;
            if (callBack) callBack(res);
        })
        .catch((err) => errorHandler(err));
};

export { handleFormSubmit };
