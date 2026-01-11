// 医院挂号链接数据
const hospitalBookingLinks = {
    '深圳市人民医院': 'https://wx.169jk.com/Reservation/MediclRegistattion/NDeptList?hospitalId=1',
    '深圳市第二人民医院': 'https://wxis.91160.com/wxis/dep/main_dep.do?r=1768053765437&unit_id=22&classId=22&sonType=1&tagName=1',
    '深圳市儿童医院': 'https://wxis.91160.com/wxis/dep/main.do?unit_id=111',
    '深圳市罗湖区人民医院': 'https://nat.szlhyy.com.cn/nginx/lhyywebhospital/register/dept-select-new?orgID=1',
    '广州中医药大学深圳医院': 'https://ihosp2.clear-sz.com/pages/register/selectDepartment/index2',
    '香港大学深圳医院': 'https://wx.hku-szh.org/wehospital/opregister/choosedept'
};

// 轮播图状态
const carouselStates = {
    'idCardCarousel': { currentIndex: 0, totalSlides: 5 },
    'socialCardCarousel': { currentIndex: 0, totalSlides: 3 }
};

// 科室导航详情数据 - 深圳市第二人民医院
const departmentDetails = {
    // 外科集合（血管外科、创伤骨科等）
    '血管外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '创伤骨科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '肛肠外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '甲乳外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '胸外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '骨关节骨肿瘤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '肝胆脾胰外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '普通外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '脊柱外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '运动医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp', 
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室'
    },
    '烧伤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/烧伤科1.70atr9pcju.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/烧伤科2.8dxcvb0ekn.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至六楼，六楼电梯出口右侧诊室'
    },
    '整形美容科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/整形美容科1.8ok6ogg65b.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/整形美容科2.175vhz2fq4.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至六楼，六楼电梯出口左侧诊室'
    },
    '妇科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科1.8dxcvb24z9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科2.9o0a1mk4a3.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口左侧诊室'
    },
    '皮肤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科1.5moan8iee3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科2.102nmjjuqv.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科3.2oc0jqa4wo.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口向左前方通道直行后右转，左侧诊室'
    },
    '儿科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科1.5moan8iee3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科2.102nmjjuqv.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科3.2oc0jqa4wo.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口向左前方通道直行后右转，左侧诊室'
    },
    '耳鼻咽喉科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科1.45i5lhex0y.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科2.175vhz6nju.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科3.92qmfbsotq.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至五楼，五楼电梯出口向左前方通道直行后右转，左侧诊室'
    },
    '口腔科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科1.99tuarfn5h.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科2.9ddg8h8pvh.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科3.2dp6qkwd1b.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科4.3k8hz6l9ma.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至五楼，五楼电梯出口向左转为口腔一区，向右转为口腔二区'
    },
    '肿瘤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科1.8ok6ogmn2h.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科2.70atr9wcwj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科3.3yexq1v0p1.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右前方诊室'
    },
    '泌尿外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科1.8ok6ogmn2h.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科2.70atr9wcwj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科3.3yexq1v0p1.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右前方诊室'
    },
    '肾内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科1.8ok6ogmn2h.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科2.70atr9wcwj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科3.3yexq1v0p1.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右前方诊室'
    },
    '产科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科1.7ps4t7455.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科2.6t7lvub646.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左侧诊室'
    },
    '针灸推拿科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科1.70atr9y34k.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科2.32igaln2hp.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科3.5j4opitydt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道直行，靠左侧诊室'
    },
    '消化内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科1.5c1gu38tt5.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科2.4xv1380iy9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科3.86u4zvo0kl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '血液内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科1.5c1gu38tt5.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科2.4xv1380iy9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科3.86u4zvo0kl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '心血管内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压1.wj1otxvvi.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压2.3uvbsc65cl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右前方诊室'
    },
    '心电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压1.wj1otxvvi.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压2.3uvbsc65cl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右前方诊室'
    },
    '动态心电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压1.wj1otxvvi.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压2.3uvbsc65cl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右前方诊室'
    },
    '动态血压': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压1.wj1otxvvi.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压2.3uvbsc65cl.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右前方诊室'
    },
    '呼吸与危重学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp'],
        guide: '门诊楼正门进入后右转直行，靠左侧诊室'
    },
    '风湿免疫科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp'],
        guide: '门诊楼正门进入后右转直行，靠左侧诊室'
    },
    '老年医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp'],
        guide: '门诊楼正门进入后右转直行，靠左侧诊室'
    },
    '综合内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp'],
        guide: '门诊楼正门进入后右转直行，靠左侧诊室'
    },
    '全科医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp'],
        guide: '门诊楼正门进入后右转直行，靠左侧诊室'
    },
    '内分泌科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科1.1hspb4tssl.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科2.8z70hm7j7z.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科3.7i0vfv3egs.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右侧通道直行，靠右侧诊室'
    },
    '神经内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '神经外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '脑电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '肌电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    'TCD': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室'
    },
    '检验科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科1.3uvbsca06h.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科2.1hspb4w702.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科3.36228bmh6j.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科4.lw7vomijk.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道直行到底右转'
    },
    '门诊抽血室': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室1.6f164zav0l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室2.8z70hmatn3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室3.7axnkfkjgd.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道右侧诊室'
    },
    '医学影像科(X光)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）1.5triiohqqa.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）2.7axnkflvh7.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）3.3uvbscc8f3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）4.7p43bau6bu.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右侧通道直行到底'
    },
    '医学影像科(CT)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（CT）1.70atra7ect.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（CT）2.51en0y1w13.webp'],
        guide: '医院门诊楼正门进入后直行，靠左侧诊室'
    },
    '磁共振(MRI)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）1.6m4e0ezyt8.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）2.77e1mpuf40.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）3.7w7b6qhy4k.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）4.4qrt7snj7s.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）5.5c1gu3hzhw.webp'],
        guide: '医院门诊楼正门进入直行至后门，步出门诊楼左转进入外科楼，乘坐右手侧扶梯至二楼后左转'
    },
    '超声科(B超)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）1.9ddg8hmwiw.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）2.1vz5209644.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）3.8adqxlr2nu.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）4.2yyucw4zz0.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至四楼，出四楼电梯出口向右侧通道直行到底'
    },
    '挂号收费处': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处1.1sfj4ah0jj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处2.67xy9jters.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处3.1lcb8uuv3t.webp'],
        guide: '医院门诊楼正门进入右侧为自助/人工挂号收费处'
    },
    '中/西医药房': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房1.5moan90pj3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房2.9kgo3xbq5t.webp'],
        guide: '医院门诊楼正门进入步行，直行至通道十字交叉处右转'
    },
    '客服服务中心': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/客服服务中心.6iks2pccjx.webp'],
        guide: '医院门诊楼正门右手侧'
    },
    '消化内镜中心': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心1.2oc0jqv4a3.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心2.7ps4to8dx.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心3.26lyv5tqox.webp'],
        guide: '门诊楼正门进入直行，乘右手侧电梯至五楼，出五楼电梯出口向右侧通道直行到底'
    },
    
    // 北京大学深圳医院
    'PKU_自助取号处': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/自助取号处1.96a8d2uggk.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/自助取号处2.et009yqqa.webp'],
        guide: '医院门诊楼正门进入直行左手侧为自助取号处'
    },
    'PKU_妇科诊区': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科诊区1.51en0yy82a.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科诊区2.1e93dg2fk8.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至二楼，扶梯出口右侧'
    },
    'PKU_中西药房': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室1.7zqx4h88aj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室2.5moan9uf44.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室3.1lcb8vqbrh.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室4.2dp6qm6xgw.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至二楼，扶梯出口左侧'
    },
    'PKU_妇科彩超室': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室1.7zqx4h88aj.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室2.5moan9uf44.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室3.1lcb8vqbrh.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室4.2dp6qm6xgw.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至二楼，扶梯出口左侧'
    },
    'PKU_心血管内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_内分泌科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_风湿免疫科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_肿瘤内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_肾内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_老年医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_血液内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_操作治疗区(抽血、换药、注射、雾化)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_心电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧'
    },
    'PKU_检验科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科1.7lkhdm2adz.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科2.3rbpunkcgb.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口右侧'
    },
    'PKU_神经内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科1.7lkhdm2adz.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科2.3rbpunkcgb.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口右侧'
    },
    'PKU_儿科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科1.3ns3wxru5p.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科2.41yjnt0515.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科3.8hgyt2cj8e.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口向右转再向右转，直行到达儿科诊室'
    },
    'PKU_运动医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_胃肠外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_心血管外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_脊柱外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_肝胆胰外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_超声介入科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_显微淋巴外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_胸外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_手足与血管外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_骨关节科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_乳腺甲状腺外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_神经外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_美容整形外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行'
    },
    'PKU_眼科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科1.67xy9kt45l.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科2.26lyv6p0sa.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向右转'
    },
    'PKU_皮肤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科1.3d5a3segw1.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科2.5xb4gfefic.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科3.5xb4gfefhy.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，从扶梯出口左前方步梯至五楼，五楼步梯出口右侧'
    },
    'PKU_综合诊区': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科1.icly00cad.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科2.8dxcvcmdkn.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科3.8l0kqs8izt.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，从扶梯出口左前方步梯至五楼，五楼步梯出口左侧'
    },
    'PKU_耳鼻喉科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科1.icly00cad.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科2.8dxcvcmdkn.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科3.8l0kqs8izt.webp'],
        guide: '医院门诊楼正门进入直行，乘坐右边扶梯至四楼，从扶梯出口左前方步梯至五楼，五楼步梯出口左侧'
    },
    'PKU_放射科检查(DR、CT、MRI)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查1.8s3sm7valk.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查2.8l0kqs955n.webp'],
        guide: '进入医院大门后向右前方直行至外科楼'
    },
    'PKU_彩超检查': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查1.8s3sm7valk.webp',
                'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查2.8l0kqs955n.webp'],
        guide: '进入医院大门后向右前方直行至外科楼'
    }
};

// 当前选择的支付方式
let selectedPaymentMethod = '';
// 当前选择的医院ID
let currentHospitalId = '';

// 显示医院挂号链接
function showHospitalBookingLink(hospitalName) {
    const link = hospitalBookingLinks[hospitalName];
    if (link) {
        const linkContainer = document.getElementById('bookingLinkContainer');
        const bookingLink = document.getElementById('bookingLink');
        
        bookingLink.href = link;
        bookingLink.textContent = `进入${hospitalName}预约挂号`;
        linkContainer.style.display = 'block';
        
        // 平滑滚动到链接区域
        setTimeout(() => {
            linkContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// 轮播图切换
function changeCarouselSlide(carouselId, direction) {
    const state = carouselStates[carouselId];
    if (!state) return;
    
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    
    // 移除当前活动项
    items[state.currentIndex].classList.remove('active');
    
    // 计算新索引
    state.currentIndex += direction;
    if (state.currentIndex < 0) {
        state.currentIndex = state.totalSlides - 1;
    } else if (state.currentIndex >= state.totalSlides) {
        state.currentIndex = 0;
    }
    
    // 激活新项
    items[state.currentIndex].classList.add('active');
    
    // 更新指示器
    updateCarouselIndicators(carouselId);
}

// 更新轮播图指示器（已被步骤按钮替代，保留用于兼容）
function updateCarouselIndicators(carouselId) {
    const state = carouselStates[carouselId];
    const indicatorsId = carouselId.replace('Carousel', 'Indicators');
    const indicators = document.getElementById(indicatorsId);
    
    if (indicators) {
        indicators.innerHTML = '';
        for (let i = 0; i < state.totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = 'indicator-dot' + (i === state.currentIndex ? ' active' : '');
            dot.onclick = () => goToCarouselSlide(carouselId, i);
            indicators.appendChild(dot);
        }
    }
    
    // 更新步骤按钮状态
    updateStepButtons(carouselId);
}

// 更新步骤按钮
function updateStepButtons(carouselId) {
    const state = carouselStates[carouselId];
    const stepsId = carouselId.replace('Carousel', 'Steps');
    const stepsContainer = document.getElementById(stepsId);
    
    if (!stepsContainer) return;
    
    // 清空容器
    stepsContainer.innerHTML = '';
    
    // 生成步骤按钮
    for (let i = 0; i < state.totalSlides; i++) {
        // 添加步骤按钮
        const button = document.createElement('button');
        button.className = 'step-button' + (i === state.currentIndex ? ' active' : '');
        button.textContent = i + 1;
        button.onclick = () => goToCarouselSlide(carouselId, i);
        button.title = `第 ${i + 1} 步`;
        stepsContainer.appendChild(button);
        
        // 添加箭头（最后一个按钮后不添加）
        if (i < state.totalSlides - 1) {
            const arrow = document.createElement('span');
            arrow.className = 'step-arrow';
            arrow.textContent = '→';
            stepsContainer.appendChild(arrow);
        }
    }
}

// 初始化步骤按钮
function initStepButtons(carouselId) {
    const state = carouselStates[carouselId];
    if (state) {
        updateStepButtons(carouselId);
    }
}

// 直接跳转到指定幻灯片
function goToCarouselSlide(carouselId, index) {
    const state = carouselStates[carouselId];
    if (!state) return;
    
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    
    const items = carousel.querySelectorAll('.carousel-item');
    
    items[state.currentIndex].classList.remove('active');
    state.currentIndex = index;
    items[state.currentIndex].classList.add('active');
    
    updateCarouselIndicators(carouselId);
}

// 初始化轮播图指示器和步骤按钮
function initCarouselIndicators() {
    for (const carouselId in carouselStates) {
        updateCarouselIndicators(carouselId);
        updateStepButtons(carouselId);
    }
}

// 页面切换函数
function goToPage1() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    window.scrollTo(0, 0);
}

function goToPage2() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page2').classList.add('active');
    window.scrollTo(0, 0);
}

function goToPage3() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page3').classList.add('active');
    window.scrollTo(0, 0);
}

// 选择支付方式
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    
    // 隐藏所有指引卡片
    document.getElementById('idCardGuide').style.display = 'none';
    document.getElementById('socialCardGuide').style.display = 'none';
    document.getElementById('medicalInsurance').style.display = 'none';
    
    // 移除所有按钮的活动状态
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.style.opacity = '0.6';
    });
    
    // 高亮选中的按钮
    event.target.closest('.btn-primary').style.opacity = '1';
    
    // 根据选择显示对应的指引
    let targetElement = null;
    if (method === '身份证') {
        targetElement = document.getElementById('idCardGuide');
        targetElement.style.display = 'block';
        initCarouselIndicators();
    } else if (method === '社保卡') {
        targetElement = document.getElementById('socialCardGuide');
        targetElement.style.display = 'block';
        initCarouselIndicators();
    } else if (method === '电子医保') {
        targetElement = document.getElementById('medicalInsurance');
        targetElement.style.display = 'block';
    }
    
    // 平滑滚动到指引区域
    if (targetElement) {
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// 选择医院
function selectHospital(hospitalId) {
    currentHospitalId = hospitalId;
    // 隐藏所有医院的科室列表
    document.querySelectorAll('.hospital-departments').forEach(dept => {
        dept.style.display = 'none';
    });
    
    // 移除所有医院按钮的活动状态
    document.querySelectorAll('.btn-hospital').forEach(btn => {
        btn.style.transform = 'scale(1)';
        btn.style.opacity = '1';
    });
    
    // 高亮选中的按钮
    event.target.closest('.btn-hospital').style.transform = 'scale(1.02)';
    
    // 显示选中医院的科室列表
    const selectedHospital = document.getElementById(hospitalId);
    if (selectedHospital) {
        selectedHospital.style.display = 'block';
        // 平滑滚动到科室列表
        setTimeout(() => {
            selectedHospital.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
}

// 显示科室详情
function showDepartmentDetail(departmentName) {
    let key = departmentName;
    if (currentHospitalId === 'hospital1') {
        key = 'SZ2_' + departmentName;
    } else if (currentHospitalId === 'hospital2') {
        key = 'GZ_' + departmentName;
    } else if (currentHospitalId === 'hospital3') {
        key = 'PKU_' + departmentName;
    } else if (currentHospitalId === 'hospital4') {
        key = 'Luohu_' + departmentName;
    }
    
    // 如果没有特定医院的科室数据，尝试使用通用名称（兼容旧数据）
    const detail = departmentDetails[key] || departmentDetails[departmentName];
    
    if (!detail) {
        // 如果没有详情数据，显示提示信息
        document.getElementById('departmentTitle').textContent = departmentName;
        document.getElementById('departmentDetail').innerHTML = `
            <div class="detail-header">
                <h2 class="detail-title">${departmentName}</h2>
            </div>
            <div class="navigation-guide">
                <h3>📍 导航指引</h3>
                <p>该科室的详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。</p>
            </div>
        `;
        goToPage3();
        return;
    }
    
    // 设置标题
    document.getElementById('departmentTitle').textContent = departmentName;
    
    // 生成步骤流HTML
    let stepsHTML = '';
    if (detail.images && detail.images.length > 0) {
        stepsHTML = `
            <div class="steps">
                ${detail.images.map((img, index) => `
                    <div class="step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4 style="margin-bottom: 15px; color: var(--primary-color); font-size: 1rem;">📸 路线指引 - 第 ${index + 1} 步</h4>
                            <img src="${img}" class="guide-image" onclick="openLightbox('${img}')" alt="${departmentName}导航 - 第${index + 1}步" style="cursor: zoom-in; width: 100%; display: block;">
                            <p style="margin-top: 10px; font-size: 0.85rem; color: #999;">(点击图片可放大查看)</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // 设置详情内容
    document.getElementById('departmentDetail').innerHTML = `
        <div class="detail-header">
            <h2 class="detail-title">${departmentName}</h2>
        </div>
        <div class="navigation-guide">
            <h3>📍 总路线指引</h3>
            <p>${detail.guide}</p>
        </div>
        
        ${stepsHTML ? `<h3 class="section-title" style="margin-top: 30px; margin-bottom: 20px; padding-left: 10px;">🚶 详细图文路径</h3>` : ''}
        ${stepsHTML}
    `;
    
    // 切换到详情页
    goToPage3();
}

// Lightbox 功能
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const content = lightbox.querySelector('.lightbox-content');
    content.src = src;
    lightbox.style.display = 'flex';
    requestAnimationFrame(() => {
        lightbox.classList.add('active');
    });
}

// 科室详情页轮播图切换
function changeDepartmentCarousel(direction) {
    changeCarouselSlide('departmentCarousel', direction);
}

// Justified Gallery 效果 - 自动调整图片宽度使行高统一
function justifyGallery() {
    const gallery = document.querySelector('.images-gallery');
    if (!gallery) return;
    
    const items = gallery.querySelectorAll('.gallery-item');
    if (items.length === 0) return;
    
    // 单张图片特殊处理
    if (items.length === 1) {
        return;
    }
    
    // 等待所有图片加载完成
    const images = Array.from(items).map(item => item.querySelector('img'));
    let loadedCount = 0;
    
    images.forEach((img, index) => {
        if (img.complete) {
            calculateAspectRatio(img, items[index]);
            loadedCount++;
            if (loadedCount === images.length) {
                adjustGallery();
            }
        } else {
            img.addEventListener('load', function() {
                calculateAspectRatio(img, items[index]);
                loadedCount++;
                if (loadedCount === images.length) {
                    adjustGallery();
                }
            });
        }
    });
    
    function calculateAspectRatio(img, item) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        item.dataset.aspectRatio = aspectRatio;
    }
    
    function adjustGallery() {
        items.forEach(item => {
            const aspectRatio = parseFloat(item.dataset.aspectRatio) || 1.5;
            const height = getComputedStyle(item).height;
            const heightValue = parseFloat(height);
            const width = heightValue * aspectRatio;
            item.style.flexBasis = width + 'px';
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始页面
    goToPage1();
    
    // Lightbox 关闭功能
    const lightbox = document.getElementById('lightbox');
    if(lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // 为所有按钮添加点击反馈
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // 图片懒加载和错误处理
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.style.display = 'none';
            console.warn('图片加载失败:', e.target.src);
        }
    }, true);
    
    // 添加触摸反馈（移动端）
    if ('ontouchstart' in window) {
        document.querySelectorAll('button, .btn-department').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            });
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 150);
            });
        });
    }
    
    // 响应式调整 Gallery
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                justifyGallery();
            }
        }, 250);
    });
});

// 添加页面可见性检测
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('页面隐藏');
    } else {
        console.log('页面显示');
    }
});

// 防止快速点击
let isNavigating = false;
function debounceNavigation(callback) {
    if (isNavigating) return;
    isNavigating = true;
    callback();
    setTimeout(() => {
        isNavigating = false;
    }, 500);
}

// 优化的页面切换函数
const originalGoToPage2 = goToPage2;
const originalGoToPage3 = goToPage3;

goToPage2 = function() {
    debounceNavigation(originalGoToPage2);
};

goToPage3 = function() {
    debounceNavigation(originalGoToPage3);
};
