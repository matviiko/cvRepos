export interface Experience {
    title: string;
    company: string;
    date: string;
    text: string
}

export interface IForm {
    name: string;
    email: string;
    message: string
}

export interface IState {
    firstName: string;
    text: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    social: ISocial;
    skills: ISection;
    experience: ISection;
    education: ISection;
    portfolio: ISection;
}

export interface ISocial {
    facebook: string;
    instagram: string;
    linkedin: string;
    github: string;
}

export interface ISection {
    title: string;
    text?: string;
    skills?: ISkills;
    items?: Array<ISectionItems>
    portfolioItems?: Array<IPortfolioItems>
}

export interface ISkills {
    html5?: boolean;
    css3?: boolean;
    javascript?: boolean;
    typescript?: boolean;
    sass?: boolean;
    react?: boolean;
    angular?: boolean;
    bootstrap?: boolean;
    materialUi?: boolean;
    firebase?: boolean;
}

export interface ISectionItems {
    title: string;
    company: string;
    date: string;
    text: string;
}

export interface IPortfolioItems {
    title: string;
    text?: string;
    url_img?: string;
    github_url?: string;
    technology?: ISkills
}
