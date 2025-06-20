
import { defineStore } from 'pinia';
import { ref } from 'vue';

// 导入所有图片
import overlayArea from '@/assets/screen/project-info-overlay-area.png';
import greenPercent from '@/assets/screen/project-info-green-percent.png';
import buildingArea from '@/assets/screen/project-info-building-area.png';
import staffCount from '@/assets/screen/project-info-staff-count.png';
import bussinessCount from '@/assets/screen/project-info-bussiness-count.png';
import deviceCount from '@/assets/screen/project-info-device-count.png';
import todayGuests from '@/assets/screen/project-info-today-guests.png';
import todayCars from '@/assets/screen/project-info-today-cars.png';

export const useProjectInfoStore = defineStore('ProjectInfoStore', () => {

    const projectInfo = ref({
        description: '本项目为中国移动长三角(南京)科创中心一期工程A、B片区项目，本工程位于江苏省南京市江北新区研创园，慧谷路以东、横江大道以西、园胜路以北、江淼路以南地块。拟建6栋研发办公用房和配建的地下停车库及其他辅助设施。项目主要用于科研、办公及配套设施、包括研发办公楼、实验室、数据中心、测试中心、会议厅、高端展厅、餐厅及附属城等。',
    
        detail:{
            overlayArea:{
                label:'覆盖面积(m²)',
                value: 25000,
                iconUrl:overlayArea,
                // iconUrl:'@/assets/screen/project-info-overlay-area.png',
            },
            greenPercent:{
                label:'绿化占比(%)',
                value: 25,
                iconUrl:greenPercent,
                // iconUrl:'@/assets/screen/project-info-green-percent.png',
            },
            buildingArea:{
                label:'建筑面积(m²)',
                value: 100000,
                iconUrl:buildingArea,
                // iconUrl:'@/assets/screen/project-info-building-area.png',
            },
            staffCount:{
                label:'员工人数(人)',
                value: 1000,
                iconUrl:staffCount,
                // iconUrl:'@/assets/screen/project-info-staff-count.png',
            },
            bussinessCount:{
                label:'入驻企业(家)',
                value: 100,
                iconUrl:bussinessCount,
                // iconUrl:'@/assets/screen/project-info-bussiness-count.png',
            },
            deviceCount:{
                label:'设备总数(台)',
                value: 1000,
                iconUrl:deviceCount,
                // iconUrl:'@/assets/screen/project-info-device-count.png',
            },
            todayGuests:{
                label:'今日入园访客(人)',
                value: 100,
                iconUrl:todayGuests,
                // iconUrl:'@/assets/screen/project-info-today-guests.png',
            },
            todayCars:{
                label:'今日入园车辆(辆)',
                value: 100,
                iconUrl:todayCars,
                // iconUrl:'@/assets/screen/project-info-today-cars.png',
            },
        }
    })
   
    return {
        projectInfo
    }
})