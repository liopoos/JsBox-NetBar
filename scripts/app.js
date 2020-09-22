const view = require('./view')

var default_conf = {
  net_type: 0,
  ip: 'N/A',
  ssid: 'N/A',
  up: '0KB/s',
  down: '0KB/s'
}

var up = 0,
  down = 0

function load() {
  view.render()
  let conf = default_conf
  conf = getNetwork(conf)
  var timer = $timer.schedule({
    interval: 1,
    handler: function () {
      getNetwork(conf)
    }
  })
}
/**
 * 获取设备网络类型
 */
function getNetwork(conf) {
  conf.net_type = $device.networkType
  if (conf.net_type == 0) {
    return
  }

  if (conf.net_type == 1) {
    conf.ssid = $device.ssid.SSID
    conf.ip = getInterface(conf.net_type)
  } else {
    conf.ssid = default_conf.ssid
  }

  var ifa_data = getIfaData(conf.net_type)

  conf.up = ifa_data.up
  conf.down = ifa_data.down
  renderData(conf)

  return conf
}

/**
 * 获取网卡数据
 */
function getIfaData(type) {
  var ifa_data = $network.ifa_data
  switch (type) {
    case 1:
      ifa_data = ifa_data.en0
      break;
    case 2:
      ifa_data = ifa_data.pdp_ip0
      break;
    default:
      ifa_data = {
        "received": 0,
        "sent": 0
      }
  }

  if (up == 0 && down == 0) {
    up = ifa_data.sent
    down = ifa_data.received
  }

  var now_speed = {
    'up': formatSpeed(ifa_data.sent - up),
    'down': formatSpeed(ifa_data.received - down)
  }

  up = ifa_data.sent
  down = ifa_data.received

  return now_speed
}

/**
 * 获取网络接口
 */
function getInterface(type) {
  var interfaces = $network.interfaces;
  switch (type) {
    case 1:
      interfaces = interfaces['en0/ipv4']
      break;
    case 2:
      interfaces = interfaces['lo0/ipv4']
      break;
    default:
      interfaces = 'N/A'
  }

  return interfaces
}

/**
 * 格式化网速
 */
function formatSpeed(text) {
  return text >= 1048576 ? (text / 1048576).toFixed(1) + "MB/s" : (text >= 1024 ? (text / 1024).toFixed(1) + "KB/s" : text + "B/s")
}

function renderData(conf) {
  $('net-speed_up').text = conf.up
  $('net-speed_download').text = conf.down
  $('net-icon_wifi').src = conf.net_type == 1 ? 'assets/ios-wifi.png' : 'assets/ios-wifi_gray.png'
  $('net-icon_cellular').src = conf.net_type == 2 ? 'assets/ios-cellular.png' : 'assets/ios-cellular_gray.png'
  // $('net-type_wifi').textColor = conf.net_type == 1 ? $color('#1A87FC') : $color('lightGray')
  // $('net-type_cellular').textColor = conf.net_type == 2 ? $color('#1A87FC') : $color('lightGray')
  $('net-sys-ssid').text = conf.ssid
  $('net-sys-ip').text = conf.ip
}

module.exports = {
  load: load
}