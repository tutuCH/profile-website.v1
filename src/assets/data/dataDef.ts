export interface NavBarTabs {
    title: string,
}
export interface linkedContent {   
    imageType: string, 
    content: string,
    link: string
    src: string
}

export interface PersonalInfo {
    content: string,
    education: Array<linkedContent>,
    certificates: Array<linkedContent>,
}

export interface SkillsDef {
    Languages: Array<string>,
    Frameworks: Array<string>,
    Tools: Array<string>,
}

export interface TabsDef {
    alignment?: "vertical" | "horizontal",
    items: Array<TabItemsDef>,
}

export interface TabItemsDef {
    tabsHeader: string,
    title: string,
    period: string,
    content: Array<string>,
}

export interface ProjectsDef {
    title: string,
    content: string,
    url?: string,
    github?: string,
    pathToImage?: string,
}