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

export type { ILoadingState, IData };
