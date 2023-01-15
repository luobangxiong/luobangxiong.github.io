// 第一个图表的js-------------
var myChart = echarts.init(document.getElementById('myBarChart'));

// 指定图表的配置项和数据
option =  {
    color: "#9B1414",
    title: {
        text: '主要慢性病PubMed中文文献数',
        subtext: '单位：篇',
        left: 'center'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    xAxis: {
        type: "category",
        data: [
            "高血压",
            "糖尿病",
            "冠心病",
            "癫痫",
            "阿尔茨海默氏症",
        ],
    },
    yAxis: {
        name:"主要慢性病PubMed中文文献数/篇",
        type: "value",
    },
    series: [
        {
            name: "主要慢性病PubMed中文文献数/篇",
            data: [
                {
                    value: 7349,
                    itemStyle: {
                        color: '#949494'
                    }
                },
                {
                    value: 7040,
                    itemStyle: {
                        color: '#949494'
                    }
                },
                {
                    value: 3970,
                    itemStyle: {
                        color: '#949494'
                    }
                },
                {
                    value: 1295,
                    itemStyle: {
                        color: '#9B1414'
                    }
                },
                {
                    value: 931,
                    itemStyle: {
                        color: '#949494'
                    }
                },

            ],
            type: "bar",
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: "#58aca9",
                },
            },
        },
    ],
};


myChart.setOption(option);


// 第一个图表的js-------------
var myChart1 = echarts.init(document.getElementById('myPieChart1'));

// 指定图表的配置项和数据
data = [{
    "value":245000000 ,
    "name": "高血压"
}, {
    "value":140000000 ,
    "name": "糖尿病"
}, {
    "value": 3186000,
    "name": "帕金森"
}, {
    "value": 9000000,
    "name": "癫痫"
}
]

for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value']
}

option = {

    color: [ '#333333','#4D4D4D','#9B1414','#969696'] ,
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    series: [{
        type: 'treemap',
        width: '80%',
        height: '100%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
            show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
                position: ['10%', '40%']
            }
        },
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                },
                borderWidth: 1,
                borderColor: '#fff',
            },

            emphasis: {
                label: {
                    show: true
                }
            }

        },
        data: data
    }]
};

myChart1.setOption(option);




// 第二个图表------------------------------------------------------------------------------------



var myChart2 = echarts.init(document.getElementById('myPieChart2'));
// 指定图表的配置项和数据


option = {
    backgroundColor: '#FFFFFF',
    barWidth: 15,
    title: {
        text: '三洲癫痫患病率中位数',
        subtext: '单位：/1000人年',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        borderColor: '#4D4D4D',
        textStyle: {
            color: '#943030',
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'PingFang SC',
        },
        backgroundColor: '#FFFFFF', //通过设置rgba调节背景颜色与透明度
        formatter: function (data) {
            return data.name + '：' + data.value; //将小数转化为百分数显示
        },
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(224, 224, 226, 1)',
                type: 'dashed',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变y轴颜色
            show: false,
        },
        axisLabel: {
            //  改变x轴字体颜色和大小
            textStyle: {
                color: 'rgba(153, 153, 153, 1)',
                fontSize: 14,
                fontWeight: 800,
            },
        },
    },
    yAxis: {
        type: 'category',
        data: ['撒哈拉以南非洲', '拉丁美洲', '亚洲'],
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            //  改变y轴颜色
            lineStyle: {
                color: '#E0E0E2',
            },
        },
        axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: '#943030',
                fontSize: 14,
                fontWeight: 500,
            },
        },
    },
    series: [
        {
            type: 'bar',
            name: '癫痫终生患病率中位数',
            barWidth: 13,
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                        position: 'insideRight', //在上方显示
                        textStyle: {
                            //数值样式
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontWeight: 600,
                        },
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#4D4D4D',
                        },
                        {
                            offset: 1,
                            color: '#4D4D4D',
                        },
                    ]),
                    barBorderRadius: 4,
                },
            },
            // 移入当前的柱状图时改变颜色
            emphasis: {
                itemStyle: {
                    color: '#943030', // 选中柱颜色
                },
            },
            data: [15/1000, 17.8/1000, 6/1000],
        },
    ],
};

myChart2.setOption(option);



//第三个图表-----------------------------------
var myChart3 = echarts.init(document.getElementById('myPieChart3'));

// 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' + params.percent + '%';
            return res;
        }
    },
    grid: {
        bottom: 70
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle:{
                fontSize:16,
                color:'#4D4D4D'
            }

        },
        data: ['认为癫痫患者可以结婚', '允许自己的孩子与癫痫患者结婚', '认为癫痫患者结婚是合适的']
    }],
    yAxis: [{
        show: false
    }],
    series: [{
        name: '受访者',
        center: [
            '23.5%',
            '50%'
        ],
        radius: [
            '30%',
            '23%'
        ],
        type: 'pie',
        color: ['#943030'],
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 94.1,
            name: '认为癫痫患者可以结婚',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                },
            }
        }, {
            value: 5.9,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#4D4D4D'
                },
                emphasis: {
                    color: '#4D4D4D'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '受访者',
        center: [
            '50.0%',
            '50%'
        ],
        radius: [
            '30%',
            '23%'
        ],
        type: 'pie',
        color: ['#943030'],
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 67.7,
            name: '受访者',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 32.3,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#4D4D4D'
                },
                emphasis: {
                    color: '#4D4D4D'
                }
            },
            hoverAnimation: false
        }]
    }, {
        name: '同级学生',
        center: [
            '76.5%',
            '50%'
        ],
        radius: [
            '30%',
            '23%'
        ],
        type: 'pie',
        color: ['#943030'],
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 72.5,
            name: '认为癫痫患者怀孕是合适的',
            label: {
                normal: {
                    formatter: '{d} %',
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#000'
                    }
                }
            }
        }, {
            value: 23.5,
            name: '',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#4D4D4D'
                },
                emphasis: {
                    color: '#4D4D4D'
                }
            },
            hoverAnimation: false
        }]
    }]
};

myChart3.setOption(option);

var myChart4 = echarts.init(document.getElementById('myPieChart4'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '癫痫患者世界分布',
        subtext: '单位：%',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    color:["rgb(155,20,20)","rgb(148,148,148)"],
    series: [
        {
            name: '癫痫患者世界分布',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 80, name: '中、低收入国家' },
                { value: 20, name: '高收入国家' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart4.setOption(option);



// 第二个图表------------------------------------------------------------------------------------



var myChart5 = echarts.init(document.getElementById('myPieChart5'));
// 指定图表的配置项和数据


var divElement = document.getElementById('viz1670934534302');
var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);
myChart5.setOption(option);



// 对echarts进行自适应的优化 -------------

//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    //myChart1.resize();若有多个图表变动，可多写
}
