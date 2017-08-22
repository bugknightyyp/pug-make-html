// 百度地图API功能
var map = new BMap.Map("map-wrapper");
var point = new BMap.Point(113.948165,22.5469);
map.centerAndZoom(point, 15);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
