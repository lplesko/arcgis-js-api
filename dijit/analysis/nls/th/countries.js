// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define({countryCodes:{WORLD:"โลก",AD:"อันดอร์รา",AE:"สหรัฐอาหรับเอมิเรตส์",AF:"อัฟกานิสถาน",AG:"แอนติกาและบาร์บูดา",AI:"แองกวิลลา",AL:"อัลเบเนีย",AM:"อาร์เมเนีย",AO:"แองโกลา",AQ:"ขั้วโลกใต้",AR:"อาร์เจนตินา",AS:"อเมริกันซามัว",AT:"ออสเตรีย",AU:"ออสเตรเลีย",AW:"อารูบา",AZ:"อาเซอร์ไบจาน",BA:"บอสเนียและเฮอร์เซโกวีนา",BB:"บาร์บาดอส",BD:"บังกลาเทศ",BE:"เบลเยียม",BF:"บูร์กินาฟาโซ",BG:"บัลแกเรีย",BH:"บาห์เรน",BI:"บุรุนดี",BJ:"เบนิน",BL:"แซ็ง-บาร์เตเลมี",BM:"เบอร์มิวดา",BN:"บรูไนดารุสซาลาม",BO:"รัฐพหุชนชาติแห่งโบลิเวีย",BQ:"เกาะซินต์เอิสตาซียึส",BR:"บารซิล",BS:"บาฮามาส",BT:"ภูฏาน",BV:"เกาะบูเวต์ นอร์เวย์",BW:"บอทสวานา",BY:"เบลารุส",BZ:"เบลีซ",CA:"แคนนาดา",CD:"สาธารณรัฐประชาธิปไตยคองโก",CF:"สาธารณัฐแอฟริกากลาง",CG:"สาธารณรัฐประชาธิปไตยคองโก",CH:"สวิสเซอร์แลนด์",CI:"สาธารณรัฐโกตดิวัวร์",CK:"หมู่เกาะคุก",CL:"ชิลี",CM:"แคเมอรูน",CN:"จีน",CO:"โคลัมเบีย",CR:"คอสตาริกา",CU:"คิวบา",CV:"เคปเวิร์ด",CW:"ประเทศกือราเซา",CY:"ไซปรัส",CZ:"สาธารณรัฐเช็ก",DE:"เยอรมัน",DJ:"จิบูตี",DK:"เดนมาร์ค",DM:"โดมินิกา",DO:"สาธารณรัฐโดมินิกัน",DZ:"แอลจีเรีย",EC:"เอกวาดอร์",EE:"เอสโตเนีย",EG:"อิยิปต์",EH:"เวสเทิร์นสะฮารา",ER:"เอริเทรีย",ES:"สเปน",ET:"เอธิโอเปีย",FI:"ฟินแลนด์",FJ:"ฟิจิ",FK:"ราชรัฐแห่งหมู่เกาะฟอล์กแลนด์ อังกฤษ",FM:"สหพันธรัฐไมโครนีเซีย",FO:"หมู่เกาะแฟโร",FR:"ฝรั่งเศส",GA:"กาบอง",GB:"สหราชอาณาจักร",GD:"เกรนาดา",GE:"จอร์เจีย",GF:"เฟรนช์เกียนา",GG:"เกิร์นซีย์",GH:"กานา",GI:"ยิบรอลต้าร์",GL:"กรีนแลนด์",GM:"แกมเบีย",GN:"กินี",GP:"กัวเดอลุป",GQ:"อิเควทอเรียลกินี",GR:"กรีซ",GS:"เกาะเซาท์จอร์เจียและหมู่เกาะเซาท์แซนวิช",GT:"กัวเตมาลา",GW:"กินี-บิสเซา",GY:"กายอานา",HK:"ฮ่องกง",HM:"เกาะเฮิร์ดและหมู่เกาะแมกดอนัลด์ ออสเตรเลีย",HN:"ฮอนดูรัส",HR:"โครเอเชีย",HT:"เฮติ",HU:"ฮังการี",ID:"อินโดนีเซีย",IE:"ไอร์แลนด์",IL:"อิสราเอล",IM:"เกาะแมน",IN:"อินเดีย",IO:"บริติชอินเดียนโอเชียนเทร์ริทอรี",IQ:"อิรัก",IR:"สาธารณรัฐอิสลามอิหร่าน",IS:"ไอซ์แลนด์",IT:"อิตาลี",JE:"เจอร์ซีย์",JM:"จาไมกา",JO:"จอร์แดน",JP:"ญี่ปุ่น",KE:"เคนย่า",KG:"คีร์กีซสถาน",KH:"กัมพูชา",KI:"คิริบาส",KM:"คอโมโรส",KN:"เซนต์คิตส์และเนวิส",KP:"สาธารณรัฐประชาธิปไตยประชาชนเกาหลี",KR:"เกาหลีใต้",KW:"คูเวต",KY:"หมู่เกาะเคย์แมน",KZ:"คาซัคสถาน",LA:"สาธารณรัฐประชาธิปไตยประชาชนลาว",LB:"เลบานอน",LC:"เซนต์ลูเซีย",LI:"ลิกเตนสไตน์",LK:"ศรีลังกา",LR:"ไลบีเรีย",LS:"เลโซโท",LT:"ลิธัวเนีย",LU:"ลักเซมเบิร์ก",LV:"ลัตเวีย",LY:"ลิเบีย",MA:"โมร็อกโก",MC:"โมนาโค",MD:"สาธารณรัฐมอลโดวา",ME:"มอนเทนาโกร",MF:"เซนต์มาร์ติน (ส่วนฝรั่งเศส)",MG:"มาดากัสการ์",MH:"หมู่เกาะมาร์แชล",MK:"สาธารณรัฐมาซิโดเนีย",ML:"มาลี",MM:"สาธารณรัฐแห่งสหภาพเมียนมาร์",MN:"มองโกเลีย",MO:"มาเก๊า",MP:"หมู่เกาะนอร์เทิร์นมาเรียนา",MQ:"มาร์ตีนิก",MR:"มอริเตเนีย",MS:"มอนต์เซอร์รัต",MT:"มัลตา",MU:"มอริเชียส",MV:"มัลดีฟส์",MW:"มาลาวี",MX:"เม็กซิโก",MY:"มาเลเซีย",MZ:"โมซัมบิค",NA:"นามิเบีย",NC:"นิวแคลิโดเนีย",NE:"ไนเจอร์",NG:"ไนจีเรีย",NI:"นิคารากัว",NL:"เนเธอร์แลนด์",NO:"นอร์เวย์",NP:"เนปาล",NR:"นาอูรู",NU:"นีอูเอ",NZ:"นิวซีแลนด์",OM:"โอมาน",PA:"ปานามา",PE:"เปรู",PF:"เฟรนช์โปลินีเซีย",PG:"ปาปัวนิวกินี",PH:"ฟิลิปปินส์",PK:"ปากีสถาน",PL:"โปแลนด์",PM:"เกาะแซง-ปีแยร์ และเกาะมีเกอลง ฝรั่งเศส",PN:"หมู่เกาะพิตแคร์น อังกฤษ",PS:"รัฐปาเลสไตน์",PT:"โปรตุเกส",PW:"ปาเลา",PY:"ปารากวัย",QA:"กาตาร์",RE:"เรอูเนียง",RO:"โรมาเนีย",RS:"เซอร์เบีย",RU:"สหพันธรัฐรัสเซีย",RW:"รวันดา",SA:"ซาอุดิอาระเบีย",SB:"หมู่เกาะโซโลมอน",SC:"เซเชลส์",SD:"ซูดาน",SE:"คนสวีเดน",SG:"สิงคโปร์",SH:"เซนต์เฮเลนา สหราชอาณาจักร",SI:"สโลวีเนีย",SJ:"สฟาลบาร์และยานไมเอน นอร์เวย์",SK:"สโลวาเกีย",SL:"เซียร์ราลีโอน",SM:"ซานมาริโน",SN:"เซเนกัล",SO:"โซมาเลีย",SR:"ซูรินาเม",SS:"สาธารณรัฐเซาท์ซูดาน",ST:"สาธารณรัฐประชาธิปไตยเซาตูเมและปรินซิปี",SV:"เอลซัลวาดอร์",SX:"เซนต์มาติน (ส่วนดัตช์)",SY:"สาธารณรัฐอาหรับซีเรีย",SZ:"สวาซิแลนด์",TC:"หมู่เกาะเติกส์และหมู่เกาะเคคอส",TD:"ชาด",TF:"แคว้นเฟรนช์เกียนา ฝรั่งเศส",TG:"โตโก",TH:"ไทย",TJ:"ทาจิกิสถาน",TK:"โตเกเลา",TL:"สาธารณรัฐประชาธิปไตยติมอร์-เลสเต",TM:"เติร์กเมนิสถาน",TN:"ตูนิเซีย",TO:"ตองกา",TR:"ตุรกี",TT:"ตรินิแดดและ",TV:"ตูวาลู",TW:"ไต้หวัน",TZ:"สหสาธารณรัฐแทนซาเนีย",UA:"ยูเครน",UG:"ยูกันดา",UM:"เกาะเล็กรอบนอกของสหรัฐอเมริกา",US:"สหรัฐอเมริกา",UY:"อุรุกวัย",UZ:"อุซเบกิซสถาน",VA:"นครรัฐวาติกัน",VC:"เซนต์วินเซนต์และเกรนาดีสน์",VE:"เวเนซูเอลา",VG:"หมู่เกาะบริติชเวอร์จิน",VN:"เวียตนาม",VU:"วานูอาตู",WF:"วาลลิสและฟุตูนา",WS:"ซามัว",XK:"สาธารณรัฐโคโซโว",YE:"เยเมน",YT:"มายอต",ZA:"แอฟริกาใต้",ZM:"แซมเบีย",ZW:"ซิมบับเว"}});