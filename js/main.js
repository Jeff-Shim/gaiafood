window.onload = loadScript;

/**********************
 * Google Maps Scripts *
 ***********************/
var currentLocation = null;
var lastmarkers = [];
var infos = [];
// global variable (currently open infowindow)
function initialize() {
	var myLatlng = new google.maps.LatLng(37.5637, 126.9365037);
	var initialLocation;
	var mapOptions = {
		zoom : 11,
		center : myLatlng,
		disableDefaultUI : true
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	// attach a listener to the map idle event to make it execute a function called showMarkers() when the map stops panning.

	(function() {/*
		 OverlappingMarkerSpiderfier
		 https://github.com/jawj/OverlappingMarkerSpiderfier
		 Copyright (c) 2011 - 2012 George MacKerron
		 Released under the MIT licence: http://opensource.org/licenses/mit-license
		 Note: The Google Maps API v3 must be included *before* this code
		 */
		var h = !0, u = null, v = !1;
		(function() {
			var A, B = {}.hasOwnProperty, C = [].slice;
			if ((( A = this.google) != u ? A.maps :
				void 0) != u)
				this.OverlappingMarkerSpiderfier = function() {
					function w(b, d) {
						var a, g, f, e, c = this;
						this.map = b;
						d == u && ( d = {});
						for (a in d)B.call(d, a) && ( g = d[a], this[a] = g);
						this.e = new this.constructor.g(this.map);
						this.n();
						this.b = {};
						e = ["click", "zoom_changed", "maptypeid_changed"];
						g = 0;
						for ( f = e.length; g < f; g++)
							a = e[g], p.addListener(this.map, a, function() {
								return c.unspiderfy();
							});
					}

					var p, s, t, q, k, c, y, z;
					c = w.prototype;
					z = [w, c];
					q = 0;
					for ( k = z.length; q < k; q++)
						t = z[q], t.VERSION = "0.3.3";
					s = google.maps;
					p = s.event;
					k = s.MapTypeId;
					y = 2 * Math.PI;
					c.keepSpiderfied = v;
					c.markersWontHide = v;
					c.markersWontMove = v;
					c.nearbyDistance = 20;
					c.circleSpiralSwitchover = 9;
					c.circleFootSeparation = 23;
					c.circleStartAngle = y / 12;
					c.spiralFootSeparation = 26;
					c.spiralLengthStart = 11;
					c.spiralLengthFactor = 4;
					c.spiderfiedZIndex = 1E3;
					c.usualLegZIndex = 10;
					c.highlightedLegZIndex = 20;
					c.legWeight = 1.5;
					c.legColors = {
						usual : {},
						highlighted : {}
					};
					q = c.legColors.usual;
					t = c.legColors.highlighted;
					q[k.HYBRID] = q[k.SATELLITE] = "#fff";
					t[k.HYBRID] = t[k.SATELLITE] = "#f00";
					q[k.TERRAIN] = q[k.ROADMAP] = "#444";
					t[k.TERRAIN] = t[k.ROADMAP] = "#f00";
					c.n = function() {
						this.a = [];
						this.j = [];
					};
					c.addMarker = function(b) {
						var d, a = this;
						if (b._oms != u)
							return this;
						b._oms = h;
						d = [p.addListener(b, "click", function(d) {
							return a.F(b, d);
						})];
						this.markersWontHide || d.push(p.addListener(b, "visible_changed", function() {
							return a.o(b, v);
						}));
						this.markersWontMove || d.push(p.addListener(b, "position_changed", function() {
							return a.o(b, h);
						}));
						this.j.push(d);
						this.a.push(b);
						return this;
					};
					c.o = function(b, d) {
						if (b._omsData != u && (d || !b.getVisible()) && !(this.s != u || this.t != u))
							return this.unspiderfy( d ? b : u);
					};
					c.getMarkers = function() {
						return this.a.slice(0);
					};
					c.removeMarker = function(b) {
						var d, a, g, f, e;
						b._omsData != u && this.unspiderfy();
						d = this.m(this.a, b);
						if (0 > d)
							return this;
						g = this.j.splice(d,1)[0];
						f = 0;
						for ( e = g.length; f < e; f++)
							a = g[f], p.removeListener(a);
						delete b._oms;
						this.a.splice(d, 1);
						return this;
					};
					c.clearMarkers = function() {
						var b, d, a, g, f, e, c, m;
						this.unspiderfy();
						m = this.a;
						b = g = 0;
						for ( e = m.length; g < e; b = ++g) {
							a = m[b];
							d = this.j[b];
							f = 0;
							for ( c = d.length; f < c; f++)
								b = d[f], p.removeListener(b);
							delete a._oms;
						}
						this.n();
						return this;
					};
					c.addListener = function(b, d) {
						var a, g;
						(( g = (a=this.b)[b]) != u ? g : a[b] = []).push(d);
						return this;
					};
					c.removeListener = function(b, d) {
						var a;
						a = this.m(this.b[b], d);
						0 > a || this.b[b].splice(a, 1);
						return this;
					};
					c.clearListeners = function(b) {
						this.b[b] = [];
						return this;
					};
					c.trigger = function() {
						var b, d, a, g, f, e;
						d = arguments[0];
						b = 2 <= arguments.length ? C.call(arguments, 1) : [];
						d = ( a = this.b[d]) != u ? a : [];
						e = [];
						g = 0;
						for ( f = d.length; g < f; g++)
							a = d[g], e.push(a.apply(u, b));
						return e;
					};
					c.u = function(b, d) {
						var a, g, f, e, c;
						f = this.circleFootSeparation * (2 + b) / y;
						g = y / b;
						c = [];
						for ( a = e = 0; 0 <= b ? e < b : e > b; a = 0 <= b ? ++e : --e)
							a = this.circleStartAngle + a * g, c.push(new s.Point(d.x + f * Math.cos(a), d.y + f * Math.sin(a)));
						return c;
					};
					c.v = function(b, d) {
						var a, g, f, e, c;
						f = this.spiralLengthStart;
						a = 0;
						c = [];
						for ( g = e = 0; 0 <= b ? e < b : e > b; g = 0 <= b ? ++e : --e)
							a += this.spiralFootSeparation / f + 5E-4 * g, g = new s.Point(d.x + f * Math.cos(a), d.y + f * Math.sin(a)), f += y * this.spiralLengthFactor / a, c.push(g);
						return c;
					};
					c.F = function(b, d) {
						var a, g, f, e, c, m, l, x, n;
						e = b._omsData != u;
						(!e || !this.keepSpiderfied) && this.unspiderfy();
						if (e || this.map.getStreetView().getVisible() || "GoogleEarthAPI" === this.map.getMapTypeId())
							return this.trigger("click", b, d);
						e = [];
						c = [];
						a = this.nearbyDistance;
						m = a * a;
						f = this.c(b.position);
						n = this.a;
						l = 0;
						for ( x = n.length; l < x; l++)
							a = n[l], a.map != u && a.getVisible() && ( g = this.c(a.position), this.f(g, f) < m ? e.push({
								A : a,
								p : g
							}) : c.push(a));
						return 1 === e.length ? this.trigger("click", b, d) : this.G(e, c);
					};
					c.markersNearMarker = function(b, d) {
						var a, g, f, e, c, m, l, x, n, p;
						d == u && ( d = v);
						if (this.e.getProjection() == u)
							throw "Must wait for 'idle' event on map before calling markersNearMarker";
						a = this.nearbyDistance;
						c = a * a;
						f = this.c(b.position);
						e = [];
						x = this.a;
						m = 0;
						for ( l = x.length; m < l; m++)
							if ( a = x[m], !(a === b || a.map == u || !a.getVisible()))
								if ( g = this.c(( n = ( p = a._omsData) != u ? p.l :
									void 0) != u ? n : a.position), this.f(g, f) < c && (e.push(a), d))
									break;
						return e;
					};
					c.markersNearAnyOtherMarker = function() {
						var b, d, a, g, c, e, r, m, l, p, n, k;
						if (this.e.getProjection() == u)
							throw "Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";
						e = this.nearbyDistance;
						b = e * e;
						g = this.a;
						e = [];
						n = 0;
						for ( a = g.length; n < a; n++)
							d = g[n], e.push({
								q : this.c(( r = ( l = d._omsData) != u ? l.l :
								void 0) != u ? r : d.position),
								d : v
							});
						n = this.a;
						d = r = 0;
						for ( l = n.length; r < l; d = ++r)
							if ( a = n[d], a.map != u && a.getVisible() && ( g = e[d], !g.d)) {
								k = this.a;
								a = m = 0;
								for ( p = k.length; m < p; a = ++m)
									if ( c = k[a], a !== d && (c.map != u && c.getVisible()) && ( c = e[a], (!(a < d) || c.d) && this.f(g.q, c.q) < b)) {
										g.d = c.d = h;
										break;
									}
							}
						n = this.a;
						a = [];
						b = r = 0;
						for ( l = n.length; r < l; b = ++r)
							d = n[b], e[b].d && a.push(d);
						return a;
					};
					c.z = function(b) {
						var d = this;
						return {
							h : function() {
								return b._omsData.i.setOptions({
									strokeColor : d.legColors.highlighted[d.map.mapTypeId],
									zIndex : d.highlightedLegZIndex
								});
							},
							k : function() {
								return b._omsData.i.setOptions({
									strokeColor : d.legColors.usual[d.map.mapTypeId],
									zIndex : d.usualLegZIndex
								});
							}
						};
					};
					c.G = function(b, d) {
						var a, c, f, e, r, m, l, k, n, q;
						this.s = h;
						q = b.length;
						a = this.C( function() {
							var a, d, c;
							c = [];
							a = 0;
							for ( d = b.length; a < d; a++)
								k = b[a], c.push(k.p);
							return c;
						}());
						e = q >= this.circleSpiralSwitchover ? this.v(q, a).reverse() : this.u(q, a);
						a = function() {
							var a, d, k, q = this;
							k = [];
							a = 0;
							for ( d = e.length; a < d; a++)
								f = e[a], c = this.D(f), n = this.B(b, function(a) {
									return q.f(a.p, f);
								}), l = n.A, m = new s.Polyline({
									map : this.map,
									path : [l.position, c],
									strokeColor : this.legColors.usual[this.map.mapTypeId],
									strokeWeight : this.legWeight,
									zIndex : this.usualLegZIndex
								}), l._omsData = {
									l : l.position,
									i : m
								}, this.legColors.highlighted[this.map.mapTypeId] !== this.legColors.usual[this.map.mapTypeId] && ( r = this.z(l), l._omsData.w = {
									h : p.addListener(l, "mouseover", r.h),
									k : p.addListener(l, "mouseout", r.k)
								}), l.setPosition(c), l.setZIndex(Math.round(this.spiderfiedZIndex + f.y)), k.push(l);
							return k;
						}.call(this);
						delete this.s;
						this.r = h;
						return this.trigger("spiderfy", a, d);
					};
					c.unspiderfy = function(b) {
						var d, a, c, f, e, k, m;
						b == u && ( b = u);
						if (this.r == u)
							return this;
						this.t = h;
						f = [];
						c = [];
						m = this.a;
						e = 0;
						for ( k = m.length; e < k; e++)
							a = m[e], a._omsData != u ? (a._omsData.i.setMap(u), a !== b && a.setPosition(a._omsData.l), a.setZIndex(u), d = a._omsData.w, d != u && (p.removeListener(d.h), p.removeListener(d.k)),
							delete a._omsData, f.push(a)) : c.push(a);
						delete this.t;
						delete this.r;
						this.trigger("unspiderfy", f, c);
						return this;
					};
					c.f = function(b, d) {
						var a, c;
						a = b.x - d.x;
						c = b.y - d.y;
						return a * a + c * c;
					};
					c.C = function(b) {
						var d, a, c, f, e;
						f = a = c = 0;
						for ( e = b.length; f < e; f++)
							d = b[f], a += d.x, c += d.y;
						b = b.length;
						return new s.Point(a / b, c / b);
					};
					c.c = function(b) {
						return this.e.getProjection().fromLatLngToDivPixel(b);
					};
					c.D = function(b) {
						return this.e.getProjection().fromDivPixelToLatLng(b);
					};
					c.B = function(b, c) {
						var a, g, f, e, k, m;
						f = k = 0;
						for ( m = b.length; k < m; f = ++k)
							if ( e = b[f], e = c(e), "undefined" === typeof a || a === u || e < g)
								g = e, a = f;
						return b.splice(a,1)[0];
					};
					c.m = function(b, c) {
						var a, g, f, e;
						if (b.indexOf != u)
							return b.indexOf(c);
						a = f = 0;
						for ( e = b.length; f < e; a = ++f)
							if ( g = b[a], g === c)
								return a;
						return -1;
					};
					w.g = function(b) {
						return this.setMap(b);
					};
					w.g.prototype = new s.OverlayView;
					w.g.prototype.draw = function() {
					};
					return w;
				}();
		}).call(this);
	}).call(this);
	/* Tue 7 May 2013 14:56:02 BST */

	var oms = new OverlappingMarkerSpiderfier(map);
	//Spider for overlapping markers

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			google.maps.event.addListener(map, 'idle', showMarkers);
			// When user allowed to send their location
			initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(initialLocation);
			map.setZoom(15);
			// 현재 위치를 가져와서 화면의 중심으로 만드는 단계

			var markersArray = [];

			var marker = new google.maps.Marker({
				position : initialLocation,
				map : map,
				icon : 'img/man.png',
				title : "Hello!",
				content : 'Current Location'
			});
			oms.addMarker(marker);
			var infowindow = new google.maps.InfoWindow();
			oms.addListener('click', function(marker, event) {
				lastmarkers[0] = marker;
				closeInfos();
				infowindow.setContent(marker.content);
				infowindow.open(map, marker);
				infos[0] = infowindow;
			});

			currentLocation = marker;

			window.setInterval(updateLocation, 5000);

			showMarkers();

			function showMarkers() {
				var bounds = map.getBounds();
				var sw = bounds.getSouthWest();
				var ne = bounds.getNorthEast();
				downloadUrl("php/php_genaffiliatexml.php?swlat=" + sw.lat() + "&swlng=" + sw.lng() + "&nelat=" + ne.lat() + "&nelng=" + ne.lng(), function(data) {
					var xml = data.responseXML;
					var markers = xml.documentElement.getElementsByTagName("affiliate");
					var info;
					// remove existing markers and list items
					for (var i = 0; i < markersArray.length; i++) {
						markersArray[i].setMap(null);
					}
					markersArray = [];
					$('#affiliateList li').not('#affiliateListTitle').remove();
					// add markers
					for (var i = 0; i < markers.length; i++) {
						var name = markers[i].getAttribute("name");
						var address = markers[i].getAttribute("address");
						var type = markers[i].getAttribute("type");
						var point = new google.maps.LatLng(parseFloat(markers[i].getAttribute("lat")), parseFloat(markers[i].getAttribute("lng")));
						var html = "<b>" + name + "</b> <br/>" + address;
						var discountType;
						if (markers[i].getAttribute("discount1")) {
							if (markers[i].getAttribute("discount2")) {
								discountType = 2;
							} else {
								discountType = 1;
							}
						} else {
							if (markers[i].getAttribute("discount2")) {
								discountType = 1;
							} else {
								discountType = 0;
							}
						}
						var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + PinColor(discountType), new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
						marker = new google.maps.Marker({
							map : map,
							position : point,
							content : html,
							icon : pinImage
						});

						oms.addMarker(marker);
						//Pushing the markers into an array so that it's easier to manage them
						markersArray.push(marker);
						info = new google.maps.InfoWindow({
							maxWidth : 240
						});
						oms.addListener('click', function(marker, event) {
							lastmarkers[0] = marker;
							closeInfos();
							info.setContent(marker.content);
							info.open(map, marker);
							infos[0] = info;
						});
						oms.addListener('spiderfy', function(markers) {
							info.close();
						});
						$("#affiliateList ul").append('<li><a href="about.html" class="item-link item-content"><div class="item-media"><img src="affiliate/' + markers[i].getAttribute("id") + '/thumbnail.jpg" /></div><div class="item-inner"><div class="item-title"><p>' + markers[i].getAttribute("name") + '</p><p class="discountCaption">' + markers[i].getAttribute("discount1") + '</p><p class="discountCaption2">' + markers[i].getAttribute("discount2") + '</p></div><div class="item-after"></div></div></a></li>');
					}
					if(markersArray.length != 0) {
						$('#affiliateListText').html('총 ' + markersArray.length + '개의 가맹점');
					}
					else {
						$('#affiliateListText').html('해당 영역 내에 가맹점이 없습니다.');
					}
				});
			}

			// update current location
			function updateLocation() {
				if (currentLocation != null) {
					navigator.geolocation.getCurrentPosition(function(position) {
						var currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
						currentLocation.setPosition(currentLatLng);
					});
				}
			}

			//Manages the info windows
			function closeInfos() {
				if (infos.length > 0) {
					infos[0].set("marker", null);
					infos[0].close();
					infos.length = 0;
				}
			}

			function PinColor(discountType) {
				switch(discountType) {
				case 0:
					return 'fff';
					break;
				case 1:
					return 'ffc000';
					break;
				case 2:
					return 'ff0000';
					break;
				}
			}

		});
	}
	else {
		$('#affiliateListText').html('현재 위치 공유를 허용하지 않으시면 가맹점 검색 서비스는 사용하실 수 없습니다.');
	}

	/*
	 // Create the DIV to hold the control and
	 // call the HomeControl() constructor passing
	 // in this DIV.
	 var homeControlDiv = document.createElement('div');
	 var homeControl = new HomeControl(homeControlDiv, map);

	 homeControlDiv.index = 1;
	 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);*/

}

var width = $(window).width();
// 기존 가로 크기
var height = $(window).height();
// 기존 세로 크기
function jqUpdateSize() {/* 브라우저 크기가 변할 때 아래와 같은 조작을 한다 */
	if ($(window).width() > $(window).height()) {
		if ($(window).height() < 533) {
			$('p').not('.item-inner p').css('margin', '0');
		} else {
			$('p').not('.item-inner p').css('margin', '');
		}
		$('#map-canvas').css('height', '100%');
		$('#map-canvas').css('width', '50%');
		$('#map-canvas').css('display', 'inline-block');
		$('.list-block').css('margin', '0');
		$('.list-block').css('height', '100%');
		$('.list-block').css('width', 'calc(50% - 1px)');
		$('.list-block').css('border-left', '1px solid #c8c7cc');
		$('.list-block').css('display', 'inline-block');
	} else {
		$('p').css('margin', '');
		$('#map-canvas').css('height', '');
		$('#map-canvas').css('width', '');
		$('#map-canvas').css('display', '');
		$('.list-block').removeAttr('style');
	}
	width = $(window).width();
	// 기존 가로 크기
	height = $(window).height();
}

var timer;
$(window).resize(function() {
	// 브라우저 크기가 바뀌는 것을 인식한다.
	clearTimeout(timer);
	timer = setTimeout(jqUpdateSize, 100);
	// it doesn't have to be too fast
});

function downloadUrl(url, callback) {
	var request = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest;

	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			request.onreadystatechange = doNothing;
			callback(request, request.status);
		}
	};

	request.open('GET', url, true);
	request.send(null);
}

function doNothing() {
}

var pageDepth = 0;
function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCxd2SyqFNNOyPsnOerZK--317wgweK1j4&sensor=false&callback=initialize";
	document.body.appendChild(script);
	// Initialize Framewortk7
	var myApp = new Framework7();
	// If we need to use custom DOM library, let's save it to $$ variable:
	var $$ = Dom7;
	// Add view
	var mainView = myApp.addView('.view-main');
	myApp.onPageInit('*', function(page) {
		pageDepth++;
		$('#underBar').transition({
			y : '3em'
		});
	});
	myApp.onPageBeforeRemove('*', function(page) {
		pageDepth--;
		if (pageDepth == 0) {
			$('#underBar').transition({
				y : '0em'
			});
		}
	});
	$('.swiper-slide').css('height', $('.swiper-container').css('height'));
	jqUpdateSize();
}

