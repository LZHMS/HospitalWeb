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

// 科室导航详情数据
const departmentDetails = {
    '肛肠外科': {
        images: ['./images/GangChang/img1.png', './images/GangChang/img2.png'],
        guide: '二楼电梯出口左转'
    },
    '烧伤科': {
        images: ['./images/ShaoShang/img1.png'],
        guide: '六楼电梯出口右转'
    },
    '整形美容科': {
        images: ['./images/MeiRong/img1.png'],
        guide: '六楼电梯出口左转'
    },
    '皮肤科': {
        images: ['./images/PiFu/img1.png', './images/PiFu/img2.png'],
        guide: '三楼电梯出口向左前方直行，后右转'
    },
    '儿科': {
        images: ['./images/PiFu/img1.png', './images/PiFu/img2.png'],
        guide: '三楼电梯出口向左前方直行，后右转'
    },
    '耳鼻咽喉科': {
        images: ['./images/ErBi/img1.png', './images/ErBi/img2.png'],
        guide: '五楼电梯出口向左前方直行，后右转'
    },
    '口腔科': {
        images: ['./images/KouQiang/img1.png', './images/KouQiang/img2.png', './images/KouQiang/img3.png'],
        guide: '五楼电梯出口向左转为口腔一区，向右转为口腔二区'
    },
    '肿瘤科': {
        images: ['./images/ZhongLiu/img1.png', './images/ZhongLiu/img2.png'],
        guide: '四楼电梯出口右前方诊室'
    },
    '泌尿外科': {
        images: ['./images/ZhongLiu/img1.png', './images/ZhongLiu/img2.png'],
        guide: '四楼电梯出口右前方诊室'
    },
    '肾内科': {
        images: ['./images/ZhongLiu/img1.png', './images/ZhongLiu/img2.png'],
        guide: '四楼电梯出口右前方诊室'
    },
    '产科': {
        images: ['./images/ChanKe/img1.png'],
        guide: '四楼电梯出口左侧诊室'
    },
    '针灸推拿科': {
        images: ['./images/ZhenJiu/img1.png', './images/ZhenJiu/img2.png'],
        guide: '三楼电梯出口右侧通道的左侧诊室'
    },
    '消化内科': {
        images: ['./images/XiaoHua/img1.png', './images/XiaoHua/img2.png'],
        guide: '二楼电梯出口左前方通道到底右转'
    },
    '血液内科': {
        images: ['./images/XiaoHua/img1.png', './images/XiaoHua/img2.png'],
        guide: '二楼电梯出口左前方通道到底右转'
    },
    '心血管内科': {
        images: ['./images/XinXue/img1.png', './images/XinXue/img2.png'],
        guide: '二楼电梯出口右前方诊室'
    },
    '心电图': {
        images: ['./images/XinXue/img1.png', './images/XinXue/img2.png'],
        guide: '二楼电梯出口右前方诊室'
    },
    '动态心电图': {
        images: ['./images/XinXue/img1.png', './images/XinXue/img2.png'],
        guide: '二楼电梯出口右前方诊室'
    },
    '动态血压': {
        images: ['./images/XinXue/img1.png', './images/XinXue/img2.png'],
        guide: '二楼电梯出口右前方诊室'
    },
    '呼吸与危重学科': {
        images: ['./images/Huxi/img1.png', './images/Huxi/img2.png', './images/Huxi/img3.png'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '风湿免疫科': {
        images: ['./images/Huxi/img1.png', './images/Huxi/img2.png', './images/Huxi/img3.png'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '老年医学科': {
        images: ['./images/Huxi/img1.png', './images/Huxi/img2.png', './images/Huxi/img3.png'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '综合内科': {
        images: ['./images/Huxi/img1.png', './images/Huxi/img2.png', './images/Huxi/img3.png'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '全科医学科': {
        images: ['./images/Huxi/img1.png', './images/Huxi/img2.png', './images/Huxi/img3.png'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '内分泌科': {
        images: ['./images/NeiFenMi/img1.png', './images/NeiFenMi/img2.png', './images/NeiFenMi/img3.png'],
        guide: '四楼电梯出口右侧通道左侧诊室'
    },
    '神经内科': {
        images: ['./images/ShenJingNei/img1.png', './images/ShenJingNei/img2.png'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '神经外科': {
        images: ['./images/ShenJingNei/img1.png', './images/ShenJingNei/img2.png'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '脑电图': {
        images: ['./images/ShenJingNei/img1.png', './images/ShenJingNei/img2.png'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '肌电图': {
        images: ['./images/ShenJingNei/img1.png', './images/ShenJingNei/img2.png'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    'TCD': {
        images: ['./images/ShenJingNei/img1.png', './images/ShenJingNei/img2.png'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '检验科': {
        images: ['./images/JianYan/img1.png', './images/JianYan/img2.png', './images/JianYan/img3.png'],
        guide: '三楼电梯出口右侧通道到底右转'
    },
    '门诊抽血室': {
        images: ['./images/MenZhenChouXue/img1.png', './images/MenZhenChouXue/img2.png'],
        guide: '三楼电梯出口右侧通道右侧诊室'
    },
    '医学影像科(X光)': {
        images: ['./images/XGuang/img1.png', './images/XGuang/img2.png', './images/XGuang/img3.png'],
        guide: '二楼电梯出口右侧通道到底'
    },
    '医学影像科(CT)': {
        images: ['./images/CT/img1.png', './images/CT/img2.png'],
        guide: '医院门诊楼正门进入直行左侧诊室'
    },
    '磁共振(MRI)': {
        images: ['./images/MRI/img1.png', './images/MRI/img2.png', './images/MRI/img3.png', './images/MRI/img4.png', './images/MRI/img5.png'],
        guide: '医院门诊楼正门进入直行至后门，步出门诊楼左转进入外科楼，乘坐右手侧扶梯至二楼后左转'
    },
    '超声科(B超)': {
        images: ['./images/BChao/img1.png', './images/BChao/img2.png', './images/BChao/img3.png'],
        guide: '四楼电梯出口右侧通道到底'
    },
    '挂号收费处': {
        images: ['./images/GuaHao/img1.png', './images/GuaHao/img2.png', './images/GuaHao/img3.png'],
        guide: '医院门诊楼正门进入右侧为自助/人工挂号收费处'
    },
    '中/西医药房': {
        images: ['./images/YaoFang/img1.png', './images/YaoFang/img2.png'],
        guide: '医院门诊楼正门进入步行，直行至通道十字交叉处右转'
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
            <div class="navibubble-container">
                    <div class="chat-bubble">
                        <span class="assistant-icon">👤</span>
                        <p>该科室的详细导航信息正在完善中，请咨询医院工作人员。</p>
                    </div>
                </div>
            </div>
        `;
        goToPage3();
        return;
    }
    
    // 设置标题
    document.getElementById('departmentTitle').textContent = departmentName;
    
    // 生成轮播图HTML（如果有多张图片）
    let imagesHTML = '';
    if (detail.images && detail.images.length > 0) {
        const carouselId = 'departmentCarousel';
        
        if (detail.images.length === 1) {
            // 单张图片直接显示
            imagesHTML = `
                <div class="single-image-container">
                    <img src="${detail.images[0]}" alt="${departmentName}导航图" loading="lazy">
                </div>
            `;
        } else {
            // 多张图片使用轮播图
            const carouselItems = detail.images.map((img, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${img}" alt="${departmentName}导航图${index + 1}" loading="lazy">
                </div>
            `).join('');
            
            imagesHTML = `
                <div class="step-buttons-container" id="departmentSteps"></div>
                <div class="carousel-container">
                    <div class="carousel-wrapper" id="${carouselId}">
                        ${carouselItems}
                    </div>
                    <button class="carousel-btn prev" onclick="changeDepartmentCarousel(-1)">‹</button>
                    <button class="carousel-btn next" onclick="changeDepartmentCarousel(1)">›</button>
                </div>
            `;
            
            // 初始化轮播图状态
            carouselStates['departmentCarousel'] = {
                currentIndex: 0,
                totalSlides: detail.images.length
            };
        }
    }
    
    // 设置详情内容
    document.getElementById('departmentDetail').innerHTML = `
        <div class="detail-header">
            <h2 class="detail-title">${departmentName}</h2>
        </div>
        <div class="navigation-guide">
            <div class="bubble-container">
                <div class="chat-bubble">
                    <span class="assistant-icon">👤</span>
                    <p>${detail.guide}</p>
                </div>
            </div>
        </div>
        ${imagesHTML}
    `;
    
    // 切换到详情页
    goToPage3();
    
    // 初始化轮播图步骤按钮
    if (detail.images && detail.images.length > 1) {
        setTimeout(() => {
            updateStepButton
            updateCarouselIndicators('departmentCarousel');
        }, 100);
    }
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
