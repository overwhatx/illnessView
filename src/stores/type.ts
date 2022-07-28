export interface ChinaTotal {
    nowConfirm: number;
    noInfectH5: number;
    suspect: number;
    nowSevere: number;
    importedCase: number;
    localConfirm: number;
    localConfirmH5: number;
    confirm: number;
    dead: number;
    noInfect: number;
    showLocalConfirm: number;
    local_acc_confirm: number;
    heal: number;
    showlocalinfeciton: number;
}

export interface ChinaAdd {
    importedCase: number;
    noInfectH5: number;
    confirm: number;
    nowConfirm: number;
    suspect: number;
    nowSevere: number;
    noInfect: number;
    localConfirm: number;
    localConfirmH5: number;
    heal: number;
    dead: number;
}

export interface ChinaAddDisp {
    importedCase: string;
    noInfectH5: string;
    confirm: string;
    nowConfirm: string;
    suspect: string;
    nowSevere: string;
    noInfect: string;
    localConfirm: string;
    localConfirmH5: string;
    heal: string;
    dead: string;
}

export interface ShowAddSwitch {
    dead: boolean;
    all: boolean;
    confirm: boolean;
    suspect: boolean;
    heal: boolean;
    nowConfirm: boolean;
    nowSevere: boolean;
    importedCase: boolean;
    noInfect: boolean;
    localConfirm: boolean;
    localinfeciton: boolean;
}

export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface Total {
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
}

export interface Total {
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
    heal: number;
    showHeal: boolean;
    wzz: number;
}

export interface Total {
    heal: number;
    showHeal: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    nowConfirm: number;
    confirm: number;
    dead: number;
    showRate: boolean;
}

export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
}

export interface Children {
    total: Total;
    name: string;
    today: Today;
}

export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    tip: string;
    wzz_add: number;
}

export interface Children {
    total: Total;
    children: Children[];
    name: string;
    today: Today;
}

export interface AreaTree {
    name: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface Diseaseh5Shelf {
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
    province: string;
    city: string;
    nowConfirm: number;
    heal: number;
    grade: string;
    sdate: string;
    confirmAdd: number;
    confirm: number;
    dead: number;
    date: string;
    syear: number;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    statisGradeCityDetail: StatisGradeCityDetail[];
}

// 城市数据类型
export interface CityData {
    year: number;
    date: string;
    country: string;
    province: string;
    confirm: number;
    dead: number;
    heal: number;
    confirm_add: string;
    confirm_cuts: string;
    dead_cuts: string;
    now_confirm_cuts: string;
    heal_cuts: string;
    newConfirm: number;
    newHeal: number;
    newDead: number;
    description: string;
    wzz: number;
    wzz_add: number;
}