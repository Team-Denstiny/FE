export interface reviewInterface {
    id: string;
    hospital_id: string;
    date: string;
    nick_name: string;
    user_id: number;
    content: string;
    image_url: string;
    comment_count: number;
};

export interface hospiInfoInterface {
    hospiId: string;
    hospiName: string;
    hospiPos: string;
    subway: string;
    breakTime: string;
    runTime: string;
    xpos: number;
    ypos: number;
    tags: string[];
}