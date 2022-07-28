import { defineStore } from 'pinia'
import { getListApi, getCityListApi } from '../apis/request'
import type { Children, ChinaAdd, ChinaTotal, RootObject, StatisGradeCityDetail, CityData } from './type'

export const useMainStore = defineStore({
    id: 'store',
    state: () => ({
        list: <RootObject>{},
        item: <Children[]>[],
        chinaAdd: <ChinaAdd>{},
        chinaTotal: <ChinaTotal>{},
        lastUpdateTime: <string>'',
        cityDetail: <StatisGradeCityDetail[]>[],
        cityData: <CityData[]>[]
    }),
    actions: {
        async getList() {
            this.list = await getListApi();
            // console.log('list');
            // console.log(this.list);
            this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd;
            this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal;
            this.lastUpdateTime = this.list.diseaseh5Shelf.lastUpdateTime;
            this.cityDetail = this.list.statisGradeCityDetail.slice(0, 10);
        },
        async getCityList(city: string) {
            this.cityData = await getCityListApi(city);
            // console.log("cityData");
            // console.log(this.cityData);
        }
    }
})
