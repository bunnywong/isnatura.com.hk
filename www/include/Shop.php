<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="<?php iszh('../'); ?>include/shop/css/main.css" rel="stylesheet" type="text/css" />
<style>
#haritaMain{border:1px solid;}
	#tbl_shop, #map_div{margin:50px auto 0 auto; width:800px;}
	#tbl_shop{width:auto;}
	#tbl_shop thead{background-color:#f1f1f1; font-weight:bold; text-align:center;}
	#tbl_shop tbody tr{cursor:pointer;}
	#tbl_shop td{border:1px solid lightgray; font-size:15px; padding:20px;}
	#tbl_shop td:first-child{width:25%;}
	#tbl_shop td:last-child{width:20%;}
	#tbl_shop tbody tr:hover{background:lavender;}
	
	#div_ajax{text-align:center; margin:20px;}
</style>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>        
<script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
<script type="text/javascript" src="<?php iszh('../'); ?>include/shop/gmap3.js"></script>
<script type="text/javascript" src="<?php iszh('../'); ?>include/shop/data.js"></script>
<script type="text/javascript">
	
      var mapMenuOpen = true;
	  
      var shadow = new google.maps.MarkerImage(
        'http://www.isnatura.com.hk/include/shop/css/images/marker-images/image.png',
        new google.maps.Size(87,50),
        new google.maps.Point(0,0),
        new google.maps.Point(30,50)
      );
      
      function mapMenuClose() {
        if (!mapMenuOpen) {
        $('#haritaPopUp').css('display', 'none');
          mapMenuOpen = true;	
        }
      }


      $(function () {
	
        // map initialisation
        $('#anaharita').gmap3({
          map:{
            options: {
              center: [22.351831, 114.145530],
              zoom: 11,
              panControl: true,
              overviewMapControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              zoomControl: true,
//              maxZoom: 16,
//              minZoom: 9
            }
          }
        });
        
        $('#anaharita').gmap3({
          marker:{
            values: list, // from js/data.js
            
            // single marker options
            options: {
              draggable: false,
              shadow: shadow
            },
            // single marker events
            events: {
              mouseover: function (marker, event, context) {
                mapMenuOpen = true;
                var map = $(this).gmap3('get');
                var scale = Math.pow(2, map.getZoom());
                var nw = new google.maps.LatLng(
                map.getBounds().getNorthEast().lat(), map.getBounds().getSouthWest().lng());
                var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
                var worldCoordinate = map.getProjection().fromLatLngToPoint(marker.getPosition());
                var pixelOffset = new google.maps.Point(Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale), Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale));
                var mapposition = $("#anaharita").position();
                
                if (context.data.type != "merkez") {
                  var icerik = "<div class='left'><div class='magazaadi' id='magazaadi'> " + context.data.adi + "</div><div class='magazaadres' id='magazaadres'> " + context.data.address + "</div><div class='magazabilgi' id='magazabilgi'>電話：" + context.data.bilgi + "</div></div><div class='right'><div class='urunlogo' onClick='CreatePresentation("+context.data.brosurID+",1,2);'> <img id='magazabrosur' src='"+context.data.brosur+"' width='100' height='141'></div></div>";
                  
                  $(".accordion").html(icerik);
                  
                  magazalogopath = "logo/";
                  magazabrosurpath = "";
/* Ballboon */
                  $("#haritaPopUp").css('display', 'block');
				/* Last digi fit for drupal(org:+15) */
				  $("#haritaPopUp").css('left', (pixelOffset.x + mapposition.left + 70 + 'px'));	 
				  // $("#haritaPopUp").css({'left':'150px', 'top':'150px'});
				  
				/* Last digi fit for drupal(org:-62) /// */
                $("#haritaPopUp").css('top', (pixelOffset.y + mapposition.top - 0 + 'px'));
                  
                }
              },
              mouseout: function () {
                mapMenuOpen = false;
                var t = setTimeout("mapMenuClose()", 500)
              }
            },
            
            // cluster definition
            cluster:{
              radius: 100,
              
              // This style will be used for clusters with more than 0 markers
              0: {
                content: '<div class="cluster cluster-1">CLUSTER_COUNT</div>',
                width: 50,
                height: 50
              },
              // This style will be used for clusters with more than 6 markers
              6: {
                content: '<div class="cluster cluster-2">CLUSTER_COUNT</div>',
                width: 70,
                height: 70
              },
              // This style will be used for clusters with more than 7 markers
              7: {
                content: '<div class="cluster cluster-3">CLUSTER_COUNT</div>',
                width: 90,
                height: 90
              },
              events: {
                mouseover: function (cluster, event, context) {
                  var icerik = "";
                  magazalogopath = "logo/";
                  magazabrosurpath = "";
                  
                  // If more than 7 markers, don't display the panel
                  if(context.data.markers.length > 7 ){
                    return;
                  }
                  for (i = 0; i < context.data.markers.length; i++) {
                    icerik += "<div class='accordionButton'>" + context.data.markers[i].data.adi + "</div><div class='accordionContent'><div class='left'><div class='magazaadres' id='magazaadres'> " + context.data.markers[i].data.address + "</div><div class='magazabilgi' id='magazabilgi'>電話：" + context.data.markers[i].data.bilgi + "</div></div><div class='right'><div class='urunlogo' onClick='CreatePresentation("+context.data.markers[i].data.brosurID+",1,2);'> <img id='magazabrosur' src='"+context.data.markers[i].data.brosur+"' width='100' height='141'></div></div></div>";
                  }
                  
                  $(".accordion").html(icerik);
                  $("#haritaPopUp").css('display', 'block');
				  
/* Big balloon */
				/* CSS.Left Ctrl */
                  $("#haritaPopUp").css('left', ($(cluster.main.getDOMElement()).offset().left + 10 + ($(cluster.main.getDOMElement()).width()/2)-150 +'px'));	// Last digi fit for drupal

				/* CSS.Top Ctrl */				
				var adj_top = 130;			// Localhost
				if(!isLH()) adj_top = 140;	// Server
				$("#haritaPopUp").css('top', ($(cluster.main.getDOMElement()).offset().top -30+ ($(cluster.main.getDOMElement()).height()/2)- adj_top +'px'));	// Last digi fit for drupal
                  
                  $(cluster.main.getDOMElement()).css('border', '0px solid #FF0000');
                  
                  $('.accordionButton').click(function () {
                    $('.accordionButton').removeClass('on');
                    $('.accordionContent').slideUp('normal');
                    if ($(this).next().is(':hidden')) {
                      $(this).addClass('on'); 
                      $(this).next().slideDown('normal');
                    }
                  });
                  
                  $('.accordionContent').hide();
                },
                mouseout: function (cluster, event) {
                  mapMenuOpen = false;
                  var t = setTimeout("mapMenuClose()", 500)
                },
                click: function (cluster, event, context){
                  var map = $(this).gmap3('get');
                  mapMenuOpen = false;
                  var t = setTimeout("mapMenuClose()", 100)				
                  map.setCenter(context.data.latLng);
                  map.setZoom(map.getZoom() + 1);
                }
              }
            }
          }
        });

        $("#haritaPopUp").mouseover(function() {
          mapMenuOpen = true;
          $("#haritaPopUp").css('display', 'block');
        });
        
        $("#haritaPopUp").mouseout(function() {
          $('#haritaPopUp').css('display', 'none');
        });
        
      }); // end of $(function(){
        
        
    </script>
    
<div class="page" id="shop">
	
    <div id="haritaPopUp">
      <div class="arrow"></div>
      <div class="haritaWrapper">
        <div class="top"></div>
        <div class="content">
          <div class="container">
            <div class="accordion"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="haritaMain">
      <div id="haritaSehir">I.S. Natura point of sale</div>
      <div id="anaharita" class="anaharita"> </div>
    </div>


	<div id="map_div">
<?php
//	if($_SERVER["SERVER_NAME"] == 'localhost') echo'<iframe src="https://mapsengine.google.com/map/embed?mid=ztEeCPxWaqhs.kHrQarYsoppQ" width="800" height="400"></iframe>';
?>		
	</div>
	
	<table id="tbl_shop">
		<thead>
		<tr>
			<td>商店名稱</td>
			<td>地址</td>
			<td>電話</td>	
		</tr>
		</thead>
		<tbody>
			
		</tbody>
	</table>
	
	<div id="div_ajax"><img src="<?php iszh('../'); ?>include/img/ajax-loader.gif" id=""></div>
</div>

<script>
	function click_shop(){
	$('table tr').click(function(e){
		var this_array = $(this).index();
		var lat = list[this_array]['lat'];
		var lng = list[this_array]['lng'];

		center2top(lat, lng);
		jQuery('#scroll2top').trigger('click');	// Scroll to top
	});
		

	}// !click_shop()

	function center2top(lat, lng){
		$('#anaharita').gmap3({
			map:{
				options: {
					zoom: 18,
					center: [lat , lng]
				}
			}
		});
	}// !center2top()
	
	/*	Panel
	--------------------	*/
 	var str = '';
	for (var i=0; i < list.length; i++){
		str += '<tr>';
		str += '<td>' + list[i]['data']['adi']+'</td>';		// Shop name
		str += '<td>' + list[i]['data']['address']+'</td>';	// Shop address
		str += '<td>' + list[i]['data']['bilgi']+'</td>';	// Shop tel
		str += '</tr>';
	} 
	
	$('tbody').append(str);
	$('#div_ajax').fadeOut();
	click_shop();	
</script>
<?php
// https://developers.google.com/maps/documentation/javascript/examples/
// http://itouchmap.com/latlong.html
?>	