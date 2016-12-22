var log = function() {
    console.log.apply(console, arguments)
}

// handlebars
// var template = window['tempHtml']["person"],
// html = template({"firstname": "熊", "lastname": "猫"});
// $('#person').html(html)


// 气泡图 bubble
var bubbleData = [{
    'class': '2048',
    'shuju': [
        [44056, 81.8, 23968973, 'Australia', 2015],
        [43294, 81.7, 35939927, 'Canada', 2015],
        [13334, 76.9, 1376048943, 'China', 2015],
        [21291, 78.5, 11389562, 'Cuba', 2015],
        [38923, 80.8, 5503457, 'Finland', 2015],
        [37599, 81.9, 64395345, 'France', 2015],
        [44053, 81.1, 80688545, 'Germany', 2015],
        [42182, 82.8, 329425, 'Iceland', 2015],
        [5903, 66.8, 1311050527, 'India', 2015],
        [36162, 83.5, 126573481, 'Japan', 2015],
        [1390, 71.4, 25155317, 'North Korea', 2015],
        [34644, 80.7, 50293439, 'South Korea', 2015],
        [34186, 80.6, 4528526, 'New Zealand', 2015],
        [64304, 81.6, 5210967, 'Norway', 2015],
        [24787, 77.3, 38611794, 'Poland', 2015],
        [23038, 73.13, 143456918, 'Russia', 2015],
        [19360, 76.5, 78665830, 'Turkey', 2015],
        [38225, 81.4, 64715810, 'United Kingdom', 2015],
        [53354, 79.1, 321773631, 'United States', 2015]
    ],
}, {
    'class': '2012',
    'shuju': [
        [28604, 77, 17096869, 'Australia', 1990],
        [31163, 77.4, 27662440, 'Canada', 1990],
        [1516, 68, 1154605773, 'China', 1990],
        [13670, 74.7, 10582082, 'Cuba', 1990],
        [28599, 75, 4986705, 'Finland', 1990],
        [29476, 77.1, 56943299, 'France', 1990],
        [31476, 75.4, 78958237, 'Germany', 1990],
        [28666, 78.1, 254830, 'Iceland', 1990],
        [1777, 57.7, 870601776, 'India', 1990],
        [29550, 79.1, 122249285, 'Japan', 1990],
        [2076, 67.9, 20194354, 'North Korea', 1990],
        [12087, 72, 42972254, 'South Korea', 1990],
        [24021, 75.4, 3397534, 'New Zealand', 1990],
        [43296, 76.8, 4240375, 'Norway', 1990],
        [10088, 70.8, 38195258, 'Poland', 1990],
        [19349, 69.6, 147568552, 'Russia', 1990],
        [10670, 67.3, 53994605, 'Turkey', 1990],
        [26424, 75.7, 57110117, 'United Kingdom', 1990],
        [37062, 75.4, 252847810, 'United States', 1990]
    ],
}]
var __initBubble__ = function(title, Data, Dom) {
    var list = []
    var className = []
    var divide = 500 //气泡大小倍数, 若无倍数 则除以 1
    for (let i of Data) {
        let e = {
            name: i.class,
            data: i.shuju,
            type: 'scatter',
            symbolSize: function(data) {
                return Math.sqrt(data[2]) / divide;
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function(param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
        }
        list.push(e)
        className.push(i.class)
    }
    var option = {
            backgroundColor: 'transparent',
            title: {
                text: title //标题
            },
            legend: {
                right: 10,
                data: className //组名
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: list
        }
        // 使用刚指定的配置项和数据显示图表。
    echarts.init(Dom).setOption(option)
}

// 折线图 line - xAxis
var lineData = [{
    name: '邮件营销',
    type: 'line',
    data: [120, 132, 101, 134, 90, 230, 210]
}, {
    name: '搜索引擎',
    type: 'line',
    data: [820, 932, 901, 934, 1290, 1330, 1320]
}]
var __initLine__ = function(title, Data, Dom) {
    var xAxis = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    var className = []
    for (let i of Data) {
        className.push(i.name)
    }
    var option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: className
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis
        },
        yAxis: {
            type: 'value'
        },
        series: Data
    }
    echarts.init(Dom).setOption(option)
}

// 柱形图 bar
var barData = [{
    name: '直接访问',
    type: 'bar',
    barWidth: '60%', //不必须
    data: [10, 52, 200, 334, 390, 330, 220]
}]
var __initBar__ = function(title, Data, Dom) {
    var xAxis = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    var className = []
    for (let i of Data) {
        className.push(i.name)
    }
    var option = {
        color: ['#000'],
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // legend: {
        //     data: className
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: xAxis,
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: Data
    }
    echarts.init(Dom).setOption(option)
}

// 饼图 pie
var pieData = [{
        value: 335,
        name: '直接访问'
    }, {
        value: 310,
        name: '邮件营销'
    }, {
        value: 234,
        name: '联盟广告'
    }, {
        value: 135,
        name: '视频广告'
    }, {
        value: 1548,
        name: '搜索引擎'
    }]
var __initPie__ = function(title, Data, Dom) {
    option = {
        title: {
            text: title,
        },
        tooltip: {},
        series: [{
            name: 'pie',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color: '#235894'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#235894'
                    }
                }
            },
            data: Data,
            itemStyle: {
                normal: {
                    opacity: 0.7,
                    color: {
                        image: piePatternImg, // img.js文件
                        repeat: 'repeat'
                    },
                    borderWidth: 3,
                    borderColor: '#235894'
                }
            }
        }]
    };
    echarts.init(Dom).setOption(option)
}

// 雷达图 radar
var radarData = [{
    value: [4300, 10000, 28000, 35000, 50000, 19000],
    name: '预算分配（Allocated Budget）'
    }, {
    value: [5000, 14000, 28000, 31000, 42000, 21000],
    name: '实际开销（Actual Spending）'
    }]
var __initRadar__ = function(title, Data, Dom) {
    var className = []
    for (let i of radarData) {
        className.push(i.name)
    }
    var indicator = [{
        name: '销售（sales）',
        max: 6500
        }, {
        name: '管理（Administration）',
        max: 16000
        }, {
        name: '信息技术（Information Techology）',
        max: 30000
        }, {
        name: '客服（Customer Support）',
        max: 38000
        }, {
        name: '研发（Development）',
        max: 52000
        }, {
        name: '市场（Marketing）',
        max: 25000
        }]
    var option = {
        title: {
            text: title
        },
        tooltip: {},
        legend: {
            data: className
        },
        radar: {
            // shape: 'circle', //圆
            indicator: indicator
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}}, //填充色
            data: radarData
        }]
    };
    echarts.init(Dom).setOption(option)
}

// funnel 漏斗图
var option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        }
    ]
};
echarts.init($('#id-funnel')[0]).setOption(option)

var __init__ = function() {
        __initBar__('Echo柱形图', barData, $('#id-bar')[0])
        __initBubble__('疾风之刃气泡图', bubbleData, $('#id-bubble')[0])
        __initPie__('饼图', pieData, $('#id-pie')[0])
        __initLine__('折线图堆叠', lineData, $('#id-line')[0])
        __initRadar__('阿姆斯特朗回旋踢', radarData, $('#id-radar')[0])
    }
__init__()