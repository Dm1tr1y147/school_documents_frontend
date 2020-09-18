interface ILoadingState {
    fetching: boolean;
    error: string;
}

interface IData {
    title: string;
    type_num: string;
    class_num: string;
    post_date: string;
    predmet_type: string;
    teacher: string;
    image: string;
    slug: string;
    card_id: number;
}

interface IFilterQuery {
    class_num: string;
    type_num: string;
    predmet_type: string;
    teacher: string;
    search: string;
}

export type { ILoadingState, IData, IFilterQuery };
