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

define({documentTypes:{data:{caption:"มาตรฐาน IS0 19115 (ข้อมูล)",description:""},service:{caption:"มาตรฐาน IS0 19119 (บริการ)",description:""},gmi:{caption:"มาตรฐาน ISO 19115-2 (ข้อมูลภาพถ่ายและกริด)",description:""}},general:{reference:"อ้างอิง"},sections:{metadata:"คำอธิบายข้อมูล",identification:"การวินิจฉัย",distribution:"การกระจาย",quality:"คุณภาพ",acquisition:"การเข้าถือสิทธิ์"},metadataSection:{identifier:"ตัวบ่งชี้",contact:"ติดต่อ",date:"วันที่",standard:"มาตรฐาน",reference:"อ้างอิง"},identificationSection:{citation:"การอ้างอิง",description:"คำบรรยาย",contact:"ติดต่อ",thumbnail:"รูปย่อ",keywords:"คำหลัก",constraints:"ข้อจำกัด",resource:"แหล่งที่มา",resourceTab:{representation:"การแสดง",language:"ภาษา",classification:"การจำแนก",extent:"ขอบเขต"},serviceResourceTab:{serviceType:"ประเภทการให้บริการ",extent:"ขอบเขต",couplingType:"ประเภทการเชื่อมต่อ",operation:"ปฏิบัติการ",operatesOn:"ปฎิบัติการบน"}},distributionSection:{},qualitySection:{scope:"ขอบเขต",conformance:"สอดคล้อง",lineage:"ที่มา"},acquisitionSection:{requirement:"ความต้องการ",objective:"วัตถุประสงค์",instrument:"ตราสาร",plan:"วางแผน",operation:"ปฏิบัติการ",platform:"Platform",environment:"สิ่งแวดล้อม"},AbstractMD_Identification:{sAbstract:"นามธรรม",purpose:"วัตถุประสงค์",credit:"เครดิต",pointOfContact:"จุดที่ติดต่อ",resourceMaintenance:"การบำรุง",graphicOverview:"ภาพรวมกราฟิก",descriptiveKeywords:"การรวบรวมคำสำคัญ",resourceConstraints:"ข้อจำกัด"},CI_Address:{deliveryPoint:"จุดส่งมอบ",city:"เทศบาล",administrativeArea:"เขตการบริหาร",postalCode:"รหัสไปรษณีย์",country:"ประเทศ",electronicMailAddress:"ที่อยู่จดหมายอิเล็กทรอนิกส์"},CI_Citation:{title:"ชื่อ",alternateTitle:"ชื่ออื่น",identifier:"ทรัพยากรบ่งชี้",resource:{title:"ชื่อแหล่งที่มา",date:"วันที่แหล่งที่มา"},specification:{title:"ระบุชื่อเรื่อง",date:"ระบุวันที่"}},CI_Contact:{phone:"โทรศัพท์",address:"ที่อยู่",onlineResource:"แหล่งข้อมูลออนไลน์",hoursOfService:"ชั่วโมงให้บริการ",contactInstructions:"คำแนะนำในการติดต่อ"},CI_Date:{date:"วันที่",dateType:"ประเภทวันที่"},CI_DateTypeCode:{caption:"ประเภทวันที่",creation:"การสร้างวันที่",publication:"วันที่เผยแพ่",revision:"วันที่ปรับปรุง"},CI_OnLineFunctionCode:{caption:"ฟังก์ชั่น",download:"ดาวน์โหลด",information:"ข้อมูล",offlineAccess:"การเข้าถึงแบบออฟไลน์",order:"ลำดับ",search:"ค้นหา"},CI_OnlineResource:{caption:"แหล่งข้อมูลออนไลน์",linkage:"URL",protocol:"โปรโตคอล",applicationProfile:"รายละเอียดของการประยุกต์ใช้",name:"ชื่อ",description:"คำบรรยาย",sFunction:"ฟังก์ชั่น"},CI_ResponsibleParty:{caption:"จุดที่ติดต่อ",individualName:"ชื่อส่วนบุคคล",organisationName:"ชื่อองค์กร",positionName:"ชื่อตำแหน่ง",contactInfo:"รายละเอียดในการติดต่อ",role:"บทบาท"},CI_RoleCode:{caption:"บทบาท",resourceProvider:"ผู้จัดหาข้อมูล",custodian:"ผู้ดูแล",owner:"เจ้าของ",user:"ผู้ใช้",distributor:"ตัวแทนจำหน่าย",originator:"ผู้ริเริ่ม",pointOfContact:"จุดที่ติดต่อ",principalInvestigator:"ผู้วิจัยหลัก",processor:"หน่วยประมวลผล",publisher:"ผู้เผยแพร่",author:"ผู้เขียน"},CI_Telephone:{voice:"เสียง",facsimile:"โทรสาร"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"ภาษา JAVA",COM:"COM",SQL:"SQL",WebServices:"บริการผ่านเวป"},DQ_ConformanceResult:{caption:"ผลสอดคล้อง",explanation:"คำอธิบาย",degree:{caption:"ระดับ",validationPerformed:"การตรวจสอบดำเนินการ",conformant:"ที่สอดคล้อง",nonConformant:"ไม่สอดคล้อง"}},DQ_DataQuality:{report:"รายงาน"},DQ_Scope:{level:"ขอบเขต (ข้อมูลคุณภาพนำไปใช้กับ)",levelDescription:"ระดับคำอธิบาย"},EX_Extent:{caption:"ขอบเขต",description:"คำบรรยาย",geographicElement:"ขอบเขตข้อมูลเชิงพื้นที่",temporalElement:"ขอบเขตเวลา",verticalElement:"ขอบเขตในแนวตั้ง"},EX_GeographicBoundingBox:{westBoundLongitude:"ขอบเขตลองจิจูดทางตะวันตก",eastBoundLongitude:"ขอบเขตลองจิจูดทางตะวันออก",southBoundLatitude:"ขอบเขตลองจิจูดทางตอนใต้",northBoundLatitude:"ขอบเขตลองจิจูดทางตอนเหนือ"},EX_GeographicDescription:{caption:"คำอธิบายทางภูมิศาสตร์"},EX_TemporalExtent:{TimePeriod:{beginPosition:"วันเริ่มต้น",endPosition:"วันที่สิ้นสุด"}},EX_VerticalExtent:{minimumValue:"ค่าน้อยสุด",maximumValue:"ค่ามากสุด",verticalCRS:"แนวตั้งจำ"},Length:{caption:"ความยาว",uom:"หน่วยในการวัด",km:"กิโลเมตร",m:"เมตร",mi:"ไมล์",ft:"ฟุต"},LI_Lineage:{statement:"คำชี้แจงที่มา"},MD_BrowseGraphic:{fileName:"เรียกดู URL กราฟฟิก",fileDescription:"เรียกดูคำอธิบายกราฟฟิก",fileType:"เรียกดูประเภทกราฟฟิก"},MD_ClassificationCode:{unclassified:"ไม่จำแนกประเภท",restricted:"หวงห้าม",confidential:"ลับ",secret:"ลับ",topSecret:"ลับสุดยอด"},MD_Constraints:{caption:"ข้อจำกัดในการใช้งาน",useLimitation:"ขีดจำกัด"},MD_DataIdentification:{spatialRepresentationType:"ประเภทตัวแทนข้อมูลเชิงพื้นที่",spatialResolution:"ความละเอียดข้อมูลเชิงพื้นที่",language:"ที่มาด้านภาษา",supplementalInformation:"เพิ่มเติม"},MD_DigitalTransferOptions:{onLine:"ออนไลน์"},MD_Distribution:{distributionFormat:"รูปแบบการจัดจำหน่าย",transferOptions:"ตัวเลือกการถ่ายโอน"},MD_Format:{name:"ชื่อรูปแบบ",version:"รุ่นรูปแบบ"},MD_Identifier:{caption:"URI",identifierCaption:"ตัวบ่งชี้",code:"รหัส"},MD_Keywords:{delimitedCaption:"คำหลัก",thesaurusName:"อรรถาเกี่ยวข้อง"},MD_KeywordTypeCode:{caption:"ประเภทคำสำคัญ",discipline:"วินัย",place:"สถานที่",stratum:"ชั้น",temporal:"ชั่วขณะ",theme:"หัวข้อ"},MD_LegalConstraints:{caption:"ข้อจำกัดทางกฎหมาย",accessConstraints:"ข้อจำกัดในการเข้าถึง",useConstraints:"ข้อกำหนดการใช้",otherConstraints:"ข้อจำกัดอื่นๆ"},MD_MaintenanceFrequencyCode:{caption:"ความถี่",continual:"ต่อเนื่อง",daily:"รายวัน",weekly:"รายสัปดาห์",fortnightly:"รายปักษ์",monthly:"รายเดือน",quarterly:"ไตรมาส",biannually:"รายหกเดือน",annually:"รายปี",asNeeded:"ตามความจำเป็น",irregular:"ผิดปกติ",notPlanned:"ไม่ได้วางแผน",unknown:"ไม่ทราบ"},MD_Metadata:{caption:"คำอธิบายข้อมูล",fileIdentifier:"ระบุไฟล์",language:"ภาษา metadata",hierarchyLevel:"ระดับลำดับชั้น",hierarchyLevelName:"ชื่อระดับชั้น",contact:"ติดต่อ metadata",dateStamp:"วันที่ medadata",metadataStandardName:"ชื่อ metadata มาตรฐาน",metadataStandardVersion:"รุ่น medatada มาตรฐาน",referenceSystemInfo:"ระบบอ้างอิง",identificationInfo:"การวินิจฉัย",distributionInfo:"การกระจาย",dataQualityInfo:"คุณภาพ"},MD_ProgressCode:{caption:"รหัสความคืบหน้า",completed:"สมบูรณ์",historicalArchive:"คลังประวัติศาสตร์",obsolete:"ล้าสมัย",onGoing:"ดำเนินงาน",planned:"การวางแผน",required:"ต้องการ",underDevelopment:"ภายใต้การพัฒนา"},MD_RepresentativeFraction:{denominator:"ส่วน"},MD_Resolution:{equivalentScale:"ขนาดเทียบเท่า",distance:"ระยะทาง"},MD_RestrictionCode:{copyright:"ลิขสิทธิ์",patent:"สิทธิบัตร",patentPending:"สิทธิบัตรที่รอดำเนินการ",trademark:"เครื่องหมายการค้า",license:"อนุญาต",intellectualPropertyRights:"สิทธิในทรัพย์สินทางปัญญา",restricted:"หวงห้าม",otherRestrictions:"ข้อจำกัดอื่นๆ"},MD_ScopeCode:{attribute:"เชิงบรรยาย",attributeType:"ประเภทข้อมูลเชิงบรรยาย",collectionHardware:"การรวบรวมฮาร์ดแวร์",collectionSession:"ชุดการเก็บ",dataset:"ชุดข้อมูล",series:"ชุด",nonGeographicDataset:"ไม่ใช่ชุดข้อมูลทางภูมิศาสตร์",dimensionGroup:"กลุ่มขนาด",feature:"ฟีเจอร์",featureType:"ประเภทชิ้นข้อมูล",propertyType:"ประเภทอสังหาริมทรัพย์",fieldSession:"ชุดสายงาน",software:"ซอฟต์แวร์",service:"เซอร์วิส",model:"แบบ",tile:"ข้อมูล tile"},MD_ScopeDescription:{attributes:"ข้อมูลเชิงประกอบ",features:"ความสามารถ",featureInstances:"ตัวอย่างชิ้นข้อมูล",attributeInstances:"ตัวอย่างข้อมูลเชิงบรรยาย",dataset:"ชุดข้อมูล",other:"อื่นๆ"},MD_SecurityConstraints:{caption:"ข้อจำกัดด้านความปลอดภัย",classification:"การจำแนก",userNote:"ผู้ใช้งาน",classificationSystem:"ระบบการจำแนก",handlingDescription:"รายละเอียดการจัดการ"},MD_SpatialRepresentationTypeCode:{caption:"ประเภทการแทนที่ข้อมูลเชิงพื้นที่",vector:"เวกเตอร์",grid:"กริด",textTable:"ตารางข้อมูลตัวอักษร",tin:"ข้อมูล TIN",stereoModel:"แบบสเตอริโอ",video:"วิดีโอ"},MD_TopicCategoryCode:{caption:"หัวข้อหมวดหมู่",boundaries:"ขอบเขตการบริหารและการเมืองการปกครอง",farming:"เกษตรกรรมและการทำฟาร์ม",climatologyMeteorologyAtmosphere:"ชั้นบรรยากาศและภูมิอากาศ",biota:"ชีววิทยาและนิเวศวิทยา",economy:"ธุรกิจและเศรษฐกิจ",planningCadastre:"เกี่ยวกับที่ดิน",society:"วัฒนธรรม สังคม และประชากร",elevation:"ระดับความสูงที่ได้รับสินค้า",environment:"สิ่งแวดล้อมและการอนุรักษ์",structure:"โครงสร้างและสิ่งอำนวยความสะดวก",geoscientificInformation:"ทางธรณีวิทยาและธรณีฟิสิกส์",health:"สุขภาพประชากรและโรคภัย",imageryBaseMapsEarthCover:"ภาพถ่ายและแผนที่ฐาน",inlandWaters:"ทรัพยากรน้ำจืด",location:"ตำแหน่ง และโครงข่าย Geodetic",intelligenceMilitary:"ทหาร",oceans:"มหาสมุทรและอ่าว",transportation:"โครงข่ายการคมนาคม",utilitiesCommunication:"สาธารณูปโภค และการสื่อสาร"},MI_ContextCode:{caption:"สิ่งแวดล้อม",acquisition:"การเข้าถือสิทธิ์",pass:"สิ้นสุด",wayPoint:"จุดเส้นทาง"},MI_EnvironmentalRecord:{caption:"สภาพสิ่งแวดล้อม",averageAirTemperature:"อุณหภูมิอากาศโดยเฉลี่ย",maxRelativeHumidity:"ความชื้นสัมพัทธ์สูงสุด",maxAltitude:"ระดับความสูง สูงสุด",meterologicalConditions:"เงื่อนไขอุตุนิยมวิทยา"},MI_Event:{identifier:"ระบุเหตุการณ์",time:"เวลา",expectedObjectiveReference:"วัตถุประสงค์ที่คาดไว้",relatedSensorReference:"เกี่ยวข้องกับเซนเซอร์",relatedPassReference:"เกี่ยวข้องกับทางผ่าน"},MI_GeometryTypeCode:{point:"จุด",linear:"เชิงเส้น",areal:"เชิงพื้นที่",strip:"ทางยาว"},MI_Instrument:{citation:"อ้างอิงตราสาร",identifier:"ตัวบ่งชี้",sType:"ประเภทตราสาร",description:"รายละเอียดตราสาร",mountedOn:"ติดตั้งอยู่",mountedOnPlatformReference:"ติดตั้งบน (แพลตฟอร์มที่ระบุไว้)"},MI_Metadata:{acquisitionInformation:"การเข้าถือสิทธิ์"},MI_Objective:{caption:"วัตถุประสงค์",identifier:"วัตถุประสงค์ที่ระบุ",priority:"ลำดับความสำคัญของเป้าหมาย",sFunction:"ฟังก์ชั่นของวัตถุประสงค์",extent:"ขอบเขต",pass:"ผ่านแพลตฟอร์ม",sensingInstrumentReference:"การตรวจจับตราสาร",objectiveOccurrence:"งานอีเวนท์",sections:{identification:"การวินิจฉัย",extent:"ขอบเขต",pass:"ผ่าน",sensingInstrument:"การตรวจจับตราสาร",objectiveOccurrence:"งานอีเวนท์"}},MI_ObjectiveTypeCode:{caption:"ประเภท (การรวมเทคนิคตามวัตถุประสงค์)",instantaneousCollection:"การเก็บรวบรวมทันที",persistentView:"ดูแบบต่อเนื่อง",survey:"การสำรวจ"},MI_Operation:{caption:"ปฏิบัติการ",description:"รายละเอียดการดำเนินงาน",citation:"การอ้างอิงการดำเนินงาน",identifier:"ตัวบ่งชี้การดำเนินงาน",status:"สถานะการดำเนินงาน",objectiveReference:"วัตถุประสงค์ที่เกี่ยวข้อง (การระบุวัตถุประสงค์)",planReference:"แผนงานที่เกี่ยวข้อง (การระบุแผนงาน)",significantEventReference:"เหตุการณ์ที่เกี่ยวข้อง (การระบุเหตุการณ์)",platformReference:"แพลตฟอร์มที่เกี่ยวข้อง (การระบุแพลตฟอร์ม)",sections:{identification:"การวินิจฉัย",related:"ความเกี่ยวข้อง"}},MI_OperationTypeCode:{caption:"ประเภทการดำเนินงาน",real:"จริง",simulated:"การจำลอง",synthesized:"การสังเคราะห์"},MI_Plan:{sType:"ข้อมูลภูมิศาสตร์ตัวอย่างในการจัดเก็บรวบรวม",status:"สถานะการวางแผน",citation:"การอ้างอิงของผู้มีอำนาจในการรวบรวม",satisfiedRequirementReference:"ความต้องการความพึงพอใจ (ตัวบ่งชี้ความต้องการ)",operationReference:"การดำเนินงานที่เกี่ยวข้อง (ใช้ตัวบ่งชี้)"},MI_Platform:{citation:"การอ้างอิงแพลตฟอร์ม",identifier:"การระบุแพลตฟอร์ม",description:"คำอธิบายแพลตฟอร์มในการสนับสนุนเครื่องมือต่างๆ",sponsor:"หน่วยงานที่เป็นสปอนเซอร์ของแพลตฟอร์ม",instrument:"อุปกรณ์ที่ติดตั้งบนแพลตฟอร์ม",instrumentReference:"การระบุอุปกรณ์",sections:{identification:"การวินิจฉัย",sponsor:"สปอน์เซอร์",instruments:"เครื่องมือ"}},MI_PlatformPass:{identifier:"แพลตฟอร์มผ่านตัวบ่งชี้",extent:"แพลตฟอร์มผ่านขอบเขต",relatedEventReference:"เหตุการณ์ที่เกี่ยวข้อง (ระบุเหตุการณ์)"},MI_PriorityCode:{critical:"สำคัญมาก",highImportance:"ความสำคัญสูงสุด",mediumImportance:"ความสำคัญปานกลาง",lowImportance:"ความสำคัญน้อย"},MI_RequestedDate:{requestedDateOfCollection:"ร้องขอวันที่ในการรวบรวม",latestAcceptableDate:"วันล่าสุดที่ยอมรับได้"},MI_Requirement:{caption:"คุณสมบัติ",citation:"การอ้างอิงวัสดุที่ต้องการ",identifier:"ตัวบ่งชี้ความต้องการ",requestor:"ผู้ร้องขอคุณสมบัติ",recipient:"ผู้รับผลลัพท์ของคุณสมบัติ",priority:"ลำดับความสำคัญตามคุณสมบัติ",requestedDate:"วันที่ขอ",expiryDate:"วันหมดอายุ",satisifiedPlanReference:"แผนเป็นที่น่าพอใจ (ระบุแผน)",sections:{identification:"การวินิจฉัย",requestor:"ร้องขอ",recipient:"ผู้รับ",priorityAndDates:"ความสำคัญ และวันที่",satisifiedPlan:"แผนความพึงพอใจ"}},MI_SequenceCode:{caption:"ลำดับ",start:"เริ่ม",end:"สิ้นสุด",instantaneous:"ทันทีทันใด"},MI_TriggerCode:{caption:"ตัวนำ",automatic:"อัตโนมัติ",manual:"คู่มือ",preProgrammed:"โปรแกรมล่วงหน้า"},ObjectReference:{uuidref:"อ้างอิง UUID",xlinkref:"URL อ้างอิง"},RS_Identifier:{caption:"รหัสพื้นที่ รหัสพลัส",code:"รหัส",codeSpace:"รหัสพื้นที่"},SV_CouplingType:{loose:"ปล่อย",mixed:"ผสม",tight:"แน่น"},SV_OperationMetadata:{operationName:"ชื่อการดำเนินงาน",DCP:"DCP",connectPoint:"จุดเชื่อมต่อ"},SV_ServiceIdentification:{serviceType:"ประเภทการบริการ",couplingType:"ประเภทการเชื่อมต่อ",containsOperations:"การดำเนินการ metadata",operatesOn:"การดำเนินการ"},TM_Primitive:{indeterminatePosition:"ตำแหน่งที่ไม่แน่นอน",indeterminates:{before:"ก่อน",after:"หลัง",now:"ตอนนี้",unknown:"ไม่ทราบ"}},gemet:{concept:{gemetConceptKeyword:"GEMET แนวคิด คำหลัก",tool:"สืบค้น",dialogTitle:"GEMET แนวคิด คำหลัก",searchLabel:"ค้นหา:",searchTip:"ค้นหา GEMET"},theme:{tool:"สืบค้น",dialogTitle:"GEMET – การสร้างแรงบันดาลใจในรูปแบบข้อมูล"},ioerror:"ไม่สามารถเชื่อมต่อการสื่อสารของบริการ GEMET  URL",searching:"กำลังค้นหา GEMET",noMatch:"ไม่พบผลลัพท์ที่เชื่อมโยงกัน",languages:{bg:"บัลกาเรียน",cs:"เช็ก",da:"เดนมาร์ก",nl:"ดัทช์",en:"อังกฤษ",et:"เอสโตเนีย",fi:"ฟินนิช",fr:"ฝรั่งเศส",de:"เยอรมัน",el:"กรีก",hu:"ฮังกาเรียน",ga:"แกลิค (ไอริช)",it:"อิตาเลียน",lv:"ลัตเวีย",lt:"ลิทัวเนีย",mt:"มอลตา",pl:"โปแลนด์",pt:"ภาษาโปรตุเกส",ro:"โรมาเนีย",sk:"สโลวาเนีย",sl:"ภาษาสโลเวเนีย",es:"สเปน",sv:"สวีเดน"}}});