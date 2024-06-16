<template>
  <div class="main-content">
  </div>
</template>
 
<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import api from '@/common/api'
import utils from '@/common/utils'
import * as echarts from 'echarts';
export default {
  components: {
  },
  data(){
    return{
      devicesInfo: '',
      downRate: 0,
      upRate: 0,
      netData: {
        usedVal: 0,
        wifiName: '',
        network_provider: '',
        battery_pers: '',
        sta_count: '',
        lte_band: ''
      },
      chart: null,
      ispName: [
        {value: 1, key: 'China Mobile', name:'中国移动'},
        {value: 2, key: 'China Unicom', name:'中国联通'},
        {value: 3, key: 'China Tel', name:'中国电信'},
      ]
    }
  },
  computed: {
    option() {
      return {
        backgroundColor: '#000',
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
          }
        },
        series: [
          // left
          {
            name: 'gauge 0',
            type: 'gauge',
            min: 0,
            max: 20,
            z: 10,
            // startAngle: -30,
            // endAngle: -315,
            splitNumber: 5,
            radius: '35%',
            center: ['21%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            detail: {
              show: false
            },
            title: {
              fontSize: 12,
              fontWeight: 800,
              fontFamily: 'Arial',
              color: '#fff',
              offsetCenter: [0, '-60%']
            },
            progress: {
              show: true,
              width: 3,
              itemStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: this.upRate,
                name: '上传(Mbps)'
              }
            ]
          },
          {
            name: 'gauge 1',
            type: 'gauge',
            min: 0,
            max: 20,
            z: 10,
            // startAngle: -140,
            // endAngle: -305,
            splitNumber: 5,
            radius: '35%',
            center: ['21%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              distance: -7,
              length: 12,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisTick: {
              distance: -8,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            axisLabel: {
              distance: 14,
              fontSize: 18,
              fontWeight: 800,
              fontFamily: 'Arial',
              color: '#fff'
            },
            anchor: {},
            pointer: {
              icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
              width: 5,
              length: '40%',
              offsetCenter: [0, '-58%'],
              itemStyle: {
                color: '#f00',
                shadowColor: 'rgba(255, 0, 0)',
                shadowBlur: 5,
                shadowOffsetY: 2
              }
            },
            title: {
              color: '#fff',
              fontSize: 20,
              fontWeight: 500,
              fontFamily: 'Arial',
              offsetCenter: [0, 0]
            },
            detail: {
              show: false
            },
            data: [
              {
                value: this.upRate,
                name: `${this.upRate}Mbps`
              }
            ]
          },
          // middle
          {
            name: 'gauge 2',
            type: 'gauge',
            min: 0,
            max: 20,
            z: 10,
            startAngle: 210,
            endAngle: -30,
            splitNumber: 10,
            radius: '50%',
            center: ['50%', '50%'],
            axisLine: {
              show: true,
              lineStyle: {
                width: 0,
                color: [
                  [0.825, '#fff'],
                  [1, '#f00']
                ]
              }
            },
            splitLine: {
              distance: 20,
              length: 15,
              lineStyle: {
                color: 'auto',
                width: 4,
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 15,
                shadowOffsetY: -10
              }
            },
            axisTick: {
              distance: 20,
              length: 8,
              lineStyle: {
                color: 'auto',
                width: 2,
                shadowColor: 'rgba(255, 255, 255)',
                shadowBlur: 10,
                shadowOffsetY: -10
              }
            },
            axisLabel: {
              distance: 10,
              fontSize: 35,
              fontWeight: 800,
              fontFamily: 'Arial',
              color: '#fff'
            },
            anchor: {},
            pointer: {
              icon: 'path://M-36.5,23.9L-41,4.4c-0.1-0.4-0.4-0.7-0.7-0.7c-0.5-0.1-1.1,0.2-1.2,0.7l-4.5,19.5c0,0.1,0,0.1,0,0.2v92.3c0,0.6,0.4,1,1,1h9c0.6,0,1-0.4,1-1V24.1C-36.5,24-36.5,23.9-36.5,23.9z M-39.5,114.6h-5v-85h5V114.6z',
              width: 10,
              offsetCenter: [0, '-10%'],
              length: '75%',
              itemStyle: {
                color: '#f00',
                shadowColor: 'rgba(255, 0, 0)',
                shadowBlur: 5,
                shadowOffsetY: 3
              }
            },
            title: {
              color: '#fff',
              fontSize: 12,
              fontWeight: 800,
              fontFamily: 'Arial',
              offsetCenter: [0, '-50%']
            },
            data: [
              {
                value: this.downRate,
                name: '下载(Mbps)'
              }
            ],
            detail: {
              show: false
            }
          },
          {
            name: 'gauge 3',
            type: 'gauge',
            min: 0,
            max: 8,
            z: 10,
            splitNumber: 8,
            radius: '50%',
            axisLine: {
              lineStyle: {
                width: 14,
                color: [[1, '#000']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            title: {
              show: false
            },
            detail: {
              formatter: '{a|{value}}{b|Mbps}',
              rich: {
                a: {
                  fontSize: 40,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  color: '#fff',
                  align: 'center',
                  padding: [0, 5, 0, 0]
                },
                b: {
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  color: '#fff',
                  padding: [0, 0, 20, 0]
                }
              }
            },
            // value is speed
            data: [
              {
                value: this.downRate,
                name: ''
              }
            ]
          },
          // right
          {
            name: 'gauge 4',
            type: 'gauge',
            min: 0,
            max: 8,
            startAngle: 135,
            endAngle: -150,
            splitNumber: 8,
            radius: '35%',
            center: ['79%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            title: {},
            detail: {
              offsetCenter: [0, '-10%'],
              formatter: (val) => {
                const provider = this.ispName.find(item=>item.value===val)
                return provider && provider.name
              },
              rich: {
                a: {
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                },
                b: {
                  fontWeight: 600,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                }
              }
            },
            progress: {
              show: true,
              width: 3,
              itemStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: this.netData.network_provider,
                name: ''
              },

            ]
          },
          {
            name: 'gauge 5',
            type: 'gauge',
            min: 0,
            max: 8,
            startAngle: 135,
            endAngle: -150,
            splitNumber: 8,
            radius: '35%',
            center: ['79%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            title: {},
            detail: {
              offsetCenter: ['-15%', '15%'],
              formatter: '{a|电池电量} {b| {value}%}',
              rich: {
                a: {
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                },
                b: {
                  fontWeight: 600,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                }
              }
            },
            progress: {
              show: true,
              width: 3,
              itemStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: this.netData.battery_pers,
                name: ''
              },

            ]
          },
          {
            name: 'gauge 6',
            type: 'gauge',
            min: 0,
            max: 8,
            startAngle: 135,
            endAngle: -150,
            splitNumber: 8,
            radius: '35%',
            center: ['79%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            title: {},
            detail: {
              offsetCenter: ['-15%', '30%'],
              formatter: '{a|接入设备} {b| {value}}',
              rich: {
                a: {
                  fontSize: 14,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                },
                b: {
                  fontWeight: 600,
                  fontFamily: 'Arial',
                  lineHeight: 22,
                  color: '#fff',
                  align: 'left'
                }
              }
            },
            progress: {
              show: true,
              width: 3,
              itemStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: this.netData.sta_count,
                name: ''
              },

            ]
          },
          {
            name: 'gauge 7',
            type: 'gauge',
            min: 0,
            max: 8,
            startAngle: 135,
            endAngle: -150,
            splitNumber: 8,
            radius: '35%',
            center: ['79%', '55%'],
            axisLine: {
              lineStyle: {
                color: [[1, '#AE96A6']]
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            anchor: {},
            pointer: {
              show: false
            },
            title: {},
            detail: {
              offsetCenter: ['-10%', '45%'],
              fontSize: 14,
              fontWeight: 800,
              fontFamily: 'Arial',
              lineHeight: 22,
              color: '#fff',
              align: 'left',
              formatter: (value) => {
                return `频段  ${this.netData.lte_band}`
              },
            },
            progress: {
              show: true,
              width: 3,
              itemStyle: {
                color: '#fff'
              }
            },
            data: [
              {
                value: this.netData.lte_band,
                name: ''
              },

            ]
          },
          {
            name: 'gauge 8',
            type: 'gauge',
            min: 0,
            max: 350,
            startAngle: 125,
            endAngle: 55,
            splitNumber: 2,
            radius: '34%',
            center: ['79%', '55.3%'],
            axisLine: {
              lineStyle: {
                width: 9,
                color: [
                  [0.15, '#f00'],
                  [1, 'rgba(255, 0, 0, 0)']
                ]
              }
            },
            splitLine: {
              distance: -14,
              length: 16,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisTick: {
              distance: -14,
              length: 10,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            axisLabel: {
              distance: 12,
              fontSize: 18,
              fontWeight: 800,
              fontFamily: 'Arial',
              color: '#fff',
              formatter: function (value) {
                if (value === 0.5) {
                  return '2/4';
                }
                if (value === 1) {
                  return '4/4';
                }
                return value + '';
              }
            },
            progress: {
              show: true,
              width: 5,
              itemStyle: {
                color: '#fff'
              }
            },
            anchor: {
              show: true,
              itemStyle: {},
              offsetCenter: ['-22%', '-57%'],
              size: 18,
              icon: 'path://M1.11979167,1.11111112 C1.11979167,0.497461393 1.61725306,0 2.23090279,0 L12.2309028,0 C12.8445525,1.43824153e-08 13.3420139,0.497461403 13.3420139,1.11111112 L13.3420139,10 L15.5642361,10 C16.7915356,10 17.7864583,10.9949228 17.7864583,12.2222222 L17.7864583,16.6666667 C17.7865523,17.28025 18.2839861,17.7776077 18.8975694,17.7776077 C19.5111527,17.7776077 20.0085866,17.28025 20.0086805,16.6666667 L20.0086805,8.88888888 L17.7864583,8.88888888 C17.1728086,8.88888888 16.6753472,8.3914275 16.6753472,7.77777779 L16.6753472,3.79333333 L15.6197917,2.73777777 C15.1859413,2.30392741 15.1859413,1.60051702 15.6197917,1.16666667 L15.6197917,1.16666667 C16.053642,0.732816318 16.7570524,0.732816318 17.1909028,1.16666667 L21.9053472,5.88111112 C22.1140468,6.08922811 22.2312072,6.37193273 22.2309028,6.66666667 L22.2309028,16.6666667 C22.2309028,18.5076158 20.7385186,20 18.8975695,20 C17.0566203,20 15.5642361,18.5076158 15.5642361,16.6666667 L15.5642361,12.2222222 L13.3420139,12.2222222 L13.3420139,17.7777778 L13.3420139,17.7777778 C13.9556636,17.7777778 14.453125,18.2752392 14.453125,18.8888889 L14.453125,18.8888889 C14.453125,19.5025386 13.9556636,20 13.3420139,20 L1.11979165,20 C0.506141934,20 0.00868054688,19.5025386 0.00868054687,18.8888889 L0.00868054687,18.8888889 C0.00868054688,18.2752392 0.506141934,17.7777778 1.11979165,17.7777778 L1.11979167,17.7777778 L1.11979167,1.11111112 Z M3.34201388,2.22222221 L3.34201388,8.88888888 L11.1197917,8.88888888 L11.1197917,2.22222221 L3.34201388,2.22222221 Z'
            },
            pointer: {
              show: false
            },
            title: {},
            detail: {
              offsetCenter: ['10%', '-56%'],
              formatter: '{a|{value}}{b| GB}',
              rich: {
                a: {
                  fontSize: 15,
                  fontWeight: 800,
                  fontFamily: 'Arial',
                  color: '#fff'
                },
                b: {
                  fontWeight: 600,
                  fontFamily: 'Arial',
                  color: '#fff'
                }
              }
            },
            data: [
              {
                value: this.netData.usedVal,
                name: ''
              }
            ]
          },
        ]
      }
    }
  },
  created(){
    this.devicesInfo = navigator.userAgent.split(';').filter(item=>item.includes('Build'));
    this.devicesInfo = (this.devicesInfo.length&&this.devicesInfo[0].split(' ')[1])||'我是有底线的';
    this.getStatusData()
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(document.querySelector('.main-content'), null, {renderer: 'svg'});
    // 绘制图表
    this.chart.setOption(this.option);
  },
  methods: {
    getStatusData() {
      setInterval(() => {
        let params = {
          'multi_data': 1,
          'cmd': 'modem_main_state,pin_status,blc_wan_mode,blc_wan_auto_mode,loginfo,fota_new_version_state,fota_current_upgrade_state,fota_upgrade_selector,network_provider_spn,network_provider,is_mandatory,sta_count,m_sta_count,signalbar,network_type,sub_network_type,ppp_status,internet_status,EX_SSID1,sta_ip_status,EX_wifi_profile,m_ssid_enable,wifi_cur_state,SSID1,simcard_roam,lan_ipaddr,battery_charging,battery_vol_percent,battery_pers,spn_name_data,spn_b1_flag,spn_b2_flag,realtime_tx_bytes,realtime_rx_bytes,realtime_time,realtime_tx_thrpt,realtime_rx_thrpt,monthly_rx_bytes,monthly_tx_bytes,traffic_alined_delta,monthly_time,date_month,data_volume_limit_switch,data_volume_limit_size,data_volume_alert_percent,data_volume_limit_unit,roam_setting_option,upg_roam_switch,fota_package_already_download,ssid,show_ssid_on_lcd,dial_mode,ethwan_mode,default_wan_name,vpn_state,connect_status,sms_received_flag,sts_received_flag,sms_unread_num',
          '_': new Date().getTime()
        }
        api.getStatusData(params).then(res => {
          if (!res.loginfo) {
            api.loginSys()
          }
          this.downRate = utils.transUnit(res.realtime_rx_thrpt)
          this.upRate = utils.transUnit(res.realtime_tx_thrpt)
          this.netData.usedVal = ((Number(res.monthly_rx_bytes)+Number(res.monthly_tx_bytes))/1024/1024/1024).toFixed(2)
          this.netData.wifiName = res.SSID1||''
          const provider = this.ispName.find(item=>item.key===res.network_provider)
          this.netData.network_provider = provider && provider.value||''
          this.netData.battery_pers = (res.battery_pers/4)*100||0
          this.netData.sta_count = res.sta_count||0
          this.chart.setOption(this.option);
        })
        params = {
          'cmd': 'GET_RESIDE_BAND',
          '_': new Date().getTime()
        } 
        api.getLteBand(params).then(res => {
          this.netData.lte_band = res.result||''
        })
      }, 1000)
    }
  }
}
</script>

<style lang="less">
  .main-content{
    width: 100%;
    height: 100vh;
  }
</style>
