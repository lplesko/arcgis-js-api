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

define({documentTypes:{arcgis:{caption:"ArcGIS metadati",editorCaption:"Metadati",description:""}},emptyOption:"Tukšs",conditionals:{ISO19139A1_ROW4:"Ja metadatu hierarhijas līmenis ir datu kopa, ir nepieciešams ģeogrāfisko robežu lodziņš vai ģeogrāfiskais apraksts.",ISO19139A1_ROW6:"Ir nepieciešams datu kopas identifikators vai datu kopas nosaukums.",ISO19139A1_ROW7:"Ja ir izvēlēti citi ierobežojumi (Other Restrictions), šie citi ierobežojumi (Other Constraints) ir jānorāda.",ISO19139A1_ROW9:"Ja tvērums nav datu kopa vai sērija, ir nepieciešams līmeņa apraksts.",ISO19139A1_ROW10_11_12:"Ja tvērums ir datu kopa vai sērija, ir nepieciešams viens no parametriem: priekšraksts, procesa solis vai datu avots.",ISO19139A1_ROW15:"Ja ir izvēlēta kontrolpunkta pieejamība, ir nepieciešams kontrolpunkta apraksts.",ISO19139A1_ROW18:"Ja ir dokumentēta izplatīšana, ir nepieciešams formāts vai izplatītājs/formāts.",INSPIRE_AccessLimitation:" Ir nepieciešams vismaz viens tiesiskās piekļuves ierobežojuma kods vai drošības klasifikācijas kods. (INSPIRE)",INSPIRE_UseLimitation:" Ir nepieciešams vismaz viens izmantošanas ierobežojums. (INSPIRE)",INSPIRE_ConformanceResult:"Domēnu saderības pārskatam ir nepieciešams standartatbilstības rezultāts. (INSPIRE)",INSPIRE_DomainConsistency:"Ir nepieciešams domēnu saderības pārskats. (INSPIRE)",INSPIRE_LineageStatement:"Ja tvērums ir datu kopa vai sērija, ir nepieciešams izcelšanās apliecinājums. (INSPIRE).",FGDC_DescIfTemporal:"Īslaicīgam pārklājumam ir nepieciešams apraksts. (FGDC)",FGDC_Keywords:"Ir nepieciešams tēmas, taga vai temata atslēgvārds. (FGDC)",FGDC_Reports:"Ir nepieciešami pabeigtības izlaidumu un konceptuālās saderības pārskati. (FGDC)",FGDC_Temporal:"Ir nepieciešams vismaz viens pagaidu pārklājums. (FGDC)",NAP_Contact:"Ir nepieciešama adrese/piegādes punkts, tālruņa/balss numurs vai tiešsaistes resurss/URL. (NAP)",GEN_BoundingBox:"Ir nepieciešams vismaz viens ģeogrāfisko robežu lodziņš.",GEN_ReportResult:"Ir nepieciešams vai nu saderības, vai kvantitatīvais rezultāts.",minLessThanMax:"Minimālajai vērtībai ir jābūt mazākai par maksimālo vērtību."},hints:{integerGreaterThanZero:"(ievadiet veselu skaitli > 0)",integerGreaterThanOne:"(ievadiet veselu skaitli > 1)",integer0To100:"(ievadiet veselu skaitli 0–100)",maxScale:"(ievadiet veselu skaitli > 0, piemēram, 50000)",minScale:"(ievadiet veselu skaitli > 0, piemēram, 150000000)",number0To100:"(ievadiet ciparu 0–100)",number0To360:"(ievadiet ciparu 0–360)",number90To90:"(ievadiet ciparu -90–90)",listOfDoubles:"(ievadiet ciparu sarakstu, atdalot tos ar atstarpi)"},htmlEditor:{button:"Rediģēt..."},sections:{overview:"Pārskats",esri:"Esri",resource:"Resurss",reference:"Atsauce",content:"Saturs",distribution:"Izplatīšana",quality:"Kvalitāte",eainfo:"Lauki",representation:"Attēlojums",metadata:"Metadati"},metadataStyle:{caption:"ArcGIS metadatu stils",changeButton:"Mainīt...",dialogTitle:"Izvēlieties metadatu stilu",updating:"Dokumenta atjaunināšana...","Item Description":"Vienības apraksts","FGDC CSDGM Metadata":"FGDC CSDGM metadati","ISO 19139 Metadata Implementation Specification":"ISO 19139 metadatu ieviešanas specifikācija","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 metadatu ieviešanas specifikācija GML3.2","INSPIRE Metadata Directive":"Metadatu direktīva INSPIRE","North American Profile of ISO19115 2003":"ISO19115 2003 Ziemeļamerikas profils"},aggrInfo:{caption:"Apkopot informāciju",datasetHint:"Ir nepieciešams datu kopas identifikators vai datu kopas nosaukums.",aggrDSIdent:"Datu kopas identifikators",aggrDSName:"Datu kopas nosaukums"},appSchInfo:{caption:"Lietotnes shēma",asName:"Shēmas nosaukums",asSchLang:"Shēmas valoda",asCstLang:"Ierobežojuma valoda",asAscii:"ASCII",asGraFile:"Grafikas fails",asGraFile_src:"Grafikas faila avots",asSwDevFile:"Programmatūras izstrādes fails",asSwDevFile_src:"Programmatūras izstrādes faila avots",asSwDevFiFt:"Programmatūras izstrādes faila formāts"},citation:{caption:"Atsauce",section:{titlesAndDates:"Virsraksti un datumi",links:"Vietrāži URL",identifiers:"Identifikatori",presentation:"Veidlapa",other:"Cits",edition:"Izdevums",series:"Sērija"},conditionalDate:{caption:"Atsauces datums",msg:"Ir nepieciešams viens no šiem: izveides datums, publicēšanas datums vai pārskatīšanas datums.",msg_nap:"Ir nepieciešams atsauces datums."},resTitle:"Nosaukums",resAltTitle:"Alternatīvais virsraksts",collTitle:"Kolektīvais virsraksts",date:{createDate:"Izveides datums",pubDate:"Publicēšanas datums",reviseDate:"Pārskatīšanas datums",notavailDate:"Datums nav pieejams",inforceDate:"Spēkā esamības datums",adoptDate:"Pieņemšanas datums",deprecDate:"Noraidīšanas datums",supersDate:"Aizstāšanas datums"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikators",identCode:"Kods",identAuth:"Atsauce uz iestādēm"},resEd:"Izdevums",resEdDate:"Izdevuma datums",datasetSeries:{seriesName:"Nosaukums",issId:"Laidiens",artPage:"Lapa"},otherCitDet:"Citi dati",contactCaption:"Atsauces kontaktpersona"},cntAddress:{caption:"Adrese",delPoint:"Piegādes punkts",city:"Pilsēta",adminArea:"Administratīvā teritorija",postCode:"Pasta indekss",country:"Valsts",eMailAdd:"E-pasts",addressType:{caption:"Adrešu veidi",postal:"Pasts",physical:"Fizisks",both:"Abi"}},cntOnlineRes:{caption:"Tiešsaistes resurss",linkage:"URL",protocol:"Protokols",appProfile:"Lietotnes profils",orName:"Nosaukums",orDesc:"Apraksts"},cntPhone:{caption:"Telefons",voiceNum:"Balss",faxNum:"Fakss",tddtty:"Telekomunikāciju ierīce nedzirdīgajiem/telefona rakstāmmašīna"},codeRef:{caption:"Identifikators",identCode:"Kods",idCodeSpace:"Koda vieta",idVersion:"Versija",identAuth:"Atsauce uz iestādēm"},constraints:{caption:"Ierobežojumi",useLimit:"Izmantošanas ierobežojums",general:{caption:"Vispārīgi"},legal:{caption:"Legāls",accessConsts:"Piekļuves ierobežojumi",useConsts:"Lietošanas ierobežojumi",othConsts:"Citi ierobežojumi"},security:{caption:"Drošība",classSys:"Klasifikācijas sistēma",userNote:"Lietotāja piezīme",handDesc:"Rīcības apraksts"}},contInfo:{caption:"Satura informācija",section:{CovDesc:"Seguma apraksts",ImgDesc:"Attēla apraksts",FetCatDesc:"Elementu katalogs"},attDesc:"Atribūta apraksts",covDim:{caption:"Diapazons vai josla",seqID:"Secības identifikators",seqIDType:"Secības identifikatora veids",dimDescrp:"Deskriptors"},RangeDim:{caption:"Diapazona izmērs"},Band:{caption:"Josla",minVal:"Minimālā vērtība",maxVal:"Maksimālā vērtība",valUnit:"Vērtības vienības",pkResp:"Maksimālā atbilde",bitsPerVal:"Biti katrā vērtībā",toneGrad:"Toņa gradācija",sclFac:"Mēroga koeficients",offset:"Nobīde"},CovDesc:{caption:"Seguma apraksts",section:{description:"Apraksts",rangesAndBands:"Diapazoni un joslas"}},ImgDesc:{caption:"Attēla apraksts",section:{description:"Apraksts",rangesAndBands:"Diapazoni un joslas"},illElevAng:"Apgaismojuma augstuma leņķis",illAziAng:"Apgaismojuma azimuta leņķis",cloudCovPer:"Mākoņu aizseguma procentuālā attiecība",cmpGenQuan:"Saspiešanas kvalitāte",trianInd:"Vai ir triangulācijas indikators?",radCalDatAv:"Vai ir radiometriskās kalibrēšanas datu pieejamība?",camCalInAv:"Vai ir kameras kalibrēšanas informācijas pieejamība?",filmDistInAv:"Vai ir filmas kropļojuma informācijas pieejamība?",lensDistInAv:"Vai ir objektīva kropļojuma informācijas pieejamība?",imagQuCode:"Kvalitātes kods",prcTypCde:"Apstrādes līmeņa kods"},FetCatDesc:{caption:"Elementu katalogs",section:{description:"Apraksts",featureTypes:"Elementu veidi",citation:"Atsauce"},compCode:"Vai ir atbilstība ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Elementu kataloga atsauce",catFetTyps:{caption:"Elementa veids",genericName:"Nosaukums",codeSpace:"Koda vieta"}}},contact:{caption:"Kontakts",section:{name:"Kontaktpersonas vārds/uzvārds",info:"Kontaktinformācija",hoursAndInstructions:"Stundas un norādījumi"},conditionalName:{caption:"Kontaktpersonas vārds/uzvārds",msg:"Ir nepieciešams viens no šiem: individuālas personas vārds, organizācijas nosaukums vai ieņemamā amata nosaukums.",msg_fgdc:"Ir nepieciešams viens no šiem: individuālas personas vārds vai organizācijas nosaukums."},rpIndName:"Individuālas personas vārds",rpOrgName:"Organizācijas nosaukums",rpPosName:"Ieņemamā amata nosaukums",rpCntInfo:"Kontaktinformācija",cntHours:"Darba laiks",cntInstr:"Kontakta norādījumi"},distInfo:{caption:"Izplatīšanas informācija",section:{format:"Formāts",distributor:"Izplatītājs",transfer:"Pārsūtīšanas opcijas"},distFormat:{caption:"Izplatīšanas formāts",formatName:"Formāta nosaukums",formatVer:"Formāta versija",formatAmdNum:"Grozījuma numurs",formatSpec:"Specifikācija",fileDecmTech:"Atspiešanas tehnika",formatInfo:"Informācijas saturs"},distributor:{caption:"Izplatītājs"},distTranOps:{caption:"Digitālās pārsūtīšanas opcijas",section:{unitsAndSize:"Vienības"},unitsODist:"Izplatīšanas vienības",transSize:"Pārsūtīšanas lielums",offLineMed:{caption:"Bezsaistes līdzeklis",medDensity:"Blīvums",medDenUnits:"Blīvuma vienības",medVol:"Apjomi",medNote:"Līdzekļa piezīme"}},distorOrdPrc:{caption:"Pasūtīšanas process",resFees:"Maksas",planAvDtTm:"Pieejamības datums",planAvTmPd:{caption:"Pieejamības datumu periods",tmBegin:"Sākuma datums/laiks",tmEnd:"Beigu datums/laiks"},ordInstr:"Pasūtīšanas norādijumi",ordTurn:"Apgrieziens"}},dqInfo:{caption:"Datu kvalitāte",section:{scope:"Tvērums",report:"Pārskats",lineage:"Izcelsme"},dqScope:{section:{level:"Līmenis",extent:"Pārklājums"},scpLvl:"Tvēruma līmenis",scpLvlDesc:"Līmeņa apraksts",scpExt:"Tvēruma pārklājums"},report:{section:{measure:"Mērīt",evaluation:"Novērtējums",result:"Rezultāts",conformance:"Standartatbilstība"},measDesc:"Mērīšanas apraksts",measName:"Mērīšanas nosaukums",measDateTm:"Mērīšanas datums",measId:"Mērīšanas identifikators",evalMethDesc:"Novērtēšanas metode",evalProc:"Procedūras atsauce",ConResult:{caption:"Standartatbilstības rezultāts",conExpl:"Skaidrojums",conSpec:"Specifikācija",conPass:{caption:"Pakāpe",_1:"Atbilst",_0:"Neatbilst"}},QuanResult:{caption:"Kvantitatīvais rezultāts",quanVal:"Lielums",quanValType:"Vērtības veids",quanValUnit:"Vērtības vienības",errStat:"Kļūdas statistika"}},dataLineage:{section:{statement:"Apliecinājums",dataSource:"Datu avots",prcStep:"Procesa solis"},statement:"Izcelsmes apliecinājums",dataSource:{caption:"Datu avots",section:{description:"Apraksts",srcRefSys:"Atsauču sistēma",srcExt:"Pārklājums",srcCitatn:"Atsauce"},srcDesc:"Avota apraksts",srcScale:{rfDenom:"Mēroga saucējs"},srcRefSys:"Avota atsauču sistēma",srcExt:"Avota pārklājums",srcCitatn:"Avota atsauce"},prcStep:{caption:"Procesa solis",section:{description:"Apraksts",stepProc:"Apstrādātājs",stepSrc:"Datu avots"},stepDesc:"Procesa apraksts",stepRat:"Loģisks pamats",stepDateTm:"Procesa soļa datums",stepProc:"Apstrādātājs",stepSrc:"Datu avots"}}},eainfo:{caption:"Entītijas un atribūta informācija",section:{detailed:"Detaļas",overview:"Pārskats"},detailed:{caption:"Entītijas un atribūta dati",section:{enttyp:"Entītija",attr:"Atribūti"},enttyp:{caption:"Entītijas veids",enttypl:"Nosaukums",enttypt:"Objekts",enttypc:"Skaits",enttypd:"Definīcija",enttypds:"Definīcijas avots"},attr:{caption:"Atribūts",section:{description:"Apraksts",value:"Vērtība",domain:"Domēns"},attrlabl:"Nosaukums",attalias:"Aizstājvārds",attrdef:"Definīcija",attrdefs:"Definīcijas avots",attrtype:"Veids",attwidth:"Platums",atprecis:"Precizitāte",attscale:"Mērogs",atindex:"Indeksēts",attrvai:{attrva:"Vērtības skaidrojums",attrvae:"Vērtības prezicitāte"},attrmfrq:"Vērtības mērīšanas biežums",begdatea:"Vērtību sākuma datums",enddatea:"Vērtību beigu datums",attrdomv:{caption:"Domēns",edom:{caption:"Uzskaitīts",edomv:"Lielums",edomvd:"Definīcija",edomvds:"Definīcijas avots"},rdom:{caption:"Diapazons",rdommin:"Minimālā vērtība",rdommax:"Maksimālā vērtība",rdommean:"Vidējais",rdomstdv:"Standartnovirze",attrunit:"Vienības",attrmres:"Mērījuma izšķirtspēja"},codesetd:{caption:"Kodu kopa",codesetn:"Nosaukums",codesets:"Avots"},udom:{caption:"Neattēlojams"}}}},overview:{caption:"Pārskats",eaover:"Kopsavilkums",eadetcit:"Atsauce"}},extent:{caption:"Pārklājums",section:{description:"Apraksts",geographic:"Ģeogrāfisks",temporal:"Laikā",vertical:"Vertikāls"},exDesc:"Pārklājuma apraksts",geoEle:{caption:"Ģeogrāfiskais pārklājums",GeoBndBox:{caption:"Robežu lodziņš",esriExtentType:"Vai pārklājums ir meklēšanai?",exTypeCode:"Vai pārklājumā ietilpst resurss?",westBL:"Rietumu robežu garums",eastBL:"Austrumu robežu garums",southBL:"Dienvidu robežu platums",northBL:"Ziemeļu robežu platums"},GeoDesc:{caption:"Ģeogrāfiskais apraksts",exTypeCode:"Vai aprakstā ietilpst resurss?",identCode:"Kods"}},tempEle:{caption:"Pagaidu pārklājums",TM_Period:"Laika periods",TM_Instant:"Laika brīdis",tmPosition:"Datums",tmBegin:"Sākuma datums",tmEnd:"Beigu datums"},vertEle:{caption:"Vertikālais pārklājums",vertMinVal:"Minimālā vērtība",vertMaxVal:"Maksimālā vērtība"}},graphOver:{caption:"Pārlūkot grafiku",bgFileName:"Pārlūkot grafikas URL",bgFileDesc:"Pārlūkot grafikas aprakstu",bgFileType:"Pārlūkot grafikas faila tipu"},keywords:{caption:"Atslēgas vārdi",section:{topicCategory:"Tēma",searchKeys:"Atslēgas vārdi",themeKeys:"Tēma",placeKeys:"Vieta",tempKeys:"Pagaidu",discKeys:"Disciplīna",stratKeys:"Slānis",productKeys:"Produkts",subTopicCatKeys:"Apakštēma",otherKeys:"Cits"},delimited:"Atslēgas vārdi",searchKeys:"Tagi",themeKeys:"Temata atslēgas vārdi",placeKeys:"Vietas atslēgas vārdi",tempKeys:"Pagaidu atslēgas vārdi",discKeys:"Disciplīnas atslēgas vārdi",stratKeys:"Slāņa atslēgas vārdi",productKeys:"Produkta atslēgas vārdi",subTopicCatKeys:"Apakštēmas atslēgas vārdi",otherKeys:"Citi atslēgas vārdi",thesaName:"Tezaura atsauce",thesaLang:"Tezaura valoda"},locales:{caption:"Lokalizācijas",locale:"Lokalizācija",resTitle:"Nosaukums",idAbs:"Kopsavilkums"},maintenance:{caption:"Uzturēšana",section:{frequency:"Frekvence",scope:"Tvērums",note:"Piezīme"},usrDefFreq:"Pielāgots biežums",dateNext:"Nākamā atjaunināšana",maintScp:"Atjaunināt tvērumu",upScpDesc:{caption:"Tvēruma apraksts",attribSet:"Atribūti",attribIntSet:"Atribūta instances",featSet:"Elementi",featIntSet:"Elementa instances",datasetSet:"Datu kopa",other:"Citas instances"},maintNote:"Uzturēšanas piezīme",maintCont:"Uzturēšanas kontaktinformācija"},metadata:{section:{profile:"Profīls",details:"Tvērums"},mdFileID:"Faila identifikators",mdParentID:"Vecāku identifikators",datasetURI:"Datu kopas URI",dataSetFn:"Datu kopas funkcija",mdDateSt:"Metadatu datums",mdLang:"Metadatu valoda",mdChar:"Rakstzīmju kopa",mdHrLv:"Hierarhijas līmenis",mdHrLvName:"Hierarhijas līmeņa nosaukums",mdContact:"Metadatu kontakts",mdMaint:"Metadatu uzturēšana",mdConst:"Metadatu ierobežojumi"},porCatInfo:{caption:"Atveidojuma atsauce"},refSysInfo:{caption:"Telpiskā atskaite"},resource:{section:{citation:"Atsauce",details:"Detaļas",description:"Apraksts",keywords:"Atslēgas vārdi",status:"Statuss",resolution:"Izšķirtspēja",representation:"Attēlojums",browse:"Pārlūkot grafiku",format:"Formāts",usage:"Lietojums",aggregateInfo:"Apkopojums",additional:"Papildu"},idAbs:"Apraksts (abstrakts)",idPurp:"Kopsavilkums (mērķis)",suppInfo:"Papildu informācija",idCredit:"Kredīti",envirDesc:"Apstrādes vide",dataLang:"Resursa valoda",dataExt:"Resursa pārklājums",idPoC:"Kontaktpunkts",resMaint:"Resursa uzturēšana",resConst:"Resursa ierobežojumi",dsFormat:"Resursa formāts",dataScale:{caption:"Datu mērogs",equScale:"Mēroga izšķirtspēja",scaleDist:"Attāluma izšķirtspēja",scaleDist_value:"Distance"},idSpecUse:{caption:"Resursa lietošana",specUsage:"Specifiska lietošana",usageDate:"Lietošanas datums",usrDetLim:"Ierobežojumi",usrCntInfo:"Lietošanas kontakts"}},service:{caption:"Serviss",svType:"Servisa veids",svType_Name:"Nosaukums",svAccProps:"Piekļuves īpašības",svCouplRes:{caption:"Pārī savienotais resurss",svOpName:"Darbības nosaukums",svResCitId:"Resursa identifikators"},svCoupleType:"Savienošanas pārī veids"},scaleRange:{caption:"Mērogu diapazons",maxScale:"Maksimālais mērogs",minScale:"Minmālais mērogs"},spatRepInfo:{caption:"Telpisks attēlojums",section:{dimension:"Izmērs",parameters:"Parametri"},numDims:"Dimensiju skaits",tranParaAv:"Vai ir transformācijas parametra pieejamība?",axisDimension:{caption:"Dimensija",dimSize:"Lielums",dimResol:{caption:"Izšķirtspēja",_value:"Izšķirtspējas vērtība",uom:"Izšķirstpējas vienības"}},VectSpatRep:{caption:"Vektors",geometObjs:"Ģeometriskie objekti",geoObjCnt:"Objektu skaits"},GridSpatRep:{caption:"Tīkls"},Georect:{caption:"Ģeogrāfiski koriģēts",section:{centerPoint:"Centra punkts",cornerPts:"Stūru punkti"},chkPtAv:"Vai ir pārbaudes punkta pieejamība?",chkPtDesc:"Pārbaudes punkta apraksts",ptInPixel:"Punkts pikseļos",transDimDesc:"Transformācijas izmēra apraksts",transDimMap:"Transformācijas izmēra kartēšana",cornerPts:{caption:"Stūra punkts",pos:"Pozīcija",gmlDesc:"Apraksts",gmlDescRef:"Atsauce",gmlIdent:"Identifikators",codeSpace:"Identifikatora koda vieta"}},Georef:{caption:"Ar ģeoatskaiti",ctrlPtAv:"Vai ir pārbaudes punkta pieejamība?",orieParaAv:"Vai ir orientācijas parametra pieejamība?",orieParaDs:"Orientācijas parametra apraksts",georefPars:"Ģeoatskaites parametri",paraCit:"Parametra atsauce"},Indref:{caption:"Netieši"}},booleanOptions:{_false:"Nē",_true:"Jā"},codelist:{CountryCode:"Valsts",LanguageCode:"Valoda",MonetaryUnits:"Naudas vienības",MonetaryUnits_empty:"Bez universālas valūtas",PresentationForm:"FGDC ģeotelpisko datu prezentācijas veidlapa",CI_PresentationFormCode:"Prezentācijas veidlapa",CI_RoleCode:"Loma",CI_OnLineFunctionCode:"Funkcija",IMS_ContentType:"Satura veids",DQ_ElementDimension:"Dimensija",DQ_ElementType:"Pārskata veids",DQ_EvaluationMethodTypeCode:"Novērtēšanas veids",DS_AssociationTypeCode:"Saistības veids",DS_InitiativeTypeCode:"Iniciatīvas veids",LI_SourceType:"Avota veids",MD_CellGeometryCode:"Šūnu ģeometrija",MD_CharacterSetCode:"Rakstzīmju kopa",MD_ClassificationCode:"Klasifikācija",MD_CoverageContentTypeCode:"Satura veids",MD_DimensionNameTypeCode:"Izmēra veids",MD_GeometricObjectTypeCode:"Ģeometriskā objekta veids",MD_ImagingConditionCode:"Attēlveidošanas nosacījums",MD_MaintenanceFrequenceCode:"Atjaunināšanas biežums",MD_MediumFormatCode:"Formāta kods",MD_MediumNameCode:"Vidējais nosaukums",MD_PixelOrientationCode:"Pikseļu orientācija",MD_ProgressCode:"Statuss",MD_RestrictionCode:"Ierobežojuma kods",MD_ScopeCode:"Tvērums",MD_SpatialRepresentationTypeCode:"Telpiskā attēlojuma veids",MD_TopicCategoryCode:"Tēmas kategorija",MD_TopologyLevelCode:"Topoloģijas līmenis",RS_Dimension:"Dimensija",SV_CouplingType:"Savienošanas pārī veids",UCUM:"Vienības",UCUM_Length:"Garuma vienības"}});