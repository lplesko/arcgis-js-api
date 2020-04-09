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

define({documentTypes:{data:{caption:"ISO 19115 (data)",description:""},service:{caption:"ISO 19119 (služba)",description:""},gmi:{caption:"ISO 19115-2 (snímky a data v mřížce)",description:""}},general:{reference:"Reference"},sections:{metadata:"Metadata",identification:"Identifikace",distribution:"Distribuce",quality:"Kvalita",acquisition:"Akvizice"},metadataSection:{identifier:"Identifikátor",contact:"Kontakt",date:"Datum",standard:"Standardní",reference:"Reference"},identificationSection:{citation:"Citace",description:"Popis",contact:"Kontakt",thumbnail:"Miniatura",keywords:"Klíčová slova",constraints:"Omezení",resource:"Zdroj",resourceTab:{representation:"Kartografická reprezentace",language:"Jazyk",classification:"Klasifikace",extent:"Rozsah"},serviceResourceTab:{serviceType:"Typ služby",extent:"Rozsah",couplingType:"Typ vazby",operation:"Operace",operatesOn:"Pracuje v"}},distributionSection:{},qualitySection:{scope:"Oblast",conformance:"Shoda",lineage:"Původ"},acquisitionSection:{requirement:"Požadavek",objective:"Cíl",instrument:"Nástroj",plan:"Plán",operation:"Operace",platform:"Platforma",environment:"Životní prostředí"},AbstractMD_Identification:{sAbstract:"Abstrakt",purpose:"Účel",credit:"Zdroj (autoři)",pointOfContact:"Kontaktní místo",resourceMaintenance:"Maintenance",graphicOverview:"Grafický přehled",descriptiveKeywords:"Kolekce klíčových slov",resourceConstraints:"Omezení"},CI_Address:{deliveryPoint:"Místo doručení",city:"Město",administrativeArea:"Správní oblast",postalCode:"PSČ",country:"Země",electronicMailAddress:"E-mailová adresa"},CI_Citation:{title:"Nadpis",alternateTitle:"Alternativní název",identifier:"Jednotný identifikátor zdroje",resource:{title:"Název zdroje",date:"Datum zdroje"},specification:{title:"Název specifikace",date:"Datum specifikace"}},CI_Contact:{phone:"Telefon",address:"Adresa",onlineResource:"Online zdroj",hoursOfService:"Provozní doba",contactInstructions:"Pokyny pro kontakt"},CI_Date:{date:"Datum",dateType:"Typ data"},CI_DateTypeCode:{caption:"Typ data",creation:"Datum vytvoření",publication:"Datum zveřejnění",revision:"Datum revize"},CI_OnLineFunctionCode:{caption:"Funkce",download:"Stahování",information:"Informace",offlineAccess:"Offline přístup",order:"Pořadí",search:"Hledat"},CI_OnlineResource:{caption:"Online zdroj",linkage:"Adresa URL",protocol:"Protokol",applicationProfile:"Profil aplikace",name:"Jméno",description:"Popis",sFunction:"Funkce"},CI_ResponsibleParty:{caption:"Kontaktní místo",individualName:"Jméno osoby",organisationName:"Název organizace",positionName:"Název pozice",contactInfo:"Kontaktní informace",role:"Role"},CI_RoleCode:{caption:"Role",resourceProvider:"Poskytovatel zdroje",custodian:"Správce",owner:"Vlastník",user:"Uživatel",distributor:"Distributor",originator:"Původce",pointOfContact:"Kontaktní místo",principalInvestigator:"Hlavní badatel",processor:"Zpracovatel",publisher:"Vydavatel",author:"Autor"},CI_Telephone:{voice:"Hlas",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Výsledek shody",explanation:"Vysvětlení",degree:{caption:"Stupeň",validationPerformed:"Ověření provedeno",conformant:"Shoduje se",nonConformant:"Neshoduje se"}},DQ_DataQuality:{report:"Zpráva"},DQ_Scope:{level:"Rozsah (jehož se týkají informace o kvalitě)",levelDescription:"Úroveň popisu"},EX_Extent:{caption:"Rozsah",description:"Popis",geographicElement:"Prostorový rozsah",temporalElement:"Časový rozsah",verticalElement:"Výškový rozsah"},EX_GeographicBoundingBox:{westBoundLongitude:"Západní ohraničující zeměpisná délka",eastBoundLongitude:"Východní ohraničující zeměpisná délka",southBoundLatitude:"Jižní ohraničující zeměpisná šířka",northBoundLatitude:"Severní ohraničující zeměpisná šířka"},EX_GeographicDescription:{caption:"Geografický popis"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Počáteční datum",endPosition:"Datum ukončení"}},EX_VerticalExtent:{minimumValue:"Minimální hodnota",maximumValue:"Maximální hodnota",verticalCRS:"Výškový souřadnicový systém"},Length:{caption:"Délka",uom:"Jednotky měření",km:"Kilometry",m:"Metry",mi:"Míle",ft:"Stopy"},LI_Lineage:{statement:"Prohlášení o původu"},MD_BrowseGraphic:{fileName:"Procházet adresu URL grafiky",fileDescription:"Procházet popisek grafiky",fileType:"Procházet typ grafiky"},MD_ClassificationCode:{unclassified:"Neklasifikované",restricted:"Omezené",confidential:"Důvěrné",secret:"Tajné",topSecret:"Přísně tajné"},MD_Constraints:{caption:"Omezení použití",useLimitation:"Omezení použití"},MD_DataIdentification:{spatialRepresentationType:"Typ prostorové kartografické reprezentace",spatialResolution:"Prostorové rozlišení",language:"Jazyk zdrojů",supplementalInformation:"Doplňkové"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Distribuční formát",transferOptions:"Možnosti převodu"},MD_Format:{name:"Název formátu",version:"Verze formátu"},MD_Identifier:{caption:"URI",identifierCaption:"Identifikátor",code:"Kód"},MD_Keywords:{delimitedCaption:"Klíčová slova",thesaurusName:"Přidružený tezaurus"},MD_KeywordTypeCode:{caption:"Typ klíčového slova",discipline:"Obor",place:"Místo",stratum:"Vrstva",temporal:"Časové",theme:"Téma"},MD_LegalConstraints:{caption:"Právní omezení",accessConstraints:"Omezení přístupu",useConstraints:"Omezení použití",otherConstraints:"Jiná omezení"},MD_MaintenanceFrequencyCode:{caption:"Frekvence",continual:"Kontinuálně",daily:"Denně",weekly:"Týdně",fortnightly:"Čtrnáctidenně",monthly:"Měsíčně",quarterly:"Čtvrtletně",biannually:"Pololetně",annually:"Ročně",asNeeded:"Podle potřeby",irregular:"Nepravidelně",notPlanned:"Neplánovaně",unknown:"Neznámé"},MD_Metadata:{caption:"Metadata",fileIdentifier:"Identifikátor souboru",language:"Jazyk metadat",hierarchyLevel:"Úroveň hierarchie",hierarchyLevelName:"Název úrovně hierarchie",contact:"Kontakt metadat",dateStamp:"Datum metadat",metadataStandardName:"Název standardu metadat",metadataStandardVersion:"Verze standardu metadat",referenceSystemInfo:"Referenční systém",identificationInfo:"Identifikace",distributionInfo:"Distribuce",dataQualityInfo:"Kvalita"},MD_ProgressCode:{caption:"Kód průběhu",completed:"Hotovo",historicalArchive:"Historický archiv",obsolete:"Zastaralý",onGoing:"Probíhá",planned:"Plánováno",required:"Požadováno",underDevelopment:"Ve vývoji"},MD_RepresentativeFraction:{denominator:"Jmenovatel"},MD_Resolution:{equivalentScale:"Ekvivalentní měřítko",distance:"Vzdálenost"},MD_RestrictionCode:{copyright:"Autorská práva",patent:"Patent",patentPending:"Nevyřízený patent",trademark:"Ochranná známka",license:"Licence",intellectualPropertyRights:"Práva duševního vlastnictví",restricted:"Omezené",otherRestrictions:"Další omezení"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Typ atributu",collectionHardware:"Hardware pro sběr dat",collectionSession:"Relace sběru dat",dataset:"Datová sada",series:"Řada",nonGeographicDataset:"Ne-geografická datová sada",dimensionGroup:"Skupina kót",feature:"Prvek",featureType:"Typ prvku",propertyType:"Typ vlastnosti",fieldSession:"Terénní relace",software:"Software",service:"Služba",model:"Model",tile:"Dlaždice"},MD_ScopeDescription:{attributes:"Atributy",features:"Prvky",featureInstances:"Instance prvku",attributeInstances:"Instance atributů",dataset:"Datová sada",other:"Další"},MD_SecurityConstraints:{caption:"Bezpečnostní omezení",classification:"Klasifikace",userNote:"Poznámka uživatele",classificationSystem:"Systém klasifikace",handlingDescription:"Popis manipulace"},MD_SpatialRepresentationTypeCode:{caption:"Typ prostorové kartografické reprezentace",vector:"Vektor",grid:"Mřížka",textTable:"Textová tabulka",tin:"TIN",stereoModel:"Stereomodel",video:"Video"},MD_TopicCategoryCode:{caption:"Kategorie tématu",boundaries:"Administrativní a politické hranice",farming:"Zemědělství",climatologyMeteorologyAtmosphere:"Atmosféra a podnebí",biota:"Biologie a ekologie",economy:"Obchod a hospodářství",planningCadastre:"Katastrální",society:"Kultura, společnost a demografie",elevation:"Nadmořská výška a odvozené produkty",environment:"Životní prostředí a ochrana přírody",structure:"Zařízení a stavby",geoscientificInformation:"Geologie a geofyzika",health:"Zdravotnictví",imageryBaseMapsEarthCover:"Obrazová data a podkladové mapy",inlandWaters:"Vnitrozemské vodní zdroje",location:"Lokality a geodetické sítě",intelligenceMilitary:"Vojenské",oceans:"Oceány a ústí řek",transportation:"Dopravní sítě",utilitiesCommunication:"Služby a komunikace"},MI_ContextCode:{caption:"Kontext",acquisition:"Akvizice",pass:"Schválení",wayPoint:"Navigační bod"},MI_EnvironmentalRecord:{caption:"Podmínky prostředí",averageAirTemperature:"Průměrná teplota vzduchu",maxRelativeHumidity:"Maximální relativní vlhkost",maxAltitude:"Maximální nadmořská výška",meterologicalConditions:"Meteorologické podmínky"},MI_Event:{identifier:"Identifikátor události",time:"Čas",expectedObjectiveReference:"Očekávaný cíl (identifikátor cíle)",relatedSensorReference:"Související senzor (identifikátor nástroje)",relatedPassReference:"Související schválení (identifikátor schválení platformy)"},MI_GeometryTypeCode:{point:"Bod",linear:"Lineární",areal:"Plošný",strip:"Pásový"},MI_Instrument:{citation:"Citace nástroje",identifier:"Identifikátor nástroje",sType:"Typ nástroje",description:"Popis nástroje",mountedOn:"Nainstalováno na",mountedOnPlatformReference:"Nainstalováno na (identifikátor platformy)"},MI_Metadata:{acquisitionInformation:"Akvizice"},MI_Objective:{caption:"Cíl",identifier:"Identifikátor cíle",priority:"Priorita cíle",sFunction:"Funkce cíle",extent:"Rozsah",pass:"Schválení platformy",sensingInstrumentReference:"Související nástroj (identifikátor nástroje)",objectiveOccurrence:"Události",sections:{identification:"Identifikace",extent:"Rozsah",pass:"Schválení",sensingInstrument:"Nástroj pro dálkový průzkum",objectiveOccurrence:"Události"}},MI_ObjectiveTypeCode:{caption:"Typ (metoda sběru pro cíl)",instantaneousCollection:"Okamžitý sběr",persistentView:"Stálé zobrazení",survey:"Průzkum"},MI_Operation:{caption:"Operace",description:"Popis operace",citation:"Citace operace",identifier:"Identifikátor operace",status:"Stav operace",objectiveReference:"Související cíl (identifikátor cíle)",planReference:"Související plán (identifikátor plánu)",significantEventReference:"Související událost (identifikátor události)",platformReference:"Související platforma (identifikátor platformy)",sections:{identification:"Identifikace",related:"Související"}},MI_OperationTypeCode:{caption:"Typ operace",real:"Skutečný",simulated:"Simulovaný",synthesized:"Syntetizovaný"},MI_Plan:{sType:"Geometrie vzorkování pro sběr dat",status:"Stav plánu",citation:"Citace autority požadující sběr",satisfiedRequirementReference:"Splněný požadavek (identifikátor požadavku)",operationReference:"Související operace (identifikátor operace)"},MI_Platform:{citation:"Citace platformy",identifier:"Identifikátor platformy",description:"Popis platformy podporující nástroj",sponsor:"Sponzorující organizace platformy",instrument:"Nástroje nainstalované na platformě",instrumentReference:"Identifikátor nástroje",sections:{identification:"Identifikace",sponsor:"Sponzor",instruments:"Nástroje"}},MI_PlatformPass:{identifier:"Identifikátor schválení platformy",extent:"Rozsah schválení platformy",relatedEventReference:"Související událost (identifikátor události)"},MI_PriorityCode:{critical:"Kritická",highImportance:"Vysoká důležitost",mediumImportance:"Střední důležitost",lowImportance:"Nízká důležitost"},MI_RequestedDate:{requestedDateOfCollection:"Požadované datum sběru",latestAcceptableDate:"Nejzazší přijatelné datum"},MI_Requirement:{caption:"Požadavek",citation:"Citace pro průvodní materiál k požadavku",identifier:"Identifikátor požadavku",requestor:"Autor požadavku",recipient:"Příjemce výsledků požadavku",priority:"Priorita požadavku",requestedDate:"Požadované datum",expiryDate:"Datum vypršení platnosti",satisifiedPlanReference:"Splněný plán (identifikátor plánu)",sections:{identification:"Identifikace",requestor:"Žadatel",recipient:"Příjemce",priorityAndDates:"Priorita a data",satisifiedPlan:"Splněný plán"}},MI_SequenceCode:{caption:"Sekvence",start:"Spustit",end:"Ukončit",instantaneous:"Okamžitý"},MI_TriggerCode:{caption:"Spuštění",automatic:"Automaticky",manual:"Manuální",preProgrammed:"Předem naprogramovaný"},ObjectReference:{uuidref:"Referenční dokumentace rozhraní UUID",xlinkref:"Referenční dokumentace rozhraní URL"},RS_Identifier:{caption:"ID plus kódu prostoru",code:"Kód",codeSpace:"Prostor kódu"},SV_CouplingType:{loose:"Volný",mixed:"Smíšený",tight:"Těsný"},SV_OperationMetadata:{operationName:"Název operace",DCP:"DCP",connectPoint:"Bod připojení"},SV_ServiceIdentification:{serviceType:"ServiceType",couplingType:"Typ vazby",containsOperations:"Metadata činnosti",operatesOn:"Funguje na"},TM_Primitive:{indeterminatePosition:"Neurčitá poloha",indeterminates:{before:"Před",after:"Po",now:"Nyní",unknown:"Neznámé"}},gemet:{concept:{gemetConceptKeyword:"Klíčové slovo koncepce GEMET",tool:"Vyhledat…",dialogTitle:"Klíčové slovo koncepce GEMET",searchLabel:"Hledat:",searchTip:"Vyhledávání GEMET"},theme:{tool:"Vyhledat…",dialogTitle:"GEMET – Motiv datové sady Inspire"},ioerror:"Při komunikaci se službou GEMET došlo k chybě: {url}",searching:"Vyhledávání GEMET…",noMatch:"Nebyly nalezeny žádné odpovídající výsledky.",languages:{bg:"bulharština",cs:"Čeština",da:"dánština",nl:"nizozemština",en:"angličtina",et:"estonština",fi:"Finština",fr:"francouzština",de:"němčina",el:"řečtina",hu:"maďarština",ga:"gaelština (irština)",it:"italština",lv:"lotyština",lt:"litevština",mt:"maltština",pl:"polština",pt:"portugalština",ro:"rumunština",sk:"slovenština",sl:"slovinština",es:"španělština",sv:"švédština"}}});