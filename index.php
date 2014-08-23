<!DOCTYPE HTML>
<html>
	<head>
		<title>GAIA</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="No more food waste. GAIA." />
		<meta name="HandheldFriendly" content="true" />
		<meta name="MobileOptimized" content="0" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<link rel="icon" href="favicon.ico">
		<!-- Path to Framework7 Library CSS-->
		<link rel="stylesheet" href="css/framework7.min.css">
		<!-- Default stylesheet for smart phones and tablets -->
		<link rel="stylesheet" href="css/style.css" />
		<!-- Path to Swiper Library CSS-->
		<link rel="stylesheet" href="css/idangerous.swiper.css" />
		<link href='http://fonts.googleapis.com/css?family=Raleway:200,300,400,600' rel='stylesheet' type='text/css'>
		<script type="text/javascript">
			// asynchronous font loading : https://github.com/typekit/webfontloader
			WebFontConfig = {
				google : {
					families : ['Raleway:200,300,400,600']
				},
				custom : {
					families : ['Nanum Gothic'],
					urls : ['http://fonts.googleapis.com/earlyaccess/nanumgothic.css']
				}
			};
			(function() {
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		</script>
		<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
		<script type="text/javascript" src="js/jquery.transit.min.js"></script>
		<script type="text/javascript" src="js/idangerous.swiper.js"></script>
		<script type="text/javascript" src="js/framework7.min.js"></script>
		<script type="text/javascript" src="js/main.js"></script>

	</head>
	<body>
		<div class="statusbar-overlay"></div>
		<!-- for iOS7 status bar overlay -->
		<!-- Left panel with reveal effect-->
		<div class="panel-overlay"></div>
		<div class="panel panel-right panel-cover">
			<div class="content-block">
				<p>
					Left panel content goes here
				</p>
				<p>
					<a href="#" class="close-panel">Close me</a>
				</p>
			</div>
		</div>
		<div class="views">
			<div class="view view-main">
				<div id="navBar"></div>
				<a href="" class="external"><div id="homeButton"></div></a>
				<a href="#" data-panel="right" class="open-panel"><div id="sidePanelToggle"></div></a>
				<div class="pages">
					<div data-page="index" class="page">
						<div class="page-content">
							<div class="container">
								<div class="swiper-container">
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<div class="vertical-swiper-container">
												<div class="vertical-pagination"></div>
												<div class="swiper-wrapper">
													<div class="swiper-slide">
														<div class="badge-card">
															<img src="img/leaf.png" class="badgeSlide" />
															<p style="text-align: center; color: #449400; font-weight: 600; font-size: 2em;">Green Eater</p>
															<p style="text-align: center; color: #666" lang="ko">적게 주세요! (75%)</p>
														</div>
													</div>
													<div class="swiper-slide">
														<div class="badge-card">
															<img src="img/heart.png" class="badgeSlide" />
															<p style="text-align: center; color: #f97db2; font-weight: 600; font-size: 2em;">Philantropist</p>
															<p style="text-align: center; color: #666" lang="ko">오늘은 기부의 날 (50%)</p>
														</div>
													</div>
													<div class="swiper-slide">
														<div class="badge-card">
															<img src="img/balance.png" class="badgeSlide" />
															<p style="text-align: center; color: #01a2fe; font-weight: 600; font-size: 2em;">Clean Eater</p>
															<p style="text-align: center; color: #666" lang="ko">남기지 않을게요 (100%)</p>
														</div>
													</div>
													<div class="swiper-slide">
														<div class="badge-card">
															<img src="img/turkey.png" class="badgeSlide" />
															<p style="text-align: center; color: #ef6b23; font-weight: 600; font-size: 2em;">Heavy Eater</p>
															<p style="text-align: center; color: #666" lang="ko">곱빼기도 싹쓸이 (125%)</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="swiper-slide">
											<!--NEVER EVER MAKE WHITESPACE between map-canvas div and list-block div-->
											<div class="map-container" id="map-canvas"></div><div id="affiliateList" class="list-block">
												<ul>
													<li lang="ko" id="affiliateListTitle" class="item-divider">
														지도 내 가맹점
													</li>
												</ul>
												<div lang="ko" id="affiliateListText" class="list-block-label">
													가맹점 목록 로딩 중...
													<p>현재 위치 공유를 허용하지 않으시면 가맹점 검색 서비스는 사용하실 수 없습니다.</p>
												</div>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="content-slide">
												<p class="title">
													Slide with HTML
												</p>
												<p>
													You can put any HTML inside of slide with any layout, not only images, even another Swiper!
												</p>
											</div>
										</div>
										<div class="swiper-slide">
											<div class="content-slide">
												<p lang="ko" class="title">
													한글 페이지
												</p>
												<p lang="ko">
													4번째 페이지에는 프로필 상세 정보가 들어가게 됩니다. 한글 내용은 lang="ko" attribute을 넣어주면 나눔고딕으로 표현됩니다.
												</p>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="underBar">
					<div class="pagination"></div>
					<div id="indiBar"></div>
					<div id="badgePageButton"></div>
					<div id="mapPageButton"></div>
					<div id="videoPageButton"></div>
					<div id="profilePageButton"></div>
				</div>
			</div>
		</div>
		<script>
			var mySwiper = new Swiper('.swiper-container', {
				pagination : '.pagination',
				grabCursor : true,
				paginationClickable : true,
				noSwiping : true,
				noSwipingClass : 'map-container'
			});
			var mySwiper2 = new Swiper('.vertical-swiper-container', {
				pagination : '.vertical-pagination',
				mode : 'vertical',
				grabCursor : true,
				paginationClickable : true,
				paginationElementClass : 'vertical-pagination-switch',
				paginationActiveClass : 'vertical-active-switch',
				paginationVisibleClass : 'vertical-visible-switch',
				slideActiveClass : 'vertical-slide-active',
				slideVisibleClass : 'vertical-slide-visible'
			});
		</script>
	</body>
</html>