function render() {
  $ui.render({
    views: [{
      type: "view",
      views: [{
        type: "view",
        props: {
          id: 'net-speed-info'
        },
        views: [{
          type: "view",
          props: {
            id: 'wifi-up',
          },
          views: [{
            type: "image",
            props: {
              id: 'net-icon_wifi',
              src: "assets/ios-wifi_gray.png"
            },
            layout: function (make, view) {
              make.size.equalTo($size(25, 25))
            }
          }, {
            type: "label",
            props: {
              id: 'net-type_wifi',
              align: $align.left,
              text: $l10n('WIFI'),
              font: $font(15),
              textColor: $color('secondaryText')
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-icon_wifi').bottom).offset(5)

            }
          }, {
            type: "label",
            props: {
              id: 'net-speed_up-arrow',
              text: '↗︎',
              textColor: $color('red'),
              font: $font(14)
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-type_wifi').bottom).offset(5)
            }
          }, {
            type: "label",
            props: {
              id: 'net-speed_up',
              align: $align.left,
              text: '0B/s',
              font: $font(14)
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-speed_up-arrow').bottom)
            }
          }],
          layout: function (make, view) {
            make.height.equalTo(90)
            make.width.equalTo(view.super).dividedBy(2)
          }
        }, {
          type: "view",
          props: {
            id: 'cellular-dl',
          },
          views: [{
            type: "image",
            props: {
              id: 'net-icon_cellular',
              src: "assets/ios-cellular_gray.png"
            },
            layout: function (make, view) {
              make.size.equalTo($size(25, 25))
            }
          }, {
            type: "label",
            props: {
              id: 'net-type_cellular',
              align: $align.left,
              text: $l10n('CELLULAR'),
              font: $font(15),
              textColor: $color('secondaryText')
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-icon_cellular').bottom).offset(5)
            }
          }, {
            type: "label",
            props: {
              id: 'net-speed_download-arrow',
              text: '↙︎',
              textColor: $color('#1A87FC'),
              font: $font(14)
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-type_cellular').bottom).offset(5)
            }
          }, {
            type: "label",
            props: {
              id: 'net-speed_download',
              align: $align.left,
              text: '0B/s',
              font: $font(14)
            },
            layout: function (make, view) {
              make.width.equalTo(view.super)
              make.top.equalTo($('net-speed_download-arrow').bottom)
            }
          }],
          layout: function (make, view) {
            make.height.equalTo(90)
            make.left.equalTo(view.super.centerX)
            make.width.equalTo(view.super).dividedBy(2)
          }
        }],
        layout: function (make, view) {
          make.left.equalTo(10)
          make.width.equalTo(view.super).dividedBy(2).offset(-10)
          make.height.equalTo(view.super)
        },
      }, {
        type: "view",
        props: {
          id: 'net-divider',
          bgcolor: $color('gray'),
          alpha: 0.3
        },
        layout: function (make, view) {
          make.left.equalTo($('net-speed-info').right)
          make.width.equalTo(1)
          make.height.equalTo(80)
          make.top.equalTo(7.5)
        }
      }, {
        type: "view",
        props: {
          id: 'net-sys-info'
        },
        views: [{
          type: "label",
          props: {
            id: 'net-sys-ssid-title',
            text: $l10n('SSID'),
            font: $font(12),
            textColor: $color('secondaryText')
          },
          layout: function (make, view) {
            make.width.equalTo(view.super)
          }
        }, {
          type: "label",
          props: {
            id: 'net-sys-ssid',
            text: 'N/A',
            font: $font(14)
          },
          layout: function (make, view) {
            make.width.equalTo(view.super)
            make.top.equalTo($('net-sys-ssid-title').bottom).offset(5)
          }
        }, {
          type: "label",
          props: {
            id: 'net-sys-ip',
            text: 'N/A',
            font: $font(14)
          },
          layout: function (make, view) {
            make.width.equalTo(view.super)
            make.bottom.equalTo(-2)
          }
        }, {
          type: "label",
          props: {
            id: 'net-sys-ip-title',
            text: $l10n('IP'),
            font: $font(12),
            textColor: $color('secondaryText')
          },
          layout: function (make, view) {
            make.bottom.equalTo($('net-sys-ip').top).offset(-5)
            make.width.equalTo(view.super)
          }
        }],
        layout: function (make, view) {
          make.left.equalTo($('net-divider').right).offset(10)
          make.width.equalTo(view.super).dividedBy(2).offset(-10)
          make.height.equalTo(view.super)
        },
      }],
      layout: function (make, view) {
        make.center.equalTo(view.super)
        make.width.equalTo(view.super)
        make.height.equalTo(90)
      },
    }],
  })
}

module.exports = {
  render: render
}