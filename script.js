// 科室导航详情数据
const departmentDetails = {
    '肛肠外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.9gx1m1q0ru.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.9ddfobwy25.webp'],
        guide: '二楼电梯出口左转'
    },
    '烧伤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqg8ocg.webp'],
        guide: '六楼电梯出口右转'
    },
    '整形美容科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqg8ocg.webp'],
        guide: '六楼电梯出口左转'
    },
    '皮肤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.73uf4udu7u.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.9o09hhdsuq.webp'],
        guide: '三楼电梯出口向左前方直行，后右转'
    },
    '儿科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.73uf4udu7u.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.9o09hhdsuq.webp'],
        guide: '三楼电梯出口向左前方直行，后右转'
    },
    '耳鼻咽喉科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.icldtaai2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.13m9044qst.webp'],
        guide: '五楼电梯出口向左前方直行，后右转'
    },
    '口腔科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.1e92t9kn0r.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.1ziqfkf3cn.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.3yex5wkloa.webp'],
        guide: '五楼电梯出口向左转为口腔一区，向右转为口腔二区'
    },
    '肿瘤科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.73uf4ufja6.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.77e12k8m01.webp'],
        guide: '四楼电梯出口右前方诊室'
    },
    '泌尿外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.73uf4ufja6.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.77e12k8m01.webp'],
        guide: '四楼电梯出口右前方诊室'
    },
    '肾内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.73uf4ufja6.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.77e12k8m01.webp'],
        guide: '四楼电梯出口右前方诊室'
    },
    '产科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2a5k8pv9wv.webp'],
        guide: '四楼电梯出口左侧诊室'
    },
    '针灸推拿科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.5c1g9xx2eb.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.8vndzqzs6e.webp'],
        guide: '三楼电梯出口右侧通道的左侧诊室'
    },
    '消化内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.26lyb035fd.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.9kgnjrnt4s.webp'],
        guide: '二楼电梯出口左前方通道到底右转'
    },
    '血液内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.26lyb035fd.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.9kgnjrnt4s.webp'],
        guide: '二楼电梯出口左前方通道到底右转'
    },
    '心血管内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdc29.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.lw7bj6g5w.webp'],
        guide: '二楼电梯出口右前方诊室'
    },
    '心电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdc29.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.lw7bj6g5w.webp'],
        guide: '二楼电梯出口右前方诊室'
    },
    '动态心电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdc29.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.lw7bj6g5w.webp'],
        guide: '二楼电梯出口右前方诊室'
    },
    '动态血压': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdc29.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.lw7bj6g5w.webp'],
        guide: '二楼电梯出口右前方诊室'
    },
    '呼吸与危重学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdus2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.7lkgtfjbq4.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.9rjvf7azhc.webp'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '风湿免疫科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdus2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.7lkgtfjbq4.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.9rjvf7azhc.webp'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '老年医学科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdus2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.7lkgtfjbq4.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.9rjvf7azhc.webp'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '综合内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.32ifqgdus2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.7lkgtfjbq4.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.9rjvf7azhc.webp'],
        guide: '医院门诊楼正门进入后右转直行，左侧诊室'
    },
    '内分泌科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.5j4o5dl9ux.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.8z6zxguwyx.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.39lnlw0jgq.webp'],
        guide: '四楼电梯出口右侧通道左侧诊室'
    },
    '神经内科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2h8s45kgqj.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.83aii0lrki.webp'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '神经外科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2h8s45kgqj.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.83aii0lrki.webp'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '脑电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2h8s45kgqj.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.83aii0lrki.webp'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '肌电图': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2h8s45kgqj.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.83aii0lrki.webp'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    'TCD': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.2h8s45kgqj.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.83aii0lrki.webp'],
        guide: '四楼电梯出口左前方通道到底右转'
    },
    '检验科': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.1hsoqzi4v2.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.8z6zxgvvb3.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.491qz248xt.webp'],
        guide: '三楼电梯出口右侧通道到底右转'
    },
    '门诊抽血室': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.7p42r5f9v3.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.6m4dg9jg0g.webp'],
        guide: '三楼电梯出口右侧通道右侧诊室'
    },
    '医学影像科(X光)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.1e92t9r37t.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.7zqwkav57a.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.9rjvf7ei4g.webp'],
        guide: '二楼电梯出口右侧通道到底'
    },
    '医学影像科(CT)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.9kgnjrstco.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.1apgvjyh7h.webp'],
        guide: '医院门诊楼正门进入直行左侧诊室'
    },
    '磁共振(MRI)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.7snoov9vtw.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.6ikrijrwj0.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.3govhbqkc3.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img4.4n86pxfgxk.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img5.1ovwmf77ga.webp'],
        guide: '医院门诊楼正门进入直行至后门，步出门诊楼左转进入外科楼，乘坐右手侧扶梯至二楼后左转'
    },
    '超声科(B超)': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.icldt4mv0.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.2vf7v0ig2l.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.1ovwmetjhd.webp'],
        guide: '四楼电梯出口右侧通道到底'
    },
    '挂号收费处': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.4n86pxgehq.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.3rbpah6q2w.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img3.7prko40bc.webp'],
        guide: '医院门诊楼正门进入右侧为自助/人工挂号收费处'
    },
    '中/西医药房': {
        images: ['https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img1.8s3s21e3fx.webp', 'https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/EBlog/Life/img2.1ovwmf8nwv.webp'],
        guide: '医院门诊楼正门进入步行，直行至通道十字交叉处右转'
    },
    // 其他科室 - 待完善
    '创面修复科': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    },
    '妇科': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    },
    '全科医学科': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    },
    '用药咨询处': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    },
    '医保咨询处': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    },
    '客服中心': {
        images: [],
        guide: '科室详细导航信息正在完善中，请咨询医院工作人员或查看医院导视牌。'
    }
};

// 当前选择的支付方式
let selectedPaymentMethod = '';

// 页面切换函数
function goToPage1() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page1').classList.add('active');
    window.scrollTo(0, 0);
}

// ... 保持原有逻辑不变 ...
// (为了节省篇幅，省略了中间未修改的函数，它们保持原样)
// ...

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
    const insuranceInfo = document.getElementById('medicalInsurance');
    
    // 移除所有按钮的选中状态
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加选中状态
    const targetBtn = event.currentTarget || event.target.closest('.btn-primary');
    if (targetBtn) {
        targetBtn.classList.add('selected');
    }
    
    // 如果选择电子医保，显示调取路径
    if (method === '电子医保') {
        insuranceInfo.style.display = 'block';
        // 使用 requestAnimationFrame 确保 display: block 生效后再添加动画类
        requestAnimationFrame(() => {
            insuranceInfo.classList.add('show');
            insuranceInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    } else {
        insuranceInfo.classList.remove('show');
        setTimeout(() => {
            if (!insuranceInfo.classList.contains('show')) {
                insuranceInfo.style.display = 'none';
            }
        }, 300); // 等待过渡动画结束
    }
}

// 选择医院
function selectHospital(hospitalId) {
    // 隐藏所有医院的科室列表
    document.querySelectorAll('.hospital-departments').forEach(dept => {
        dept.style.display = 'none';
        dept.classList.remove('show');
    });
    
    // 移除所有医院按钮的选中状态
    document.querySelectorAll('.btn-hospital').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 添加选中状态
    const targetBtn = event.currentTarget || event.target.closest('.btn-hospital');
    if (targetBtn) {
        targetBtn.classList.add('selected');
    }
    
    // 显示选中医院的科室列表
    const selectedHospital = document.getElementById(hospitalId);
    if (selectedHospital) {
        selectedHospital.style.display = 'block';
        requestAnimationFrame(() => {
            selectedHospital.classList.add('show');
            // 平滑滚动到科室列表
            setTimeout(() => {
                selectedHospital.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    }
}

// 显示科室详情
function showDepartmentDetail(departmentName) {
    const detail = departmentDetails[departmentName];
    
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

// 关闭 Lightbox
document.addEventListener('DOMContentLoaded', function() {
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
