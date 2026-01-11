# 就医指引网站项目

## 网页布局逻辑
+ UI组件设计风格：精美简洁、图文结合、操作指引清晰
+ 图像布局：
    + 路线指引的若干张图片做成轮播图展示，添加下一页、上一页按钮，方便用户查看；
    + 指引文字做成聊天气泡样式，增强阅读体验，并添加客服助手 icon；并将指引文字分成若干小段，分别对应每张图片，方便用户理解。
    + 导览图片添加动态指引箭头，实现当前图片准备指引切换下一张图片；
+ 医院选择按钮：设计布局紧凑一些，因为有多家医院，几行几列这样；
+ 网页背景颜色：莫兰迪色系，柔和不刺眼，提升用户体验感。

## 页面内容逻辑
**目的**：指引对医院就诊流程不熟悉的患者就医。
**板块划分**：
1. 预约挂号流程指引
2. 就医科室路线指引

---

### 第一板块：预约挂号流程指引
#### 1.1 预约挂号链接

**页面交互**：
展示7个按钮：深圳市人民医院、深圳市第二人民医院、深圳市儿童医院、深圳市罗湖区人民医院、广州中医药大学深圳医院、香港大学深圳医院。

**逻辑**：
点击医院按钮，出现医院挂号链接，并文字提示：“请点击链接进入医院公众号预约号源”。允许客户点击链接跳转医院公众号。

**各医院挂号链接如下**：

1. **深圳市人民医院**
   [https://wx.169jk.com/Reservation/MediclRegistattion/NDeptList?hospitalId=1](https://wx.169jk.com/Reservation/MediclRegistattion/NDeptList?hospitalId=1)

2. **深圳市第二人民医院**
   [https://wxis.91160.com/wxis/dep/main_dep.do?r=1768053765437&unit_id=22&classId=22&sonType=1&tagName=1](https://wxis.91160.com/wxis/dep/main_dep.do?r=1768053765437&unit_id=22&classId=22&sonType=1&tagName=1)

3. **深圳市儿童医院**
   [https://wxis.91160.com/wxis/dep/main.do?unit_id=111](https://wxis.91160.com/wxis/dep/main.do?unit_id=111)

4. **深圳市罗湖区人民医院**
   [https://nat.szlhyy.com.cn/nginx/lhyywebhospital/register/dept-select-new?orgID=1](https://nat.szlhyy.com.cn/nginx/lhyywebhospital/register/dept-select-new?orgID=1)

5. **广州中医药大学深圳医院**
   [https://ihosp2.clear-sz.com/pages/register/selectDepartment/index2](https://ihosp2.clear-sz.com/pages/register/selectDepartment/index2)

6. **香港大学深圳医院**
   [https://wx.hku-szh.org/wehospital/opregister/choosedept](https://wx.hku-szh.org/wehospital/opregister/choosedept)

---

#### 1.2 就诊取号指引

**页面交互**：
就诊取号方式显示三个按钮，分别是：**身份证**、**社保卡**、**电子医保**。

###### (1) 点击“身份证”时展示内容
> [图片：展示自助机操作界面]

1. 请点击自助机“取号”
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.2h8soa65r9.webp" alt="image" />

2. 选择身份证取号
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.77e1mp2eb4.webp" alt="image" />

3. 将身份证插入自助机下方卡槽
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.2yyucvexb0.webp" alt="image" />

4. 等待自助机读卡，选择支付方式
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.6m4e0ebhc6.webp" alt="image" />

5. 根据提示完成支付，出号
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.232cxf6n1o.webp" alt="image" />

###### (2) 点击“社保卡”时展示内容
> [图片：展示自助机及插卡位置]

<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/image.2oc0jpu9cr.webp" alt="image" />

1. 请点击自助机“取号”
2. 选择社保卡取号
3. 将社保卡插入自助机下方卡槽
4. 等待自助机读卡，选择支付方式
5. 根据提示完成支付，出号

###### (3) 点击“电子医保”时展示内容
显示国家医保小程序链接，允许客户点击跳转到国家医保小程序：
* 链接：`#小程序://国家医保/2btyk7YaPOBrwkC`

###### 温馨提示（显示在取号指引下方）
1. 请携带好既往就诊资料及影像资料(如有)，并提前就诊时间30分钟到达医院，完成取号，等待就诊。
2. 如自助取号失败请前往人工窗口进行取号。
3. 请点击下一页查看就医科室路线指引。

**底部功能**：放置“下一页”按钮。

---

### 第二大板块：就医科室路线指引

**页面开头展示**：请选择您本次的就诊医院、就诊科室

**页面交互**：
展示六个按钮（不同颜色区分）：深圳市人民医院、深圳市第二人民医院、深圳市儿童医院、深圳市罗湖区人民医院、广州中医药大学深圳医院、香港大学深圳医院。

点击对应医院按钮，出现对应医院科室。科室分为**外科类、内科类、检查类、其他**四种（需重点显示）。

#### 各医院科室分类数据：

###### 1. 深圳市第二人民医院
* **内科类**：全科医学科、儿科、呼吸与危重学科、风湿免疫科、老年医学科、综合内科、内分泌科、神经内科、消化内科、血液内科、心血管内科、肾内科
* **外科类**：外科（血管外科、创伤骨科、肛肠外科、甲乳外科、胸外科、骨关节骨肿瘤科、肝胆脾胰外科、普通外科、血管外科、脊柱外科、运动医学科）、耳鼻咽喉科、神经外科、泌尿外科、烧伤科、整形美容科、针灸推拿科、妇科、皮肤科、口腔科、肿瘤科、产科
* **检查类**：超声科(B超)、磁共振(MRI)、检验科、门诊抽血室、医学影像科(X光)、医学影像科(CT)、心电图、动态心电图、动态血压、肌电图、脑电图、TCD、消化内镜中心
* **其他**：客服服务中心、挂号收费处、药房

###### 2. 广州中医药大学深圳医院
* **内科类**：内科、全科医学科、儿科、妇科
* **外科类**：骨伤科、外科、肛肠科、皮肤科、眼科、耳鼻喉科、口腔科、产科
* **检查类**：心电图、脑电图、肌电图、TCD室(经颅多普勒超声)、胃肠镜室
* **其他**：药房、挂号收费处、客户服务中心

###### 3. 北京大学深圳医院
* **内科类**：心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、神经内科、儿科、综合诊区
* **外科类**：胸外科、肝胆胰外科、显微淋巴外科、神经外科、心血管外科、乳腺甲状腺外科、脊柱外科、骨关节科、超声介入科、胃肠外科、运动医学科、手足与血管外科、眼科、耳鼻喉科、妇科诊区
* **检查类**：妇科彩超室、检验科、操作治疗区(抽血、换药、注射、雾化)、心电图、放射科检查(DR、CT、MRI)、彩超检查
* **其他**：自助取号处、中西药房

###### 4. 罗湖区人民医院
* **内科类**：消化内科、神经内科、风湿免疫科、肾内科、血液内科、呼吸内科、内分泌科、心内科、临床营养科、儿科、中医科、全科医学科、老年医学科
* **外科类**：骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科、泌尿外科、产科、耳鼻喉科、中医骨伤科、皮肤科、眼科、血液透析室
* **检查类**：放射影像科(DR、CT、MRI)、消化内镜室、超声科、皮肤科治疗室、呼吸内镜室、肺功能室、功能检查科(心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板)
* **其他**：挂号收费处、药房、便民服务中心、麻醉门诊

---

#### 详细科室路线指引（图文）

###### 一、深圳市第二人民医院

**(1) 外科集合**
（包含：血管外科、创伤骨科、肛肠外科、甲乳外科、胸外科、骨关节骨肿瘤科、肝胆脾胰外科、普通外科、血管外科、脊柱外科、运动医学科）

<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科1.pfttdz13d.webp" alt="外科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/外科2.96a8d1fio6.webp" alt="外科2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左侧诊室。

**(2) 烧伤科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/烧伤科1.70atr9pcju.webp" alt="烧伤科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/烧伤科2.8dxcvb0ekn.webp" alt="烧伤科2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至六楼，六楼电梯出口右侧诊室。

**(3) 整形美容科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/整形美容科1.8ok6ogg65b.webp" alt="整形美容科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/整形美容科2.175vhz2fq4.webp" alt="整形美容科2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至六楼，六楼电梯出口左侧诊室。

**(4) 妇科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科1.8dxcvb24z9.webp" alt="妇科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科2.9o0a1mk4a3.webp" alt="妇科2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口左侧诊室。

**(5) 皮肤科、儿科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科1.5moan8iee3.webp" alt="皮肤科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科2.102nmjjuqv.webp" alt="皮肤科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科3.2oc0jqa4wo.webp" alt="皮肤科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口向左前方通道直行后右转，左侧诊室。

**(6) 耳鼻咽喉科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科1.45i5lhex0y.webp" alt="耳鼻喉科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科2.175vhz6nju.webp" alt="耳鼻喉科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/耳鼻喉科3.92qmfbsotq.webp" alt="耳鼻喉科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至五楼，五楼电梯出口向左前方通道直行后右转，左侧诊室。

**(7) 口腔科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科1.99tuarfn5h.webp" alt="口腔科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科2.9ddg8h8pvh.webp" alt="口腔科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科3.2dp6qkwd1b.webp" alt="口腔科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科4.3k8hz6l9ma.webp" alt="口腔科4" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至五楼，五楼电梯出口向左转为口腔一区，向右转为口腔二区。

**(8) 肿瘤科、泌尿外科、肾内科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科1.8ok6ogmn2h.webp" alt="肿瘤科、泌尿外科、肾内科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科2.70atr9wcwj.webp" alt="肿瘤科、泌尿外科、肾内科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/肿瘤科、泌尿外科、肾内科3.3yexq1v0p1.webp" alt="肿瘤科、泌尿外科、肾内科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右前方诊室。

**(9) 产科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科1.7ps4t7455.webp" alt="产科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科2.6t7lvub646.webp" alt="产科2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左侧诊室。

**(10) 针灸推拿科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科1.70atr9y34k.webp" alt="针灸推拿科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科2.32igaln2hp.webp" alt="针灸推拿科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/针灸推拿科3.5j4opitydt.webp" alt="针灸推拿科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道直行，靠左侧诊室。

**(11) 消化内科、血液内科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科1.5c1gu38tt5.webp" alt="消化内科、血液内科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科2.4xv1380iy9.webp" alt="消化内科、血液内科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内科、血液内科3.86u4zvo0kl.webp" alt="消化内科、血液内科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口左前方通道直行后右转，左侧诊室。

**(12) 心血管内科、心电图、动态心电图、动态血压**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压1.wj1otxvvi.webp" alt="心血管内科、心电图、动态心电图、动态血压1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、心电图、动态心电图、动态血压2.3uvbsc65cl.webp" alt="心血管内科、心电图、动态心电图、动态血压2" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右前方诊室。

**(13) 呼吸与危重学科、风湿免疫科、老年医学科、综合内科、全科医学科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科1.et008x9g9.webp" alt="呼吸与危重学科、风湿免疫科、老年医学科、综合内科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科2.6m4e0et0kf.webp" alt="呼吸与危重学科、风湿免疫科、老年医学科、综合内科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/呼吸与危重学科、风湿免疫科、老年医学科、综合内科3.5fl2rt43yn.webp" alt="呼吸与危重学科、风湿免疫科、老年医学科、综合内科3" />

> **指引**：门诊楼正门进入后右转直行，靠左侧诊室。

**(14) 内分泌科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科1.1hspb4tssl.webp" alt="内分泌科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科2.8z70hm7j7z.webp" alt="内分泌科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/内分泌科3.7i0vfv3egs.webp" alt="内分泌科3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口右侧通道直行，靠右侧诊室。

**(15) 神经内科、神经外科、脑电图、肌电图、TCD**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD1.8dxcvben9e.webp" alt="神经内科、神经外科、脑电图、肌电图、TCD1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD2.4jolccwpch.webp" alt="神经内科、神经外科、脑电图、肌电图、TCD2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/神经内科、神经外科、脑电图、肌电图、TCD3.mk9dr8dt.webp" alt="神经内科、神经外科、脑电图、肌电图、TCD3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至四楼，四楼电梯出口左前方通道直行后右转，左侧诊室。

**(16) 检验科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科1.3uvbsca06h.webp" alt="检验科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科2.1hspb4w702.webp" alt="检验科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科3.36228bmh6j.webp" alt="检验科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科4.lw7vomijk.webp" alt="检验科4" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道直行到底右转。

**(17) 门诊抽血室**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室1.6f164zav0l.webp" alt="门诊抽血室1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室2.8z70hmatn3.webp" alt="门诊抽血室2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/门诊抽血室3.7axnkfkjgd.webp" alt="门诊抽血室3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至三楼，三楼电梯出口右侧通道右侧诊室。

**(18) 医学影像科(X光)**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）1.5triiohqqa.webp" alt="医学影像科（X光）1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）2.7axnkflvh7.webp" alt="医学影像科（X光）2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）3.3uvbscc8f3.webp" alt="医学影像科（X光）3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（X光）4.7p43bau6bu.webp" alt="医学影像科（X光）4" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至二楼，二楼电梯出口右侧通道直行到底。

**(19) 医学影像科(CT)**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（CT）1.70atra7ect.webp" alt="医学影像科（CT）1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/医学影像科（CT）2.51en0y1w13.webp" alt="医学影像科（CT）2" />

> **指引**：医院门诊楼正门进入后直行，靠左侧诊室。

**(20) 磁共振(MRI)**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）1.6m4e0ezyt8.webp" alt="磁共振（MRI）1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）2.77e1mpuf40.webp" alt="磁共振（MRI）2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）3.7w7b6qhy4k.webp" alt="磁共振（MRI）3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）4.4qrt7snj7s.webp" alt="磁共振（MRI）4" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/磁共振（MRI）5.5c1gu3hzhw.webp" alt="磁共振（MRI）5" />

> **指引**：医院门诊楼正门进入直行至后门，步出门诊楼左转进入外科楼，乘坐右手侧扶梯至二楼后左转。

**(21) 超声科(B超)**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）1.9ddg8hmwiw.webp" alt="超声科（B超）1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）2.1vz5209644.webp" alt="超声科（B超）2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）3.8adqxlr2nu.webp" alt="超声科（B超）3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科（B超）4.2yyucw4zz0.webp" alt="超声科（B超）4" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至四楼，出四楼电梯出口向右侧通道直行到底。

**(22) 挂号收费处**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处1.1sfj4ah0jj.webp" alt="挂号收费处1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处2.67xy9jters.webp" alt="挂号收费处2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处3.1lcb8uuv3t.webp" alt="挂号收费处3" />

> **指引**：医院门诊楼正门进入右侧为自助/人工挂号收费处。

**(23) 药房**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房1.5moan90pj3.webp" alt="药房1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房2.9kgo3xbq5t.webp" alt="药房2" />

> **指引**：医院门诊楼正门进入步行，直行至通道十字交叉处右转。

**(24) 客服服务中心**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/客服服务中心.6iks2pccjx.webp" alt="客服服务中心" />

> **指引**：医院门诊楼正门右手侧。

**(25) 消化内镜中心**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心1.2oc0jqv4a3.webp" alt="消化内镜中心1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心2.7ps4to8dx.webp" alt="消化内镜中心2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜中心3.26lyv5tqox.webp" alt="消化内镜中心3" />

> **指引**：门诊楼正门进入直行，乘右手侧电梯至五楼，出五楼电梯出口向右侧通道直行到底。

---

###### 二、罗湖区人民医院

**(1) 挂号收费处**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处1.51en0yag1u.webp" alt="挂号收费处1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/挂号收费处2.36228by0fs.webp" alt="挂号收费处2" />

> **指引**：医院门诊楼正门进入左手侧。

**(2) 药房**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房1.99tuas1hbi.webp" alt="药房1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/药房2.2dp6qli76s.webp" alt="药房2" />

> **指引**：医院门诊楼正门进入右手侧。

**(3) 放射影像科 (DR、CT、MRI)**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射影像科（DR、CT、MRI）1.1ziqzqb9wr.webp" alt="放射影像科（DR、CT、MRI）1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射影像科（DR、CT、MRI）2.32igam73ss.webp" alt="放射影像科（DR、CT、MRI）2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射影像科（DR、CT、MRI）3.67xy9k1iot.webp" alt="放射影像科（DR、CT、MRI）3" />

> **指引**：医院门诊楼正门进入直行右手侧。

**(4) 皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室1.8l0kqrguwj.webp" alt="皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室2.8vnejww327.webp" alt="皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室3.96a8d2bb7p.webp" alt="皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室4.6iks2pi9uq.webp" alt="皮肤科、儿科、皮肤科治疗室、呼吸内镜室、肺功能室4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达二楼，出二楼电梯口直行右转。

**(5) 消化内镜室**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜室1.491rj7yizm.webp" alt="消化内镜室1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜室2.9rjvzd6r3g.webp" alt="消化内镜室2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜室3.5q7wkz2nqq.webp" alt="消化内镜室3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/消化内镜室4.5q7wkz2npb.webp" alt="消化内镜室4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达二楼，出二楼电梯口左转直行。

**(6) 中医科、核医学科、消化内科、神经内科、风湿免疫科、肾内科、血液内科、呼吸内科、内分泌科、心内科、全科医学科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科1.13m9ka56a0.webp" alt="中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科2.67xy9k53io.webp" alt="中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科3.41yjnsdfrp.webp" alt="中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科4.7axnkg0xd2.webp" alt="中医科，核医学科，消化内科，神经内科，风湿免疫科，肾内科，血液内科，呼吸内科，内分泌科，心内科，全科医学科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达二楼，出二楼电梯口左转再左转直行。

**(7) 产科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科1.8hgyt1qoyr.webp" alt="产科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科2.175vhzz3zk.webp" alt="产科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科3.1lcb8v7ev0.webp" alt="产科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/产科4.6f164zs3wd.webp" alt="产科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达三楼，出三楼电梯口直行右转。

**(8) 口腔科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科1.5fl2rtq1x0.webp" alt="口腔科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科2.5fl2rtq1xa.webp" alt="口腔科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/口腔科3.83aj26j37z.webp" alt="口腔科3" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达三楼，出三楼电梯口左转。

**(9) 骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科2.70atrao8z0.webp" alt="骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科1" />

<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科2.70atrao8z0.webp" alt="骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科2" />

<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科3.7w7b6qxxf6.webp" alt="骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科3" />

<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科2.70atrao8z0.webp" alt="骨外科、普外科、乳腺外科、甲状腺外科、血管外科、胸外科、神经外科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达四楼，出四楼电梯口直行右转。

**(10) 功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊1.2h8sobrb5s.webp" alt="功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊2.2oc0jrdglj.webp" alt="功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊3.b9e2jznf1.webp" alt="功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊4.2ksem1kdv8.webp" alt="功能检查科（心电图、脑电图、肌电图、动态心电图、动态血压、经颅多普勒、运动平板）、麻醉门诊4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达四楼，出四楼电梯口左转直行。

**(11) 眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科1.41yjnspsnu.webp" alt="眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科2.8ok6ohocbm.webp" alt="眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科3.1vz520y4x4.webp" alt="眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科4.8vnejxahqo.webp" alt="眼科、耳鼻喉科、老年医学科、医疗美容科、临床营养科、中医内科、泌尿外科、骨伤科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达四楼，出四楼电梯口左转再左转直行。

**(12) 中医骨伤科、康复医学科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医骨伤科、康复医学科1.6iks2pxnmz.webp" alt="中医骨伤科、康复医学科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医骨伤科、康复医学科2.39lo62a60j.webp" alt="中医骨伤科、康复医学科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医骨伤科、康复医学科3.3gow1hwbgb.webp" alt="中医骨伤科、康复医学科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中医骨伤科、康复医学科4.7snp91fmxq.webp" alt="中医骨伤科、康复医学科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达五楼，出五楼电梯口直行右转。

**(13) 血液透析室**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/血液透析室1.7axnkgfh7v.webp" alt="血液透析室1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/血液透析室2.1ziqzqtek7.webp" alt="血液透析室2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/血液透析室3.1ovx6le6f2.webp" alt="血液透析室3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/血液透析室4.5fl2ru31ln.webp" alt="血液透析室4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达五楼，出五楼电梯口左转。

**(14) 超声科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科1.2a5kswa6m6.webp" alt="超声科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科2.9gx2688ow6.webp" alt="超声科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科3.67xy9kl79p.webp" alt="超声科3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/超声科4.5xb4gf5z3n.webp" alt="超声科4" />

> **指引**：医院门诊楼正门进入直行乘坐右手侧电梯到达六楼，出六楼电梯口左转再左转直行。

---

###### 三、北京大学深圳医院

**(1) 自助取号处**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/自助取号处1.96a8d2uggk.webp" alt="自助取号处1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/自助取号处2.et009yqqa.webp" alt="自助取号处2" />

> **指引**：医院门诊楼正门进入直行左手侧为自助取号处。

**(2) 妇科诊区**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科诊区1.51en0yy82a.webp" alt="妇科诊区1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/妇科诊区2.1e93dg2fk8.webp" alt="妇科诊区2" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至二楼，扶梯出口右侧。

**(4) 中西药房、妇科彩超室**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室1.7zqx4h88aj.webp" alt="中西药房、妇科彩超室1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室2.5moan9uf44.webp" alt="中西药房、妇科彩超室2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室3.1lcb8vqbrh.webp" alt="中西药房、妇科彩超室3" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/中西药房、妇科彩超室4.2dp6qm6xgw.webp" alt="中西药房、妇科彩超室4" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至二楼，扶梯出口左侧。
*注：原文编号跳过了(3)*

**(5) 心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1.8dxcvchvq1.webp" alt="心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2.5q7wkzoudn.webp" alt="心血管内科、内分泌科、风湿免疫科、肿瘤内科、肾内科、老年医学科、血液内科、操作治疗区（抽血、换药、注射、雾化）、心电图2" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口左侧。

**(6) 检验科、泌尿外科、神经内科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科1.7lkhdm2adz.webp" alt="检验科、泌尿外科、神经内科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/检验科、泌尿外科、神经内科2.3rbpunkcgb.webp" alt="检验科、泌尿外科、神经内科2" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口右侧。

**(7) 儿科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科1.3ns3wxru5p.webp" alt="儿科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科2.41yjnt0515.webp" alt="儿科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/儿科3.8hgyt2cj8e.webp" alt="儿科3" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至三楼，扶梯出口向右转再向右转，直行到达儿科诊室。

**(8) 运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1.7i0vfwah6l.webp" alt="运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2.3rbpunllzo.webp" alt="运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3.1vz52196cq.webp" alt="运动医学科、胃肠外科、心血管外科、脊柱外科、肝胆胰外科、超声介入科、显微淋巴外科、胸外科、手足与血管外科、骨关节科、乳腺甲状腺外科、神经外科、美容整形外科3" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向左转直行。

**(9) 眼科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科1.67xy9kt45l.webp" alt="眼科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/眼科2.26lyv6p0sa.webp" alt="眼科2" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至四楼，扶梯出口向右转。

**(10) 皮肤科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科1.3d5a3segw1.webp" alt="皮肤科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科2.5xb4gfefic.webp" alt="皮肤科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/皮肤科3.5xb4gfefhy.webp" alt="皮肤科3" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至四楼，从扶梯出口左前方步梯至五楼，五楼步梯出口右侧。

**(11) 综合诊区、耳鼻喉科**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科1.icly00cad.webp" alt="综合诊区、耳鼻喉科1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科2.8dxcvcmdkn.webp" alt="综合诊区、耳鼻喉科2" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/综合诊区、耳鼻喉科3.8l0kqs8izt.webp" alt="综合诊区、耳鼻喉科3" />

> **指引**：医院门诊楼正门进入直行，乘坐右边扶梯至四楼，从扶梯出口左前方步梯至五楼，五楼步梯出口左侧。

**(12) 放射科检查(DR、CT、MRI)、彩超检查**
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查1.8s3sm7valk.webp" alt="放射科检查（DR、CT、MRI）、彩超检查1" />
<img src="https://jsd.cdn.zzko.cn/gh/LZHMS/picx-images-hosting@master/Profile/DailyImage/放射科检查（DR、CT、MRI）、彩超检查2.8l0kqs955n.webp" alt="放射科检查（DR、CT、MRI）、彩超检查2" />

> **指引**：进入医院大门后向右前方直行至外科楼。