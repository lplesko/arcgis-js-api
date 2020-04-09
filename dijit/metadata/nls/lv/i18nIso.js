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

define({documentTypes:{data:{caption:"ISO 19115 (dati)",description:""},service:{caption:"ISO 19119 (serviss)",description:""},gmi:{caption:"ISO 19115-2 (attēlveide un tīklotie dati)",description:""}},general:{reference:"Atsauce"},sections:{metadata:"Metadati",identification:"Identifikācija",distribution:"Izplatīšana",quality:"Kvalitāte",acquisition:"Iegāde"},metadataSection:{identifier:"Identifikators",contact:"Kontakts",date:"Datums",standard:"Standarta",reference:"Atsauce"},identificationSection:{citation:"Atsauce",description:"Apraksts",contact:"Kontakts",thumbnail:"Sīktēls",keywords:"Atslēgas vārdi",constraints:"Ierobežojumi",resource:"Resurss",resourceTab:{representation:"Attēlojums",language:"Valoda",classification:"Klasifikācija",extent:"Pārklājums"},serviceResourceTab:{serviceType:"Servisa veids",extent:"Pārklājums",couplingType:"Savienošanas pārī veids",operation:"Operācija",operatesOn:"Darbojas"}},distributionSection:{},qualitySection:{scope:"Tvērums",conformance:"Standartatbilstība",lineage:"Izcelsme"},acquisitionSection:{requirement:"Prasība",objective:"Objektīvs",instrument:"Instruments",plan:"Plāns",operation:"Operācija",platform:"Platforma",environment:"Vide"},AbstractMD_Identification:{sAbstract:"Abstrakts",purpose:"Mērķis",credit:"Kredīti",pointOfContact:"Kontaktpunkts",resourceMaintenance:"Uzturēšana",graphicOverview:"Grafikas pārskats",descriptiveKeywords:"Atslēgvārdu kolekcija",resourceConstraints:"Ierobežojumi"},CI_Address:{deliveryPoint:"Piegādes punkts",city:"Pilsēta",administrativeArea:"Administratīvā teritorija",postalCode:"Pasta indekss",country:"Valsts",electronicMailAddress:"E-pasta adrese"},CI_Citation:{title:"Nosaukums",alternateTitle:"Alternatīvais virsraksts",identifier:"Universālais resursu identifikators",resource:{title:"Resursa nosaukums",date:"Resursa datums"},specification:{title:"Specifikācijas nosaukums",date:"Specifikācijas datums"}},CI_Contact:{phone:"Telefons",address:"Adrese",onlineResource:"Tiešsaistes resurss",hoursOfService:"Darba laiks",contactInstructions:"Kontakta norādījumi"},CI_Date:{date:"Datums",dateType:"Datuma veids"},CI_DateTypeCode:{caption:"Datuma veids",creation:"Izveides datums",publication:"Publicēšanas datums",revision:"Pārskatīšanas datums"},CI_OnLineFunctionCode:{caption:"Funkcija",download:"Lejupielāde",information:"Informācija",offlineAccess:"Tiešsaistes piekļuve",order:"Secība",search:"Meklēšana"},CI_OnlineResource:{caption:"Tiešsaistes resurss",linkage:"URL",protocol:"Protokols",applicationProfile:"Lietotnes profils",name:"Nosaukums",description:"Apraksts",sFunction:"Funkcija"},CI_ResponsibleParty:{caption:"Kontaktpunkts",individualName:"Individuālas personas vārds",organisationName:"Organizācijas nosaukums",positionName:"Ieņemamā amata nosaukums",contactInfo:"Kontaktinformācija",role:"Loma"},CI_RoleCode:{caption:"Loma",resourceProvider:"Resursu nodrošinātājs",custodian:"Aizbildnis",owner:"Īpašnieks",user:"Lietotājs",distributor:"Izplatītājs",originator:"Iniciators",pointOfContact:"Kontaktpunkts",principalInvestigator:"Galvenais izmeklētājs",processor:"Apstrādātājs",publisher:"Izdevējs",author:"Autors"},CI_Telephone:{voice:"Balss",facsimile:"Fakss"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Web pakalpojumi"},DQ_ConformanceResult:{caption:"Standartatbilstības rezultāts",explanation:"Skaidrojums",degree:{caption:"Pakāpe",validationPerformed:"Pārbaude veikta",conformant:"Atbilst",nonConformant:"Neatbilst"}},DQ_DataQuality:{report:"Pārskats"},DQ_Scope:{level:"Apjoms (attiecas kvalitātes informācija)",levelDescription:"Līmeņa apraksts"},EX_Extent:{caption:"Pārklājums",description:"Apraksts",geographicElement:"Pārklājums telpā",temporalElement:"Pārklājums laikā",verticalElement:"Pārklājums vertikāli"},EX_GeographicBoundingBox:{westBoundLongitude:"Rietumu robežu garums",eastBoundLongitude:"Austrumu robežu garums",southBoundLatitude:"Dienvidu robežu platums",northBoundLatitude:"Ziemeļu robežu platums"},EX_GeographicDescription:{caption:"Ģeogrāfiskais apraksts"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Sākuma datums",endPosition:"Beigu datums"}},EX_VerticalExtent:{minimumValue:"Minimālā vērtība",maximumValue:"Maksimālā vērtība",verticalCRS:"Vertikālais CRS"},Length:{caption:"Garums",uom:"Mērvienības",km:"Kilometri",m:"Metri",mi:"Jūdzes",ft:"Pēdas"},LI_Lineage:{statement:"Izcelsmes apliecinājums"},MD_BrowseGraphic:{fileName:"Pārlūkot grafikas URL",fileDescription:"Pārlūkot grafikas parakstu",fileType:"Pārlūkot grafikas veidu"},MD_ClassificationCode:{unclassified:"Neklasificēts",restricted:"Ierobežots",confidential:"Konfidenciāls",secret:"Noslēpums",topSecret:"Augstākā līmeņa noslēpums"},MD_Constraints:{caption:"Lietojuma ierobežojumi",useLimitation:"Izmantošanas ierobežojums"},MD_DataIdentification:{spatialRepresentationType:"Telpiskā attēlojuma veids",spatialResolution:"Telpiskā izšķirtspēja",language:"Resursa valoda",supplementalInformation:"Papildu"},MD_DigitalTransferOptions:{onLine:"Tiešsaistē"},MD_Distribution:{distributionFormat:"Izplatīšanas formāts",transferOptions:"Pārsūtīšanas opcijas"},MD_Format:{name:"Formāta nosaukums",version:"Formāta versija"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikators",code:"Kods"},MD_Keywords:{delimitedCaption:"Atslēgas vārdi",thesaurusName:"Saistītais tēzaurs"},MD_KeywordTypeCode:{caption:"Atslēgvārda veids",discipline:"Disciplīna",place:"Vieta",stratum:"Noslāņojums",temporal:"Pagaidu",theme:"Tēma"},MD_LegalConstraints:{caption:"Tiesiskie ierobežojumi",accessConstraints:"Piekļuves ierobežojumi",useConstraints:"Lietošanas ierobežojumi",otherConstraints:"Citi ierobežojumi"},MD_MaintenanceFrequencyCode:{caption:"Frekvence",continual:"Ļoti bieži",daily:"Katru dienu",weekly:"Katru nedēļu",fortnightly:"Reizi divās nedēļās",monthly:"Katru mēnesi",quarterly:"Reizi ceturksnī",biannually:"Divas reizes gadā",annually:"Reizi gadā",asNeeded:"Pēc nepieciešamības",irregular:"Neregulāri",notPlanned:"Neplānoti",unknown:"Nezināms"},MD_Metadata:{caption:"Metadati",fileIdentifier:"Faila identifikators",language:"Metadatu valoda",hierarchyLevel:"Hierarhijas līmenis",hierarchyLevelName:"Hierarhijas līmeņa nosaukums",contact:"Metadatu kontakts",dateStamp:"Metadatu datums",metadataStandardName:"Metadatu standarta nosaukums",metadataStandardVersion:"Metadatu standarta versija",referenceSystemInfo:"Atsauču sistēma",identificationInfo:"Identifikācija",distributionInfo:"Izplatīšana",dataQualityInfo:"Kvalitāte"},MD_ProgressCode:{caption:"Progresa kods",completed:"Pabeigts",historicalArchive:"Vēsturiskais arhīvs",obsolete:"Novecojis",onGoing:"Pašlaik notiek",planned:"Plānots",required:"Nepieciešams",underDevelopment:"Izstrādē"},MD_RepresentativeFraction:{denominator:"Saucējs"},MD_Resolution:{equivalentScale:"Ekvivalents mērogs",distance:"Distance"},MD_RestrictionCode:{copyright:"Autortiesības",patent:"Patents",patentPending:"Gaida patenta izsniegšanu",trademark:"Preču zīme",license:"Licence",intellectualPropertyRights:"Intelektuālā īpašuma tiesības",restricted:"Ierobežots",otherRestrictions:"Citi ierobežojumi"},MD_ScopeCode:{attribute:"Atribūts",attributeType:"Atribūta veids",collectionHardware:"Kolekcijas aparatūra",collectionSession:"Kolekcijas sesija",dataset:"Datu kopa",series:"Sērija",nonGeographicDataset:"Datu kopa, kas nav ģeogrāfiska",dimensionGroup:"Izmēru grupa",feature:"Elements",featureType:"Elementa veids",propertyType:"Īpašības veids",fieldSession:"Lauka sesija",software:"Programmatūra",service:"Serviss",model:"Modelis",tile:"Mozaīka"},MD_ScopeDescription:{attributes:"Atribūti",features:"Elementi",featureInstances:"Elementa instances",attributeInstances:"Atribūta instances",dataset:"Datu kopa",other:"Cits"},MD_SecurityConstraints:{caption:"Drošības ierobežojumi",classification:"Klasifikācija",userNote:"Lietotāja piezīme",classificationSystem:"Klasifikācija sistēma",handlingDescription:"Rīcības apraksts"},MD_SpatialRepresentationTypeCode:{caption:"Telpiskā attēlojuma veids",vector:"Vektors",grid:"Tīkls",textTable:"Teksta tabula",tin:"TIN",stereoModel:"Stereo modelis",video:"Video"},MD_TopicCategoryCode:{caption:"Tēmas kategorija",boundaries:"Administratīvās un politiskās robežas",farming:"Lauksaimniecība un lopkopība",climatologyMeteorologyAtmosphere:"Atmosfēra un klimats",biota:"Bioloģija un ekoloģija",economy:"Bizness un ekonomika",planningCadastre:"Kadastrs",society:"Kultūra, sabiedrība un demogrāfija",elevation:"Augstums un izgūtie produkti",environment:"Vide un aizsardzība",structure:"Iekārtas un struktūras",geoscientificInformation:"Ģeoloģija un ģeofizika",health:"Cilvēku veselība un slimības",imageryBaseMapsEarthCover:"Attēlu galerija un pamatkartes",inlandWaters:"Iekšējo ūdeņu resursi",location:"Novietojumi un ģeodēziskie tīkli",intelligenceMilitary:"Militārā joma",oceans:"Okeāni un estuāri",transportation:"Transporta tīkli",utilitiesCommunication:"Komunālie pakalpojumi un komunikācijas"},MI_ContextCode:{caption:"Konteksts",acquisition:"Iegāde",pass:"Pāreja",wayPoint:"Starpposms"},MI_EnvironmentalRecord:{caption:"Vides nosacījumi",averageAirTemperature:"Vidējā gaisa temperatūra",maxRelativeHumidity:"Maksimālais relatīvais mitrums",maxAltitude:"Maksimālais augstums",meterologicalConditions:"Meteoroloģiskie nosacījumi"},MI_Event:{identifier:"Gadījuma identifikators",time:"Laiks",expectedObjectiveReference:"Paredzētais mērķis (mērķa identifikators)",relatedSensorReference:"Saistītais sensors (instrumenta identifikators)",relatedPassReference:"Saistītā pāreja (platformas pārejas identifikators)"},MI_GeometryTypeCode:{point:"Punkts",linear:"Lineārs",areal:"Areāls",strip:"Laukums"},MI_Instrument:{citation:"Instrumenta atsauce",identifier:"Instrumenta identifikators",sType:"Instrumenta veids",description:"Instrumenta apraksts",mountedOn:"Uzstādīts uz:",mountedOnPlatformReference:"Uzstādīts uz (platformas identifikators):"},MI_Metadata:{acquisitionInformation:"Iegāde"},MI_Objective:{caption:"Mērķis",identifier:"Mērķa identifikators",priority:"Mērķa prioritāte",sFunction:"Mērķa funkcija",extent:"Pārklājums",pass:"Platformas pāreja",sensingInstrumentReference:"Noteikšanas instruments (instrumenta identifikators)",objectiveOccurrence:"Notikumi",sections:{identification:"Identifikācija",extent:"Pārklājums",pass:"Pāreja",sensingInstrument:"Noteikšanas instruments",objectiveOccurrence:"Notikumi"}},MI_ObjectiveTypeCode:{caption:"Veids (mērķa kolekcijas tehnika)",instantaneousCollection:"Tūlītēja kolekcija",persistentView:"Pastāvīgs skats",survey:"Aptauja"},MI_Operation:{caption:"Operācija",description:"Darbības apraksts",citation:"Darbības atsauce",identifier:"Darbības identifikators",status:"Darbības statuss",objectiveReference:"Saistītais mērķis (mērķa identifikators)",planReference:"Saistītais plāns (plāna identifikators)",significantEventReference:"Saistītais gadījums (gadījuma identifikators)",platformReference:"Saistītā platforma (platformas identifikators)",sections:{identification:"Identifikācija",related:"Saistīts"}},MI_OperationTypeCode:{caption:"Darbības veids",real:"Reāls",simulated:"Simulēts",synthesized:"Sintezēts"},MI_Plan:{sType:"Paraugu ņemšanas ģeometrija datu vākšanai",status:"Plāna statuss",citation:"Tās iestādes atsauce, kas pieprasīja vākšanu",satisfiedRequirementReference:"Apmierināta prasība (prasības identifikators)",operationReference:"Saistīta darbība (darbības identifikators)"},MI_Platform:{citation:"Platformas atsauce",identifier:"Platformas identifikators",description:"Instrumentu atbalstošās platformas apraksts",sponsor:"Platformas sponsora organizācija",instrument:"Uz platformas uzstādītais(-ie) instruments(-i)",instrumentReference:"Instrumenta identifikators",sections:{identification:"Identifikācija",sponsor:"Sponsors",instruments:"Instrumenti"}},MI_PlatformPass:{identifier:"Platformas pārejas identifikators",extent:"Platformas pārejas pārklājums",relatedEventReference:"Saistītais gadījums (gadījuma identifikators)"},MI_PriorityCode:{critical:"Kritiski",highImportance:"Augsts svarīgums",mediumImportance:"Vidējs svarīgums",lowImportance:"Zems svarīgums"},MI_RequestedDate:{requestedDateOfCollection:"Pieprasītais vākšanas datums",latestAcceptableDate:"Pēdējais pieļaujamais datums"},MI_Requirement:{caption:"Prasības",citation:"Prasību vadlīniju materiāla atsauce",identifier:"Prasības identifikators",requestor:"Prasības pieprasītājs",recipient:"Prasības rezultātu saņēmējs",priority:"Prasības prioritāte",requestedDate:"Pieprasījuma datums",expiryDate:"Derīguma beigu datums",satisifiedPlanReference:"Apmierinātais plāns (plāna identifikators)",sections:{identification:"Identifikācija",requestor:"Pieprasītājs",recipient:"Saņēmējs",priorityAndDates:"Prioritāte un datumi",satisifiedPlan:"Apmierinātais plāns"}},MI_SequenceCode:{caption:"Sekvence",start:"Sākums",end:"Beigas",instantaneous:"Tūlītēji"},MI_TriggerCode:{caption:"Aktivizēt",automatic:"Automātisks",manual:"Manuāli",preProgrammed:"Iepriekš programmēts"},ObjectReference:{uuidref:"UUID atsauce",xlinkref:"URL atsauce"},RS_Identifier:{caption:"ID plus koda vieta",code:"Kods",codeSpace:"Koda vieta"},SV_CouplingType:{loose:"Brīvs",mixed:"Jaukts",tight:"Ciešs"},SV_OperationMetadata:{operationName:"Darbības nosaukums",DCP:"DCP",connectPoint:"Savienojuma punkts"},SV_ServiceIdentification:{serviceType:"Servisa veids",couplingType:"Savienošanas pārī veids",containsOperations:"Darbības metadati",operatesOn:"Darbojas šeit:"},TM_Primitive:{indeterminatePosition:"Nenoteikta pozīcija",indeterminates:{before:"Pirms",after:"Pēc",now:"Tagad",unknown:"Nezināms"}},gemet:{concept:{gemetConceptKeyword:"GEMET koncepcijas atslēgvārds",tool:"Uzmeklēt...",dialogTitle:"GEMET — koncepcijas atslēgvārds",searchLabel:"Meklēt:",searchTip:"Meklēt GEMET"},theme:{tool:"Uzmeklēt...",dialogTitle:"GEMET — ietekmējošā datu tēma"},ioerror:"Radās saziņas kļūda ar GEMET servisu: {url}",searching:"Tiek meklēts GEMET...",noMatch:"Nav atrasti atbilstoši rezultāti.",languages:{bg:"Bulgāru",cs:"Čehu",da:"Dāņu",nl:"Holandiešu",en:"Angļu",et:"Igauņu",fi:"Somu",fr:"Franču",de:"Vācu",el:"Grieķu",hu:"Ungāru",ga:"Gēlu (īru)",it:"Itāliešu",lv:"Latviešu",lt:"Lietuviešu",mt:"Maltiešu",pl:"Poļu",pt:"Portugāļu",ro:"Rumāņu",sk:"Slovāku",sl:"Slovēņu",es:"Spāņu",sv:"Zviedru"}}});