// Icons used into the markers options
var marka = new google.maps.MarkerImage(
  'include/shop/css/images/marker-images/image.png',
  new google.maps.Size(59,50),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);
var marka2 = new google.maps.MarkerImage(
  'include/shop/css/images/marker-images/bauhause.png',
  new google.maps.Size(59,50),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var marka3 = new google.maps.MarkerImage(
  'include/shop/css/images/marker-images/praktiker.png',
  new google.maps.Size(59,50),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

/*	var of shop
--------------------------------------------------	*/

// markers definition list
var list = [
{ lat: 22.285961 , 
  lng: 114.152667, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '東利藥行', 
   address: '香港上環永樂街 59 號地下', 
   bilgi: '2778 7700', 
   logo: 'google-boloon.png',
   brosurID:2, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.286763 , 
  lng: 114.151478, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '耀華氏施德之大藥房', 
   address: '香港上環德輔道中 283 號地下（港鐡站 B 出口）', 
   bilgi: '2545 0649', 
   logo: 'google-boloon.png',
   brosurID:3, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.282076 , 
  lng: 114.155663, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '勝利大藥房', 
   address: '香港中環士丹利街 20 號鴨都喇利大廈地下', 
   bilgi: '2522 8518', 
   logo: 'google-boloon.png',
   brosurID:4, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.281396 , 
  lng: 114.156244, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '御仁堂蟲草大藥房', 
   address: '香港中環德己立街 14 - 18 號業豐大廈地下 14 號', 
   bilgi: '2658 8662', 
   logo: 'google-boloon.png',
   brosurID:5, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.282421 , 
  lng: 114.192365, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '仁和中西大藥房', 
   address: '香港天后英皇道 2 號地下 B 鋪', 
   bilgi: '2512 6733', 
   logo: 'google-boloon.png',
   brosurID:6, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.285838 , 
  lng: 114.150877, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '協德榮參茸藥行', 
   address: '香港文咸東街 60 號地下', 
   bilgi: '2543 9476', 
   logo: 'google-boloon.png',
   brosurID:7, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.290966 , 
  lng: 114.196457, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '北角藥房', 
   address: '香港北角北角道 11 - 13 號地下 1 號舖', 
   bilgi: '2578 0166', 
   logo: 'google-boloon.png',
   brosurID:8, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.291669 , 
  lng: 114.200482, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '健堡藥房', 
   address: '香港北角馬寶道 28 號華匯中心地庫 5-6 號舖 ( 地鐵 A4 出口 )', 
   bilgi: '2563 3930', 
   logo: 'google-boloon.png',
   brosurID:9, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.290545 , 
  lng: 114.195303, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '美國參藥公司', 
   address: '香港北角渣華道 2 號皇都大廈地舖', 
   bilgi: '2503 3567', 
   logo: 'google-boloon.png',
   brosurID:10, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.282969 , 
  lng: 114.128352, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '東方藥業保健', 
   address: '香港西環堅尼地城士美菲路 8 號美暉大廈地下 B 舖', 
   bilgi: '2872 5920', 
   logo: 'google-boloon.png',
   brosurID:11, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.281851 , 
  lng: 114.183669, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '旭輝大藥房', 
   address: '香港景隆街 30 - 34 號海殿大廈地下（總統戲院斜對面）', 
   bilgi: '2823 4031', 
   logo: 'google-boloon.png',
   brosurID:12, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.279002 , 
  lng: 114.18086, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '建國中西大藥房', 
   address: '香港銅鑼灣軒尼詩道 418 - 430 號友光大廈地下 2B 號', 
   bilgi: '2177 7331', 
   logo: 'google-boloon.png',
   brosurID:13, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.2797 , 
  lng: 114.185177, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '新聯輝藥業', 
   address: '香港銅鑼灣渣甸街 30 號 A 地下', 
   bilgi: '2591 4331', 
   logo: 'google-boloon.png',
   brosurID:14, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.280675 , 
  lng: 114.184153, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '永利大藥房', 
   address: '香港銅鑼灣駱克道 529 號地下（崇光百貨背面）', 
   bilgi: '3107 9388', 
   logo: 'google-boloon.png',
   brosurID:15, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.277324 , 
  lng: 114.172329, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '中聯中西大藥房', 
   address: '香港灣仔軒尼詩道 138 號修敦中心地下 1A 鋪', 
   bilgi: '2891 3111', 
   logo: 'google-boloon.png',
   brosurID:16, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.277825 , 
  lng: 114.173921, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '友誠中西大藥房', 
   address: '香港灣仔軒尼詩道 173 號地下', 
   bilgi: '2891 6838', 
   logo: 'google-boloon.png',
   brosurID:17, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.278667 , 
  lng: 114.180993, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '港美中西大藥坊', 
   address: '香港灣仔堅拿道西 10 號 D 鋪', 
   bilgi: '2845 2888', 
   logo: 'google-boloon.png',
   brosurID:18, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.279361 , 
  lng: 114.178933, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '義成藥房', 
   address: '香港灣仔駱克道 353 號三湘大廈地下 2 號舖', 
   bilgi: '2574 8633', 
   logo: 'google-boloon.png',
   brosurID:19, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.277973 , 
  lng: 114.180703, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '囍燕港貨專門店', 
   address: '香港灣仔寶靈頓道 16 號 B 地下 永德大夏 34 號 A 鋪', 
   bilgi: '2891 1218', 
   logo: 'google-boloon.png',
   brosurID:20, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.26408 , 
  lng: 114.237038, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '誠仁(新翠)僱傭有限公司', 
   address: '香港柴灣道 233 號新翠商場 4 樓 26 號舖', 
   bilgi: '6338 8179', 
   logo: 'google-boloon.png',
   brosurID:21, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.325537 , 
  lng: 114.214119, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '長豐中西藥房', 
   address: '九龍九龍灣德褔廣場一期 F14A - 15A', 
   bilgi: '2754 6000', 
   logo: 'google-boloon.png',
   brosurID:22, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.299104 , 
  lng: 114.177237, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '萬豐中西大藥業批發中心', 
   address: '九龍尖沙咀東部麼地道 67 號半島中心 G43 號地舖', 
   bilgi: '2388 0518', 
   logo: 'google-boloon.png',
   brosurID:23, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.294609 , 
  lng: 114.169165, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '尚品燕中西藥行', 
   address: '九龍尖沙咀梳士巴利道星光行地下 18 號', 
   bilgi: '2738 8698', 
   logo: 'google-boloon.png',
   brosurID:24, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.298251 , 
  lng: 114.172803, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '香港仔成記', 
   address: '九龍尖沙咀堪富利士道 1 號地下', 
   bilgi: '2391 9193', 
   logo: 'google-boloon.png',
   brosurID:25, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.30065 , 
  lng: 114.17877, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '港美中西藥坊', 
   address: '九龍尖沙咀新文華中心 12 - 13 號', 
   bilgi: '23911222', 
   logo: 'google-boloon.png',
   brosurID:26, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.296995 , 
  lng: 114.171428, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '達隆藥房', 
   address: '九龍尖沙咀樂道 9A 地下', 
   bilgi: '2376 0768', 
   logo: 'google-boloon.png',
   brosurID:27, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.304295 , 
  lng: 114.169424, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '寶達中西蔘茸藥業', 
   address: '九龍佐敦寶靈街 3A 地舖', 
   bilgi: '2838 8730', 
   logo: 'google-boloon.png',
   brosurID:28, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.317909 , 
  lng: 114.171161, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '昌盛中西大藥房', 
   address: '九龍旺角山東街 59A - 63A 號地下 A3 舖', 
   bilgi: '2153 0818', 
   logo: 'google-boloon.png',
   brosurID:29, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.318645 , 
  lng: 114.169992, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '聯鋒大藥房', 
   address: '九龍旺角西洋菜街南 51 號友誠商業中心地舖 E', 
   bilgi: '2813 6223', 
   logo: 'google-boloon.png',
   brosurID:30, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.318677 , 
  lng: 114.170157, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '高登中西大藥房', 
   address: '九龍旺角西洋菜街南 64 號地下', 
   bilgi: '2381 3877', 
   logo: 'google-boloon.png',
   brosurID:31, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.319391 , 
  lng: 114.17094, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '聯信大藥坊', 
   address: '九龍旺角亞皆老街 50 號地下', 
   bilgi: '2613 2883', 
   logo: 'google-boloon.png',
   brosurID:32, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.322279 , 
  lng: 114.170201, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '港安中西大藥房', 
   address: '九龍旺角弼街 57 號地下 1 號舖', 
   bilgi: '2388 3350', 
   logo: 'google-boloon.png',
   brosurID:33, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.315408 , 
  lng: 114.169922, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '南華藥房', 
   address: '九龍旺角彌敦道 579 號地下一樓及二樓', 
   bilgi: '2346 1888', 
   logo: 'google-boloon.png',
   brosurID:34, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.303399 , 
  lng: 114.171014, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '康城大藥房', 
   address: '九龍柯士甸道 83 號柯士廣場地下 6A 舖', 
   bilgi: '2377 1987', 
   logo: 'google-boloon.png',
   brosurID:35, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.299104 , 
  lng: 114.177237, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '東岸中西藥行', 
   address: '九龍麼地道67號半島中心 G33 號地下', 
   bilgi: '2723 4224', 
   logo: 'google-boloon.png',
   brosurID:36, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.315131 , 
  lng: 114.225065, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '仁福中西藥房', 
   address: '九龍觀塘物華街 57 號地下', 
   bilgi: '2389 9972', 
   logo: 'google-boloon.png',
   brosurID:37, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.44475 , 
  lng: 114.026176, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '美康中西藥房', 
   address: '新界元朗青山公路元朗段 195 號建成樓地下', 
   bilgi: '2806 2177', 
   logo: 'google-boloon.png',
   brosurID:38, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.446473 , 
  lng: 114.029959, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '順豐中醫藥業', 
   address: '新界元朗泰衡街大興大廈 22 號鋪', 
   bilgi: '2478 6221', 
   logo: 'google-boloon.png',
   brosurID:39, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.442707 , 
  lng: 114.02792, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '智文藥房', 
   address: '新界元朗教育路 3 號富好大廈地下 2-3 號舖', 
   bilgi: '2470 7028', 
   logo: 'google-boloon.png',
   brosurID:40, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.442957 , 
  lng: 114.026044, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '金源中西藥行', 
   address: '新界元朗教育路 45 號地下（近中旅社）', 
   bilgi: '2477 9516', 
   logo: 'google-boloon.png',
   brosurID:41, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.444972 , 
  lng: 114.026292, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '莉滿藥房', 
   address: '新界元朗壽富街 61 - 69 號時益大廈地下 1 號鋪', 
   bilgi: '2443 9195', 
   logo: 'google-boloon.png',
   brosurID:42, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.444587 , 
  lng: 114.028831, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '華氏大藥房', 
   address: '新界元朗福康街 2 號地下 ( 大馬路麥當勞側 ) ', 
   bilgi: '2488 0028', 
   logo: 'google-boloon.png',
   brosurID:43, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.503543 , 
  lng: 114.127236, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '海城藥房', 
   address: '新界上水新發街 32 號地下', 
   bilgi: '2356 9918', 
   logo: 'google-boloon.png',
   brosurID:44, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.503543 , 
  lng: 114.127428, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '健康百藥西藥房', 
   address: '新界上水新樂街地下 1 號 A 舖', 
   bilgi: '2145 0016', 
   logo: 'google-boloon.png',
   brosurID:45, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.504052 , 
  lng: 114.126977, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '港龍集團參茸海味醫藥公司', 
   address: '新界上水符興街 47 號地下', 
   bilgi: '2673 1861', 
   logo: 'google-boloon.png',
   brosurID:46, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.504997 , 
  lng: 114.127875, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '杏林西藥房', 
   address: '新界上水新康街 14 號地舖', 
   bilgi: '2663 0201', 
   logo: 'google-boloon.png',
   brosurID:47, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.504583 , 
  lng: 114.128283, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '智鍵藥房', 
   address: '新界上水新康街 50 號地舖', 
   bilgi: '2871 2781', 
   logo: 'google-boloon.png',
   brosurID:48, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },

{ lat: 22.502597 , 
  lng: 114.129838, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '龍豐藥房', 
   address: '新界上水龍豐花園 3 號地舖', 
   bilgi: '2668 4625', 
   logo: 'google-boloon.png',
   brosurID:49, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },
 
{ lat: 22.280674 , 
  lng: 114.183987, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '香港中西大藥房', 
   address: '香港銅鑼灣駱克道 521 號地下', 
   bilgi: '2668 8520', 
   logo: 'google-boloon.png',
   brosurID:50, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 },
 
 { lat: 22.27989 , 
  lng: 114.185858, 
  options: {icon: marka},data: { 
   type: 'magaza',
   magazaID:1, 
   magazaGrubuID:1, 
   adi: '金輪中西大藥房', 
   address: '香港銅鑼灣百德新街 1 - 7 號地下 U 號舖', 
   bilgi: '2890 1170', 
   logo: 'google-boloon.png',
   brosurID:51, 
   brosur: 'http://isnatura.com.hk/sites/default/files/FulvicAcid.jpg' 
  }
 }


];
