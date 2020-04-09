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

define({documentTypes:{arcgis:{caption:"ArcGIS Metadata",editorCaption:"Metadata",description:""}},emptyOption:"Prázdná",conditionals:{ISO19139A1_ROW4:"Pokud úroveň hierarchie metadat odpovídá datové sadě, je vyžadován geografický ohraničující obal nebo geografický popis.",ISO19139A1_ROW6:"Je vyžadován identifikátor datové sady nebo název datové sady.",ISO19139A1_ROW7:"V případě volby možnosti Další omezení je třeba zadat jiná omezení.",ISO19139A1_ROW9:"Pokud oblast neodpovídá datové sadě, případně řadě, je vyžadován popis úrovně.",ISO19139A1_ROW10_11_12:"Pokud oblast odpovídá datové sadě, případně řadě, je vyžadována jedna z těchto položek: prohlášení, krok procesu nebo zdroj dat.",ISO19139A1_ROW15:"V případě výběru možnosti Dostupnost kontrolních bodů je vyžadován popis kontrolního bodu.",ISO19139A1_ROW18:"Je-li zdokumentována distribuce, je vyžadována položka Formát nebo Distributor/formát.",INSPIRE_AccessLimitation:" Je vyžadován alespoň jeden kód právních omezení přístupu nebo kód klasifikace bezpečnostních opatření. (INSPIRE)",INSPIRE_UseLimitation:" Je vyžadováno alespoň jedno omezení použití. (INSPIRE)",INSPIRE_ConformanceResult:"Pro zprávu o konzistenci domény je vyžadován výsledek shody. (INSPIRE)",INSPIRE_DomainConsistency:"Je vyžadována zpráva o konzistenci domény. (INSPIRE)",INSPIRE_LineageStatement:"Pokud oblast odpovídá datové sadě, případně řadě, je vyžadováno prohlášení o původu. (INSPIRE).",FGDC_DescIfTemporal:"Pro časový rozsah je vyžadován popis. (FGDC)",FGDC_Keywords:"Je vyžadováno téma, značka nebo klíčové slovo. (FGDC)",FGDC_Reports:"Je vyžadována zpráva o chybějících položkách a zpráva o koncepční konzistenci. (FGDC)",FGDC_Temporal:"Je vyžadován alespoň jeden časový rozsah. (FGDC)",NAP_Contact:"Je vyžadována adresa/místo doručení, telefonní číslo nebo online zdroj/adresa URL. (NAP)",GEN_BoundingBox:"Je třeba zadat alespoň jeden geografický ohraničující obal.",GEN_ReportResult:"Je vyžadován buď výsledek shody, nebo kvantitativní výsledek.",minLessThanMax:"Minimální hodnota musí být nižší než maximální hodnota."},hints:{integerGreaterThanZero:"(zadejte celé číslo > 0)",integerGreaterThanOne:"(zadejte celé číslo > 1)",integer0To100:"(zadejte celé číslo 0–100)",maxScale:"(zadejte celé číslo > 0, např. 50 000)",minScale:"(zadejte celé číslo > 0, např. 150 000 000)",number0To100:"(zadejte číslo 0–100)",number0To360:"(zadejte číslo 0–360)",number90To90:"(zadejte číslo v rozsahu −90 až 90)",listOfDoubles:"(zadejte seznam čísel, jednotlivé položky oddělte mezerami)"},htmlEditor:{button:"Upravit…"},sections:{overview:"Přehled",esri:"Esri",resource:"Zdroj",reference:"Reference",content:"Obsah",distribution:"Distribuce",quality:"Kvalita",eainfo:"Pole",representation:"Kartografická reprezentace",metadata:"Metadata"},metadataStyle:{caption:"Styl ArcGIS metadata",changeButton:"Změnit…",dialogTitle:"Zvolit styl metadat",updating:"Aktualizace dokumentu…","Item Description":"Popis položky","FGDC CSDGM Metadata":"Metadata FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"Specifikace implementace metadat podle ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Specifikace implementace metadat podle ISO 19139 GML3.2","INSPIRE Metadata Directive":"Směrnice o metadatech INSPIRE","North American Profile of ISO19115 2003":"Severoamerický profil ISO19115 2003"},aggrInfo:{caption:"Souhrnné informace",datasetHint:"Je vyžadován identifikátor datové sady nebo název datové sady.",aggrDSIdent:"Identifikátor datové sady",aggrDSName:"Název datové sady"},appSchInfo:{caption:"Aplikační schéma",asName:"Název schématu",asSchLang:"Jazyk schématu",asCstLang:"Jazyk omezení",asAscii:"ASCII",asGraFile:"Grafický soubor",asGraFile_src:"Zdroj grafického souboru",asSwDevFile:"Soubor vývoje softwaru",asSwDevFile_src:"Zdroj souboru vývoje softwaru",asSwDevFiFt:"Formát souboru vývoje softwaru"},citation:{caption:"Citace",section:{titlesAndDates:"Názvy a data",links:"Adresy URL",identifiers:"Identifikátory",presentation:"Formulář",other:"Další",edition:"Vydání",series:"Řada"},conditionalDate:{caption:"Datum citace",msg:"Je vyžadována jedna z těchto položek: datum vytvoření, datum zveřejnění nebo datum revize.",msg_nap:"Je vyžadováno datum citace."},resTitle:"Nadpis",resAltTitle:"Alternativní název",collTitle:"Kolektivní název",date:{createDate:"Datum vytvoření",pubDate:"Datum zveřejnění",reviseDate:"Datum revize",notavailDate:"Datum není k dispozici.",inforceDate:"Platné datum",adoptDate:"Datum přijetí",deprecDate:"Datum ukončení",supersDate:"Datum nahrazení"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikátor",identCode:"Kód",identAuth:"Citace autority"},resEd:"Vydání",resEdDate:"Datum vydání",datasetSeries:{seriesName:"Jméno",issId:"Vydání",artPage:"Stránka"},otherCitDet:"Další podrobnosti",contactCaption:"Kontakt v citaci"},cntAddress:{caption:"Adresa",delPoint:"Místo doručení",city:"Město",adminArea:"Správní oblast",postCode:"PSČ",country:"Země",eMailAdd:"E-mail",addressType:{caption:"Typ adresy",postal:"Poštovní",physical:"Fyzická",both:"Obojí"}},cntOnlineRes:{caption:"Online zdroj",linkage:"Adresa URL",protocol:"Protokol",appProfile:"Profil aplikace",orName:"Jméno",orDesc:"Popis"},cntPhone:{caption:"Telefon",voiceNum:"Hlas",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifikátor",identCode:"Kód",idCodeSpace:"Prostor kódu",idVersion:"Verze",identAuth:"Citace autority"},constraints:{caption:"Omezení",useLimit:"Omezení použití",general:{caption:"Obecné"},legal:{caption:"Právní informace",accessConsts:"Omezení přístupu",useConsts:"Omezení použití",othConsts:"Jiná omezení"},security:{caption:"Zabezpečení",classSys:"Systém klasifikace",userNote:"Poznámka uživatele",handDesc:"Popis manipulace"}},contInfo:{caption:"Informace o obsahu",section:{CovDesc:"Popis pokrytí",ImgDesc:"Popis obrazu",FetCatDesc:"Katalog prvků"},attDesc:"Popis atributu",covDim:{caption:"Rozsah nebo pásmo",seqID:"Posloupný identifikátor",seqIDType:"Typ posloupného identifikátoru",dimDescrp:"Popisovač"},RangeDim:{caption:"Rozměr rozsahu"},Band:{caption:"Pásmo",minVal:"Minimální hodnota",maxVal:"Maximální hodnota",valUnit:"Jednotky hodnoty",pkResp:"Maximální citlivost",bitsPerVal:"Bitů na hodnotu",toneGrad:"Stupňování tónů",sclFac:"Měřítkový faktor",offset:"Odsazené"},CovDesc:{caption:"Popis pokrytí",section:{description:"Popis",rangesAndBands:"Rozsahy a pásma"}},ImgDesc:{caption:"Popis obrazu",section:{description:"Popis",rangesAndBands:"Rozsahy a pásma"},illElevAng:"Výškový úhel osvětlení",illAziAng:"Azimutální úhel osvětlení",cloudCovPer:"Procentuální pokrytí oblaky",cmpGenQuan:"Kvalita komprese",trianInd:"Indikátor triangulace?",radCalDatAv:"Dostupnost dat radiometrické kalibrace?",camCalInAv:"Dostupnost informací o kalibraci fotoaparátu?",filmDistInAv:"Dostupnost informací o zkreslení filmu?",lensDistInAv:"Dostupnost informací o zkreslení objektivu?",imagQuCode:"Kód kvality",prcTypCde:"Kód úrovně zpracování"},FetCatDesc:{caption:"Katalog prvků",section:{description:"Popis",featureTypes:"Typy prvků",citation:"Citace"},compCode:"Vyhovuje normě ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citace katalogu prvků",catFetTyps:{caption:"Typ prvku",genericName:"Jméno",codeSpace:"Prostor kódu"}}},contact:{caption:"Kontakt",section:{name:"Kontaktní jméno",info:"Kontaktní informace:",hoursAndInstructions:"Hodiny a pokyny"},conditionalName:{caption:"Kontaktní jméno",msg:"Je vyžadována jedna z těchto položek: jméno osoby, název organizace nebo název pozice.",msg_fgdc:"Je vyžadována jedna z těchto položek: jméno osoby nebo název organizace."},rpIndName:"Jméno osoby",rpOrgName:"Název organizace",rpPosName:"Název pozice",rpCntInfo:"Kontaktní informace:",cntHours:"Provozní doba",cntInstr:"Pokyny pro kontakt"},distInfo:{caption:"Distribuční informace",section:{format:"Formát",distributor:"Distributor",transfer:"Možnosti převodu"},distFormat:{caption:"Distribuční formát",formatName:"Název formátu",formatVer:"Verze formátu",formatAmdNum:"Doplňkové číslo",formatSpec:"Specifikace",fileDecmTech:"Způsob dekomprese",formatInfo:"Obsah informací"},distributor:{caption:"Distributor"},distTranOps:{caption:"Možnosti digitálního přenosu",section:{unitsAndSize:"Jednotky"},unitsODist:"Jednotky distribuce",transSize:"Velikost přenosu",offLineMed:{caption:"Offline médium",medDensity:"Hustota",medDenUnits:"Jednotky hustoty",medVol:"Svazky",medNote:"Poznámka o médiu"}},distorOrdPrc:{caption:"Proces objednávky",resFees:"Poplatky",planAvDtTm:"Datum dostupnosti",planAvTmPd:{caption:"Období data dostupnosti",tmBegin:"Počáteční datum / čas",tmEnd:"Koncové datum / čas"},ordInstr:"Pokyny pro objednání",ordTurn:"Obrat"}},dqInfo:{caption:"Kvalita dat",section:{scope:"Oblast",report:"Zpráva",lineage:"Původ"},dqScope:{section:{level:"Úroveň",extent:"Rozsah"},scpLvl:"Úroveň oblasti",scpLvlDesc:"Úroveň popisu",scpExt:"Rozsah oblasti"},report:{section:{measure:"Měření",evaluation:"Vyhodnocení",result:"Výsledek",conformance:"Shoda"},measDesc:"Popis měření",measName:"Název měření",measDateTm:"Datum měření",measId:"Identifikátor měření",evalMethDesc:"Metoda vyhodnocení",evalProc:"Citace postupu",ConResult:{caption:"Výsledek shody",conExpl:"Vysvětlení",conSpec:"Specifikace",conPass:{caption:"Stupeň",_1:"Shoduje se",_0:"Neshoduje se"}},QuanResult:{caption:"Kvantitativní výsledek",quanVal:"Hodnota",quanValType:"Typ hodnoty",quanValUnit:"Jednotky hodnoty",errStat:"Statistika chyb"}},dataLineage:{section:{statement:"Prohlášení",dataSource:"Zdroj dat",prcStep:"Krok procesu"},statement:"Prohlášení o původu",dataSource:{caption:"Zdroj dat",section:{description:"Popis",srcRefSys:"Referenční systém",srcExt:"Rozsah",srcCitatn:"Citace"},srcDesc:"Popis zdroje",srcScale:{rfDenom:"Jmenovatel měřítka"},srcRefSys:"Zdrojový referenční systém",srcExt:"Rozsah zdroje",srcCitatn:"Citace zdroje"},prcStep:{caption:"Krok procesu",section:{description:"Popis",stepProc:"Zpracovatel",stepSrc:"Zdroj dat"},stepDesc:"Popis zpracování",stepRat:"Zdůvodnění",stepDateTm:"Datum kroku procesu",stepProc:"Zpracovatel",stepSrc:"Zdroj dat"}}},eainfo:{caption:"Informace o entitách a atributech",section:{detailed:"Podrobnosti",overview:"Přehled"},detailed:{caption:"Podrobnosti o entitách a atributech",section:{enttyp:"Entita",attr:"Atributy"},enttyp:{caption:"Typ entity",enttypl:"Popisek",enttypt:"Objekt",enttypc:"Počet",enttypd:"Definice",enttypds:"Zdroj definice"},attr:{caption:"Atribut",section:{description:"Popis",value:"Hodnota",domain:"Doména"},attrlabl:"Popisek",attalias:"Alternativní jméno",attrdef:"Definice",attrdefs:"Zdroj definice",attrtype:"Typ",attwidth:"Šířka",atprecis:"Přesnost",attscale:"Měřítko",atindex:"Indexováno",attrvai:{attrva:"Vysvětlení hodnoty",attrvae:"Přesnost hodnot"},attrmfrq:"Četnost měření hodnoty",begdatea:"Počáteční datum hodnot",enddatea:"Koncové datum hodnot",attrdomv:{caption:"Doména",edom:{caption:"Číselná",edomv:"Hodnota",edomvd:"Definice",edomvds:"Zdroj definice"},rdom:{caption:"Rozsah",rdommin:"Minimální hodnota",rdommax:"Maximální hodnota",rdommean:"Průměr",rdomstdv:"Směrodatná odchylka",attrunit:"Jednotky",attrmres:"Rozlišení měření"},codesetd:{caption:"Sada kódů",codesetn:"Jméno",codesets:"Zdroj"},udom:{caption:"Nereprezentovatelná"}}}},overview:{caption:"Přehled",eaover:"Shrnutí",eadetcit:"Citace"}},extent:{caption:"Rozsah",section:{description:"Popis",geographic:"Geografický",temporal:"Časový",vertical:"Výškový"},exDesc:"Popis rozsahu",geoEle:{caption:"Geografický rozsah",GeoBndBox:{caption:"Ohraničující obal",esriExtentType:"Rozsah je určen pro vyhledávání?",exTypeCode:"Rozsah obsahuje zdroj?",westBL:"Západní ohraničující zeměpisná délka",eastBL:"Východní ohraničující zeměpisná délka",southBL:"Jižní ohraničující zeměpisná šířka",northBL:"Severní ohraničující zeměpisná šířka"},GeoDesc:{caption:"Geografický popis",exTypeCode:"Popis obsahuje zdroj?",identCode:"Kód"}},tempEle:{caption:"Časový rozsah",TM_Period:"Časové období",TM_Instant:"Časový okamžik",tmPosition:"Datum",tmBegin:"Počáteční datum",tmEnd:"Datum ukončení"},vertEle:{caption:"Výškový rozsah",vertMinVal:"Minimální hodnota",vertMaxVal:"Maximální hodnota"}},graphOver:{caption:"Procházet grafiku",bgFileName:"Procházet adresu URL grafiky",bgFileDesc:"Procházet popis grafiky",bgFileType:"Procházet typ grafického souboru"},keywords:{caption:"Klíčová slova",section:{topicCategory:"Téma",searchKeys:"Klíčová slova",themeKeys:"Téma",placeKeys:"Místo",tempKeys:"Časové",discKeys:"Obor",stratKeys:"Vrstva",productKeys:"Produkt",subTopicCatKeys:"Dílčí téma",otherKeys:"Další"},delimited:"Klíčová slova",searchKeys:"Klíčová slova",themeKeys:"Klíčová slova týkající se motivu",placeKeys:"Klíčová slova týkající se lokality",tempKeys:"Klíčová slova týkající se času/data",discKeys:"Klíčová slova týkající se oboru",stratKeys:"Klíčová slova týkající se vrstvy",productKeys:"Klíčová slova týkající se produktu",subTopicCatKeys:"Klíčová slova týkající se dílčího tématu",otherKeys:"Další klíčová slova",thesaName:"Citace tezauru",thesaLang:"Jazyk tezauru"},locales:{caption:"Jazyky",locale:"Jazyk",resTitle:"Nadpis",idAbs:"Shrnutí"},maintenance:{caption:"Maintenance",section:{frequency:"Frekvence",scope:"Oblast",note:"Poznámka"},usrDefFreq:"Uživatelská četnost",dateNext:"Příští aktualizace",maintScp:"Aktualizovat oblast",upScpDesc:{caption:"Popis oblasti",attribSet:"Atributy",attribIntSet:"Instance atributů",featSet:"Prvky",featIntSet:"Instance prvku",datasetSet:"Datová sada",other:"Další instance"},maintNote:"Poznámka ohledně maintenance",maintCont:"Kontakt pro maintenance"},metadata:{section:{profile:"Profil",details:"Oblast"},mdFileID:"Identifikátor souboru",mdParentID:"Identifikátor rodiče",datasetURI:"URI datové sady",dataSetFn:"Funkce datové sady",mdDateSt:"Datum metadat",mdLang:"Jazyk metadat",mdChar:"Znaková sada",mdHrLv:"Úroveň hierarchie",mdHrLvName:"Název úrovně hierarchie",mdContact:"Kontakt metadat",mdMaint:"Maintenance metadat",mdConst:"Omezení metadat"},porCatInfo:{caption:"Citace zobrazení"},refSysInfo:{caption:"Souřadnicový systém"},resource:{section:{citation:"Citace",details:"Podrobnosti",description:"Popis",keywords:"Klíčová slova",status:"Stav",resolution:"Rozlišení",representation:"Kartografická reprezentace",browse:"Procházet grafiku",format:"Formát",usage:"Použití",aggregateInfo:"Seskupení",additional:"Další"},idAbs:"Popis (abstrakt)",idPurp:"Shrnutí (účel)",suppInfo:"Doplňkové informace",idCredit:"Zdroj (autoři)",envirDesc:"Prostředí zpracování",dataLang:"Jazyk zdrojů",dataExt:"Rozsah zdrojů",idPoC:"Kontaktní místo",resMaint:"Maintenance zdroje",resConst:"Omezení zdroje",dsFormat:"Formát zdroje",dataScale:{caption:"Měřítko dat",equScale:"Rozlišení měřítka",scaleDist:"Rozlišení vzdálenosti",scaleDist_value:"Vzdálenost"},idSpecUse:{caption:"Využití zdrojů",specUsage:"Specifické použití",usageDate:"Datum použití",usrDetLim:"Omezení",usrCntInfo:"Kontakt pro použití"}},service:{caption:"Služba",svType:"Typ služby",svType_Name:"Jméno",svAccProps:"Vlastnosti přístupu",svCouplRes:{caption:"Vázaný zdroj",svOpName:"Název operace",svResCitId:"Identifikátor zdroje"},svCoupleType:"Typ vazby"},scaleRange:{caption:"Rozsah měřítka",maxScale:"Maximální měřítko",minScale:"Minimální měřítko"},spatRepInfo:{caption:"Prostorová kartografická reprezentace",section:{dimension:"Rozměr",parameters:"Parametry"},numDims:"Počet rozměrů",tranParaAv:"Dostupnost parametrů transformace?",axisDimension:{caption:"Rozměr",dimSize:"Velikost",dimResol:{caption:"Rozlišení",_value:"Hodnota rozlišení",uom:"Jednotky rozlišení"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometrické objekty",geoObjCnt:"Počet objektů"},GridSpatRep:{caption:"Mřížka"},Georect:{caption:"Georektifikovaná",section:{centerPoint:"Středový bod",cornerPts:"Rohové body"},chkPtAv:"Dostupnost kontrolních bodů?",chkPtDesc:"Popis kontrolního bodu",ptInPixel:"Bod v pixelu",transDimDesc:"Popis rozměrů při transformaci",transDimMap:"Mapování rozměrů při transformaci",cornerPts:{caption:"Rohový bod",pos:"Pozice",gmlDesc:"Popis",gmlDescRef:"Reference",gmlIdent:"Identifikátor",codeSpace:"Identifikátor prostorového kódu"}},Georef:{caption:"Georeferencovatelná",ctrlPtAv:"Dostupnost řídicích bodů?",orieParaAv:"Dostupnost parametrů orientace?",orieParaDs:"Popis parametru orientace",georefPars:"Georeferencované parametry",paraCit:"Citace parametru"},Indref:{caption:"Nepřímá"}},booleanOptions:{_false:"Ne",_true:"Ano"},codelist:{CountryCode:"Země",LanguageCode:"Jazyk",MonetaryUnits:"Měnové jednotky",MonetaryUnits_empty:"Bez univerzální měny",PresentationForm:"Prezentační formulář geoprostorových dat FGDC",CI_PresentationFormCode:"Prezentační formulář",CI_RoleCode:"Role",CI_OnLineFunctionCode:"Funkce",IMS_ContentType:"Typ obsahu",DQ_ElementDimension:"Rozměr",DQ_ElementType:"Typ zprávy",DQ_EvaluationMethodTypeCode:"Typ vyhodnocení",DS_AssociationTypeCode:"Typ přidružení",DS_InitiativeTypeCode:"Typ podnětu",LI_SourceType:"Typ zdroje",MD_CellGeometryCode:"Geometrie buněk",MD_CharacterSetCode:"Znaková sada",MD_ClassificationCode:"Klasifikace",MD_CoverageContentTypeCode:"Typ obsahu",MD_DimensionNameTypeCode:"Typ rozměru",MD_GeometricObjectTypeCode:"Typ geometrického objektu",MD_ImagingConditionCode:"Obrazová podmínka",MD_MaintenanceFrequenceCode:"Četnost aktualizací",MD_MediumFormatCode:"Kód formátu",MD_MediumNameCode:"Název média",MD_PixelOrientationCode:"Orientace pixelů",MD_ProgressCode:"Stav",MD_RestrictionCode:"Kód omezení",MD_ScopeCode:"Oblast",MD_SpatialRepresentationTypeCode:"Typ prostorové kartografické reprezentace",MD_TopicCategoryCode:"Kategorie tématu",MD_TopologyLevelCode:"Úroveň topologie",RS_Dimension:"Rozměr",SV_CouplingType:"Typ vazby",UCUM:"Jednotky",UCUM_Length:"Jednotky vzdálenosti"}});