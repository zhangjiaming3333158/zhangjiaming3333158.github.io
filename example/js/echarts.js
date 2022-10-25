//文章访问量图表柱状图
(function () {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".box1"));
    // 指定图表的配置项和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            1,
            0,
            0,
            0,
            [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: "item"
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: "3%",
            containLabel: true,
            show: true,
            //grid 四条边框的颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        yAxis: [
            {
                type: "category",
                data: [
                    "Hello World",
                    "我的第一篇博客文章",
                    "markdown语法",
                    "HTML内容总结",
                    "CSS知识总结",
                    "H5C3知识总结",
                    "JS基础内容总结",
                    "java基础",
                    "c基础",
                    "python基础"
                ],
                axisTick: {
                    alignWithLabel: false,
                    // 把x轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // x轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                }
            }
        ],
        xAxis: [
            {
                type: "value",
                axisTick: {
                    alignWithLabel: false,
                    // 把y轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // y轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                },
                // y轴分割线的颜色样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],
        series: [
            {
                name: "文章阅读访问量",
                type: "bar",
                barWidth: "60%",
                data: [
                    187,
                    7,
                    6,
                    6,
                    8,
                    16,
                    18,
                    4,
                    3,
                    2
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 刷新调整
    window.onresize = function () {
        myChart.resize();
    };
})();

//文章发布时间图表折线图
(function () {
    // (1)准备数据
    var data = {
        year: [
            [0, 5, 0, 0, 2, 0, 0, 0, 0],
            [5, 0, 0, 2, 0, 0, 0, 0, 0],
        ],
        // quarter: [
        //     [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        //     [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        // ],
        month: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3],
        ],
        // week: [
        //     [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        //     [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        // ]
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".box2"));
    // 2. 指定配置和数据
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            // 通过坐标轴来触发
            trigger: "axis"
        },
        legend: {
            // 距离容器10%
            right: "10%",
            // 修饰图例文字的颜色
            textStyle: {
                color: "#4c9bfd"
            }
            // 如果series 里面设置了name，此时图例组件的data可以省略
            // data: ["邮件营销", "联盟广告"]
        },
        grid: {
            top: "10%",
            left: "1%",
            right: "4%",
            bottom: "13%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "9.15",
                "9.20",
                "9.25",
                "9.30",
                "10.05",
                "10.10",
                "10.15",
                "10.20",
                "10.25"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: "value",
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                name: "前5日发布数",
                type: "line",
                stack: "总量",
                // 是否让线条圆滑显示
                smooth: true,
                data: data.year[0]
            },
            {
                name: "现5日发布数",
                type: "line",
                stack: "总量",
                smooth: true,
                data: data.year[1]
            }
        ]
    };
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
    // 4. tab切换效果制作
    // (2) 点击切换效果
    $(".sales .caption").on("click", "a", function () {
        // 此时要注意这个索引号的问题
        index = $(this).index() - 1;
        // 点击当前a 高亮显示 调用active
        $(this)
            .addClass("active").siblings("a").removeClass("active");
        // 拿到当前a 的自定义属性值
        // console.log(this.dataset.type);
        // 根据拿到的值 去找数据
        // console.log(data.year);
        // console.log(data["year"]);
        // console.log(data[this.dataset.type]);
        var arr = data[this.dataset.type];
        // console.log(arr);
        // 根据拿到的数据重新渲染 series里面的data值
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
    });
    // 5. tab栏自动切换效果
    //  开启定时器每隔3s，自动让a触发点击事件即可
    var as = $(".sales .caption a");
    var index = 0;
    var flag = 1;
    var timer = setInterval(function () {
        index = index + 1;
        console.log(index);
        if (index > 2) index = 0;
        as.eq(index).click();
    }, 2000);
    // 鼠标经过sales，关闭定时器，离开开启定时器
    $(".sales").hover(
        function () {
            clearInterval(timer);
        },
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;
                console.log(index);
                if (index > 2) index = 0;
                as.eq(index).click();
            }, 2000);
        }
    );
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//文章字数统计
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie"));
    // 2. 指定配置项和数据
    var option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                // 如果radius是百分比则必须加引号
                radius: ["10%", "60%"],
                center: ["45%", "50%"],
                roseType: "radius",
                data: [
                    { value: 367, name: "Hello World" },
                    { value: 21, name: "我的第一篇博客文章" },
                    { value: 1300, name: "markdown语法" },
                    { value: 2900, name: "HTML内容总结" },
                    { value: 4900, name: "CSS知识总结" },
                    { value: 2500, name: "H5C3知识总结" },
                    { value: 1, name: "JS基础内容总结" },
                    { value: 11000, name: "java基础" },
                    { value: 17000, name: "c基础" },
                    { value: 4500, name: "python基础" }
                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 12
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                }
            }
        ]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//文章总阅读时间统计雷达图
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".radar"));
    // 2.指定配置

    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ["50%", "10%"]
        },
        radar: {
            indicator: [
                { name: "Hello World", max: 100 },
                { name: "我的第一篇博客文章", max: 100 },
                { name: "markdown语法", max: 100 },
                { name: "HTML内容总结", max: 100 },
                { name: "CSS知识总结", max: 100 },
                { name: "H5C3知识总结", max: 100 },
                { name: "JS基础内容总结", max: 100 },
                { name: "java基础 ", max: 100 },
                { name: "c基础", max: 100 },
                { name: "python基础", max: 100 }
            ],
            // 修改雷达图的大小
            radius: "60%",
            shape: "circle",
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                // 修饰雷达图文字的颜色
                textStyle: {
                    color: "#4c9bfd"
                }
            },
            // 分割的圆圈线条的样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255, 0.5)"
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        series: [
            {
                name: "文章总阅读时间",
                type: "radar",
                // 填充区域的线条颜色
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[4, 1, 11, 24, 41, 22, 1, 96, 139, 38]],
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 让小圆点显示数据
                label: {
                    show: true,
                    fontSize: 10
                },
                // 修饰我们区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                }
            }
        ]
    };
    // 3.把配置和数据给对象
    myChart.setOption(option);
    // 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

//旭日图
(function () {
    var myChart = echarts.init(document.querySelector(".xuritu"));
    var option;
    var data = [
        {
            name: 'blog',
            children: [
                {
                    name: '前端',
                    value: 7,
                    itemStyle:{
                        color:"#006cff"
                    },
                    children: [
                        {
                            name: 'Hello World',
                            itemStyle:{
                                color:"#60cda0"
                            },
                            value: 1
                        },
                        {
                            name: '我的第一篇博客文章',
                            itemStyle:{
                                color:"#ed8884",
                            },
                            value: 1
                        },
                        {
                            name: 'markdown语法',
                            itemStyle:{
                                color:"#ff9f7f",
                            },
                            value: 1
                        },
                        {
                            name: 'HTML内容总结',
                            itemStyle:{
                                color:'blue',
                            },
                            value: 1
                        },
                        {
                            name: 'CSS知识总结',
                            itemStyle:{
                                color:'blue',
                            },
                            value: 1
                        },
                        {
                            name: 'H5C3知识总结',
                            itemStyle:{
                                color:'blue',
                            },
                            value: 1
                        },
                        {
                            name: 'JS基础内容总结',
                            itemStyle:{
                                color:'blue',
                            },
                            value: 1
                        }
                    ]
                },
                {
                    name: '后端',
                    value: 3,
                    itemStyle:{
                        color:"#0096ff",
                    },
                    children: [
                        {
                            name: 'java基础',
                            itemStyle:{
                                color:"#9fe6b8",
                            },
                            value: 1
                        },
                        {
                            name: 'c基础',
                            itemStyle:{
                                color:"#32c5e9",
                            },
                            value: 1
                        },
                        {
                            name: 'python基础',
                            itemStyle:{
                                color:"#1d9dff"
                            },
                            value: 1
                        }
                    ]
                }
            ]
        }
    ];
    option = {
        series: {
            type: 'sunburst',
            // emphasis: {
            //     focus: 'ancestor'
            // },
            data: data,
            radius: [0, '100%'],
            label: {
                rotate: 'radial'
            }
        }
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
