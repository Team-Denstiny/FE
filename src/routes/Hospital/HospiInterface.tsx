export interface reviewInterface {
    id: string;
    hospital_id: string;
    date: string;
    nick_name: string;
    user_id: number;
    content: string;
    image_url: string;
};

export interface hospiInfoInterface {
    hospiName: string;
    hospiPos: string;
    subway: string;
    breakTime: string;
    runTime: string;
    xpos: number;
    ypos: number;
    tags: string[];
}